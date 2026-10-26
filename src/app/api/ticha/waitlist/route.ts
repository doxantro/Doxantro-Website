import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
const attempts = new Map<string, number[]>();
const windowMs = 10 * 60 * 1000;

export async function POST(request: NextRequest) {
  if (Number(request.headers.get('content-length') || 0) > 4096) return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  if (typeof body.website === 'string' && body.website.trim()) return NextResponse.json({ ok: true });
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const role = typeof body.role === 'string' ? body.role : '';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  if (!['learner', 'teacher', 'parent', 'school'].includes(role) || body.consent !== true) return NextResponse.json({ error: 'Choose a valid role and agree to receive Ticha updates.' }, { status: 400 });
  const now = Date.now();
  for (const [key, times] of attempts) if (!times.some(time => now - time < windowMs)) attempts.delete(key);
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const times = (attempts.get(ip) || []).filter(time => now - time < windowMs);
  if (times.length >= 5) return NextResponse.json({ error: 'Too many attempts. Please try again in a few minutes.' }, { status: 429 });
  attempts.set(ip, [...times, now]);

  const key = process.env.TICHA_RESEND_API_KEY || process.env.RESEND_API_KEY;
  const segmentId = process.env.TICHA_WAITLIST_SEGMENT_ID || 'b5fa3d8d-bf1d-49cb-80b1-d27a0be8148a';
  if (!key || !segmentId) return NextResponse.json({ error: 'The waitlist is temporarily unavailable. Please email info@doxantro.com to register your interest.' }, { status: 503 });
  try {
    const resend = new Resend(key);
    const existing = await resend.contacts.get({ email });
    if (existing.error && existing.error.name !== 'not_found') throw new Error('Contact lookup failed');
    // Preserve existing unsubscribe preferences; do not silently resubscribe contacts.
    if (existing.data?.unsubscribed) return NextResponse.json({ error: 'This email has previously unsubscribed. Please contact info@doxantro.com to rejoin.' }, { status: 409 });
    const properties = { ticha_role: role, ticha_consent_at: new Date().toISOString() };
    if (existing.data) {
      const update = await resend.contacts.update({ id: existing.data.id, properties });
      if (update.error) throw new Error('Contact update failed');
    } else {
      const created = await resend.contacts.create({ email, unsubscribed: false, properties });
      if (created.error) throw new Error('Contact creation failed');
    }
    // Contacts are unique by email; adding segment membership does not create another contact.
    const membership = await resend.contacts.segments.add({ email, segmentId });
    if (membership.error) throw new Error('Waitlist membership failed');
    return NextResponse.json({ ok: true });
  } catch {
    console.error('Ticha waitlist storage failed. Check Resend permissions, segment and contact properties.');
    return NextResponse.json({ error: 'We could not save your signup. Please try again or email info@doxantro.com.' }, { status: 502 });
  }
}
