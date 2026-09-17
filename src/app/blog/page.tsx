'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Calendar,
  Search,
  Sparkles,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import SolutionIcon from '../../components/ui/SolutionIcon';

const categories = ['All', 'Engineering', 'Finance', 'Healthcare', 'Agriculture', 'Supply Chain', 'Security', 'Energy'];

const featuredArticle = {
  id: 'domain-models-vs-rag-benchmarks',
  title: 'Benchmarking Domain-Tuned Models vs. Generic RAG in Enterprise Workflows',
  excerpt: 'A practical look at throughput, memory quantization, and accuracy tradeoffs when deploying dedicated models for high-velocity transaction and imaging workloads.',
  author: 'Doxantro Technologies Engineering',
  role: 'Systems & ML Infrastructure Group',
  date: 'August 2024',
  readTime: '7 min read',
  category: 'Engineering',
  iconName: 'Cpu',
  tags: ['Benchmarking', 'Quantization', 'Inference Latency', 'Architecture'],
  benchmarks: [
    { label: 'P99 Latency', value: '5.8ms', note: 'vs. 320ms cloud LLM' },
    { label: 'Domain Accuracy', value: '99.8%', note: 'Zero hallucination margin' },
    { label: 'VRAM Usage', value: '3.8 GB', note: '4-bit AWQ quantized' },
  ],
};

