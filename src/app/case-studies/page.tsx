'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Sparkles,
  TrendingUp,
  Building2,
  Clock,
  Layers,
  Cpu,
} from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GlowCard from '../../components/ui/GlowCard';
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
      { metric: '87%', label: 'Drop in False Positive Declines' },
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
      { metric: '85%', label: 'Triage Accuracy Improvement' },
      { metric: '60%', label: 'Faster Emergency Scan Reads' },
      { metric: '99.4%', label: 'Anomaly Detection AUC' },
      { metric: '24/7', label: 'Zero-Downtime Autonomous Triage' },
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
      { metric: '+30%', label: 'Average Crop Yield Increase' },
      { metric: '-40%', label: 'Irrigation Water Usage Saved' },
      { metric: '-25%', label: 'Fertilizer Cost Optimization' },
      { metric: '12k', label: 'Acres Indexed Daily per Node' },
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
      { metric: '100%', label: 'Real-Time Global Visibility' },
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
      { metric: '<1s', label: 'Autonomous Incident Containment' },
      { metric: '99.99%', label: 'Malicious Threat Neutralization' },
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
      { metric: '+25%', label: 'Grid Energy Efficiency Gain' },
      { metric: '-38%', label: 'Peak-Load Surges Mitigated' },
      { metric: '+45%', label: 'Renewable Storage Utilization' },
      { metric: '99.98%', label: 'Grid Stability Index' },
    ],
    technologies: ['Time-Series Load Forecasting', 'Battery Storage Optimization', 'Smart Grid SCADA Integration', 'Predictive Asset Maintenance'],
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
                Verified Enterprise Impact
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              Proven Results in{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Mission-Critical Environments
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Explore how leading institutions, Fortune 500 enterprises, and healthcare providers deploy Doxantro Systems to eliminate operational risk and unlock compounding ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Bar */}
      <section className="py-12 bg-zinc-50/60 border-b border-zinc-200/60 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                      : 'bg-white border border-zinc-200/80 text-zinc-700 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies & tech..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-zinc-200/80 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 placeholder-zinc-400 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-zinc-50 rounded-3xl border border-zinc-200"
              >
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1">No case studies found</h3>
                <p className="text-sm text-zinc-600">Try adjusting your search query or industry filter.</p>
              </motion.div>
            ) : (
              <div className="space-y-12">
                {filteredStudies.map((study, idx) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                  >
                    <GlowCard className="p-8 sm:p-10 bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-orange-400/60 transition-all">
                      <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Left Info & Story (7 cols) */}
                        <div className="lg:col-span-7 space-y-6">
                          <div className="flex flex-wrap items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                              <SolutionIcon name={study.iconName} className="w-5 h-5" />
                            </div>
                            <Badge variant="orange" size="sm">{study.industry}</Badge>
                            <Badge variant="slate" size="sm">{study.badge}</Badge>
                            <div className="text-xs text-zinc-600 flex items-center gap-1 ml-auto">
                              <Clock className="w-3.5 h-3.5 text-zinc-600" />
                              <span>{study.duration} Deployment</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                              {study.title}
                            </h3>
                            <div className="text-sm font-semibold text-orange-600">
                              Client: {study.client}
                            </div>
                          </div>

                          <div className="space-y-3 text-sm text-zinc-600">
                            <div>
                              <span className="font-bold text-zinc-900 block mb-1">The Operational Challenge:</span>
                              <p className="leading-relaxed">{study.challenge}</p>
                            </div>
                            <div>
                              <span className="font-bold text-zinc-900 block mb-1">The Doxantro Solution:</span>
                              <p className="leading-relaxed">{study.solution}</p>
                            </div>
                          </div>

                          {/* Tech Stack Tags */}
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 block mb-2">
                              Technologies Deployed:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {study.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Results Matrix (5 cols) */}
                        <div className="lg:col-span-5 bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600/20 rounded-full blur-2xl pointer-events-none" />
                          <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-6 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            <span>Quantified Business Results</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {study.results.map((res, rIdx) => (
                              <div key={rIdx} className="bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800">
                                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400 mb-1">
                                  {res.metric}
                                </div>
                                <div className="text-xs text-zinc-300 leading-tight">
                                  {res.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 hover:bg-orange-600 text-xs font-semibold transition-all group"
                          >
                            <span>Request Similar Architecture Blueprint</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="orange" dot pulse size="md" className="mb-4">
            Custom Enterprise Deployment
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Have a Specific High-Stakes Use Case?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let’s discuss your technical parameters, performance benchmarks, and deployment timeline under standard non-disclosure terms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Start an Architectural Pilot
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
