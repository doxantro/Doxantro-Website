'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Boxes,
  Sprout,
  BadgeDollarSign,
  ShieldAlert,
  Server,
  GitFork,
  RefreshCw,
} from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GlowCard from '../../components/ui/GlowCard';
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
                End-to-End Enterprise AI Solutions
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              Applied Artificial Intelligence Built for{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                High-Stakes Sectors
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-10">
              We engineer, deploy, and manage production-grade AI systems that integrate directly into your operations—delivering deterministic accuracy, robust security, and compounding financial ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Schedule Architecture Review
              </Button>
              <Button
                href="#solutions-grid"
                size="lg"
                variant="glass"
                className="w-full sm:w-auto"
              >
                Browse 6 Vertical Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Methodology & Delivery Lifecycle */}
      <section className="py-24 bg-zinc-50/70 border-b border-zinc-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Process"
            badgeVariant="orange"
            title="Our Full-Lifecycle"
            highlightText="Deployment Flywheel"
            subtitle="From initial data governance to sub-10ms production inference, our systematic delivery model guarantees velocity and compliance."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <GlowCard key={idx} className="p-7 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-600 flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-600">{item.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The 6 Vertical Solutions Grid */}
      <section id="solutions-grid" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Vertical Specialization"
            badgeVariant="orange"
            title="Tailored Intelligence for"
            highlightText="Industry Leaders"
            subtitle="Explore our specialized neural architectures pre-trained on domain ontologies and ready for enterprise integration."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlowCard className="p-8 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <SolutionIcon name={item.iconName} className="w-6 h-6" />
                      </div>
                      <Badge variant="orange" size="sm">{item.badge}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="mb-6 p-3.5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-zinc-600">{item.statLabel}</span>
                      <span className="text-sm font-extrabold font-mono text-orange-600">{item.stat}</span>
                    </div>

                    <div className="space-y-2 mb-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2">
                        Core Capabilities
                      </div>
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs sm:text-sm text-zinc-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 mt-auto">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-between w-full text-sm font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors"
                    >
                      <span>Deep Dive & Specifications</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-orange-600" />
                    </Link>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enterprise Architecture & Capabilities Matrix */}
      <section className="py-24 bg-zinc-50/70 border-t border-zinc-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical Rigor"
            badgeVariant="orange"
            title="Enterprise-Grade AI"
            highlightText="Architecture Matrix"
            subtitle="Built to satisfy the stringent security, latency, and compliance mandates of Fortune 500 infrastructure."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCapabilities.map((cap, idx) => (
              <GlowCard key={idx} className="p-7 bg-white">
                <h4 className="text-base font-bold text-zinc-900 mb-4 pb-3 border-b border-zinc-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  <span>{cap.category}</span>
                </h4>
                <ul className="space-y-2.5">
                  {cap.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs sm:text-sm text-zinc-600 flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="orange" dot pulse size="md" className="mb-4">
            Custom Enterprise Deployment
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Accelerate Your AI Roadmap?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our principal AI engineers are ready to review your data infrastructure, assess model viability, and provide a comprehensive architecture blueprint.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Request Scoping Call
            </Button>
            <Button
              href="/case-studies"
              size="lg"
              variant="glass-dark"
              className="w-full sm:w-auto text-white font-semibold"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
