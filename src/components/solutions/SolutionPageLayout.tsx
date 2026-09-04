'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
  Clock,
  TrendingUp,
  Layers,
  FileCheck,
} from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import GlowCard from '../ui/GlowCard';
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
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-white border-b border-zinc-200/60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-20 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex mb-5">
              <Badge variant="orange" dot pulse size="md">
                {badge}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              {titlePrefix}{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                {titleHighlight}
              </span>{' '}
              {titleSuffix}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-10">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Schedule Architecture Consultation
              </Button>
              <Button
                href="#solutions-list"
                size="lg"
                variant="glass"
                className="w-full sm:w-auto"
              >
                Explore Modules & Capabilities
              </Button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-zinc-200/80 shadow-sm"
                >
                  <div className="text-3xl font-extrabold font-mono text-orange-600 mb-1">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-zinc-900">{m.label}</div>
                  <div className="text-xs text-zinc-600 mt-0.5">{m.sublabel}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Solutions Breakdown */}
      <section id="solutions-list" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Modular Capabilities"
            badgeVariant="orange"
            title="Specialized Systems Engineered for"
            highlightText="Immediate Impact"
            subtitle="Explore our pre-configured neural models and real-time processing pipelines."
          />

          <div className="space-y-12">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlowCard className="p-8 sm:p-10 bg-white border border-zinc-200/90 shadow-sm hover:border-orange-400/60 transition-all">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Solution & Features (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                          <SolutionIcon name={item.iconName} className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-orange-600" />
                          <span>Core Technical Features</span>
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center text-xs sm:text-sm text-zinc-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Quantified Benefits (5 cols) */}
                    <div className="lg:col-span-5 bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600/20 rounded-full blur-2xl pointer-events-none" />
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Expected Business Outcomes</span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {item.benefits.map((ben, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-orange-600 hover:border-orange-500 text-xs font-semibold transition-all group"
                      >
                        <span>Deploy This Module</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Use Cases & Architecture Specs */}
      <section className="py-24 bg-zinc-50/70 border-y border-zinc-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Target Use Cases (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="orange" size="sm">Target Environments</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                Who We Build For
              </h3>
              <div className="space-y-4">
                {useCases.map((uc, idx) => (
                  <GlowCard key={idx} className="p-6 bg-white">
                    <h4 className="text-base font-bold text-zinc-900 mb-1">{uc.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-600">{uc.desc}</p>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* Architecture Specs (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="slate" size="sm">System Specs</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {architectureSpecs.map((spec, idx) => (
                  <GlowCard key={idx} className="p-6 bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>{spec.category}</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {spec.items.map((item, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="orange" dot pulse size="md" className="mb-4">
            Production Readiness Guarantee
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {ctaTitle}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Start an Architectural Consultation
            </Button>
            <Button
              href="/case-studies"
              size="lg"
              variant="glass-dark"
              className="w-full sm:w-auto text-white font-semibold"
            >
              View Verified Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
