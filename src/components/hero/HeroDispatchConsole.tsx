'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Zap } from 'lucide-react';

interface JobPreset {
  id: string;
  name: string;
  category: string;
  model: string;
  latency: string;
  accuracy: string;
  compression: string;
  costSaved: string;
  compliance: string;
  tokenSpeed: string;
}

const presets: JobPreset[] = [
  {
    id: 'fin',
    name: 'Fraud & AML Stream',
    category: 'Finance Engine',
    model: 'doxantro-quant-70b',
    latency: '12.4ms',
    accuracy: '99.94%',
    compression: '4.8x',
    costSaved: '$0.0084 / tx',
    compliance: 'FINRA / SOC-2',
    tokenSpeed: '184 tok/s',
  },
  {
    id: 'health',
    name: 'Clinical NLP & HIPAA',
    category: 'Healthcare CareGraph',
    model: 'doxantro-med-biogpt',
    latency: '16.1ms',
    accuracy: '99.88%',
    compression: '3.6x',
    costSaved: '$0.0120 / doc',
    compliance: 'HIPAA Air-Gapped',
    tokenSpeed: '152 tok/s',
  },
  {
    id: 'supply',
    name: 'Predictive Logistics Route',
    category: 'Supply Chain Grid',
    model: 'doxantro-edge-moe',
    latency: '9.8ms',
    accuracy: '99.72%',
    compression: '5.2x',
    costSaved: '$0.0065 / route',
    compliance: 'ISO-27001 Verified',
    tokenSpeed: '210 tok/s',
  },
  {
    id: 'sec',
    name: 'Zero-Trust Telemetry Scan',
    category: 'Defense & Cloud',
    model: 'doxantro-guard-v4',
    latency: '7.2ms',
    accuracy: '100.00%',
    compression: '6.0x',
    costSaved: '$0.0142 / event',
    compliance: 'FedRAMP / CMMC',
    tokenSpeed: '240 tok/s',
  },
];

