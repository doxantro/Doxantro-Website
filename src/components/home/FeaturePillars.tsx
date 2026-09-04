'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Fast',
    description:
      'Sub-20ms P99 inference routing, tensor compilation, and semantic edge caching. Optimized for high-throughput production workloads.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-zinc-800">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.35" />
        <path d="M8 4.8v3.4l2.2 1.2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Secure',
    description:
      'Zero-Trust guardrails, real-time PII redaction, and air-gapped VPC deployment. SOC-2 and HIPAA compliance baked into every API call.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-zinc-800">
        <path d="M5.2 3.5h5.6M8 3.5v9M4 9h8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.35" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack',
    description:
      'Embeddings, fine-tuning adapters, dynamic routing, verification, and telemetry. One unified platform. No fragile glue code.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-zinc-800">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.35" />
        <path d="M5.5 10.5h5M5.5 8h5M5.5 5.5h3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Domain-Tuned',
    description:
      'Pre-calibrated model weights for Finance, Healthcare, Supply Chain, and Energy. Built-in taxonomy for high-accuracy reasoning.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-zinc-800">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.35" />
        <path d="M2 8h12M8 2a6 6 0 0 1 0 12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function FeaturePillars() {
  return (
    <section id="features" className="py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
            Why Doxantro Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
            Built for engineering teams who can&apos;t compromise on accuracy or latency.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-lg border border-black/[0.1] bg-zinc-50 flex items-center justify-center flex-shrink-0">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-base text-[#111111] tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {p.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
