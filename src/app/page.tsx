'use client';

import React from 'react';
import { Database, ShieldCheck, UserCheck } from 'lucide-react';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import ProductStorySection from '../sections/ProductStorySection';
import NewsletterSubscribe from '../components/home/NewsletterSubscribe';
import StatCounter from '../components/ui/StatCounter';

const foundations = [
  {
    icon: Database,
    title: 'Built around private data',
    copy: 'Connect the data and systems that already define how your operation works.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance from day one',
    copy: 'Design access, evaluation and accountability into the system before deployment.',
  },
  {
    icon: UserCheck,
    title: 'Humans stay responsible',
    copy: 'Keep expert review in the loop wherever decisions carry operational impact.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf6]">
      <HeroSection />

      <section className="bg-[#fbfaf6] pb-20 pt-8 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-white shadow-[0_12px_40px_rgba(31,28,18,0.05)] sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 sm:p-7 lg:border-r lg:border-black/[0.07]">
              <StatCounter value="99.9" suffix="%" label="Fraud detection precision" className="!text-left" />
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#876400]">Verified result</p>
            </div>
            <div className="border-t border-black/[0.07] p-6 sm:border-l sm:border-t-0 sm:p-7 lg:border-l-0 lg:border-r">
              <StatCounter value="85" suffix="%" label="Diagnostic accuracy gain" className="!text-left" />
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#876400]">Verified result</p>
            </div>
            <div className="border-t border-black/[0.07] p-6 sm:p-7 lg:border-r lg:border-t-0">
              <StatCounter value="0" label="Verified production deployments" className="!text-left" />
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-400">Pre-launch baseline</p>
            </div>
            <div className="border-t border-black/[0.07] p-6 sm:border-l sm:p-7 lg:border-l-0 lg:border-t-0">
              <StatCounter value="0" label="Published customer case studies" className="!text-left" />
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-400">Awaiting completed pilots</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/[0.06] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="clean-eyebrow">A practical foundation</span>
              <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-zinc-950 sm:text-5xl">
                Useful AI starts with operational clarity.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-zinc-600">
                We focus on the parts that make AI dependable in practice: the right data, explicit controls and responsible people.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              {foundations.map(({ icon: Icon, title, copy }, index) => (
                <article key={title} className="rounded-3xl border border-black/[0.07] bg-[#fbfaf6] p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3c83f] text-[#17130a]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold text-zinc-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-zinc-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductStorySection />
      <ServicesSection />
      <NewsletterSubscribe />
    </main>
  );
}
