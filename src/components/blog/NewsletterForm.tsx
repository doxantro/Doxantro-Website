'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }
    if (!EMAIL_RE.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to subscribe right now.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-line bg-surface/80 p-6 sm:p-8">
        <div className="flex items-center gap-3 text-accent-ink font-medium">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-ink/10 text-accent-ink">
            <Check className="h-4 w-4" />
          </div>
          <span>You&apos;re on the list!</span>
        </div>
        <p className="mt-2 text-[0.9375rem] text-ink-muted">
          We&apos;ll send a quiet note as soon as our first field note is published. No spam, ever.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
      <h3 className="text-xl font-medium tracking-[-0.02em] text-ink">
        First essays are currently in review.
      </h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
        Want to be notified when our first issue drops? Drop your email below to join the reader list.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            placeholder="Enter your work email"
            aria-label="Email address for Field notes notifications"
            className="block w-full rounded-xl border border-field-border bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-faint transition-[border-color,box-shadow] duration-200 hover:border-ink/60 focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-base font-medium text-paper transition-all duration-200 hover:bg-ink-muted disabled:opacity-60"
        >
          {loading ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>Notify me</span>
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-[#b42318]">{error}</p>}

      <p className="mt-4 text-xs text-ink-faint">
        No spam or promo blasts. Unsubscribe anytime with a single click.
      </p>
    </div>
  );
}
