'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Clock,
  Sparkles,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';
import SolutionIcon from '../../components/ui/SolutionIcon';

const industries = ['All', 'Finance', 'Healthcare', 'Agriculture', 'Supply Chain', 'Security', 'Energy'];

const caseStudiesData = [
  {
    id: 'finance-fraud',
    title: 'Adaptive Real-Time Fraud Interception Mesh',
    client: 'Tier-1 Multinational Commercial Bank',
    industry: 'Finance',
    duration: '6 months',
    challenge: 'The institution faced an influx of sophisticated synthetic identity and velocity fraud that bypassed legacy rule engines, resulting in rising chargebacks and high false positives.',
    solution: 'Doxantro engineered an end-to-end graph neural network and behavioral anomaly engine analyzing 18,000+ ops/sec with real-time risk scoring in under 6 milliseconds.',
    results: [
      { metric: '90%', label: 'Reduction in Fraud Losses' },
      { metric: '99.9%', label: 'Detection Accuracy' },
      { metric: '87%', label: 'Drop in False Positives' },
      { metric: '<6ms', label: 'Inference SLA at Scale' },
    ],
    technologies: ['Graph Neural Networks', 'Real-Time Streaming APIs', 'Behavioral Fingerprinting', 'SOC-2 Private Vaults'],
    iconName: 'BadgeDollarSign',
    badge: 'Fintech Tier 1',
  },
  {
    id: 'healthcare-diagnostics',
    title: 'Clinical AI Diagnostic & DICOM Triage Assistant',
    client: 'Regional University Hospital Network (42 Centers)',
    industry: 'Healthcare',
    duration: '8 months',
    challenge: 'Radiology departments experienced massive imaging backlogs and diagnostic fatigue, causing prolonged triage wait times for emergency CT and MRI scans.',
    solution: 'Developed a HIPAA-compliant computer vision diagnostic pipeline that pre-segments abnormalities, computes confidence heatmaps, and flags high-urgency scans to doctors instantly.',
    results: [
      { metric: '85%', label: 'Triage Accuracy Boost' },
      { metric: '60%', label: 'Faster Emergency Scan Reads' },
      { metric: '99.4%', label: 'Anomaly Detection AUC' },
      { metric: '24/7', label: 'Zero-Downtime Triage' },
    ],
    technologies: ['Vision Transformers', 'DICOM Image Segmentation', 'HIPAA Secure Pipeline', 'Edge TPU Acceleration'],
    iconName: 'Activity',
    badge: 'Clinical Grade',
  },
  {
    id: 'agriculture-yield',
    title: 'Precision Agricultural Multispectral Yield Engine',
    client: 'Agricultural Farming Cooperative (85,000 Acres)',
    industry: 'Agriculture',
    duration: '12 months',
    challenge: 'Unpredictable weather microclimates and pest blights caused yield variance and excessive fertilizer expenditure across extensive arable land.',
    solution: 'Implemented satellite NDVI indexing, drone multispectral imagery processing, and soil IoT sensor aggregation to generate daily micro-precision resource recommendations.',
    results: [
      { metric: '+30%', label: 'Crop Yield Increase' },
      { metric: '-40%', label: 'Water Usage Saved' },
      { metric: '-25%', label: 'Fertilizer Cost Reduction' },
      { metric: '12k', label: 'Acres Indexed Daily' },
    ],
    technologies: ['Satellite NDVI Analytics', 'Drone Multispectral Vision', 'IoT Sensor Fusion', 'Yield Prediction Models'],
    iconName: 'Sprout',
    badge: 'Eco-Precision',
  },
  {
    id: 'supply-chain-routing',
    title: 'Multi-Echelon Dynamic Supply Chain & Route Optimization',
    client: 'Global Logistics & Manufacturing Enterprise',
    industry: 'Supply Chain',
    duration: '10 months',
    challenge: 'Supply bottlenecks, fluctuating fuel tariffs, and unpredictable demand spikes led to substantial inventory holding penalties and delivery delays.',
    solution: 'Created an intelligent routing and inventory forecasting suite that dynamically recalculates transport vectors in real-time based on weather, port congestion, and demand signals.',
    results: [
      { metric: '-35%', label: 'Logistics Operating Cost' },
      { metric: '+50%', label: 'On-Time Freight Deliveries' },
      { metric: '-45%', label: 'Dead-Inventory Waste' },
      { metric: '100%', label: 'Real-Time Visibility' },
    ],
    technologies: ['Dynamic Route Heuristics', 'Multi-Echelon Demand Forecasting', 'Live Telemetry Ingestion', 'ERP Integrations'],
    iconName: 'Boxes',
    badge: 'Global Supply',
  },
  {
    id: 'security-threat',
    title: 'Autonomous Zero-Trust Threat Intelligence & Defend Mesh',
    client: 'Critical Infrastructure & Government Defense Agency',
    industry: 'Security',
    duration: '9 months',
    challenge: 'Nation-state cyber threats and zero-day memory exploits were evading conventional rule-based SIEM systems, demanding millisecond automated isolation.',
    solution: 'Deployed an autonomous neural network that continuously monitors packet payloads, user authorization graphs, and system process anomalies with automated quarantine triggers.',
    results: [
      { metric: '<1s', label: 'Incident Containment' },
      { metric: '99.99%', label: 'Threat Neutralization' },
      { metric: '-92%', label: 'SecOps Alert Fatigue' },
      { metric: 'Zero', label: 'Data Exfiltration Breaches' },
    ],
    technologies: ['Zero-Trust Behavioral AI', 'eBPF Kernel Anomaly Sensing', 'Air-Gapped Enclaves', 'Automated Containment'],
    iconName: 'ShieldAlert',
    badge: 'National Defense',
  },
  {
    id: 'energy-smart-grid',
    title: 'Smart Grid Autonomous Load Balancing & Renewable Optimizer',
    client: 'National Power Grid & Clean Energy Provider',
    industry: 'Energy',
    duration: '11 months',
    challenge: 'Integrating intermittent solar and wind generation created severe grid instability, peak-load surges, and costly reliance on legacy fossil peaker plants.',
    solution: 'Implemented predictive machine learning models that forecast renewable generation 48 hours ahead and autonomously orchestrate battery storage and load distribution.',
    results: [
      { metric: '+25%', label: 'Grid Efficiency Gain' },
      { metric: '-38%', label: 'Peak-Load Surges Mitigated' },
      { metric: '+45%', label: 'Storage Utilization' },
      { metric: '99.98%', label: 'Grid Stability Index' },
    ],
    technologies: ['Time-Series Load Forecasting', 'Battery Storage Optimization', 'Smart Grid SCADA Integration', 'Predictive Maintenance'],
    iconName: 'Zap',
    badge: 'Clean Energy',
  },
];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudies = caseStudiesData.filter((study) => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry.toLowerCase() === selectedIndustry.toLowerCase();
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-3.5">
              <span className="subheading">
                Verified Production Case Studies
              </span>
            </div>

            <h1 className="display-1 mb-5">
              Proven Results in Mission-Critical Environments
            </h1>

            <p className="body-lg max-w-2xl mx-auto text-zinc-600">
              Explore how leading institutions, Fortune 500 enterprises, and healthcare networks deploy Doxantro Systems to eliminate operational risk and unlock compounding ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Bar */}
      <section className="py-6 bg-[#fafafa] border-b border-black/[0.06] sticky top-14 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-[#111111] text-white'
                      : 'bg-white border border-black/[0.08] text-zinc-600 hover:text-[#111111] hover:border-black/[0.15]'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-black/[0.08] rounded-full focus:outline-none focus:border-black text-zinc-900 placeholder-zinc-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Case Studies Grid */}
      <section className="py-16 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.length === 0 ? (
              <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-zinc-900 mb-1">No case studies found</h3>
                <p className="text-xs text-zinc-500">Try adjusting your search query or industry filter.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredStudies.map((study, idx) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                  >
                    <div className="card-minimal p-6 sm:p-8">
                      <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Left Info & Story (7 cols) */}
                        <div className="lg:col-span-7 space-y-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <div className="w-7 h-7 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-900">
                              <SolutionIcon name={study.iconName} className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[10px] font-mono text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                              {study.industry}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 border border-black/[0.06] px-2 py-0.5 rounded">
                              {study.badge}
                            </span>
                            <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1 ml-auto">
                              <Clock className="w-3 h-3 text-zinc-400" />
                              <span>{study.duration}</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-1">
                              {study.title}
                            </h3>
                            <div className="text-xs font-mono text-zinc-500">
                              Client: {study.client}
                            </div>
                          </div>

                          <div className="space-y-2 text-xs text-zinc-600 leading-relaxed">
                            <div>
                              <span className="font-semibold text-zinc-900 block mb-0.5">Challenge:</span>
                              <p>{study.challenge}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-zinc-900 block mb-0.5">Solution:</span>
                              <p>{study.solution}</p>
                            </div>
                          </div>

                          {/* Tech Stack Tags */}
                          <div>
                            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                              Technologies:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {study.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-black/[0.04]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Results Matrix (5 cols) */}
                        <div className="lg:col-span-5 bg-[#0f0f12] text-white rounded-xl p-5 sm:p-6 border border-white/[0.08] shadow-sm">
                          <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-4 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                            <span>Quantified Business Results</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5 mb-5">
                            {study.results.map((res, rIdx) => (
                              <div key={rIdx} className="bg-white/[0.04] rounded-lg p-3 border border-white/[0.06]">
                                <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100 tabular-nums mb-0.5">
                                  {res.metric}
                                </div>
                                <div className="text-[11px] text-zinc-400 leading-tight">
                                  {res.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-between w-full p-2.5 rounded-lg bg-white/[0.06] border border-white/[0.1] hover:bg-white hover:text-black text-xs font-medium transition-all group"
                          >
                            <span>Request Architecture Blueprint</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 md:py-24 bg-[#0c0c0e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 block">
            ■ CUSTOM PILOT INITIATIVE
          </span>

          <h2 className="display-2 text-white mb-4">
            Have a Specific High-Stakes Use Case?
          </h2>

          <p className="body-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Let’s discuss your technical parameters, performance benchmarks, and deployment timeline under standard non-disclosure terms.
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center">
            <Button href="/contact" size="lg" variant="primary">
              Start an Architectural Pilot
            </Button>
            <Button href="/services" size="lg" variant="outline-white">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
