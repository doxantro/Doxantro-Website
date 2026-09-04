'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck, Cpu, Database, Activity, Lock } from 'lucide-react';
import Link from 'next/link';

export default function ProductDeepDives() {
  const [activeRoute, setActiveRoute] = useState<'cost' | 'latency' | 'accuracy'>('latency');

  return (
    <div className="bg-white">
      {/* Block 1: Model Routing Matrix */}
      <section className="py-24 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight mb-4">
                One unified router for every model, everywhere
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                Proprietary enterprise models, private fine-tunes, or public foundation LLMs — Doxantro automatically evaluates each incoming prompt and dispatches to the optimal engine based on your latency and cost constraints.
              </p>
              <div className="border-l-2 border-zinc-200 pl-4 py-1 mb-6">
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  <strong className="font-semibold text-black">Deterministic Fallback:</strong> If a primary model fails or breaches a 25ms SLA, traffic re-routes instantaneously to your local standby cluster without dropped requests.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#111111] hover:text-black transition-colors"
              >
                Explore routing engine <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Right: UI Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl border border-black/[0.1] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden font-sans">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06]">
                  <div>
                    <div className="font-semibold text-sm text-[#111111]">Model Routing Policy</div>
                    <div className="text-[11px] text-zinc-500 font-mono">Cluster #us-east-prod-01</div>
                  </div>
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-100 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveRoute('latency')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${
                        activeRoute === 'latency' ? 'bg-white text-black font-semibold shadow-xs' : 'text-zinc-600'
                      }`}
                    >
                      P99 Latency
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveRoute('cost')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${
                        activeRoute === 'cost' ? 'bg-white text-black font-semibold shadow-xs' : 'text-zinc-600'
                      }`}
                    >
                      Lowest Cost
                    </button>
                  </div>
                </div>

                {/* Model Rows */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-black/10 bg-zinc-50/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div>
                        <div className="font-sans font-semibold text-xs text-zinc-900">doxantro-quant-70b</div>
                        <div className="text-[10px] text-zinc-500">Private VPC Weights · Active</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-zinc-900">12.4ms</div>
                      <div className="text-[10px] text-emerald-600 font-sans">99.9% Route Match</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl border border-black/[0.06] bg-white">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div>
                        <div className="font-sans font-medium text-xs text-zinc-800">doxantro-med-biogpt</div>
                        <div className="text-[10px] text-zinc-500">Domain Specialized · Standby</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zinc-700">16.1ms</div>
                      <div className="text-[10px] text-zinc-500 font-sans">Failover Ready</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl border border-black/[0.06] bg-white">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-zinc-300" />
                      <div>
                        <div className="font-sans font-medium text-xs text-zinc-600">claude-3-5-sonnet</div>
                        <div className="text-[10px] text-zinc-500">External Fallback Pool</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zinc-500">84.2ms</div>
                      <div className="text-[10px] text-zinc-500 font-sans">Secondary</div>
                    </div>
                  </div>
                </div>

                {/* Aggregate Banner */}
                <div className="mt-4 p-3 rounded-xl bg-zinc-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-600">Total Requests Handled</span>
                  <span className="font-bold text-[#111111]">14,892,104 reqs <span className="text-emerald-700 font-normal">↑ 100% SLA</span></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block 2: Zero-Trust Guardrails */}
      <section className="py-24 border-b border-black/[0.06] bg-[#fdfdfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: UI Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="rounded-2xl border border-black/[0.1] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] font-sans">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold text-sm text-[#111111]">Enterprise Guardrail Policies</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    SOC-2 ENFORCED
                  </span>
                </div>

                {/* Policy Toggle List */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-zinc-800">realtime_pii_masking</span>
                    </div>
                    <div className="w-9 h-5 rounded-full bg-[#111111] p-0.5 flex items-center justify-end">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-zinc-800">hallucination_threshold_99</span>
                    </div>
                    <div className="w-9 h-5 rounded-full bg-[#111111] p-0.5 flex items-center justify-end">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-zinc-800">airgapped_vpc_retention_zero</span>
                    </div>
                    <div className="w-9 h-5 rounded-full bg-[#111111] p-0.5 flex items-center justify-end">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-zinc-800">cryptographic_audit_logging</span>
                    </div>
                    <div className="w-9 h-5 rounded-full bg-[#111111] p-0.5 flex items-center justify-end">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Policy Hash: #0x82a9...d31</span>
                  <span>✓ 0 Anomalies in last 24h</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight mb-4">
                Define policies. Enforce zero-trust guardrails.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                Attach strict regulatory guardrails to your model pipelines. Doxantro automatically redacts sensitive patient or financial data before model ingestion and verifies reasoning groundedness before answers return.
              </p>
              <div className="border-l-2 border-zinc-200 pl-4 py-1 mb-6">
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  No manual review bottlenecks. Your systems stay fully compliant with HIPAA, FINRA, GDPR, and ISO-27001 in real time via a single integration.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#111111] hover:text-black transition-colors"
              >
                Explore compliance architecture <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block 3: Private VPC & Edge Deployment */}
      <section className="py-24 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight mb-4">
                Deploy to your cloud, on-premises, or air-gapped VPC
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                Your data stays in your jurisdiction. Doxantro ships containerized inference nodes directly to your AWS, GCP, Azure, or bare-metal Kubernetes clusters with automated telemetry and health reporting.
              </p>
              <div className="border-l-2 border-zinc-200 pl-4 py-1 mb-6">
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  <strong className="font-semibold text-black">Zero Data Leakage:</strong> Weights and embeddings run inside your private network boundary with encrypted NVMe storage and zero external logging.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#111111] hover:text-black transition-colors"
              >
                Schedule enterprise VPC deployment <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Right: UI Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl border border-black/[0.1] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.06] font-sans">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-zinc-700" />
                    <span className="font-semibold text-sm text-[#111111]">Cluster Node Fleet</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">4 Regions Active</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-zinc-50 border border-black/[0.06] flex items-center justify-between">
                    <div>
                      <div className="font-sans font-semibold text-xs text-zinc-900">node-us-east-01</div>
                      <div className="text-[10px] text-zinc-500 font-mono">AWS VPC · 8x H100 80GB</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-700 font-semibold">● 9.2ms</div>
                      <div className="text-[10px] text-zinc-500">100% Healthy</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-black/[0.06] flex items-center justify-between">
                    <div>
                      <div className="font-sans font-semibold text-xs text-zinc-900">node-eu-central-02</div>
                      <div className="text-[10px] text-zinc-500 font-mono">Frankfurt Bare-Metal</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-700 font-semibold">● 11.8ms</div>
                      <div className="text-[10px] text-zinc-500">100% Healthy</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-black/[0.06] flex items-center justify-between">
                    <div>
                      <div className="font-sans font-semibold text-xs text-zinc-900">node-ap-southeast-03</div>
                      <div className="text-[10px] text-zinc-500 font-mono">GCP Private VPC</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-700 font-semibold">● 14.4ms</div>
                      <div className="text-[10px] text-zinc-500">100% Healthy</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Fleet Availability: 99.995%</span>
                  <span className="text-[#111111] font-semibold">Sync: Real-Time</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
