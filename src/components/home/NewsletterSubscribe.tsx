'use client';

import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    window.setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="bg-[#fbfaf6] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f3c83f] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(70,51,0,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(70,51,0,.10)_1px,transparent_1px)] [background-size:68px_68px]" />
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#655000]">Doxantro field notes</span>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#11120f] sm:text-5xl">
              Practical thinking for responsible enterprise AI.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#514216]">
              Product updates, architecture notes and evaluation lessons—shared without inflated claims.
            </p>
          </div>

          <div className="lg:col-span-5">
            {status === 'success' ? (
              <div className="flex items-center gap-3 rounded-2xl bg-white p-5 text-sm font-medium text-zinc-900 shadow-sm" role="status">
                <CheckCircle2 className="h-5 w-5 text-[#8d6800]" aria-hidden="true" />
                You&apos;re on the list. The launch edition is in preparation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="newsletter-email" className="mb-2 block text-xs font-semibold text-[#3c310d]">
                  Work email
                </label>
                <div className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_12px_32px_rgba(84,61,0,.12)] sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="you@company.com"
                    aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                    className="min-h-12 flex-1 rounded-xl bg-transparent px-4 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#c79200]"
                  />
                  <button type="submit" disabled={status === 'loading'} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-black disabled:opacity-60">
                    {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                    {status === 'loading' ? 'Joining' : 'Subscribe'}
                  </button>
                </div>
                {status === 'error' && <p id="newsletter-error" className="mt-2 text-xs font-medium text-red-800">Enter a valid email address.</p>}
                <p className="mt-3 text-[11px] text-[#65551f]">No spam. Unsubscribe any time. Launch edition in preparation.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
