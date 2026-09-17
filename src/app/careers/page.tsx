'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Clock,
  CheckCircle2,
  Search,
  Globe,
  Coins,
  Cpu,
  HeartHandshake,
  Sparkles,
  Rocket,
  ChevronDown,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';

const departments = ['All', 'Engineering', 'Research & Science', 'Solutions', 'Product'];

const perks = [
  {
    title: 'World-Class Compute Access',
    desc: 'Dedicated high-performance GPU/TPU clusters for research, testing, and rapid model fine-tuning.',
    icon: Cpu,
  },
  {
    title: 'Remote-First Flexibility',
    desc: 'Work from anywhere in the world with async-friendly workflows and flexible hours.',
    icon: Globe,
  },
  {
    title: 'Competitive Equity & Pay',
    desc: 'Top-tier compensation packages, generous stock option grants, and performance bonuses.',
    icon: Coins,
  },
  {
    title: 'Health, Wellness & Family',
    desc: 'Comprehensive premium health, dental, and mental wellness coverage with full family support.',
    icon: HeartHandshake,
  },
  {
    title: 'Continuous Learning Stipend',
    desc: '$3,500 annual budget for conferences (NeurIPS, ICML, CVPR), research papers, and technical books.',
    icon: Sparkles,
  },
  {
    title: 'Fast-Paced Impact',
    desc: 'Your code runs in live production environments across banks, hospitals, and critical energy grids.',
    icon: Rocket,
  },
];

