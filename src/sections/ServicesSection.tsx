'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SolutionIcon from '../components/ui/SolutionIcon';
import { solutionsData } from '../data/solutionsData';

export default function ServicesSection() {
  return (
    <section id="industries" className="scroll-mt-24 border-y border-black/[0.06] bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="clean-eyebrow">Where we apply it</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              Focused systems for high-impact operations.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600 lg:col-span-5 lg:justify-self-end">
            Explore the solution areas Doxantro is developing. Metrics remain at zero until a result is independently verified, except where clearly marked.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {solutionsData.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: index * 0.035 }}
              className="group flex min-h-[310px] flex-col rounded-[1.75rem] border border-black/[0.07] bg-[#fbfaf6] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-black/[0.14] hover:shadow-[0_18px_45px_rgba(31,28,18,0.08)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-950 shadow-sm ring-1 ring-black/[0.06] transition-colors group-hover:bg-[#f3c83f]">
                  <SolutionIcon name={service.iconName} className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-black/[0.07] bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-500">
                  {service.badge}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-zinc-950">{service.shortTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{service.description}</p>

              <div className="mt-auto flex items-end justify-between gap-4 border-t border-black/[0.07] pt-6">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-zinc-950">{service.stat}</div>
                  <div className="mt-1 max-w-[180px] text-[10px] leading-4 text-zinc-500">{service.statLabel}</div>
                </div>
                <Link
                  href={service.href}
                  aria-label={`Explore ${service.shortTitle}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white transition-colors hover:bg-[#b98600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c79200] focus-visible:ring-offset-2"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-zinc-950 p-7 text-white sm:p-9 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#f3c83f]">Custom systems</p>
            <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a proprietary workflow or domain requirement?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              We can scope a private deployment around your data, controls and infrastructure constraints.
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f3c83f] px-6 text-sm font-semibold text-[#17130a] transition-colors hover:bg-[#e0b329] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto">
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
