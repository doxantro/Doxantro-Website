'use client';

import React from 'react';

const partners = [
  { name: 'Apex Capital', type: 'Quantitative Finance' },
  { name: 'Helix BioHealth', type: 'Clinical Genomics' },
  { name: 'OmniLogistics', type: 'Global Freight' },
  { name: 'Veritas Security', type: 'Cloud Defense' },
  { name: 'TerraGrid Energy', type: 'Renewable Power' },
  { name: 'Agronome Systems', type: 'Precision Agri' },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-xs text-zinc-500 uppercase tracking-wider mb-8">
          <span className="text-zinc-900">■</span> Powering autonomous intelligence at enterprise scale
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center p-3 text-center group cursor-default transition-all duration-200"
            >
              <span className="font-sans font-semibold text-sm sm:text-base text-zinc-800 tracking-tight group-hover:text-black transition-colors">
                {p.name}
              </span>
              <span className="font-mono text-[10px] text-zinc-600 mt-0.5 tracking-tight">
                {p.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
