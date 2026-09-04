'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Globe,
  Coins,
  HeartHandshake,
  Sparkles,
  Rocket,
} from 'lucide-react';
import Button from '../../components/ui/Button';

const departments = ['All', 'Engineering', 'Research & Science', 'Solutions', 'Product'];

const perks = [
  {
    title: 'High-Density Compute Clusters',
    desc: 'Direct access to dedicated H100 GPU clusters for parameter-efficient research and kernel compilation experiments.',
    icon: Cpu,
  },
  {
    title: 'Global Remote-First',
    desc: 'Work asynchronously from anywhere across the globe with flexible hours and high autonomy.',
    icon: Globe,
  },
  {
    title: 'Top-Tier Compensation & Equity',
    desc: 'Competitive base compensation packages with significant early equity grants and annual performance bonuses.',
    icon: Coins,
  },
  {
    title: 'Comprehensive Health & Family',
    desc: '100% premium coverage for health, dental, and mental wellness with full dependent support.',
    icon: HeartHandshake,
  },
  {
    title: 'Research & Conference Stipend',
    desc: '$4,000 annual budget for attending NeurIPS, ICML, CVPR, and subscribing to academic research databases.',
    icon: Sparkles,
  },
  {
    title: 'Mission-Critical Impact',
    desc: 'Your systems run live in production across multinational banks, hospital networks, and national energy grids.',
    icon: Rocket,
  },
];

