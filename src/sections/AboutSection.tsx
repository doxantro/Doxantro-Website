'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lightbulb, Layers, ShieldCheck, ArrowRight, BrainCircuit, CheckCircle2 } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import GlowCard from '../components/ui/GlowCard';

const pillars = [
  {
    step: '01',
    title: 'Think',
    subtitle: 'Strategic Data & AI Architecture',
    desc: 'We analyze your domain challenges and architect customized neural systems with clear ROI projections.',
    icon: Lightbulb,
    color: 'from-orange-500 to-amber-500',
  },
  {
    step: '02',
    title: 'Build',
    subtitle: 'High-Throughput Engineering',
    desc: 'Developing specialized models, computer vision pipelines, and secure API integrations with low latency.',
    icon: Layers,
    color: 'from-orange-600 to-orange-500',
  },
  {
    step: '03',
    title: 'Solve',
    subtitle: 'Production Impact & Autonomy',
    desc: 'Deploying robust, compliant AI infrastructure that continuously optimizes operations in real-time.',
    icon: ShieldCheck,
    color: 'from-amber-600 to-orange-600',
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-zinc-50/70 relative overflow-hidden border-y border-zinc-200/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <Badge variant="orange" dot pulse size="md" className="mb-4">
              About Doxantro Systems
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
              Pioneering the Next Generation of{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Applied AI
              </span>
            </h2>

            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              We bridge the gap between breakthrough artificial intelligence research and mission-critical enterprise deployment. We build intelligent systems that don’t just generate text, but actively reason, predict, and solve high-stakes challenges.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
                <div className="p-2 rounded-xl bg-orange-100 text-orange-600 flex-shrink-0 mt-0.5">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Custom Domain Models</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Trained directly on private enterprise datasets with strict data sovereignty and encryption.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
                <div className="p-2 rounded-xl bg-orange-100 text-orange-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Validated ROI & Accuracy</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Backed by rigorous automated benchmarking, sub-10ms response times, and 99%+ accuracy guarantees.
                  </p>
                </div>
              </div>
            </div>

            <Button href="/about" variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Read Our Full Story
            </Button>
          </motion.div>

          {/* Right Column: 3-Pillar Framework Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              Our Core Methodology
            </div>

            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <GlowCard key={idx} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold shadow-md shadow-orange-500/20">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-zinc-600 mt-1">
                        {pillar.step}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-zinc-900">
                          {pillar.title}{' '}
                          <span className="text-xs font-normal text-zinc-600">
                            — {pillar.subtitle}
                          </span>
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
