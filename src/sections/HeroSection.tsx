'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 border-b border-black/[0.06] bg-white overflow-hidden w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* 1. Monospace Subheading Pill */}
          <div className="mb-3 sm:mb-4 inline-flex items-center justify-center">
            <span className="subheading text-[10px] sm:text-xs tracking-wider">
              Enterprise Applied AI · v3.4 Infrastructure
            </span>
          </div>

          {/* 2. Main Centralized Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-[#111111] leading-[1.12] mb-4 sm:mb-6 max-w-3xl">
            Think, Build and Solve with Intelligence.
          </h1>

          {/* 3. Subheadline Description */}
          <p className="text-sm sm:text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Empowering global enterprises, healthcare systems, and institutions with mission-critical AI solutions engineered for speed, accuracy, and measurable ROI.
          </p>

          {/* 4. Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12 w-full sm:w-auto">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold justify-center"
            >
              Start Your Project
            </Button>
            <Button
              href="/case-studies"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold justify-center"
            >
              Case Studies
            </Button>
          </div>

          {/* 5. 3 Hairline Metric Indicators (Centered Strip) */}
          <div className="pt-6 sm:pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono w-full">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-zinc-900">SOC-2 Type II</span>
              <span className="text-zinc-400">· Air-Gapped</span>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-zinc-900">&lt; 10ms Latency</span>
              <span className="text-zinc-400">· Real-Time</span>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-zinc-900">6 Verticals</span>
              <span className="text-zinc-400">· Domain AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
