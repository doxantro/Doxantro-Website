'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import Badge from '../ui/Badge';

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
      setMessage('Thank you for subscribing! You are now on the Doxantro AI Executive Briefing list.');
      setEmail('');
    }, 800);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex mb-4">
          <Badge variant="orange" dot pulse size="sm">
            AI Executive Briefing
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Stay Ahead of Applied{' '}
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            AI Innovation
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Bi-weekly architectural breakdowns, real-world case studies, and strategic AI benchmarks delivered directly to your inbox.
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-3xl bg-orange-950/40 border border-orange-500/40 max-w-lg mx-auto text-center"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Subscription Confirmed!</h4>
            <p className="text-sm text-zinc-300">{message}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-2 bg-zinc-900/90 p-2 rounded-2xl sm:rounded-full border border-zinc-700/80 shadow-2xl focus-within:border-orange-500 transition-all">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your enterprise email..."
                className="w-full flex-1 px-4 sm:px-5 py-3 rounded-xl sm:rounded-full bg-zinc-800/50 sm:bg-transparent text-white placeholder-zinc-500 focus:outline-none text-sm border border-zinc-700/40 sm:border-transparent"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl sm:rounded-full bg-orange-600 text-white font-semibold text-sm hover:bg-orange-500 transition-all shadow-lg shadow-orange-600/30 cursor-pointer disabled:opacity-50 flex-shrink-0"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-400 mt-2 text-left px-2 sm:px-4">{message}</p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5 text-xs text-zinc-400">
              <span>✓ Zero spam policy</span>
              <span>✓ Unsubscribe at any time</span>
              <span>✓ 10,000+ engineers subscribed</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