export default function HeroDispatchConsole() {
  const [activeTab, setActiveTab] = useState(0);
  const current = presets[activeTab];

  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none font-mono">
      {/* Preset Switcher Tabs */}
      <div className="flex items-center justify-between gap-1 mb-3 p-1 rounded-xl bg-zinc-100 border border-black/[0.08] text-[10px] sm:text-[11px] overflow-x-auto">
        {presets.map((p, idx) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-1 px-1.5 rounded-lg text-center font-mono whitespace-nowrap transition-all duration-150 cursor-pointer ${
              activeTab === idx
                ? 'bg-white text-[#111111] font-semibold shadow-xs border border-black/[0.08]'
                : 'text-zinc-600 hover:text-black hover:bg-white/50'
            }`}
          >
            {p.id.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Industrial Machine Slot Slot */}
      <div className="relative w-[92%] mx-auto h-3 bg-[#1a1a1a] rounded-t-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.4)] flex items-center justify-center">
        <div className="w-[85%] h-1 bg-[#0a0a0a] rounded-xs" />
      </div>

      {/* Tactile Printed Ticket Console */}
      <motion.div
        key={current.id}
        initial={{ y: -6, opacity: 0.9 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative bg-[#fcfbf9] text-[#1a1a1a] rounded-b-xl border border-black/[0.12] border-t-0 shadow-[0_2px_0_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.09)] overflow-hidden"
      >
        {/* Top Perforated Sawtooth Edge */}
        <div className="h-2 flex bg-[#1a1a1a] overflow-hidden">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className="flex-1 bg-[#fcfbf9] mx-[0.5px]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
          ))}
        </div>

        <div className="p-4 sm:p-6 relative">
          {/* Header Row with Real Logo & Motto */}
          <div className="flex items-center justify-between pb-3 border-b border-dashed border-zinc-300">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="bg-white rounded px-1.5 py-0.5 border border-black/10">
                <Image
                  src="/dox1.jpg"
                  alt="Doxantro"
                  width={85}
                  height={22}
                  className="h-4 sm:h-5 w-auto object-contain"
                />
              </div>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-500 border-l border-zinc-300 pl-1.5 hidden xs:inline-block">
                Think, Build and Solve
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-zinc-600 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE DISPATCH</span>
            </div>
          </div>

          {/* Job Metadata */}
          <div className="flex justify-between items-center text-[10px] sm:text-[11px] text-zinc-600 py-2">
            <span>JOB #{current.id.toUpperCase()}-88219</span>
            <span className="truncate max-w-[150px]">{current.category}</span>
          </div>

          {/* Dotted Divider */}
          <div className="h-px w-full dot-leader text-zinc-400 my-0.5" />

          {/* Live Metric Rows with Dot Leaders */}
          <div className="space-y-2 py-2 text-[11px] sm:text-xs">
            <div className="flex items-baseline gap-2">
              <span className="text-zinc-600 text-[10px] sm:text-[11px]">Model Engine</span>
              <span className="flex-1 h-px dot-leader text-zinc-300 mb-0.5" />
              <span className="font-semibold text-zinc-900 truncate max-w-[160px]">{current.model}</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-zinc-600 text-[10px] sm:text-[11px]">Guardrail Audit</span>
              <span className="flex-1 h-px dot-leader text-zinc-300 mb-0.5" />
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                PASS · {current.accuracy}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-zinc-600 text-[10px] sm:text-[11px]">Throughput</span>
              <span className="flex-1 h-px dot-leader text-zinc-300 mb-0.5" />
              <span className="text-zinc-900 font-medium">{current.tokenSpeed}</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-zinc-600 text-[10px] sm:text-[11px]">Compression</span>
              <span className="flex-1 h-px dot-leader text-zinc-300 mb-0.5" />
              <span className="text-zinc-900">{current.compression}</span>
            </div>

            <div className="flex items-baseline gap-2 text-zinc-600 text-[10px] sm:text-[11px]">
              <span>Compliance</span>
              <span className="flex-1 h-px dot-leader text-zinc-300 mb-0.5" />
              <span className="text-zinc-800">{current.compliance}</span>
            </div>
          </div>

          {/* Dotted Divider */}
          <div className="h-px w-full dot-leader text-zinc-400 my-0.5" />

          {/* Main Total Metric Banner */}
          <div className="flex justify-between items-baseline pt-2.5">
            <div>
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest text-zinc-500 uppercase block">
                P99 INFERENCE LATENCY
              </span>
              <span className="text-[10px] sm:text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
                <Zap className="w-3 h-3 text-emerald-600" />
                {current.costSaved}
              </span>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono tracking-tight text-[#111111]">
              {current.latency}
            </span>
          </div>

          {/* Footer Receipt Status */}
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-zinc-600 pt-3 mt-1.5 border-t border-dashed border-zinc-300">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-zinc-700" />
              Air-Gapped VPC Pod
            </span>
            <span>✓ Verified · 0.0s</span>
          </div>

          {/* Stamped Approval Stamp */}
          <motion.div
            initial={{ scale: 1.6, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: -8 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="border-2 border-emerald-800/80 text-emerald-800 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-sm text-center bg-emerald-500/[0.04] shadow-[inset_0_0_0_1px_rgba(22,101,52,0.15)] backdrop-blur-[0.5px]">
              <div className="font-sans font-extrabold text-xs sm:text-sm tracking-widest leading-tight">
                VERIFIED
              </div>
              <div className="font-mono text-[6px] sm:text-[7px] tracking-widest uppercase mt-0.5 text-emerald-900">
                ZERO-RETENTION
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Perforated Edge */}
        <div className="h-2 flex bg-[#fcfbf9] overflow-hidden">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className="flex-1 bg-[#fcfbf9] mx-[0.5px]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
