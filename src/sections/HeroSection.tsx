'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import ModelBenchmarkComparator from '../components/hero/ModelBenchmarkComparator';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-24 border-b border-black/[0.06] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Headline & Value Prop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-6 text-left"
          >
            {/* Monospace Subheading */}
            <div className="mb-3 sm:mb-4">
              <span className="subheading">
                Enterprise Applied AI · v3.4 Infrastructure
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-1 mb-4 sm:mb-5">
              Think, Build and <br className="hidden sm:inline" />
              Solve with Intelligence.
            </h1>

            {/* Subheadline */}
            <p className="body-lg mb-6 sm:mb-8 max-w-xl text-zinc-600">
              Empowering global enterprises, healthcare systems, and institutions with mission-critical AI solutions engineered for speed, accuracy, and measurable ROI.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
              <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto text-center">
                Start Your Project
              </Button>
              <Button href="/case-studies" size="lg" variant="outline" className="w-full sm:w-auto text-center">
                Explore Case Studies
              </Button>
            </div>

            {/* 3 Hairline Metric Indicators */}
            <div className="pt-5 sm:pt-6 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-2 sm:p-0 rounded-lg bg-zinc-50 sm:bg-transparent">
                <div className="text-xs font-semibold text-zinc-900">SOC-2 Type II</div>
                <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Air-gapped & sovereign</div>
              </div>

              <div className="p-2 sm:p-0 rounded-lg bg-zinc-50 sm:bg-transparent">
                <div className="text-xs font-semibold text-zinc-900">&lt; 10ms Latency</div>
                <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Real-time inference</div>
              </div>

              <div className="p-2 sm:p-0 rounded-lg bg-zinc-50 sm:bg-transparent">
                <div className="text-xs font-semibold text-zinc-900">6 Verticals</div>
                <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Domain-trained models</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Model Benchmark & ROI Comparator */}
          <div className="lg:col-span-6 w-full max-w-full">
            <ModelBenchmarkComparator />
          </div>
        </div>
      </div>
    </section>
  );
}
