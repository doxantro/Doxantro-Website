'use client';

import React from 'react';
import {
  Activity,
  CheckCircle2,
  CircleDashed,
  Database,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
} from 'lucide-react';

type ConceptInterfaceProps = {
  variant?: 'pipeline' | 'model' | 'operations';
  className?: string;
};

const variantCopy = {
  pipeline: {
    eyebrow: 'DATA INTELLIGENCE WORKSPACE',
    title: 'Private data pipeline',
    description: 'A proposed workspace for connecting governed enterprise data.',
    icon: Database,
    rows: [
      ['Connected sources', '0'],
      ['Records processed', '0'],
      ['Active pipelines', '0'],
    ],
  },
  model: {
    eyebrow: 'MODEL ENGINEERING CONSOLE',
    title: 'Domain model workspace',
    description: 'A concept environment for training, evaluating and governing models.',
    icon: Network,
    rows: [
      ['Models trained', '0'],
      ['Benchmarks completed', '0'],
      ['Active experiments', '0'],
    ],
  },
  operations: {
    eyebrow: 'OPERATIONS MONITOR',
    title: 'Decision control room',
    description: 'A simulated view of monitored decisions and human review.',
    icon: Activity,
    rows: [
      ['Active deployments', '0'],
      ['Decisions processed', '0'],
      ['Alerts resolved', '0'],
    ],
  },
};

export default function ConceptInterface({
  variant = 'pipeline',
  className = '',
}: ConceptInterfaceProps) {
  const content = variantCopy[variant];
  const Icon = content.icon;

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b0c]/92 text-white shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`}
      aria-label={`${content.title}. Doxantro concept interface using simulated data.`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5b800] text-[#17130a]">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <div className="truncate text-[10px] font-mono tracking-[0.16em] text-[#ffd966]">
              {content.eyebrow}
            </div>
            <div className="truncate text-sm font-semibold text-white">{content.title}</div>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-[#f5b800]/35 bg-[#f5b800]/10 px-2.5 py-1 text-[9px] font-mono tracking-wider text-[#ffd966]">
          CONCEPT UI
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2">
          {content.rows.map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.045] p-3">
              <div className="font-mono text-xl font-semibold tabular-nums text-white">{value}</div>
              <div className="mt-1 text-[9px] leading-snug text-zinc-400 sm:text-[10px]">{label}</div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-4">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(245,184,0,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(245,184,0,.22)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative flex items-center justify-between gap-3">
            {[Database, Server, ShieldCheck].map((NodeIcon, index) => (
              <React.Fragment key={index}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f5b800]/30 bg-[#f5b800]/10 text-[#ffd966]">
                  <NodeIcon className="h-4 w-4" aria-hidden="true" />
                </div>
                {index < 2 && (
                  <div className="relative h-px flex-1 bg-white/15">
                    <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f5b800] shadow-[0_0_14px_rgba(245,184,0,.9)]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="relative mt-4 flex items-center justify-between gap-3 text-[10px] font-mono text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <CircleDashed className="h-3 w-3 text-[#f5b800]" aria-hidden="true" />
              Awaiting configuration
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LockKeyhole className="h-3 w-3" aria-hidden="true" />
              Private by design
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2 text-[10px] leading-relaxed text-zinc-400">
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f5b800]" aria-hidden="true" />
          <span>{content.description} All values shown are simulated pre-launch data.</span>
        </div>
      </div>
    </div>
  );
}
