'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Button from '../components/ui/Button';
import HeroNeuralCanvas from '../components/hero/HeroNeuralCanvas';

const headlineWords = ['Think,', 'Build', 'and', 'Solve', 'with', 'Intelligence.'];

const headlineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 border-b border-black/[0.06] bg-white overflow-hidden w-full min-h-[580px] flex items-center justify-center">
      {/* Interactive Neural Matrix Canvas */}
      <HeroNeuralCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* 1. Monospace Subheading Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 sm:mb-4 inline-flex items-center justify-center"
          >
            <span className="subheading text-[10px] sm:text-xs tracking-wider bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              Enterprise Applied AI · v3.4 Infrastructure
            </span>
          </motion.div>

          {/* 2. Main Centralized Headline with Cinematic Word-by-Word Blur Reveal */}
          <motion.h1
            variants={headlineContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-[#111111] leading-[1.12] mb-4 sm:mb-6 max-w-3xl flex flex-wrap justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-1"
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* 3. Subheadline Description with Optical Focus Fade */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
          >
            Empowering global enterprises, healthcare systems, and institutions with mission-critical AI solutions engineered for speed, accuracy, and measurable ROI.
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12 w-full sm:w-auto"
          >
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all"
            >
              Start Your Project
            </Button>
            <Button
              href="/case-studies"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold justify-center hover:-translate-y-0.5 transition-all"
            >
              Case Studies
            </Button>
          </motion.div>

          {/* 5. 3 Hairline Metric Indicators with Live Radar Beacons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 sm:pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono w-full"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-zinc-900">SOC-2 Type II</span>
              <span className="text-zinc-400">· Air-Gapped</span>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-zinc-900">&lt; 10ms Latency</span>
              <span className="text-zinc-400">· Real-Time</span>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-zinc-900">6 Verticals</span>
              <span className="text-zinc-400">· Domain AI</span>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

