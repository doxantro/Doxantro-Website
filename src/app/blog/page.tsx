'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Calendar,
  Search,
  BookOpen,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GlowCard from '../../components/ui/GlowCard';
import SectionHeader from '../../components/ui/SectionHeader';
import SolutionIcon from '../../components/ui/SolutionIcon';

const categories = ['All', 'Engineering', 'Finance', 'Healthcare', 'Agriculture', 'Supply Chain', 'Security', 'Energy'];

const featuredArticle = {
  id: 'domain-models-vs-rag-benchmarks',
  title: 'Benchmarking Domain-Tuned Models vs. Generic RAG in Enterprise Workflows',
  excerpt: 'A practical look at throughput, memory quantization, and accuracy tradeoffs when deploying dedicated models for high-velocity transaction and imaging workloads.',
  author: 'Doxantro Systems Engineering',
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
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-white border-b border-zinc-200/60">
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
                Technical Insights & Engineering Notes
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              Engineering Notes on{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Applied AI Systems
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
              Architectural deep-dives, production latency benchmarks, and implementation notes from the Doxantro Systems engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Engineering Deep-Dive */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Featured Technical Breakdown</span>
          </div>

          <GlowCard className="p-8 sm:p-10 bg-zinc-950 text-white border-zinc-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Article Metadata & Synopsis */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="orange" size="sm">{featuredArticle.category}</Badge>
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center text-xs">
                      DX
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{featuredArticle.author}</div>
                      <div className="text-[11px] text-zinc-400">{featuredArticle.role}</div>
                    </div>
                  </div>

                  <Link
                    href="/contact?subject=Technical%20Briefing%20Request"
                    className="text-xs font-semibold text-orange-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Note</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Grounded Engineering Benchmark Preview */}
              <div className="lg:col-span-5 bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-zinc-800">
                  <span className="text-orange-400 font-bold">PRODUCTION BENCHMARK SUMMARY</span>
                  <span className="text-zinc-500">v3.4 Inference</span>
                </div>

                <div className="space-y-3">
                  {featuredArticle.benchmarks.map((bm, bIdx) => (
                    <div key={bIdx} className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-zinc-400 font-medium">{bm.label}</div>
                        <div className="text-[11px] text-zinc-500">{bm.note}</div>
                      </div>
                      <div className="text-lg font-bold font-mono text-emerald-400">
                        {bm.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-1 text-[11px] text-zinc-400 leading-tight">
                  Measured across a 64-node distributed TPU cluster under 25,000 concurrent requests/sec.
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* 3. Category Filter & Search Bar */}
      <section className="py-8 bg-zinc-50/70 border-y border-zinc-200/60 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                      : 'bg-white border border-zinc-200/80 text-zinc-700 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, tags, topics..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-zinc-200/80 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 placeholder-zinc-400 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Article Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-zinc-50 rounded-3xl border border-zinc-200"
              >
                <div className="text-4xl mb-3">📄</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1">No articles match your query</h3>
                <p className="text-sm text-zinc-600">Try adjusting your keywords or category filter.</p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                  >
                    <GlowCard className="p-8 h-full flex flex-col justify-between group">
                      <div>
                        {/* Top bar with category & read time */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <SolutionIcon name={post.iconName} className="w-5 h-5" />
                          </div>
                          <div className="text-xs text-zinc-600 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors mb-3 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {post.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 mt-auto flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-zinc-900">{post.author}</div>
                          <div className="text-[10px] text-zinc-600">{post.date}</div>
                        </div>

                        <Link
                          href="/contact?subject=Engineering%20Discussion"
                          className="text-xs font-semibold text-orange-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                          <span>Read Note</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Bottom Briefing Newsletter CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="orange" dot pulse size="md" className="mb-4">
            AI Executive Briefing
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get Technical AI Breakdowns in Your Inbox
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ AI engineers and technology leaders who receive our bi-weekly architecture teardowns and benchmark analyses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Subscribe to Briefings
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="glass-dark"
              className="w-full sm:w-auto text-white font-semibold"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
