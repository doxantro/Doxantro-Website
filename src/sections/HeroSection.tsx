'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Zap, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import AITelemetryTerminal from '../components/hero/AITelemetryTerminal';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white">
      {/* Ambient Glows & Background Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#18181b 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            {/* Live System Status Pill */}
            <div className="inline-flex mb-6">
              <Badge variant="orange" dot pulse size="md" className="shadow-sm">
                SYSTEM ONLINE · Doxantro v3.4 Engine Active
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-6">
              Think, Build and{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Solve
              </span>{' '}
              with Intelligence.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering global enterprises, healthcare systems, and institutions with mission-critical AI solutions engineered for speed, accuracy, and measurable ROI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Start Your Project
              </Button>
              <Button
                href="/case-studies"
                size="lg"
                variant="glass"
                className="w-full sm:w-auto"
              >
                Explore Case Studies
              </Button>
            </div>

            {/* Trust Indicators with Micro-icons */}
            <div className="pt-6 border-t border-zinc-200/80 grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-zinc-900">Enterprise</div>
                  <div className="text-[11px] text-zinc-600 truncate">SOC-2 Ready</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 flex-shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-zinc-900">Sub-10ms</div>
                  <div className="text-[11px] text-zinc-600 truncate">Ultra-low Latency</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-zinc-900">6 Verticals</div>
                  <div className="text-[11px] text-zinc-600 truncate">Tailored Models</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: AI Live Terminal Preview */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:max-w-none">
            <AITelemetryTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
