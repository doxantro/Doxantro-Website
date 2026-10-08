import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const requestsByIp = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestsByIp.get(ip) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestsByIp.set(ip, timestamps);
    return false;
  }

  timestamps.push(now);
  requestsByIp.set(ip, timestamps);
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 },
    );
  }

  let body: { email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const rawEmail = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!rawEmail || !EMAIL_RE.test(rawEmail)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error('Newsletter subscribe is missing Resend environment configuration.');
    return NextResponse.json(
      { error: 'Subscription service is temporarily unavailable. Please email us directly.' },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  // 1. Try to record contact in Resend Audience
  try {
    await resend.contacts.create({
      email: rawEmail,
      unsubscribed: false,
    });
  } catch (contactError) {
    console.warn('Could not add to Resend audience list directly:', contactError);
  }

  // 2. Send email notification to team inbox
  try {
    await resend.emails.send({
      from,
      to: [to],
      subject: `New Field Notes subscriber: ${rawEmail}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2>New Field Notes Subscriber</h2>
          <p>A new visitor subscribed to Field Notes notifications:</p>
          <p><strong>Email:</strong> <a href="mailto:${rawEmail}">${rawEmail}</a></p>
          <p style="font-size: 13px; color: #666; margin-top: 24px;">Sent from doxantro.com</p>
        </div>
      `,
      text: `New Field Notes Subscriber\n\nEmail: ${rawEmail}\n\nSent from doxantro.com`,
    });

    return NextResponse.json({ ok: true });
  } catch (emailError) {
    console.error('Failed to send subscriber alert email:', emailError);
    return NextResponse.json(
      { error: 'Could not complete subscription. Please try again or email us directly.' },
      { status: 500 },
    );
  }
}