const jobOpeningsData = [
  {
    id: 'staff-ml-engineer',
    title: 'Staff AI / Machine Learning Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote (Global) / Hybrid',
    experience: '5+ years',
    desc: 'Lead the architecture and optimization of specialized neural networks across multi-modal transformers and time-series models with sub-10ms inference targets.',
    requirements: [
      'Deep mastery of PyTorch, Triton, CUDA, or TensorRT',
      'Experience deploying models to production serving clusters (vLLM, Triton, TGI)',
      'Track record of optimizing inference latency and GPU memory quantization',
      'Strong background in distributed training and data pipelines',
    ],
    responsibilities: [
      'Design, train, and benchmark domain-specific models for our 6 core verticals',
      'Optimize kernel execution and compiler graph transformations',
      'Collaborate with systems engineers on gRPC microservice integration',
      'Mentor senior engineers and shape our core ML architecture standards',
    ],
  },
  {
    id: 'principal-solutions-architect',
    title: 'Principal AI Solutions Architect',
    department: 'Solutions',
    type: 'Full-time',
    location: 'Remote (US/EU/APAC)',
    experience: '7+ years',
    desc: 'Bridge enterprise client challenges and Doxantro’s AI platform—architecting zero-retention private cloud deployments and technical integrations.',
    requirements: [
      'Demonstrated expertise in enterprise cloud architectures (AWS, GCP, Azure, On-Prem)',
      'Deep fluency with AI/ML systems, data sovereignty, and security posture (SOC-2, HIPAA)',
      'Executive-level communication and technical leadership skills',
      'Experience leading multi-million-dollar technical transformation scopes',
    ],
    responsibilities: [
      'Lead technical discovery and architectural design with enterprise CTOs and VPs',
      'Draft reference architectures, latency SLA blueprints, and security guarantees',
      'Oversee implementation pilots and transition to production SRE teams',
      'Provide customer feedback into our core research and product roadmaps',
    ],
  },
  {
    id: 'senior-cv-researcher',
    title: 'Senior Computer Vision Scientist',
    department: 'Research & Science',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    experience: '4+ years',
    desc: 'Pioneer advanced vision models for high-resolution medical DICOM imaging, satellite multispectral NDVI mapping, and autonomous crop disease detection.',
    requirements: [
      'MS or PhD in Computer Science, Machine Learning, or related quantitative field',
      'Strong publication or production record in Vision Transformers, Segmentation, or Object Detection',
      'Experience with multispectral imagery, point clouds, or medical radiological formats',
      'Proficiency in Python, PyTorch, and OpenCV',
    ],
    responsibilities: [
      'Research and develop next-gen vision backbones for healthcare and agriculture',
      'Create automated synthetic data augmentation and active learning pipelines',
      'Publish research findings and file defensible patents on proprietary architectures',
      'Collaborate with ML engineers to quantize models for edge devices',
    ],
  },
  {
    id: 'senior-platform-engineer',
    title: 'Senior Distributed Systems & Platform Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote (Global)',
    experience: '4+ years',
    desc: 'Build the ultra-reliable, high-throughput distributed control plane that orchestrates thousands of TPU/GPU workers across global edge regions.',
    requirements: [
      'High proficiency in Go, Rust, or modern C++ and Python',
      'Deep experience with Kubernetes operators, eBPF, service meshes (Istio/Envoy), and gRPC',
      'Strong understanding of Linux networking, low-latency I/O, and high-concurrency architectures',
      'Experience managing multi-region cloud infrastructure with Terraform/Pulumi',
    ],
    responsibilities: [
      'Architect and maintain our global edge inference mesh and streaming telemetry',
      'Implement zero-downtime rolling model updates and automated failover circuits',
      'Ensure 99.95%+ uptime SLAs across our multi-tenant enterprise clusters',
      'Build automated security instrumentation and zero-retention privacy vaults',
    ],
  },
  {
    id: 'ai-product-lead',
    title: 'Staff Technical Product Manager (Enterprise AI)',
    department: 'Product',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    experience: '5+ years',
    desc: 'Define and drive the product roadmap for Doxantro’s developer platform, model control plane, and vertical industry sandbox suites.',
    requirements: [
      'Proven experience managing developer-facing or enterprise AI infrastructure products',
      'Technical background capable of discussing model weights, latency budgets, and API schemas',
      'Strong customer discovery rigor and data-driven prioritization methodology',
      'Experience with B2B enterprise buying cycles and developer ergonomics',
    ],
    responsibilities: [
      'Own product vision, roadmap, and delivery milestones for the Doxantro Inference Engine',
      'Work closely with research, engineering, and sales to launch high-impact capabilities',
      'Gather qualitative and telemetry feedback from pilot enterprise customers',
      'Craft developer documentation, API references, and interactive sandbox tools',
    ],
  },
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const filteredJobs = jobOpeningsData.filter((job) => {
    const matchesDept = selectedDept === 'All' || job.department.toLowerCase() === selectedDept.toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.requirements.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

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
                Global Engineering & Research Careers
              </span>
            </div>

            <h1 className="display-1 mb-4 sm:mb-5">
              Build the Future of Applied Artificial Intelligence
            </h1>

            <p className="body-lg max-w-2xl mx-auto mb-8 text-zinc-600">
              Join a high-caliber team of machine learning scientists, distributed systems engineers, and domain veterans solving real-world challenges with high-precision AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <Button href="#open-roles" size="lg" variant="primary" className="w-full sm:w-auto">
                View {jobOpeningsData.length} Open Roles
              </Button>
              <Button href="#culture-perks" size="lg" variant="outline" className="w-full sm:w-auto">
                Culture & Benefits
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Perks & Culture Grid */}
      <section id="culture-perks" className="py-16 md:py-24 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ENGINEERING CULTURE"
            title="Why Engineers & Researchers Join Doxantro"
            subtitle="We prioritize high agency, deep technical autonomy, transparent ownership, and meaningful impact over corporate bureaucracy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {perks.map((perk, idx) => {
              const IconComp = perk.icon;
              return (
                <div key={idx} className="card-minimal p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-3">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Open Roles Filter & Search */}
      <section id="open-roles" className="py-4 sm:py-6 bg-white sticky top-14 z-20 border-b border-black/[0.06] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 ${
                    selectedDept === dept
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'bg-white border border-black/[0.08] text-zinc-600 hover:text-[#111111] hover:border-black/[0.15]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roles & skills..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-black/[0.08] rounded-full focus:outline-none focus:border-black text-zinc-900 placeholder-zinc-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Jobs List */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-zinc-900 mb-1">No roles matching your criteria</h3>
                <p className="text-xs text-zinc-500">Send an open application to our talent team below.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-minimal p-5 sm:p-7">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                              <span className="text-[10px] font-mono text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                                {job.department}
                              </span>
                              <span className="text-[10px] font-mono text-zinc-500 border border-black/[0.06] px-2 py-0.5 rounded">
                                {job.type}
                              </span>
                              <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-zinc-400" />
                                {job.location}
                              </span>
                              <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                                <Clock className="w-3 h-3 text-zinc-400" />
                                {job.experience}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                              {job.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2 self-start sm:self-center">
                            <button
                              onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                              className="px-3 py-1.5 rounded-full border border-black/[0.1] hover:border-black text-zinc-700 text-xs font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <span>{isExpanded ? 'Hide' : 'Details'}</span>
                              <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            <Link
                              href={`/contact?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                              className="px-4 py-1.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all"
                            >
                              Apply Now
                            </Link>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-600 leading-relaxed mb-2">
                          {job.desc}
                        </p>

                        {/* Collapsible Requirements and Responsibilities */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pt-4 mt-3 border-t border-black/[0.04] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                            >
                              <div>
                                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900" />
                                  <span>Requirements</span>
                                </div>
                                <ul className="space-y-1.5 text-xs text-zinc-600">
                                  {job.requirements.map((req, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-1.5">
                                      <span className="text-zinc-400 font-mono">•</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                                  <span>Responsibilities</span>
                                </div>
                                <ul className="space-y-1.5 text-xs text-zinc-600">
                                  {job.responsibilities.map((resp, rpIdx) => (
                                    <li key={rpIdx} className="flex items-start gap-1.5">
                                      <span className="text-zinc-400 font-mono">•</span>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Open Application CTA */}
      <section className="py-16 md:py-24 bg-[#0c0c0e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 block">
            ■ OPEN APPLICATION
          </span>

          <h2 className="display-2 text-white mb-4">
            Don&apos;t See Your Exact Role?
          </h2>

          <p className="body-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            We are always looking for exceptional researchers, systems architects, and applied AI specialists. Send us your GitHub, papers, or portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button
              href="/contact?subject=General%20Engineering%20Application"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-100 font-semibold"
            >
              Send Open Application
            </Button>
            <Button href="/about" size="lg" variant="outline-white" className="w-full sm:w-auto">
              Read About Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}