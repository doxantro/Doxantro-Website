'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  Compass,
  ShieldCheck,
  BrainCircuit,
  Cpu,
  Eye,
  Handshake,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Users2,
  Binary,
  Microscope,
} from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GlowCard from '../../components/ui/GlowCard';
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
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Zero-Compromise Security',
    desc: 'Your proprietary data never leaves your perimeter. We deploy zero-retention architectures, encryption in transit/at rest, and air-gapped options.',
    icon: ShieldCheck,
    color: 'from-orange-600 to-orange-500',
  },
  {
    title: 'High-Throughput Engineering',
    desc: 'Speed is accuracy in real-time operations. Our systems process tens of thousands of concurrent tokens and vision frames in milliseconds.',
    icon: Cpu,
    color: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Transparent & Explainable AI',
    desc: 'No black boxes. Every model decision provides auditable confidence metrics, decision-path logs, and compliance verification.',
    icon: Eye,
    color: 'from-orange-500 to-amber-600',
  },
  {
    title: 'True Client Co-Creation',
    desc: 'We embed with your engineering and domain teams to understand your specific operational hurdles and build tailored solutions.',
    icon: Handshake,
    color: 'from-orange-600 to-amber-500',
  },
  {
    title: 'Compounding Business ROI',
    desc: 'Every AI initiative is backed by clear financial metrics: cost reduction, throughput amplification, and automated risk prevention.',
    icon: TrendingUp,
    color: 'from-amber-500 to-orange-500',
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
                Pioneering Applied AI · Our Story & Vision
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              Empowering Human Ambition with{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Applied Intelligence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Doxantro Systems was founded on a singular premise: the greatest technological breakthroughs occur when human domain mastery is amplified by specialized, high-precision artificial intelligence.
            </p>

            {/* Milestones Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-zinc-200/80 shadow-sm"
                >
                  <div className="text-3xl font-extrabold font-mono text-orange-600 mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-zinc-900">{item.label}</div>
                  <div className="text-xs text-zinc-600 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Story & Philosophy */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <Badge variant="orange" dot size="sm">Our Origin</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                From Abstract Research to{' '}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Mission-Critical Deployment
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                Too many organizations are frustrated by generic AI tools that lack domain context, hallucinate under pressure, and fail to integrate with complex legacy infrastructure.
              </p>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                We started Doxantro Systems to provide an antidote: **purpose-built AI systems** trained for high-stakes industries where error margins are measured in fractions of a percent—from bank transaction security and clinical diagnosis to autonomous agriculture and smart energy grids.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>Think: Strategic Data Audits & Architecture Formulation</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>Build: Custom Neural Pipelines & Sub-10ms API Deployment</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>Solve: Real-World Autonomous Execution & Compounding ROI</span>
                </div>
              </div>
            </motion.div>

            {/* Architecture Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl bg-zinc-950 p-8 text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                      The Doxantro Flywheel
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">● 100% Private</span>
                </div>

                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <div className="text-orange-400 font-bold mb-1">01. Ingestion & Privacy Vault</div>
                    <div className="text-zinc-400 text-xs">
                      Zero-retention encryption, tokenization, and domain data sanitization.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <div className="text-orange-400 font-bold mb-1">02. Specialized Neural Fine-Tuning</div>
                    <div className="text-zinc-400 text-xs">
                      Tailored multi-modal models trained on industry ontologies.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <div className="text-orange-400 font-bold mb-1">03. High-Throughput Edge Mesh</div>
                    <div className="text-zinc-400 text-xs">
                      Distributed orchestration delivering sub-10ms response SLAs.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <div className="text-orange-400 font-bold mb-1">04. Continuous Optimization Loop</div>
                    <div className="text-zinc-400 text-xs">
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
      <section className="py-20 bg-zinc-50/80 border-y border-zinc-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard className="p-8 sm:p-10 bg-white">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <Badge variant="orange" size="sm" className="mb-3">Our Mission</Badge>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Engineering AI for Certainty & Action
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                To equip global enterprises and institutions with intelligent systems that automate complex decisions, eliminate operational waste, and protect critical assets while upholding strict privacy, security, and algorithmic transparency.
              </p>
            </GlowCard>

            <GlowCard className="p-8 sm:p-10 bg-white">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                <Compass className="w-7 h-7" />
              </div>
              <Badge variant="amber" size="sm" className="mb-3">Our Vision</Badge>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                The Standard for Domain-Specific AI
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                To be the world’s most trusted partner for enterprise-grade applied AI—driving a future where every critical sector operates with unprecedented intelligence, resilience, and sustainable efficiency.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 4. Core Operating Principles */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Culture"
            badgeVariant="orange"
            title="The Principles That Drive Our"
            highlightText="Technology & Execution"
            subtitle="How we design, test, and deploy mission-critical AI systems for the world's most demanding enterprises."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <GlowCard className="p-7 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Multidisciplinary Team Structure */}
      <section className="py-24 bg-zinc-50/70 border-y border-zinc-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Cross-Disciplinary Team"
            badgeVariant="orange"
            title="World-Class Talent Across"
            highlightText="Research & Industry"
            subtitle="Our team combines elite researchers in machine learning with veteran practitioners from finance, medicine, agriculture, and cybersecurity."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {teamPillars.map((team, idx) => {
              const IconComp = team.icon;
              return (
                <GlowCard key={idx} className="p-8 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-zinc-900">{team.title}</h4>
                      </div>
                      <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                        {team.role}
                      </div>
                      <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                        {team.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {team.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom Call to Action */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="orange" dot pulse size="md" className="mb-4">
            Partner With Doxantro
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Build Your Proprietary{' '}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              AI Advantage?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule an architectural consultation with our AI researchers and engineering directors to evaluate your data pipelines and compute strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Start an AI Initiative
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="glass-dark"
              className="w-full sm:w-auto text-white font-semibold"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}