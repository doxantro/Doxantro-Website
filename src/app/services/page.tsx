'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cpu,
  GitFork,
  RefreshCw,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';
import SolutionIcon from '../../components/ui/SolutionIcon';
import { solutionsData } from '../../data/solutionsData';

const methodologySteps = [
  {
    step: '01',
    title: 'Discovery & Feasibility Audit',
    desc: 'We evaluate your proprietary datasets, quantify business ROI bottlenecks, and architect a tailored neural strategy.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Model Fine-Tuning & Curation',
    desc: 'Customizing foundation models on domain-specific ontologies with strict data sanitization and privacy controls.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Sub-10ms Integration & Deploy',
    desc: 'Orchestrating high-concurrency microservices across your private cloud, on-prem clusters, or hybrid edge mesh.',
    icon: GitFork,
  },
  {
    step: '04',
    title: 'SRE Monitoring & Drift Guard',
    desc: '24/7 automated telemetry, confidence scoring, model retraining loops, and SOC-2 / HIPAA compliance audits.',
    icon: RefreshCw,
  },
];

const technicalCapabilities = [
  {
    category: 'Model Architecture',
    items: ['Multi-Modal Transformers', 'Computer Vision (YOLO/Segment)', 'Time-Series & Forecasting', 'Domain-Specific LLMs & RAG'],
  },
  {
    category: 'Deployment & Infra',
    items: ['Private Cloud (AWS/GCP/Azure)', 'Air-Gapped On-Premises', 'Edge Inference (TPU/Jetson)', 'Sub-10ms gRPC Microservices'],
  },
  {
    category: 'Security & Compliance',
    items: ['SOC-2 Type II Certified Pipeline', 'HIPAA & GDPR Compliant', 'Zero-Retention Data Vaults', 'End-to-End Enclave Encryption'],
  },
  {
    category: 'Enterprise SLAs',
    items: ['99.95% API Availability SLA', 'Automated Fallback Circuits', 'Model Drift Auto-Alerting', 'Dedicated AI Support Engineers'],
  },
];

export default function Services() {
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
                End-to-End Enterprise AI Solutions
              </span>
            </div>

            <h1 className="display-1 mb-4 sm:mb-5">
              Applied Artificial Intelligence Built for High-Stakes Sectors
            </h1>

            <p className="body-lg max-w-2xl mx-auto mb-8 text-zinc-600">
              We engineer, deploy, and manage production-grade AI systems that integrate directly into your operations—delivering deterministic accuracy, robust security, and compounding financial ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto">
                Schedule Architecture Review
              </Button>
              <Button href="#solutions-grid" size="lg" variant="outline" className="w-full sm:w-auto">
                Browse 6 Vertical Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Methodology & Delivery Lifecycle */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ENGINEERING PROCESS"
            title="Our Full-Lifecycle Deployment Flywheel"
            subtitle="From initial data governance to sub-10ms production inference, our systematic delivery model guarantees velocity and compliance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {methodologySteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="card-minimal p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">{item.step}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The 6 Vertical Solutions Grid */}
      <section id="solutions-grid" className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="VERTICAL SPECIALIZATION"
            title="Tailored Intelligence for Industry Leaders"
            subtitle="Explore our specialized neural architectures pre-trained on domain ontologies and ready for enterprise integration."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {solutionsData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <div className="card-minimal p-5 sm:p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                        <SolutionIcon name={item.iconName} className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-600 bg-zinc-50 border border-black/[0.06] px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="mb-4 p-2.5 rounded-lg bg-zinc-50 border border-black/[0.04] flex items-center justify-between">
                      <span className="text-[11px] text-zinc-500">{item.statLabel}</span>
                      <span className="text-xs font-mono font-bold text-zinc-900">{item.stat}</span>
                    </div>

                    <div className="space-y-1.5 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                        Core Capabilities
                      </div>
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs text-zinc-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-black/[0.04] mt-auto">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors"
                    >
                      <span>Deep Dive & Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enterprise Architecture & Capabilities Matrix */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="TECHNICAL RIGOR"
            title="Enterprise-Grade Architecture Matrix"
            subtitle="Built to satisfy the stringent security, latency, and compliance mandates of modern infrastructure."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {technicalCapabilities.map((cap, idx) => (
              <div key={idx} className="card-minimal p-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-900 mb-3 pb-2 border-b border-black/[0.04]">
                  ■ {cap.category}
                </h4>
                <ul className="space-y-2">
                  {cap.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs text-zinc-600 flex items-start gap-1.5">
                      <span className="text-zinc-400 font-mono">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="py-16 md:py-24 bg-[#0c0c0e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 block">
            ■ CUSTOM ENTERPRISE DEPLOYMENT
          </span>

          <h2 className="display-2 text-white mb-4">
            Ready to Accelerate Your AI Roadmap?
          </h2>

          <p className="body-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Our principal AI engineers are ready to review your data infrastructure, assess model viability, and provide a comprehensive architecture blueprint.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button
              href="/contact"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-100 font-semibold"
            >
              Request Scoping Call
            </Button>
            <Button href="/case-studies" size="lg" variant="outline-white" className="w-full sm:w-auto">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
