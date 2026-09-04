'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Eye,
  Handshake,
  TrendingUp,
  BrainCircuit,
  Lock,
  Layers,
  Microscope,
} from 'lucide-react';
import Button from '../../components/ui/Button';

const metrics = [
  { value: '6', label: 'Vertical Domains', desc: 'Pre-calibrated industry models' },
  { value: '99.94%', label: 'Inference Precision', desc: 'Grounded against verified ontologies' },
  { value: '<20ms', label: 'P99 Edge Latency', desc: 'Accelerated tensor compilation' },
  { value: '100%', label: 'Data Sovereignty', desc: 'Zero-retention air-gapped VPCs' },
];

const principles = [
  {
    title: 'Domain-Specialized Intelligence',
    desc: 'We reject generic one-size-fits-all chatbot wrappers. We train and align models directly on domain ontologies for mission-critical reliability.',
    icon: BrainCircuit,
  },
  {
    title: 'Zero-Compromise Security',
    desc: 'Your proprietary data never leaves your network perimeter. We deploy zero-retention architectures, automated PII masking, and air-gapped VPC clusters.',
    icon: ShieldCheck,
  },
  {
    title: 'Deterministic Verification',
    desc: 'No black boxes. Every model decision provides auditable confidence metrics, decision-path lineage, and automated compliance verification.',
    icon: Eye,
  },
  {
    title: 'Sub-20ms P99 Latency',
    desc: 'Speed is accuracy in live operations. Our custom inference kernels process high-concurrency requests with deterministic latency guarantees.',
    icon: Cpu,
  },
  {
    title: 'Embedded Engineering Co-Creation',
    desc: 'We embed directly with your infrastructure and domain teams to build tailored intelligence pipelines that integrate seamlessly into your stack.',
    icon: Handshake,
  },
  {
    title: 'Compounding Operational ROI',
    desc: 'Every deployment is tied to verifiable business metrics: token cost compression, throughput amplification, and automated risk prevention.',
    icon: TrendingUp,
  },
];

const pillars = [
  {
    title: 'Model Research & Alignment',
    role: 'Deep Learning & Neural Science',
    desc: 'Specialists in transformer quantization, parameter-efficient fine-tuning (LoRA), and domain ontology alignment.',
    skills: ['Quantization', 'Transformer Arch', 'RAG Alignment', 'Evaluation Metrics'],
    icon: Microscope,
  },
  {
    title: 'High-Throughput Distributed Systems',
    role: 'Infrastructure & Edge Kernels',
    desc: 'Architects of low-latency distributed inference engines, tensor parallelism, and zero-downtime failover clusters.',
    skills: ['CUDA / Triton', 'gRPC / HTTP2', 'VPC Clusters', 'Edge Caching'],
    icon: Layers,
  },
  {
    title: 'Enterprise Security & Governance',
    role: 'Compliance & Air-Gapped Ops',
    desc: 'Ensuring model streams adhere to strict SOC-2, HIPAA, FINRA, and ISO-27001 standards with cryptographic audit trails.',
    skills: ['Zero-Trust', 'HIPAA / SOC-2', 'Air-Gapped Ops', 'Auditing'],
    icon: Lock,
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Editorial Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-black/[0.08] bg-zinc-50 text-[12px] text-zinc-700 font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
            <span>Think, Build and Solve · Our Story & Thesis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-6">
            Engineering intelligence for mission-critical operations.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Doxantro Systems was founded on a singular premise: the greatest breakthroughs occur when human domain mastery is amplified by specialized, high-precision artificial intelligence. Think, build, and solve without limits.
          </p>
          <div className="flex justify-center gap-3.5">
            <Button href="/contact" size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Partner With Doxantro
            </Button>
            <Button href="/services" size="md" variant="secondary">
              View Architecture
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Quantified Metrics Banner */}
      <section className="py-16 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-1">
                  {m.value}
                </div>
                <div className="font-semibold text-sm text-zinc-900 mb-0.5">{m.label}</div>
                <div className="text-xs text-zinc-600">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Doxantro Thesis */}
      <section className="py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
                The Doxantro Thesis
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight mb-6">
                Why generalist AI fails in production.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4">
                Consumer chatbots are designed for casual conversation where an 80% accuracy rate is acceptable. In quantitative finance, oncology diagnostics, or power grid dispatching, a 1% error rate is catastrophic.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                We engineer private, domain-tuned neural architectures wrapped in deterministic validation layers to provide mathematical guarantees of reliability.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-2xl border border-black/[0.08] bg-[#fcfbf9]">
                <div className="font-semibold text-sm text-[#111111] mb-1">1. Domain Data Grounding</div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Models must be fine-tuned directly on industry-specific ontologies, mathematical notation, and regulatory codes rather than generic web scrapes.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-black/[0.08] bg-[#fcfbf9]">
                <div className="font-semibold text-sm text-[#111111] mb-1">2. Hardware-Aware Edge Compilation</div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Inference kernels must be optimized for local tensor memory, eliminating network round-trips and providing sub-20ms execution times.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-black/[0.08] bg-[#fcfbf9]">
                <div className="font-semibold text-sm text-[#111111] mb-1">3. Immutable Cryptographic Governance</div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Every inference trace, redacted token, and decision route must be logged to an immutable ledger for audit and compliance verifiability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Operating Principles (6 Cards) */}
      <section className="py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Engineering Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Our Core Operating Principles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex flex-col">
                  <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center text-zinc-800 mb-3.5 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-base text-[#111111] tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Team & Engineering Pillars */}
      <section className="py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Technical Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Engineering Disciplines
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-black/[0.08] bg-[#fcfbf9] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center text-zinc-800 mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-base text-[#111111] mb-1">
                      {pillar.title}
                    </h3>
                    <div className="font-mono text-[11px] text-orange-600 mb-3">{pillar.role}</div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06]">
                    {pillar.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-black/[0.08] text-zinc-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Dark CTA Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-10 sm:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Ready to deploy verified intelligence?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8">
              Collaborate with our team of AI systems engineers to think, build, and solve for your production environment.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg" variant="inverted" icon={<ArrowRight className="w-4 h-4" />}>
                Schedule Architecture Review
              </Button>
              <Button href="/services" size="lg" variant="outline-white">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}