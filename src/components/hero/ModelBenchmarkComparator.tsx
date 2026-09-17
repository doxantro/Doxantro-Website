'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, X, Sliders, ShieldCheck } from 'lucide-react';

interface WorkloadPreset {
  id: string;
  name: string;
  shortName: string;
  defaultEvents: number;
  genericLatency: string;
  doxantroLatency: string;
  latencyMultiplier: string;
  genericAccuracy: string;
  doxantroAccuracy: string;
  genericCostPer10k: number;
  doxantroCostPer10k: number;
  unit: string;
}

const presets: WorkloadPreset[] = [
  {
    id: 'finance',
    name: 'High-Frequency Finance',
    shortName: 'Finance',
    defaultEvents: 10000000,
    genericLatency: '340ms',
    doxantroLatency: '4.2ms',
    latencyMultiplier: '80x Faster',
    genericAccuracy: '84.2%',
    doxantroAccuracy: '99.9%',
    genericCostPer10k: 0.045,
    doxantroCostPer10k: 0.007,
    unit: 'Transactions',
  },
  {
    id: 'healthcare',
    name: 'Clinical Imaging (DICOM)',
    shortName: 'Healthcare',
    defaultEvents: 2500000,
    genericLatency: '820ms',
    doxantroLatency: '38ms',
    latencyMultiplier: '21x Faster',
    genericAccuracy: '81.0%',
    doxantroAccuracy: '99.4%',
    genericCostPer10k: 0.12,
    doxantroCostPer10k: 0.018,
    unit: 'Scans',
  },
  {
    id: 'supply-chain',
    name: 'Dynamic Route Optimization',
    shortName: 'Supply Chain',
    defaultEvents: 5000000,
    genericLatency: '450ms',
    doxantroLatency: '8.4ms',
    latencyMultiplier: '53x Faster',
    genericAccuracy: '86.5%',
    doxantroAccuracy: '99.7%',
    genericCostPer10k: 0.065,
    doxantroCostPer10k: 0.011,
    unit: 'Waypoints',
  },
  {
    id: 'security',
    name: 'Zero-Day Packet Defense',
    shortName: 'Cyber Defense',
    defaultEvents: 20000000,
    genericLatency: '280ms',
    doxantroLatency: '2.1ms',
    latencyMultiplier: '133x Faster',
    genericAccuracy: '88.0%',
    doxantroAccuracy: '99.99%',
    genericCostPer10k: 0.035,
    doxantroCostPer10k: 0.005,
    unit: 'Packets',
  },
  {
    id: 'energy',
    name: 'Smart Grid Load Balancing',
    shortName: 'Clean Energy',
    defaultEvents: 8000000,
    genericLatency: '390ms',
    doxantroLatency: '5.6ms',
    latencyMultiplier: '69x Faster',
    genericAccuracy: '85.2%',
    doxantroAccuracy: '99.8%',
    genericCostPer10k: 0.05,
    doxantroCostPer10k: 0.008,
    unit: 'Telemetry Points',
  },
];

