'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  TrendingUp,
} from 'lucide-react';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import SolutionIcon from '../ui/SolutionIcon';

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
  iconName,
  metrics,
  solutions,
  architectureSpecs,
  useCases,
  ctaTitle = 'Ready to Deploy Proprietary AI Architecture?',
  ctaSubtitle = 'Schedule a technical review with our principal AI engineers to assess model feasibility, data pipelines, and deployment parameters.',
}: SolutionPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-3.5">
              <span className="subheading">
                {badge}
              </span>
            </div>

            <h1 className="display-1 mb-4 sm:mb-5">
              {titlePrefix} {titleHighlight} {titleSuffix}
            </h1>

            <p className="body-lg max-w-2xl mx-auto mb-8 text-zinc-600">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-10 sm:mb-12">
              <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto">
                Schedule Architecture Consultation
              </Button>
              <Button href="#solutions-list" size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Capabilities
              </Button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="card-minimal p-4 sm:p-5"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#111111] tabular-nums mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-900">{m.label}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{m.sublabel}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Solutions Breakdown */}
      <section id="solutions-list" className="py-16 md:py-24 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="MODULAR CAPABILITIES"
            title="Specialized Systems Engineered for Production"
            subtitle="Explore our pre-configured neural models and real-time processing pipelines."
          />

          <div className="space-y-6">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <div className="card-minimal p-5 sm:p-7 md:p-8">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left: Solution & Features (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 flex-shrink-0">
                          <SolutionIcon name={item.iconName} className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-xl font-bold text-zinc-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2">
                        <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-500 mb-2">
                          ■ Technical Features
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center text-xs text-zinc-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 mr-2 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Quantified Benefits (5 cols) */}
                    <div className="lg:col-span-5 bg-[#0f0f12] text-white rounded-xl p-5 sm:p-6 border border-white/[0.08] shadow-sm">
                      <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-3 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                        <span>Business Impact</span>
                      </div>

                      <ul className="space-y-2 mb-5">
                        {item.benefits.map((ben, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <span className="w-1 h-1 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-between w-full p-2.5 rounded-lg bg-white/[0.06] border border-white/[0.1] hover:bg-white hover:text-black text-xs font-medium transition-all group"
                      >
                        <span>Deploy This Module</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Use Cases & Architecture Specs */}
      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Target Environments (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="subheading">Target Environments</div>
              <h3 className="display-3">
                Who We Build For
              </h3>
              <div className="space-y-3">
                {useCases.map((uc, idx) => (
                  <div key={idx} className="card-minimal p-4">
                    <h4 className="text-sm font-bold text-zinc-900 mb-1">{uc.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="subheading">System Architecture</div>
              <h3 className="display-3">
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {architectureSpecs.map((spec, idx) => (
                  <div key={idx} className="card-minimal p-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>{spec.category}</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.items.map((item, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 border border-black/[0.04]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-16 md:py-24 bg-[#0c0c0e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 block">
            ■ PRODUCTION READINESS GUARANTEE
          </span>

          <h2 className="display-2 text-white mb-4">
            {ctaTitle}
          </h2>

          <p className="body-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            {ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto">
              Start Architectural Consultation
            </Button>
            <Button href="/case-studies" size="lg" variant="outline-white" className="w-full sm:w-auto">
              View Verified Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
