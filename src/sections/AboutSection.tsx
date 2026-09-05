'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lightbulb, Layers, ShieldCheck, ArrowRight, BrainCircuit, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

const pillars = [
  {
    step: '01',
    title: 'Think',
    subtitle: 'Strategic AI Architecture',
    desc: 'We analyze your domain challenges and architect customized neural systems with clear ROI projections.',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Build',
    subtitle: 'High-Throughput Engineering',
    desc: 'Developing specialized models, computer vision pipelines, and secure API integrations with low latency.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Solve',
    subtitle: 'Production Impact & Autonomy',
    desc: 'Deploying robust, compliant AI infrastructure that continuously optimizes operations in real-time.',
    icon: ShieldCheck,
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="subheading mb-3">
              About Doxantro Systems
            </div>

            <h2 className="display-2 mb-5">
              Pioneering Applied AI for Real-World Operations
            </h2>

            <p className="body-lg mb-6 text-zinc-600">
              We bridge the gap between breakthrough artificial intelligence research and mission-critical enterprise deployment. We build intelligent systems that don’t just generate text, but actively reason, predict, and solve high-stakes challenges.
            </p>

            <div className="space-y-3 mb-8">
              <div className="p-4 rounded-xl bg-zinc-50 border border-black/[0.06] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white border border-black/[0.08] text-zinc-900 flex-shrink-0 mt-0.5">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-900">Custom Domain Models</h4>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                    Trained directly on private enterprise datasets with strict data sovereignty and encryption.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-black/[0.06] flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white border border-black/[0.08] text-zinc-900 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-900">Validated ROI & Accuracy</h4>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                    Backed by rigorous automated benchmarking, sub-10ms response times, and 99%+ accuracy guarantees.
                  </p>
                </div>
              </div>
            </div>

            <Button href="/about" variant="primary" size="md">
              Read Our Full Story
            </Button>
          </motion.div>

          {/* Right Column: 3-Pillar Framework Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 space-y-3"
          >
            <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-2">
              ■ Operating Methodology
            </div>

            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="card-minimal p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 mt-1">
                        {pillar.step}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {pillar.title}{' '}
                        <span className="text-xs font-normal text-zinc-500 font-sans">
                          — {pillar.subtitle}
                        </span>
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
