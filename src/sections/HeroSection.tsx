'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';
import HeroDispatchConsole from '../components/hero/HeroDispatchConsole';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 text-left"
          >
            {/* Minimalist Announcement Eyebrow with Motto */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-black/[0.08] bg-zinc-50 text-[12px] text-zinc-700 font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
              <span>Think, Build and Solve · Doxantro Core v3.4</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.03em] text-[#111111] leading-[1.12] mb-6">
              Think, build, and solve with{' '}
              <span className="font-mono font-normal tracking-tight text-zinc-900 border-b border-black/20 pb-0.5">
                enterprise AI.
              </span>
            </h1>

            {/* Editorial Body Text */}
            <p className="text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed max-w-xl">
              Deploy domain-tuned models, autonomous workflow pipelines, and zero-trust guardrails. We engineer the intelligence infrastructure so your teams can think, build, and solve complex challenges without technical debt.
            </p>

            {/* CTA Button Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Started
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="secondary"
              >
                View Architecture
              </Button>
            </div>

            {/* Bottom Proof Line */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-black/[0.06] text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-1.5">
                <span className="text-[#111111] font-semibold">Sub-20ms</span> P99 Latency
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#111111] font-semibold">SOC-2 / HIPAA</span> Air-Gapped
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#111111] font-semibold">6 Verticals</span> Pre-Tuned
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tactile Dispatch Console */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroDispatchConsole />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
