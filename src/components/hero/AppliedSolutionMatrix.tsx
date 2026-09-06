'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import SolutionIcon from '../ui/SolutionIcon';

interface SolutionMatrixItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  badge: string;
  outcome: string;
  href: string;
}

const solutions: SolutionMatrixItem[] = [
  {
    id: 'finance',
    title: 'Financial Systems',
    category: 'High-Velocity Banking',
    iconName: 'BadgeDollarSign',
    badge: '< 10ms Intercept',
    outcome: 'Sub-10ms synthetic fraud detection with zero external data retention.',
    href: '/ai-finance',
  },
  {
    id: 'healthcare',
    title: 'Clinical Healthcare',
    category: 'Hospital PACS Enclave',
    iconName: 'Activity',
    badge: '99.4% AUC',
    outcome: 'Air-gapped 3D DICOM radiology scan triage & physician emergency priority.',
    href: '/ai-healthcare',
  },
  {
    id: 'agriculture',
    title: 'Precision Agriculture',
    category: 'Orbital & Ground IoT',
    iconName: 'Sprout',
    badge: '+32% Yield Delta',
    outcome: 'Sentinel-2 multispectral NDVI regression for automated variable-rate dosing.',
    href: '/ai-agriculture',
  },
  {
    id: 'supply-chain',
    title: 'Autonomous Logistics',
    category: 'Multi-Modal Freight',
    iconName: 'Boxes',
    badge: '-22.6% Freight Cost',
    outcome: 'Reinforcement learning corridor solver for automated rail & port bypass.',
    href: '/ai-supply-chain',
  },
  {
    id: 'security',
    title: 'Cyber Defense',
    category: 'Kernel Memory Enclave',
    iconName: 'ShieldAlert',
    badge: 'Zero-Day Shield',
    outcome: 'Ring-0 eBPF packet inspection & automated sub-millisecond memory quarantine.',
    href: '/ai-security',
  },
  {
    id: 'energy',
    title: 'Clean Energy Grid',
    category: 'Smart SCADA Bus',
    iconName: 'Zap',
    badge: '+24.8% Efficiency',
    outcome: '48-hour generation forecasting & automated multi-megawatt battery balance.',
    href: '/ai-energy',
  },
];

export default function AppliedSolutionMatrix() {
  return (
    <div className="relative rounded-2xl border border-black/[0.1] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden w-full max-w-full">
      {/* 1. Header Bar */}
      <div className="p-3 sm:p-3.5 pb-2.5 border-b border-black/[0.06] bg-[#fafafa] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-zinc-800 font-semibold truncate">
            Enterprise Applied Solutions
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[9px] font-mono text-zinc-400 hidden xs:inline">
            Scroll to view all
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-600 bg-white border border-black/[0.08] px-2 py-0.5 rounded flex-shrink-0 font-medium">
            6 VERTICALS
          </span>
        </div>
      </div>

      {/* 2. Fixed-Height Scrollable Solution Grid Container */}
      <div className="p-2.5 sm:p-3 max-h-[290px] xs:max-h-[320px] sm:max-h-[340px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 hover:scrollbar-thumb-zinc-300 w-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 w-full">
          {solutions.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative rounded-xl border border-black/[0.06] bg-[#fafafa] hover:bg-[#0d0d11] p-2.5 sm:p-3 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between min-w-0"
            >
              <div>
                {/* Card Header Row */}
                <div className="flex items-center justify-between gap-1.5 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-zinc-200/80 group-hover:bg-white/10 flex items-center justify-center text-zinc-900 group-hover:text-orange-400 transition-colors flex-shrink-0">
                    <SolutionIcon name={item.iconName} className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-mono text-zinc-500 group-hover:text-zinc-300 bg-white group-hover:bg-white/10 px-1.5 py-0.2 rounded border border-black/[0.05] group-hover:border-white/10 truncate font-medium">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Category */}
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-white transition-colors tracking-tight truncate mb-0.5">
                  {item.title}
                </h4>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-400 group-hover:text-zinc-400 truncate mb-1">
                  {item.category}
                </p>

                {/* Concrete Outcome Description */}
                <p className="text-[10px] sm:text-[11px] text-zinc-600 group-hover:text-zinc-300 leading-relaxed line-clamp-2">
                  {item.outcome}
                </p>
              </div>

              {/* Card Action Arrow Footer */}
              <div className="pt-1.5 mt-1.5 border-t border-black/[0.04] group-hover:border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">
                <span className="truncate">View Blueprint</span>
                <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Bottom Trust Bar */}
      <div className="p-2.5 sm:p-3 border-t border-black/[0.06] bg-[#fafafa] flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-1.5 sm:gap-2 w-full text-[10px] sm:text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-zinc-500 min-w-0">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
          <span className="truncate">Dedicated Private Enclaves · 100% Data Sovereignty</span>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-1 font-semibold text-zinc-900 hover:text-orange-600 transition-colors group flex-shrink-0"
        >
          <span>All Technical Services</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
