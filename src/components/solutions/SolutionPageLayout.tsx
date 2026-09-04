'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Button from '../ui/Button';

export interface VerticalSolutionItem {
  title: string;
  description: string;
  iconName: string;
  features: string[];
  benefits: string[];
}

export interface SolutionPageProps {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  subtitle: string;
  iconName: string;
  metrics: { value: string; label: string; sublabel: string }[];
  solutions: VerticalSolutionItem[];
  architectureSpecs: { category: string; items: string[] }[];
  useCases: { title: string; desc: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export default function SolutionPageLayout({
  badge,
  titlePrefix,
  titleHighlight,
  titleSuffix = '',
  subtitle,
  metrics,
  solutions,
  architectureSpecs,
  useCases,
  ctaTitle = 'Deploy domain intelligence in your stack.',
  ctaSubtitle = 'Schedule a technical scoping consultation with our AI systems architects to assess latency, models, and VPC deployment.',
}: SolutionPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            {badge}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-6">
            {titlePrefix} {titleHighlight} {titleSuffix}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3.5">
            <Button href="/contact" size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
              Schedule Technical Review
            </Button>
            <Button href="/services" size="md" variant="secondary" className="w-full sm:w-auto">
              Platform Architecture
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Measured Metrics Banner */}
      <section className="py-14 sm:py-16 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] mb-1">
                  {m.value}
                </span>
                <span className="font-semibold text-xs sm:text-sm text-zinc-900 mb-0.5">{m.label}</span>
                <span className="text-[11px] text-zinc-500 font-mono">{m.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Grid */}
      <section className="py-20 sm:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2 sm:mb-3">
              Vertical Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Pre-calibrated neural modules for this domain.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/[0.08] bg-[#fcfbf9] p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-[#111111] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-black/[0.06]">
                  {item.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-[11px] sm:text-xs text-zinc-700 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Architecture Specifications */}
      <section className="py-20 sm:py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2 sm:mb-3">
              Technical Blueprint
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Deployment & Infrastructure Specs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {architectureSpecs.map((spec) => (
              <div key={spec.category} className="flex flex-col">
                <h3 className="font-semibold text-sm text-[#111111] mb-3 sm:mb-4 pb-2 border-b border-black/[0.08]">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Production Use Cases */}
      <section className="py-20 sm:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2 sm:mb-3">
              Production Workflows
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Real-World Implementation Scenarios
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-2xl border border-black/[0.08] bg-[#fcfbf9] p-5 sm:p-6"
              >
                <h3 className="font-semibold text-sm sm:text-base text-[#111111] mb-2">{uc.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dark CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-6 sm:p-14 lg:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              {ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mb-8">
              {ctaSubtitle}
            </p>
            <Button href="/contact" size="lg" variant="inverted" icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
              Start Architectural Scoping
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
