'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Server,
  GitFork,
  RefreshCw,
  Search,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import { solutionsData } from '../../data/solutionsData';

const lifecycle = [
  {
    step: '01',
    title: 'Data & Architecture Feasibility',
    desc: 'We audit your proprietary datasets, quantify throughput bottlenecks, and specify private foundation architectures.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Domain Tuning & Quantization',
    desc: 'Fine-tuning specialized weights on domain ontologies with automated PII masking and tensor memory compression.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Sub-20ms VPC Deployment',
    desc: 'Deploying high-concurrency microservices into your private AWS VPC, GCP, Azure, or bare-metal Kubernetes.',
    icon: GitFork,
  },
  {
    step: '04',
    title: 'SRE Drift & Compliance Guard',
    desc: 'Continuous token telemetry, confidence score verification, automated retraining loops, and SOC-2/HIPAA audit trails.',
    icon: RefreshCw,
  },
];

const capabilities = [
  {
    category: 'Model Architectures',
    items: ['Domain Transformers', 'Time-Series & Forecasting', 'Parameter-Efficient LoRA', 'Hybrid Vector RAG'],
  },
  {
    category: 'Infrastructure & Edge',
    items: ['Sub-20ms P99 Routing', 'Air-Gapped VPC Pods', 'TensorRT & CUDA Kernels', 'Multi-Region Anycast'],
  },
  {
    category: 'Governance & Security',
    items: ['Real-Time PII Masking', 'Zero-Retention Policies', 'Cryptographic Audit Trails', 'HIPAA / SOC-2 / ISO-27001'],
  },
  {
    category: 'Enterprise Operations',
    items: ['24/7 SRE Latency SLAs', 'Continuous Retraining Loops', 'Automated Fallback Handlers', 'Custom SDK Generation'],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            Platform Capabilities & Services
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-6">
            End-to-end intelligence infrastructure.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-8">
            From proprietary model fine-tuning to sub-20ms VPC edge deployment and continuous drift governance — we engineer full-stack AI for high-reliability enterprise operations.
          </p>
          <div className="flex justify-center gap-3.5">
            <Button href="/contact" size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Schedule Technical Consultation
            </Button>
            <Button href="#lifecycle" size="md" variant="secondary">
              View Delivery Lifecycle
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Delivery Lifecycle (4 Steps) */}
      <section id="lifecycle" className="py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Delivery Methodology
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              A 4-stage engineering lifecycle.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifecycle.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex flex-col">
                  <div className="font-mono text-xs text-zinc-400 font-semibold mb-3">
                    STEP {step.step}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center text-zinc-800 mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-base text-[#111111] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Industry Solutions Overview */}
      <section className="py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Industry Verticals
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Tailored domain foundation models.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group rounded-2xl border border-black/[0.08] bg-[#fcfbf9] p-6 hover:bg-white hover:border-black/20 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase text-zinc-400 font-medium">
                      {item.badge}
                    </span>
                    <span className="font-mono text-[11px] text-orange-600 font-medium">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base text-[#111111] mb-2 group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-[#111111] group-hover:text-orange-600 transition-colors">
                  <span>View Solution Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Capabilities Matrix */}
      <section className="py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Full Spectrum
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Enterprise Technical Matrix
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.category} className="flex flex-col">
                <h3 className="font-semibold text-sm text-[#111111] mb-4 pb-2 border-b border-black/[0.08]">
                  {cap.category}
                </h3>
                <ul className="space-y-2.5">
                  {cap.items.map((i) => (
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

      {/* 5. Dark CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-10 sm:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Need custom model weights for your domain?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8">
              Our AI research team engineers private transformer architectures, fine-tunes custom foundation weights, and deploys air-gapped clusters with guaranteed SLAs.
            </p>
            <Button href="/contact" size="lg" variant="inverted" icon={<ArrowRight className="w-4 h-4" />}>
              Start Architectural Scoping
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