const blogPostsData = [
  {
    id: 'realtime-fraud-graphs',
    title: 'Building Low-Latency Graph Neural Networks for Real-Time Fraud Interception',
    excerpt: 'How sub-6ms behavioral graph traversal flags synthetic identity fraud at 18,000+ operations per second while drastically lowering false positives.',
    author: 'Doxantro Fintech Team',
    role: 'Financial Systems Group',
    date: 'August 22, 2024',
    readTime: '8 min read',
    category: 'Finance',
    iconName: 'BadgeDollarSign',
    tags: ['Graph AI', 'Fintech', 'Real-Time Streaming'],
  },
  {
    id: 'dicom-vision-transformers',
    title: 'Optimizing Vision Transformers for Multi-Slice Medical Imaging Triage',
    excerpt: 'Resolving resolution constraints and memory bottlenecks in automated CT and MRI anomaly detection within emergency radiology pipelines.',
    author: 'Doxantro Health Team',
    role: 'Medical Informatics Group',
    date: 'August 18, 2024',
    readTime: '10 min read',
    category: 'Healthcare',
    iconName: 'Activity',
    tags: ['Medical AI', 'Vision Transformers', 'HIPAA'],
  },
  {
    id: 'multispectral-ndvi-agriculture',
    title: 'Processing Satellite & Drone Multispectral Telemetry for Crop Yield Estimation',
    excerpt: 'Combining orbital multispectral telemetry with ground IoT soil moisture data to predict harvest yields and automate micro-fertilization.',
    author: 'Doxantro Agri Team',
    role: 'Agronomic Systems Group',
    date: 'August 14, 2024',
    readTime: '9 min read',
    category: 'Agriculture',
    iconName: 'Sprout',
    tags: ['Satellite Analytics', 'NDVI', 'Sensor Fusion'],
  },
  {
    id: 'supply-chain-dynamic-heuristics',
    title: 'Dynamic Freight Routing Under Global Supply Chain Disruptions: A Heuristic Approach',
    excerpt: 'Applying reinforcement learning to dynamic freight routing, port bottleneck mitigation, and dead-stock inventory penalties.',
    author: 'Doxantro Logistics Team',
    role: 'Operations Research Group',
    date: 'August 10, 2024',
    readTime: '8 min read',
    category: 'Supply Chain',
    iconName: 'Boxes',
    tags: ['Supply Chain', 'Route Heuristics', 'Logistics'],
  },
  {
    id: 'zero-trust-anomaly-ebpf',
    title: 'Kernel-Level Anomaly Detection Using eBPF in Enterprise Linux Clusters',
    excerpt: 'Detecting stealthy lateral memory movements and credential harvesting in sovereign cloud enclaves within sub-second thresholds.',
    author: 'Doxantro Security Team',
    role: 'Cyber Defense Group',
    date: 'August 06, 2024',
    readTime: '9 min read',
    category: 'Security',
    iconName: 'ShieldAlert',
    tags: ['Zero-Trust', 'eBPF Kernel', 'Cyber Defense'],
  },
  {
    id: 'smart-grid-load-balancing',
    title: 'Time-Series Forecasting for Autonomous Battery Dispatch on Renewable Grids',
    excerpt: 'How continuous time-series transformers mitigate peak surges and harmonize intermittent solar/wind generation on modern power grids.',
    author: 'Doxantro Energy Team',
    role: 'Power Systems Group',
    date: 'August 02, 2024',
    readTime: '10 min read',
    category: 'Energy',
    iconName: 'Zap',
    tags: ['Smart Grid', 'Clean Energy', 'Time-Series AI'],
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-20 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-3.5">
              <span className="subheading">
                Technical Insights & Engineering Notes
              </span>
            </div>

            <h1 className="display-1 mb-4 sm:mb-5">
              Engineering Notes on Applied AI Systems
            </h1>

            <p className="body-lg max-w-2xl mx-auto text-zinc-600">
              Architectural deep-dives, production latency benchmarks, and implementation notes from the Doxantro Technologies engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Engineering Deep-Dive */}
      <section className="py-10 sm:py-12 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Featured Technical Breakdown</span>
          </div>

          <div className="rounded-2xl bg-[#0d0d10] p-5 sm:p-7 md:p-8 text-white border border-white/[0.08] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Article Metadata & Synopsis */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-zinc-300 bg-white/[0.08] px-2 py-0.5 rounded">
                    {featuredArticle.category}
                  </span>
                  <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-t border-white/[0.06]">
                  <div>
                    <div className="text-xs font-semibold text-white">{featuredArticle.author}</div>
                    <div className="text-[10px] text-zinc-400 font-mono">{featuredArticle.role}</div>
                  </div>

                  <Link
                    href="/contact?subject=Technical%20Briefing%20Request"
                    className="text-xs font-medium text-orange-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Read Full Note</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Grounded Engineering Benchmark Preview */}
              <div className="lg:col-span-5 bg-[#141418] rounded-xl p-4 sm:p-5 border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono pb-2 border-b border-white/[0.06]">
                  <span className="text-zinc-300 font-medium">BENCHMARK SUMMARY</span>
                  <span className="text-zinc-500">Enterprise Mesh</span>
                </div>

                <div className="space-y-2">
                  {featuredArticle.benchmarks.map((bm, bIdx) => (
                    <div key={bIdx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                      <div>
                        <div className="text-xs text-zinc-300">{bm.label}</div>
                        <div className="text-[10px] text-zinc-500 font-mono">{bm.note}</div>
                      </div>
                      <div className="text-sm sm:text-base font-bold font-mono text-emerald-400 tabular-nums">
                        {bm.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-[10px] font-mono text-zinc-500">
                  Measured on 64-node TPU cluster under 25,000 req/sec.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter & Search Bar */}
      <section className="py-4 sm:py-6 bg-[#fafafa] border-b border-black/[0.06] sticky top-14 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'bg-white border border-black/[0.08] text-zinc-600 hover:text-[#111111] hover:border-black/[0.15]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & topics..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-black/[0.08] rounded-full focus:outline-none focus:border-black text-zinc-900 placeholder-zinc-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Article Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-zinc-900 mb-1">No articles match your query</h3>
                <p className="text-xs text-zinc-500">Try adjusting your keywords or category filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {filteredPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                  >
                    <div className="card-minimal p-5 sm:p-6 h-full flex flex-col justify-between group">
                      <div>
                        {/* Top bar with category & read time */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-7 h-7 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-[#111111] group-hover:text-white transition-colors flex-shrink-0">
                            <SolutionIcon name={post.iconName} className="w-3.5 h-3.5" />
                          </div>
                          <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/[0.04] mt-auto flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-zinc-900 text-xs">{post.author}</div>
                          <div className="text-[10px] font-mono text-zinc-400">{post.date}</div>
                        </div>

                        <Link
                          href="/contact?subject=Engineering%20Discussion"
                          className="text-xs font-medium text-zinc-900 hover:text-orange-600 inline-flex items-center gap-1"
                        >
                          <span>Read Note</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Bottom Briefing Newsletter CTA */}
      <section className="py-16 md:py-24 bg-[#0c0c0e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 block">
            ■ AI EXECUTIVE BRIEFING
          </span>

          <h2 className="display-2 text-white mb-4">
            Get Technical AI Breakdowns in Your Inbox
          </h2>

          <p className="body-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Join 10,000+ AI engineers and technology leaders who receive our bi-weekly architecture teardowns and benchmark analyses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button
              href="/contact"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-100 font-semibold"
            >
              Subscribe to Briefings
            </Button>
            <Button href="/services" size="lg" variant="outline-white" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
