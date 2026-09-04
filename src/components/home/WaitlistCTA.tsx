'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function WaitlistCTA() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-[#111111] text-white p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Subtle Radial Gradient Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight mb-4">
              Your enterprise AI infrastructure is ready.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Built for engineering leaders shipping mission-critical intelligence. Deploy domain models, automate workflows, and eliminate hallucinations in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4">
              <Button
                href="/contact"
                size="lg"
                variant="inverted"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Building
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="outline-white"
              >
                View Architecture
              </Button>
            </div>

            <p className="text-[11px] font-mono text-zinc-500">
              Zero credit card required · SOC-2 / HIPAA Certified · Sub-20ms SLA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
