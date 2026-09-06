'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import NeuralPipelineVisualizer from '../components/hero/NeuralPipelineVisualizer';

export default function HeroSection() {
  return (
    <section className="relative pt-18 pb-10 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 border-b border-black/[0.06] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Headline & Value Prop */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-6 text-left"
          >
            {/* Monospace Subheading */}
            <div className="mb-2 sm:mb-3">
              <span className="subheading">
                Enterprise Applied AI · v3.4 Infrastructure
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#111111] leading-[1.15] mb-2.5 sm:mb-4">
              Think, Build and Solve with Intelligence.
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6 max-w-xl">
              Empowering global enterprises, healthcare systems, and institutions with mission-critical AI solutions engineered for speed, accuracy, and measurable ROI.
            </p>

            {/* CTA Row - Compact side-by-side on mobile */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Button href="/contact" size="md" variant="primary" className="flex-1 sm:flex-initial text-xs sm:text-sm text-center px-4 py-2">
                Start Your Project
              </Button>
              <Button href="/case-studies" size="md" variant="outline" className="flex-1 sm:flex-initial text-xs sm:text-sm text-center px-4 py-2">
                Case Studies
              </Button>
            </div>

            {/* 3 Hairline Metric Indicators - Sleek compact single-line strip on mobile */}
            <div className="pt-3 sm:pt-5 border-t border-black/[0.06] flex items-center justify-between gap-1 sm:gap-4 text-[10px] sm:text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-zinc-900">SOC-2 Type II</span>
                <span className="hidden sm:inline text-zinc-400">· Air-gapped</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-zinc-900">&lt; 10ms Latency</span>
                <span className="hidden sm:inline text-zinc-400">· Real-time</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-zinc-900">6 Verticals</span>
                <span className="hidden sm:inline text-zinc-400">· Domain AI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sovereign Neural Pipeline Visualizer */}
          <div className="lg:col-span-6 w-full max-w-full">
            <NeuralPipelineVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
}
