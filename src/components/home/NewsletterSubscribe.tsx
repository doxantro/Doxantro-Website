'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid business email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing. You are now on the Doxantro AI Executive Briefing list.');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-20 md:py-24 bg-[#fafafa] border-b border-black/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="subheading mb-3">
          AI Executive Briefing
        </div>

        <h2 className="display-2 mb-3">
          Stay Ahead of Applied AI Innovation
        </h2>

        <p className="body-lg text-zinc-600 mb-8 max-w-xl mx-auto">
          Bi-weekly architectural breakdowns, real-world case studies, and strategic AI benchmarks delivered directly to your inbox.
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 max-w-md mx-auto text-center"
          >
            <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-emerald-950 mb-0.5">Subscription Confirmed</h4>
            <p className="text-xs text-emerald-800">{message}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 bg-white p-1.5 rounded-2xl sm:rounded-full border border-black/[0.1] shadow-sm focus-within:border-black transition-all">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter enterprise email..."
                className="w-full flex-1 px-4 py-2.5 rounded-xl sm:rounded-full bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none text-xs sm:text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl sm:rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all cursor-pointer disabled:opacity-50 flex-shrink-0"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-600 mt-2 text-left px-3 font-mono">{message}</p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 mt-4 text-[11px] text-zinc-500 font-mono">
              <span>✓ Zero spam policy</span>
              <span>✓ Unsubscribe anytime</span>
              <span>✓ 10,000+ enterprise readers</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
