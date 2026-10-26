'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function WaitlistForm() {
  const [pending, setPending] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = new FormData(event.currentTarget);
    setPending(true);
    setError('');
    try {
      const response = await fetch('/api/ticha/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), role: form.get('role'), consent: form.get('consent') === 'on', website: form.get('website') }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Please try again in a moment.');
      setJoined(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'We could not join the waitlist. Please try again.');
    } finally {
      setPending(false);
    }
  }

  if (joined) return <div className="tc-waitlist-success" role="status"><Check size={24} /><div><strong>You’re on the list.</strong><p>We’ll email you when Ticha is ready to try.</p></div></div>;

  return <form className="tc-waitlist-form" onSubmit={submit} aria-label="Join the Ticha waitlist" aria-busy={pending}>
    <label htmlFor="ticha-email">Email address <span>(required)</span></label>
    <input id="ticha-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} disabled={pending} />
    <label htmlFor="ticha-role">I’m a… <span>(required)</span></label>
    <select id="ticha-role" name="role" defaultValue="" required disabled={pending}><option value="" disabled>Choose your role</option><option value="learner">Learner</option><option value="teacher">Teacher</option><option value="parent">Parent</option><option value="school">School representative</option></select>
    <div className="tc-waitlist-trap" aria-hidden="true"><label htmlFor="ticha-website">Leave this empty</label><input id="ticha-website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <label className="tc-waitlist-consent"><input name="consent" type="checkbox" required disabled={pending} /><span>I agree to receive Ticha launch and early access updates from Doxantro Technologies. I can unsubscribe at any time.</span></label>
    <button className="tc-button" type="submit" disabled={pending}>{pending ? 'Joining…' : 'Join the waitlist'}<ArrowUpRight size={18} /></button>
    <p className="tc-waitlist-error" role="alert">{error}</p>
    <small>Your email and role are stored with our email provider, Resend, to manage the Ticha waitlist.</small>
  </form>;
}
