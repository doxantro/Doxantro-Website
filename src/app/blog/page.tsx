'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Calendar,
  Search,
} from 'lucide-react';
import Button from '../../components/ui/Button';

const categories = ['All', 'Engineering', 'Finance', 'Healthcare', 'Agriculture', 'Supply Chain', 'Security', 'Energy'];

const featuredArticle = {
  id: 'domain-models-vs-rag-benchmarks',
  title: 'Benchmarking Domain-Tuned Models vs. Generic RAG in Enterprise Workflows',
  excerpt: 'An empirical analysis of throughput, kernel quantization, and accuracy trade-offs when deploying dedicated models for high-velocity transaction and imaging workloads.',
  author: 'Doxantro Systems Engineering',
  date: 'August 2024',
  readTime: '7 min read',
  category: 'Engineering',
  tags: ['Benchmarking', 'Quantization', 'Inference Latency', 'Architecture'],
  benchmarks: [
    { label: 'P99 Latency', value: '5.8ms', note: 'vs. 320ms cloud LLM' },
    { label: 'Domain Accuracy', value: '99.94%', note: 'Zero hallucination margin' },
    { label: 'VRAM Footprint', value: '3.8 GB', note: '4-bit AWQ quantized' },
  ],
};

const blogPostsData = [
  {
    id: 'realtime-fraud-graphs',
    title: 'Building Low-Latency Graph Neural Networks for Real-Time Fraud Interception',
    excerpt: 'How sub-6ms behavioral graph traversal flags synthetic identity fraud at 18,000+ operations per second while reducing false positive declines.',
    author: 'Doxantro Quantitative Systems Group',
    date: 'August 22, 2024',
    readTime: '8 min read',
    category: 'Finance',
    tags: ['Graph AI', 'Fintech', 'Real-Time Streaming'],
  },
  {
    id: 'dicom-vision-transformers',
    title: 'Optimizing Vision Transformers for Multi-Slice Medical Imaging Triage',
    excerpt: 'Resolving resolution constraints and memory bottlenecks in automated CT and MRI anomaly pre-segmentation within emergency radiology pipelines.',
    author: 'Clinical Systems Research Lab',
    date: 'August 15, 2024',
    readTime: '6 min read',
    category: 'Healthcare',
    tags: ['Vision Transformers', 'DICOM', 'Medical AI'],
  },
  {
    id: 'satellite-ndvi-yield',
    title: 'Multi-Spectral Satellite Time-Series for 14-Day Predictive Crop Stress Warning',
    excerpt: 'Combining Sentinel-2 imagery with local soil microclimate sensor streams to detect vegetation stress before visible canopy degradation.',
    author: 'Agritech Solutions Division',
    date: 'August 8, 2024',
    readTime: '7 min read',
    category: 'Agriculture',
    tags: ['Satellite Remote Sensing', 'RNNs', 'Precision Yield'],
  },
  {
    id: 'reinforcement-learning-freight',
    title: 'Multi-Agent Reinforcement Learning for Dynamic Port Bottleneck Routing',
    excerpt: 'How distributed multi-agent RL dynamically balances container throughput and prevents port demurrage penalties under weather anomalies.',
    author: 'Global Logistics Operations Team',
    date: 'July 30, 2024',
    readTime: '9 min read',
    category: 'Supply Chain',
    tags: ['Multi-Agent RL', 'Freight Optimization', 'Simulation'],
  },
  {
    id: 'ebpf-soc-threat-isolation',
    title: 'Leveraging eBPF Kernel Telemetry with Local LLMs for Automated Zero-Day Isolation',
    excerpt: 'A blueprint for air-gapped security telemetry correlation, eliminating 96% of SOC alert noise without streaming sensitive payloads off-premise.',
    author: 'Cyber Defense Architecture Group',
    date: 'July 18, 2024',
    readTime: '10 min read',
    category: 'Security',
    tags: ['eBPF', 'Air-Gapped SOC', 'Zero-Day Response'],
  },
  {
    id: 'physics-informed-grid-dispatch',
    title: 'Physics-Informed Neural Networks for High-Intermittency Clean Energy Balancing',
    excerpt: 'Preventing grid instability by coupling differential equation physical constraints with sub-hourly renewable power forecasting models.',
    author: 'Grid & Energy Transition Team',
    date: 'July 5, 2024',
    readTime: '8 min read',
    category: 'Energy',
    tags: ['PINNs', 'Grid Stability', 'Battery Dispatch'],
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            Research & Engineering Papers
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-6">
            Technical papers and systems benchmarks.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Deep dives on low-latency neural architectures, kernel quantization, stream-level guardrails, and real-world enterprise deployments.
          </p>

          {/* Search & Category Filter */}
          <div className="max-w-xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search technical papers, algorithms, or benchmarks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Engineering Paper */}
      <section className="py-16 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/[0.09] bg-white p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-800 font-semibold border border-orange-200">
                Featured Paper
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                {featuredArticle.readTime}
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111] mb-3">
                  {featuredArticle.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-6">
                  <span>{featuredArticle.author}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {featuredArticle.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benchmarks Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-black/[0.08] bg-[#fcfbf9] p-6 font-mono text-xs">
                  <div className="text-[10px] uppercase text-zinc-400 font-semibold mb-4 pb-2 border-b border-black/[0.06]">
                    Measured Benchmarks
                  </div>
                  <div className="space-y-3">
                    {featuredArticle.benchmarks.map((b) => (
                      <div key={b.label} className="flex justify-between items-baseline">
                        <div>
                          <div className="text-zinc-600">{b.label}</div>
                          <div className="text-[10px] text-zinc-400">{b.note}</div>
                        </div>
                        <span className="font-bold text-base text-[#111111]">{b.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Paper Grid */}
      <section className="py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-black/[0.08] bg-[#fcfbf9] p-6 flex flex-col justify-between hover:bg-white hover:border-black/20 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-3">
                      <span className="uppercase px-2 py-0.5 rounded bg-white border border-black/[0.06] text-zinc-700 font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-semibold text-base text-[#111111] tracking-tight mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-4 border-t border-black/[0.06]">
                      <span className="truncate max-w-[160px]">{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Dark CTA Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-10 sm:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Collaborate on AI research with Doxantro.
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8">
              We partner with enterprise engineering groups and academic labs on domain benchmarking, inference compilation, and safety evaluation.
            </p>
            <Button href="/contact" size="lg" variant="inverted" icon={<ArrowRight className="w-4 h-4" />}>
              Connect with Research Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
