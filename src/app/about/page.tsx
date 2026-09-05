'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Compass,
  ShieldCheck,
  BrainCircuit,
  Cpu,
  Eye,
  Handshake,
  TrendingUp,
  CheckCircle2,
  Lock,
  Layers,
  Binary,
  Microscope,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';

const milestones = [
  { value: '6', label: 'Core Industry Verticals', desc: 'Finance, Health, Agri, Supply, Sec, Energy' },
  { value: '99.8%', label: 'Inference Precision', desc: 'Cross-validated model benchmarks' },
  { value: '<10ms', label: 'Average Response Time', desc: 'Low-latency edge orchestration' },
  { value: '100%', label: 'Private Data Sovereignty', desc: 'Zero-retention enterprise pipelines' },
];

const principles = [
  {
    title: 'Domain-Specialized Intelligence',
    desc: 'We reject one-size-fits-all generic models. We train and fine-tune models directly on deep industry ontologies for unprecedented precision.',
    icon: BrainCircuit,
  },
  {
    title: 'Zero-Compromise Security',
    desc: 'Your proprietary data never leaves your perimeter. We deploy zero-retention architectures, encryption in transit/at rest, and air-gapped options.',
    icon: ShieldCheck,
  },
  {
    title: 'High-Throughput Engineering',
    desc: 'Speed is accuracy in real-time operations. Our systems process tens of thousands of concurrent tokens and vision frames in milliseconds.',
    icon: Cpu,
  },
  {
    title: 'Transparent & Explainable AI',
    desc: 'No black boxes. Every model decision provides auditable confidence metrics, decision-path logs, and compliance verification.',
    icon: Eye,
  },
  {
    title: 'True Client Co-Creation',
    desc: 'We embed with your engineering and domain teams to understand your specific operational hurdles and build tailored solutions.',
    icon: Handshake,
  },
  {
    title: 'Compounding Business ROI',
    desc: 'Every AI initiative is backed by clear financial metrics: cost reduction, throughput amplification, and automated risk prevention.',
    icon: TrendingUp,
  },
];

const teamPillars = [
  {
    title: 'AI Research & Model Architects',
    role: 'Deep Learning & Neural Science',
    desc: 'Engineers specializing in multi-modal foundation models, transformer architectures, and computer vision pipelines.',
    skills: ['Transformers', 'Vision Models', 'Reinforcement Learning', 'Quantization'],
    icon: Binary,
  },
  {
    title: 'Systems & Infrastructure Engineers',
    role: 'Distributed Cloud & Edge',
    desc: 'Architects of resilient microservices, TPU/GPU cluster managers, and ultra-low-latency real-time inference APIs.',
    skills: ['Kubernetes', 'GPU Orchestration', 'gRPC', 'Sub-10ms APIs'],
    icon: Layers,
  },
  {
    title: 'Vertical Domain Specialists',
    role: 'Industry Context & Data',
    desc: 'Subject-matter veterans from algorithmic finance, diagnostic healthcare, agronomy, and cybersecurity intelligence.',
    skills: ['Algorithmic Risk', 'DICOM Imaging', 'NDVI Analytics', 'Threat Intel'],
    icon: Microscope,
  },
  {
    title: 'Security & Enterprise Delivery',
    role: 'Compliance & Governance',
    desc: 'Ensuring all models adhere to strict SOC-2, HIPAA, GDPR, and ISO standards with enterprise-grade SLAs.',
    skills: ['Zero-Trust', 'HIPAA/SOC-2', 'Air-Gapped Ops', 'Enterprise SLAs'],
    icon: Lock,
  },
];

