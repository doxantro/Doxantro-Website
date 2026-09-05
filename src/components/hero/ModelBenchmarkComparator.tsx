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
      <div className="p-4 sm:p-5 pb-3 border-b border-black/[0.06] bg-[#fafafa]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-600 font-semibold truncate">
              Model Benchmark & ROI
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 bg-white border border-black/[0.06] px-2 py-0.5 rounded flex-shrink-0">
            v3.4 Telemetry
          </span>
        </div>

        {/* Horizontal Scrollable Presets */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1.5 scrollbar-none -mx-1 px-1">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handlePresetChange(preset)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 ${
                activePresetId === preset.id
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white border border-black/[0.06] text-zinc-600 hover:text-[#111111] hover:border-black/[0.15]'
              }`}
            >
              {preset.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5">
        {/* Interactive Volume Slider */}
        <div className="bg-[#fafafa] rounded-xl p-3 sm:p-3.5 border border-black/[0.05]">
          <div className="flex items-center justify-between mb-1.5 gap-2">
            <span className="text-xs text-zinc-600 flex items-center gap-1.5 font-medium truncate">
              <Sliders className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
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
            className="w-full accent-[#111111] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
            <span>1M</span>
            <span>25M</span>
            <span>50M</span>
          </div>
        </div>

        {/* Side-by-Side Comparison Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Column A: Generic Cloud AI */}
          <div className="rounded-xl p-3.5 sm:p-4 bg-zinc-50/80 border border-black/[0.06] space-y-2.5 sm:space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 pb-2 border-b border-black/[0.04]">
              <X className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              <span className="truncate">Generic Cloud AI</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <div>
                <div className="text-[10px] font-mono text-zinc-500">Latency (p99)</div>
                <div className="text-base sm:text-lg font-bold font-mono text-zinc-700 tabular-nums">
                  {currentPreset.genericLatency}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-zinc-500">Domain Accuracy</div>
                <div className="text-base sm:text-lg font-bold font-mono text-zinc-700 tabular-nums">
                  {currentPreset.genericAccuracy}
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-zinc-500">Est. Monthly Cost</div>
              <div className="text-base sm:text-lg font-bold font-mono text-zinc-700 tabular-nums">
                ${genericMonthlyCost.toLocaleString()}
              </div>
            </div>

            <div className="pt-2 border-t border-black/[0.04] text-[10px] font-mono text-zinc-500 truncate">
              Shared cloud · Retention risk
            </div>
          </div>

          {/* Column B: Doxantro Domain AI (Highlighted) */}
          <div className="rounded-xl p-3.5 sm:p-4 bg-[#0d0d10] text-white border border-black/[0.12] shadow-sm space-y-2.5 sm:space-y-3 relative overflow-hidden">
            <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 pb-2 border-b border-white/[0.08]">
              <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate">Doxantro Sovereign</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <div>
                <div className="text-[10px] font-mono text-zinc-400 flex items-center justify-between gap-1">
                  <span>Latency</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1 rounded border border-emerald-500/30 whitespace-nowrap">
                    {currentPreset.latencyMultiplier}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-white tabular-nums">
                  {currentPreset.doxantroLatency}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-zinc-400 flex items-center justify-between gap-1">
                  <span>Accuracy</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1 rounded border border-emerald-500/30 whitespace-nowrap">
                    Zero Drift
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-emerald-400 tabular-nums">
                  {currentPreset.doxantroAccuracy}
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-zinc-400 flex items-center justify-between gap-1">
                <span>Est. Monthly Cost</span>
                <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1 rounded border border-emerald-500/30 whitespace-nowrap">
                  -{savingsPercent}%
                </span>
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-white tabular-nums">
                ${doxantroMonthlyCost.toLocaleString()}
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.08] text-[10px] font-mono text-emerald-400 flex items-center gap-1 truncate">
              <ShieldCheck className="w-3 h-3 flex-shrink-0" />
              <span>100% Air-Gapped Enclave</span>
            </div>
          </div>
        </div>

        {/* Bottom ROI Summary Strip */}
        <div className="pt-3 border-t border-black/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              Projected Annual Enterprise Savings
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#111111] tabular-nums">
              ${annualSavings.toLocaleString()} <span className="text-xs font-normal text-zinc-500">/ year</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all text-center"
          >
            <span>Request Model Pilot</span>
            <ArrowRight className="w-3 h-3 flex-shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
