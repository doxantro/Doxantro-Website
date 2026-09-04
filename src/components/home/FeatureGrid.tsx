'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Lock,
  Database,
  RefreshCw,
  FileCheck2,
  Terminal,
} from 'lucide-react';

const features = [
  {
    title: 'Dynamic Model Routing',
    description:
      'Intelligently evaluate and dispatch prompts by latency, accuracy, and token budget with sub-millisecond overhead.',
    icon: Cpu,
  },
  {
    title: 'Domain Foundation Weights',
    description:
      'Pre-calibrated models for Finance, Healthcare, Supply Chain, and Energy with deep specialized terminology understanding.',
    icon: Layers,
  },
  {
    title: 'Zero-Trust Guardrails',
    description:
      'Real-time stream-level PII/PHI redaction and strict JSON schema validation to eliminate hallucinations.',
    icon: ShieldCheck,
  },
  {
    title: 'Sub-20ms Edge Delivery',
    description:
      'Tensor compilation, kernel optimization, and semantic edge caching to deliver blistering response times.',
    icon: Zap,
  },
  {
    title: 'Air-Gapped VPC Nodes',
    description:
      'Deploy directly inside your AWS, Azure, GCP, or on-premises Kubernetes clusters with zero external data leakage.',
    icon: Lock,
  },
  {
    title: 'Automated RAG Pipelines',
    description:
      'High-dimensional hybrid vector indexing with automated chunking, reranking, and enterprise data connectors.',
    icon: Database,
  },
  {
    title: 'Deterministic Fallback',
    description:
      'Automatic instant failover to local standby weights if upstream provider latency breaches configured thresholds.',
    icon: RefreshCw,
  },
  {
    title: 'Audit & Compliance Logs',
    description:
      'Immutable cryptographic audit trails, token lineage tracing, and automated SOC-2/HIPAA compliance reports.',
    icon: FileCheck2,
  },
  {
    title: 'Developer SDKs & APIs',
    description:
      'Fully typed SDKs for Node.js, Python, and Go, plus standard REST APIs and streaming webhooks.',
    icon: Terminal,
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
            Everything in one platform
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold tracking-[-0.025em] text-[#111111] leading-tight mb-4">
            Stop paying the fragmented AI stack tax.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
            One unified platform for fine-tuning, dynamic model routing, zero-trust guardrails, and private VPC deployment. Replace four disconnected vendor platforms with one clean integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="flex flex-col"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-zinc-800 mb-3.5 flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-[#111111] tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
