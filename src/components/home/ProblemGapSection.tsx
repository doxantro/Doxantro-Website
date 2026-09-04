'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemGapSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            The Gap
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#111111] leading-[1.15] mb-8">
            <span>You&apos;re building mission-critical workflows.</span>
            <br />
            <span className="text-zinc-500">Generic AI APIs weren&apos;t built for that.</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            <p>
              The tools most teams reach for — public LLM endpoints, generic wrapper libraries, and black-box chatbot plugins — each solve an incomplete slice of the puzzle. Public APIs route proprietary enterprise data through third-party servers. Fragile script layers fail under unexpected schema drifts. Off-the-shelf models hallucinate without deterministic audit trails.
            </p>
            <p>
              You end up stitching three fragile middleware platforms together, paying compounding token costs, and firefighting compliance violations in production.
            </p>
            <p className="text-[#111111] font-medium pt-2">
              Doxantro replaces the entire fragmented stack with private, verified, sub-20ms intelligence infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
