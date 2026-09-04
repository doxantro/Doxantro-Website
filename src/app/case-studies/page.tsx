'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Building2,
  Clock,
} from 'lucide-react';
import Button from '../../components/ui/Button';

const industries = ['All', 'Finance', 'Healthcare', 'Agriculture', 'Supply Chain', 'Security', 'Energy'];

const caseStudiesData = [
  {
    id: 'finance-fraud',
    title: 'Adaptive Real-Time Fraud Interception Mesh',
    client: 'Tier-1 Multinational Commercial Bank',
    industry: 'Finance',
    duration: '6 months',
    challenge: 'The institution faced synthetic identity fraud that bypassed legacy rule engines, resulting in rising chargebacks and high false-positive decline rates.',
    solution: 'Doxantro engineered a graph neural network and behavioral anomaly engine analyzing 18,000+ tx/sec with real-time risk scoring in under 6 milliseconds.',
    results: [
      { metric: '90%', label: 'Fraud Losses Prevented' },
      { metric: '99.94%', label: 'Detection Precision' },
      { metric: '87%', label: 'Fewer False Declines' },
      { metric: '<6ms', label: 'Inference SLA' },
    ],
    technologies: ['Graph Neural Networks', 'Streaming Pipeline', 'Zero-Trust Vaults', 'FINRA Compliance'],
    badge: 'Fintech Tier 1',
  },
  {
    id: 'healthcare-diagnostics',
    title: 'Clinical AI Diagnostic & DICOM Triage Assistant',
    client: 'Regional University Hospital Network (42 Centers)',
    industry: 'Healthcare',
    duration: '8 months',
    challenge: 'Radiology departments experienced imaging backlogs and diagnostic fatigue, causing prolonged triage wait times for emergency CT and MRI scans.',
    solution: 'Developed a HIPAA-compliant vision transformer pipeline that pre-segments abnormalities, computes confidence heatmaps, and flags high-urgency scans to doctors.',
    results: [
      { metric: '85%', label: 'Triage Speed Gain' },
      { metric: '60%', label: 'Faster Emergency Reads' },
      { metric: '99.4%', label: 'Anomaly Detection AUC' },
      { metric: '100%', label: 'HIPAA Air-Gapped' },
    ],
    technologies: ['Vision Transformers', 'DICOM Segmentation', 'HIPAA Secure Pipeline', 'Edge GPU Nodes'],
    badge: 'Clinical Grade',
  },
  {
    id: 'agriculture-yield',
    title: 'Autonomous Crop Health & Satellite Yield Intelligence',
    client: 'AgriCorp Global Operations (120,000+ Hectares)',
    industry: 'Agriculture',
    duration: '5 months',
    challenge: 'Unpredictable pest outbreaks and microclimate fluctuations resulted in substantial harvest losses and inefficient nitrogen application across farming zones.',
    solution: 'Integrated multi-spectral satellite telemetry and edge drone vision models to predict crop stress 14 days before visible leaf symptoms appear.',
    results: [
      { metric: '35%', label: 'Higher Crop Yield' },
      { metric: '40%', label: 'Reduced Fertilizer Use' },
      { metric: '14 Days', label: 'Early Pest Warning' },
      { metric: '$4.2M', label: 'Annual Cost Saved' },
    ],
    technologies: ['Multi-Spectral Vision', 'Weather RNNs', 'Edge Inference Pods', 'Offline Sync'],
    badge: 'Precision Agri',
  },
  {
    id: 'supply-chain-routing',
    title: 'Dynamic Multi-Modal Logistics & Port Bottleneck Optimizer',
    client: 'Global Ocean & Rail Freight Logistics Consortium',
    industry: 'Supply Chain',
    duration: '7 months',
    challenge: 'Port congestion, customs delays, and container imbalances caused high demurrage penalties and missed supply chain delivery windows.',
    solution: 'Deployed a reinforcement learning multi-agent scheduler that continuously simulates 100,000+ route variations in real time, dynamically rerouting freight.',
    results: [
      { metric: '28%', label: 'Faster Port Turnaround' },
      { metric: '$18M', label: 'Demurrage Eliminated' },
      { metric: '94%', label: 'On-Time Delivery Rate' },
      { metric: '18ms', label: 'Route Optimization' },
    ],
    technologies: ['Multi-Agent RL', 'Graph Routing', 'Kafka Stream Engine', 'Predictive Customs'],
    badge: 'Global Freight',
  },
  {
    id: 'cybersecurity-threat',
    title: 'Autonomous SOC Threat Triage & Zero-Day Neutralization',
    client: 'Defense & Cloud Infrastructure Provider',
    industry: 'Security',
    duration: '4 months',
    challenge: 'Security teams were overwhelmed by 45,000+ daily alerts, causing alert fatigue and increasing mean time to respond (MTTR) for genuine lateral movements.',
    solution: 'Built an air-gapped LLM agent mesh that correlates multi-cloud telemetry, eliminates 96% of false positives, and executes zero-day isolation scripts automatically.',
    results: [
      { metric: '96%', label: 'False Positive Drop' },
      { metric: '<30s', label: 'Zero-Day MTTR' },
      { metric: '100%', label: 'Audit Trail Grounding' },
      { metric: 'Zero', label: 'Alert Fatigue' },
    ],
    technologies: ['Cyber LLM Agents', 'eBPF Kernel Telemetry', 'Air-Gapped Sandbox', 'Automated Containment'],
    badge: 'Defense SOC-2',
  },
  {
    id: 'energy-grid-forecasting',
    title: 'Renewable Power Grid Load Balancing & Battery Dispatch',
    client: 'National Clean Energy & Grid Utility Operator',
    industry: 'Energy',
    duration: '9 months',
    challenge: 'High intermittency of solar and wind generation created severe grid imbalances and curtailment penalties during peak transmission hours.',
    solution: 'Engineered a physics-informed neural network (PINN) forecasting sub-hourly generation and optimizing utility-scale battery storage dispatch.',
    results: [
      { metric: '45%', label: 'Fewer Grid Imbalances' },
      { metric: '99.1%', label: 'Generation Forecast Accuracy' },
      { metric: '22%', label: 'Extended Battery Lifetime' },
      { metric: '10ms', label: 'Sub-Grid Dispatch SLA' },
    ],
    technologies: ['Physics-Informed NNs', 'Time-Series Transformers', 'SCADA Integrations', 'Battery Optimization'],
    badge: 'Utility Scale',
  },
];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudies = caseStudiesData.filter((study) => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            Proven Performance
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-6">
            Case studies and measured enterprise impact.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Explore how global banks, hospital networks, and energy operators deploy Doxantro to eliminate latency, automate decisions, and guarantee data privacy.
          </p>

          {/* Search Bar & Filter Pills */}
          <div className="max-w-xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by industry, technology, or challenge..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200/70'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Case Studies List */}
      <section className="py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <AnimatePresence>
              {filteredStudies.map((study) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-black/[0.09] bg-white p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: Narrative (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium">
                            {study.industry}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {study.badge}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111111] mb-2">
                          {study.title}
                        </h2>
                        <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono mb-6 pb-4 border-b border-black/[0.06]">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                            {study.client}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-zinc-400" />
                            {study.duration}
                          </span>
                        </div>

                        <div className="space-y-3.5 text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                          <div>
                            <span className="font-semibold text-zinc-900 font-mono text-xs uppercase block mb-1">
                              Challenge
                            </span>
                            <p>{study.challenge}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-zinc-900 font-mono text-xs uppercase block mb-1">
                              Engineered Solution
                            </span>
                            <p>{study.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06]">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-zinc-50 border border-black/[0.06] text-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Quantified Results Grid (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div className="rounded-2xl border border-black/[0.08] bg-[#fcfbf9] p-6">
                        <div className="font-mono text-[10px] uppercase text-zinc-400 font-semibold tracking-wider mb-4 pb-2 border-b border-black/[0.06]">
                          Quantified Results
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((res) => (
                            <div key={res.label} className="flex flex-col">
                              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mb-0.5">
                                {res.metric}
                              </span>
                              <span className="text-[11px] text-zinc-600 font-medium">
                                {res.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Dark CTA Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-10 sm:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Achieve measurable AI ROI in your organization.
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8">
              Let&apos;s evaluate your workflows, benchmark model performance, and deploy custom intelligence pipelines with guaranteed latency SLAs.
            </p>
            <Button href="/contact" size="lg" variant="inverted" icon={<ArrowRight className="w-4 h-4" />}>
              Request Technical Evaluation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
