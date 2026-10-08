import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
  subject: string;
  kind: 'enquiry' | 'application';
  website: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_BYTES = 16_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

// This is intentionally a lightweight first line of defence. Vercel instances do not
// share memory, so a platform-level rate limit can be added later if traffic demands it.
const requestsByIp = new Map<string, number[]>();

function cleanLine(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLength) : '';
}

function cleanMessage(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function parseSubmission(input: unknown): { data?: ContactSubmission; error?: string } {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { error: 'Invalid request.' };
  }

  const body = input as Record<string, unknown>;
  const data: ContactSubmission = {
    name: cleanLine(body.name, 100),
    email: cleanLine(body.email, 254).toLowerCase(),
    company: cleanLine(body.company, 160),
    service: cleanLine(body.service, 120),
    budget: cleanLine(body.budget, 120),
    timeline: cleanLine(body.timeline, 120),
    details: cleanMessage(body.details, 5_000),
    subject: cleanLine(body.subject, 120),
    kind: body.kind === 'application' ? 'application' : 'enquiry',
    website: cleanLine(body.website, 300),
  };

  if (!data.name) return { error: 'Enter your name.' };
  if (!EMAIL_RE.test(data.email)) return { error: 'Enter a valid email address.' };
  if (data.details.length < 10) return { error: 'Add a little more detail to your message.' };

  return { data };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

function getClientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestsByIp.set(ip, recent);

  if (requestsByIp.size > 1_000) {
    for (const [key, timestamps] of requestsByIp) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) requestsByIp.delete(key);
    }
  }

  return false;
}

function buildEmail(data: ContactSubmission) {
  const label = data.kind === 'application' ? 'Application' : 'Project enquiry';
  const subject = data.subject || `${label} from ${data.name}${data.company ? `, ${data.company}` : ''}`;
  const metadata = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Service', data.service],
    ['Budget', data.budget],
    ['Timeline', data.timeline],
  ].filter(([, value]) => value);

  const rows = metadata
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:8px 16px 8px 0;color:#6b6b68;font-size:14px;vertical-align:top;white-space:nowrap">${escapeHtml(key)}</td>
          <td style="padding:8px 0;color:#171714;font-size:14px;vertical-align:top">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join('');

  const text = [
    label,
    '',
    ...metadata.map(([key, value]) => `${key}: ${value}`),
    '',
    'Message:',
    data.details,
  ].join('\n');

  const html = `<!doctype html>
    <html lang="en">
      <body style="margin:0;background:#f7f6f2;font-family:Arial,sans-serif;color:#171714">
        <div style="max-width:640px;margin:0 auto;padding:32px 16px">
          <div style="border-top:5px solid #f7bf1a;border-radius:12px;background:#ffffff;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,.08)">
            <p style="margin:0 0 8px;color:#a55116;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Doxantro website</p>
            <h1 style="margin:0 0 24px;font-size:26px;line-height:1.25">${escapeHtml(label)}</h1>
            <table role="presentation" style="width:100%;border-collapse:collapse">${rows}</table>
            <div style="height:1px;background:#e7e5df;margin:24px 0"></div>
            <p style="margin:0 0 10px;color:#6b6b68;font-size:14px">Message</p>
            <p style="margin:0;font-size:16px;line-height:1.65;white-space:pre-wrap">${escapeHtml(data.details)}</p>
          </div>
          <p style="margin:16px 8px 0;color:#77756f;font-size:12px;line-height:1.5">Reply to this email to respond directly to ${escapeHtml(data.name)}.</p>
        </div>
      </body>
    </html>`;

  return { subject, text, html };
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ error: 'Your message is too large.' }, { status: 413 });
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = parseSubmission(input);
  if (!parsed.data) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  // Bots often fill fields hidden from people. Return success so they do not retry.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: 'Too many messages were sent recently. Please wait a few minutes and try again.' },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error('Contact form is missing its Vercel server configuration.');
    return NextResponse.json(
      { error: 'The contact form is temporarily unavailable. Please email info@doxantro.com directly.' },
      { status: 503 },
    );
  }

  const email = buildEmail(parsed.data);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: parsed.data.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });

    if (error) {
      console.error('Resend rejected a contact form submission:', error.name);
      return NextResponse.json(
        { error: 'We could not send your message. Please try again or email info@doxantro.com directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form delivery failed:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'We could not send your message. Please try again or email info@doxantro.com directly.' },
      { status: 500 },
    );
  }
}