export default function ModelBenchmarkComparator() {
  const [activePresetId, setActivePresetId] = useState<string>(presets[0].id);
  const [eventVolume, setEventVolume] = useState<number>(presets[0].defaultEvents);

  const currentPreset = presets.find((p) => p.id === activePresetId) || presets[0];

  const handlePresetChange = (preset: WorkloadPreset) => {
    setActivePresetId(preset.id);
    setEventVolume(preset.defaultEvents);
  };

  // Calculate dynamic costs
  const genericMonthlyCost = Math.round((eventVolume / 10000) * currentPreset.genericCostPer10k * 100);
  const doxantroMonthlyCost = Math.round((eventVolume / 10000) * currentPreset.doxantroCostPer10k * 100);
  const monthlySavings = genericMonthlyCost - doxantroMonthlyCost;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round(((genericMonthlyCost - doxantroMonthlyCost) / genericMonthlyCost) * 100);

  return (
    <div className="relative rounded-2xl border border-black/[0.1] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden w-full max-w-full">
      {/* Top Header & Vertical Selector */}
      <div className="p-3 sm:p-4 pb-2.5 border-b border-black/[0.06] bg-[#fafafa]">
        <div className="flex items-center justify-between gap-1.5 mb-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-zinc-700 font-semibold truncate">
              Model Benchmark & ROI
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 bg-white border border-black/[0.06] px-1.5 py-0.5 rounded flex-shrink-0">
            Live Telemetry
          </span>
        </div>

        {/* Horizontal Scrollable Presets with Momentum Scrolling */}
        <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handlePresetChange(preset)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 ${
                activePresetId === preset.id
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white border border-black/[0.08] text-zinc-600 hover:text-[#111111] hover:border-black/[0.15]'
              }`}
            >
              {preset.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-3 sm:p-4 lg:p-5 space-y-2.5 sm:space-y-3.5">
        {/* Interactive Volume Slider */}
        <div className="bg-[#fafafa] rounded-xl p-2.5 sm:p-3 border border-black/[0.05]">
          <div className="flex items-center justify-between mb-1 gap-2">
            <span className="text-xs text-zinc-600 flex items-center gap-1 font-medium truncate">
              <Sliders className="w-3 h-3 text-zinc-500 flex-shrink-0" />
              <span>Monthly {currentPreset.unit}</span>
            </span>
            <span className="font-mono text-xs font-bold text-zinc-900 tabular-nums flex-shrink-0">
              {eventVolume.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={1000000}
            max={50000000}
            step={500000}
            value={eventVolume}
            onChange={(e) => setEventVolume(Number(e.target.value))}
            className="w-full accent-[#111111] cursor-pointer h-1.5 bg-zinc-200 rounded-lg"
          />
          <div className="flex justify-between text-[9px] font-mono text-zinc-400 mt-0.5">
            <span>1M</span>
            <span>25M</span>
            <span>50M</span>
          </div>
        </div>

        {/* Side-by-Side / Stacked Comparison Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Column A: Generic Cloud AI */}
          <div className="rounded-xl p-3 bg-zinc-50/80 border border-black/[0.06] space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1 pb-1.5 border-b border-black/[0.04]">
              <X className="w-3 h-3 text-zinc-400 flex-shrink-0" />
              <span className="truncate">Generic Cloud AI</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-mono text-zinc-500">Latency (p99)</span>
                <span className="text-xs sm:text-sm font-bold font-mono text-zinc-700 tabular-nums">
                  {currentPreset.genericLatency}
                </span>
              </div>

              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-mono text-zinc-500">Domain Accuracy</span>
                <span className="text-xs sm:text-sm font-bold font-mono text-zinc-700 tabular-nums">
                  {currentPreset.genericAccuracy}
                </span>
              </div>

              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-mono text-zinc-500">Est. Monthly Cost</span>
                <span className="text-xs sm:text-sm font-bold font-mono text-zinc-700 tabular-nums">
                  ${genericMonthlyCost.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="pt-1.5 border-t border-black/[0.04] text-[9px] font-mono text-zinc-500 truncate">
              Shared cloud · Retention risk
            </div>
          </div>

          {/* Column B: Doxantro Domain AI (Highlighted) */}
          <div className="rounded-xl p-3 bg-[#0d0d10] text-white border border-black/[0.12] shadow-sm space-y-2 relative overflow-hidden">
            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1 pb-1.5 border-b border-white/[0.08]">
              <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span className="truncate">Doxantro Sovereign</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="text-[10px] font-mono text-zinc-400 truncate">Latency</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-1 py-0.2 rounded border border-emerald-500/30 whitespace-nowrap font-mono flex-shrink-0">
                    {currentPreset.latencyMultiplier}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold font-mono text-white tabular-nums flex-shrink-0">
                  {currentPreset.doxantroLatency}
                </span>
              </div>

              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="text-[10px] font-mono text-zinc-400 truncate">Accuracy</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-1 py-0.2 rounded border border-emerald-500/30 whitespace-nowrap font-mono flex-shrink-0">
                    Zero Drift
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 tabular-nums flex-shrink-0">
                  {currentPreset.doxantroAccuracy}
                </span>
              </div>

              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="text-[10px] font-mono text-zinc-400 truncate">Monthly Cost</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-1 py-0.2 rounded border border-emerald-500/30 whitespace-nowrap font-mono flex-shrink-0">
                    -{savingsPercent}%
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold font-mono text-white tabular-nums flex-shrink-0">
                  ${doxantroMonthlyCost.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="pt-1.5 border-t border-white/[0.08] text-[9px] font-mono text-emerald-400 flex items-center gap-1 truncate">
              <ShieldCheck className="w-3 h-3 flex-shrink-0" />
              <span>100% Air-Gapped Enclave</span>
            </div>
          </div>
        </div>

        {/* Bottom ROI Summary Strip */}
        <div className="pt-2.5 border-t border-black/[0.06] flex items-center justify-between gap-2">
          <div>
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              Projected Annual Savings
            </div>
            <div className="text-base sm:text-lg font-bold font-mono text-[#111111] tabular-nums">
              ${annualSavings.toLocaleString()} <span className="text-[11px] font-normal text-zinc-500">/ yr</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all text-center flex-shrink-0"
          >
            <span>Request Pilot</span>
            <ArrowRight className="w-3 h-3 flex-shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
