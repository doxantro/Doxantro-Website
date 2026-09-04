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
  Sparkles,
  Search,
  Laptop,
  HeartHandshake,
  Rocket,
  Globe,
  Coins,
  Cpu,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GlowCard from '../../components/ui/GlowCard';
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
                We Are Hiring · Global Engineering & Research
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              Build the Future of{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Applied Artificial Intelligence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Join a high-caliber team of machine learning scientists, distributed systems engineers, and domain veterans solving real-world challenges with high-precision AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="#open-roles"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                View {jobOpeningsData.length} Open Roles
              </Button>
              <Button
                href="#culture-perks"
                size="lg"
                variant="glass"
                className="w-full sm:w-auto"
              >
                Culture & Benefits
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Perks & Culture Grid */}
      <section id="culture-perks" className="py-24 bg-zinc-50/70 border-b border-zinc-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Culture"
            badgeVariant="orange"
            title="Why Engineers & Researchers"
            highlightText="Join Doxantro"
            subtitle="We prioritize high agency, deep technical autonomy, transparent ownership, and meaningful impact over corporate bureaucracy."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, idx) => {
              const IconComp = perk.icon;
              return (
                <GlowCard key={idx} className="p-8 bg-white flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-600 flex items-center justify-center mb-5 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Open Roles Filter & Search */}
      <section id="open-roles" className="py-12 bg-white sticky top-16 z-20 border-b border-zinc-200/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                      : 'bg-white border border-zinc-200/80 text-zinc-700 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roles, skills, titles..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-zinc-200/80 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 placeholder-zinc-400 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Jobs List */}
      <section className="py-20 bg-zinc-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-3xl border border-zinc-200"
              >
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1">No roles matching your criteria</h3>
                <p className="text-sm text-zinc-600">Send an open application to our talent team below.</p>
              </motion.div>
            ) : (
              <div className="space-y-6">
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
                      <GlowCard className="p-7 sm:p-8 bg-white border border-zinc-200/90 shadow-sm hover:border-orange-400/60 transition-all">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant="orange" size="sm">{job.department}</Badge>
                              <Badge variant="slate" size="sm">{job.type}</Badge>
                              <span className="text-xs text-zinc-600 flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                                {job.location}
                              </span>
                              <span className="text-xs text-zinc-600 flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-zinc-600" />
                                {job.experience}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                              {job.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                              className="px-4 py-2 rounded-full border border-zinc-300 text-zinc-700 hover:border-orange-500 hover:text-orange-600 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <span>{isExpanded ? 'Hide Details' : 'View Role Details'}</span>
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            <Link
                              href={`/contact?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                              className="px-6 py-2 rounded-full bg-orange-600 text-white font-semibold text-xs hover:bg-orange-500 shadow-md shadow-orange-600/20 transition-all"
                            >
                              Apply Now
                            </Link>
                          </div>
                        </div>

                        <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                          {job.desc}
                        </p>

                        {/* Collapsible Requirements and Responsibilities */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pt-6 mt-4 border-t border-zinc-100 grid md:grid-cols-2 gap-8"
                            >
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                  <span>Key Requirements</span>
                                </h4>
                                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                                  {job.requirements.map((req, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-2">
                                      <span className="text-orange-500 font-bold">•</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-1.5">
                                  <Sparkles className="w-4 h-4 text-orange-600" />
                                  <span>Core Responsibilities</span>
                                </h4>
                                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                                  {job.responsibilities.map((resp, rpIdx) => (
                                    <li key={rpIdx} className="flex items-start gap-2">
                                      <span className="text-orange-500 font-bold">•</span>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </GlowCard>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Open Application CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="orange" dot pulse size="md" className="mb-4">
            General Inquiries & Open Pitch
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Don't See Your Exact Role?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are always looking for exceptional researchers, systems architects, and applied AI specialists. Send us your GitHub, papers, or portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact?subject=General%20Engineering%20Application"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Send Open Application
            </Button>
            <Button
              href="/about"
              size="lg"
              variant="glass-dark"
              className="w-full sm:w-auto text-white font-semibold"
            >
              Read About Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}