export default function About() {
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
                About Doxantro Systems · Story & Vision
              </span>
            </div>

            <h1 className="display-1 mb-4 sm:mb-5">
              Empowering Human Ambition with Applied Intelligence
            </h1>

            <p className="body-lg max-w-2xl mx-auto mb-8 sm:mb-10 text-zinc-600">
              Doxantro Systems was founded on a singular premise: the greatest technological breakthroughs occur when human domain mastery is amplified by specialized, high-precision artificial intelligence.
            </p>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className="card-minimal p-4 sm:p-5"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#111111] tabular-nums mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-900">{item.label}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Story & Flywheel */}
      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="subheading">Our Origin</div>
              <h2 className="display-2">
                From Abstract Research to Mission-Critical Deployment
              </h2>

              <p className="body-md text-zinc-600">
                Too many organizations are frustrated by generic AI tools that lack domain context, hallucinate under pressure, and fail to integrate with complex legacy infrastructure.
              </p>

              <p className="body-md text-zinc-600">
                We started Doxantro Systems to provide an antidote: <strong>purpose-built AI systems</strong> trained for high-stakes industries where error margins are measured in fractions of a percent—from bank transaction security and clinical diagnosis to autonomous agriculture and smart energy grids.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 flex-shrink-0" />
                  <span>Think: Strategic Data Audits & Architecture Formulation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 flex-shrink-0" />
                  <span>Build: Custom Neural Pipelines & Sub-10ms API Deployment</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 flex-shrink-0" />
                  <span>Solve: Real-World Autonomous Execution & Compounding ROI</span>
                </div>
              </div>
            </motion.div>

            {/* Architecture Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl bg-[#0d0d10] p-5 sm:p-7 md:p-8 text-white border border-white/[0.08] shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
                    ■ THE DOXANTRO FLYWHEEL
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">● 100% Sovereign</span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#141418] border border-white/[0.06]">
                    <div className="text-zinc-100 font-bold mb-0.5">01. Ingestion & Privacy Vault</div>
                    <div className="text-zinc-400 text-[11px]">
                      Zero-retention encryption, tokenization, and domain data sanitization.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141418] border border-white/[0.06]">
                    <div className="text-zinc-100 font-bold mb-0.5">02. Specialized Neural Fine-Tuning</div>
                    <div className="text-zinc-400 text-[11px]">
                      Tailored multi-modal models trained on industry ontologies.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141418] border border-white/[0.06]">
                    <div className="text-zinc-100 font-bold mb-0.5">03. High-Throughput Edge Mesh</div>
                    <div className="text-zinc-400 text-[11px]">
                      Distributed orchestration delivering sub-10ms response SLAs.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141418] border border-white/[0.06]">
                    <div className="text-zinc-100 font-bold mb-0.5">04. Continuous Optimization Loop</div>
                    <div className="text-zinc-400 text-[11px]">
                      Automated drift detection, adaptive re-weighting, and audit telemetry.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-16 md:py-20 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="card-minimal p-5 sm:p-7 md:p-8">
              <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <div className="subheading mb-2">Our Mission</div>
              <h3 className="text-base sm:text-xl font-bold text-zinc-900 mb-2">
                Engineering AI for Certainty & Action
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                To equip global enterprises and institutions with intelligent systems that automate complex decisions, eliminate operational waste, and protect critical assets while upholding strict privacy, security, and algorithmic transparency.
              </p>
            </div>

            <div className="card-minimal p-5 sm:p-7 md:p-8">
              <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <div className="subheading mb-2">Our Vision</div>
              <h3 className="text-base sm:text-xl font-bold text-zinc-900 mb-2">
                The Global Standard for Domain AI
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                To be the world’s most trusted partner for enterprise-grade applied AI—driving a future where every critical sector operates with unprecedented intelligence, resilience, and sustainable efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Operating Principles */}
      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ENGINEERING CULTURE"
            title="The Principles That Drive Our Technology"
            subtitle="How we design, test, and deploy mission-critical AI systems for demanding enterprises."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="card-minimal p-5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Multidisciplinary Team Structure */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="CROSS-DISCIPLINARY TALENT"
            title="World-Class Talent Across Research & Industry"
            subtitle="Combining elite machine learning researchers with veteran practitioners from finance, medicine, agriculture, and cybersecurity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamPillars.map((team, idx) => {
              const IconComp = team.icon;
              return (
                <div key={idx} className="card-minimal p-5 sm:p-6">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 flex-shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-zinc-900">{team.title}</h4>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">
                        {team.role}
                      </div>
                      <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                        {team.desc}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {team.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom Call to Action */}
      <section className="py-16 md:py-24 bg-[#0c0c0e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 block">
            ■ PARTNER WITH DOXANTRO
          </span>

          <h2 className="display-2 text-white mb-4">
            Ready to Build Your Proprietary AI Advantage?
          </h2>

          <p className="body-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Schedule an architectural consultation with our AI researchers and engineering directors to evaluate your data pipelines and compute strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto">
              Start an AI Initiative
            </Button>
            <Button href="/services" size="lg" variant="outline-white" className="w-full sm:w-auto">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}