const jobsData = [
  {
    id: 'lead-ml-compiler',
    title: 'Lead ML Compiler & Inference Kernel Engineer',
    department: 'Engineering',
    location: 'Remote (Global) / San Francisco / London',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$190,000 - $260,000 + 0.3% - 0.7% Equity',
    desc: 'Architect custom CUDA/Triton kernels, tensor compilation pipelines, and low-latency C++ inference runtime engines.',
    responsibilities: [
      'Optimize sub-20ms inference latency across distributed GPU/TPU cluster nodes.',
      'Develop custom TensorRT and vLLM execution kernels for quantized 4-bit/8-bit models.',
      'Profile memory bandwidth, cache hit rates, and kernel latency bottlenecks.',
    ],
    requirements: [
      'Deep proficiency with C++, CUDA, Triton, and PyTorch internals.',
      'Experience optimizing transformer attention kernels and KV-cache compression.',
      'Track record of building production distributed systems at scale.',
    ],
  },
  {
    id: 'senior-ai-security',
    title: 'Senior Zero-Trust AI Security Architect',
    department: 'Engineering',
    location: 'Remote (US/EU Timezones)',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$175,000 - $240,000 + Equity',
    desc: 'Lead real-time PII redaction engines, stream-level guardrails, and air-gapped cryptographic logging.',
    responsibilities: [
      'Design stream-level token sanitization filters for HIPAA and FINRA compliance.',
      'Build zero-retention memory isolation layers for air-gapped VPC deployments.',
      'Lead red-teaming and prompt-injection defense evaluation matrices.',
    ],
    requirements: [
      'Experience in zero-trust cloud security and SOC-2 / HIPAA frameworks.',
      'Strong coding skills in Go, Rust, or Python with low-latency streaming pipelines.',
      'Expertise in cryptographic verification and adversarial ML evaluation.',
    ],
  },
  {
    id: 'research-scientist-quant',
    title: 'Research Scientist — Domain Alignment & RL',
    department: 'Research & Science',
    location: 'Remote (Global)',
    type: 'Full-time',
    experience: 'Ph.D. or 3+ years',
    salary: '$180,000 - $250,000 + Equity',
    desc: 'Pioneer parameter-efficient fine-tuning (LoRA), reinforcement learning from domain feedback, and hallucination reduction.',
    responsibilities: [
      'Conduct novel research on domain ontology grounding and confidence scoring.',
      'Publish technical findings and benchmark papers at leading ML venues.',
      'Collaborate with engineering to ship state-of-the-art weights to production.',
    ],
    requirements: [
      'Ph.D. in Computer Science, Machine Learning, Physics, or equivalent experience.',
      'Published papers in major conferences (NeurIPS, ICML, ICLR, ACL).',
      'Strong mathematical grounding in statistical learning and optimization.',
    ],
  },
  {
    id: 'enterprise-solutions-architect',
    title: 'Principal Enterprise AI Solutions Architect',
    department: 'Solutions',
    location: 'New York / London / Remote',
    type: 'Full-time',
    experience: '6+ years',
    salary: '$185,000 - $255,000 + Equity',
    desc: 'Work directly with Fortune 500 CTOs and engineering directors to architect private AI pipelines and VPC deployments.',
    responsibilities: [
      'Design end-to-end integration blueprints for financial and healthcare enterprise stacks.',
      'Lead proof-of-concept benchmarks and quantify operational ROI metrics.',
      'Bridge enterprise client requirements with core engineering roadmaps.',
    ],
    requirements: [
      'Demonstrated experience architecting enterprise infrastructure in AWS, GCP, or Azure.',
      'Strong technical communication and ability to explain ML systems to executives.',
      'Hands-on proficiency with Python, TypeScript, and modern API architectures.',
    ],
  },
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [openJobId, setOpenJobId] = useState<string | null>('lead-ml-compiler');

  const filteredJobs = jobsData.filter(
    (j) => selectedDept === 'All' || j.department === selectedDept
  );

  const toggleJob = (id: string) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            Join Doxantro Systems
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-6">
            Build the infrastructure powering enterprise AI.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-8">
            We are systems engineers, ML researchers, and distributed infrastructure architects building private, verified AI for mission-critical industries.
          </p>
          <div className="flex justify-center gap-3.5">
            <Button href="#openings" size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              View Open Roles
            </Button>
            <Button href="/about" size="md" variant="secondary">
              Read Our Thesis
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Perks & Culture Grid */}
      <section className="py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Benefits & Culture
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
              Engineered for high autonomy and mastery.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex flex-col">
                  <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center text-zinc-800 mb-3.5 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-base text-[#111111] tracking-tight mb-1.5">
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

      {/* 3. Open Positions Board */}
      <section id="openings" className="py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2">
                Open Positions
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
                Available Roles ({filteredJobs.length})
              </h2>
            </div>

            {/* Dept Filter */}
            <div className="flex flex-wrap gap-1.5">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200/70'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs Accordion */}
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isOpen = openJobId === job.id;
              return (
                <div
                  key={job.id}
                  className="rounded-2xl border border-black/[0.09] bg-[#fcfbf9] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleJob(job.id)}
                    className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer focus:outline-none bg-white hover:bg-zinc-50/80 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-medium">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg text-[#111111] tracking-tight">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mt-1">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-orange-600 hidden sm:inline-block">
                        {isOpen ? 'Collapse' : 'Details'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-black' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-6 pt-4 border-t border-black/[0.06] text-xs sm:text-sm text-zinc-600 space-y-5 bg-[#fcfbf9]"
                      >
                        <p className="leading-relaxed text-zinc-800">{job.desc}</p>

                        <div>
                          <h4 className="font-semibold text-xs font-mono uppercase text-zinc-900 mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-1.5 list-disc pl-4 text-zinc-600">
                            {job.responsibilities.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-xs font-mono uppercase text-zinc-900 mb-2">
                            Requirements
                          </h4>
                          <ul className="space-y-1.5 list-disc pl-4 text-zinc-600">
                            {job.requirements.map((req) => (
                              <li key={req}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 flex items-center justify-between">
                          <Button
                            href="/contact"
                            size="sm"
                            variant="primary"
                            icon={<ArrowRight className="w-3.5 h-3.5" />}
                          >
                            Apply for Role
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Dark CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-10 sm:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Don&apos;t see an exact opening?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8">
              We are always looking for exceptional ML systems engineers, kernel hackers, and distributed systems architects. Send us your background.
            </p>
            <Button href="/contact" size="lg" variant="inverted" icon={<ArrowRight className="w-4 h-4" />}>
              Send General Application
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}