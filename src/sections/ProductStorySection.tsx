'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ConceptInterface from '../components/home/ConceptInterface';

const chapters = [
  {
    step: '01',
    label: 'Understand',
    title: 'Start with the operation, not the model.',
    description:
      'We map the decisions, controls, data sources and human responsibilities around the workflow before recommending an AI system.',
    image: '/images/doxantro/data-architect.webp',
    alt: 'A data architect working in a secure enterprise engineering environment',
    variant: 'pipeline' as const,
  },
  {
    step: '02',
    label: 'Engineer',
    title: 'Build intelligence around your domain.',
    description:
      'Models, pipelines and integrations are shaped around private data, existing infrastructure and the level of oversight the operation requires.',
    image: '/images/doxantro/operations-hero.webp',
    alt: 'An AI engineer reviewing infrastructure and model visualizations',
    variant: 'model' as const,
  },
  {
    step: '03',
    label: 'Operate',
    title: 'Keep every important decision accountable.',
    description:
      'Teams can monitor signals, review uncertainty and retain control over high-impact decisions as the system moves into real workflows.',
    image: '/images/doxantro/operations-lead.webp',
    alt: 'An operations leader in a mission-critical enterprise control room',
    variant: 'operations' as const,
  },
];

export default function ProductStorySection() {
  return (
    <section id="product-vision" className="scroll-mt-24 bg-[#fbfaf6] py-20 sm:py-24 lg:py-32" aria-labelledby="product-story-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="clean-eyebrow">How Doxantro works</span>
            <h2 id="product-story-title" className="mt-4 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-6xl">
              A clear path from private data to governed action.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600 lg:col-span-5 lg:justify-self-end">
            The product experience is still in development. These concept interfaces show the intended workflow without presenting simulated screens as shipped software.
          </p>
        </div>

        <div className="mt-12 space-y-6 sm:mt-16">
          {chapters.map((chapter, index) => (
            <motion.article
              key={chapter.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              className="grid overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-[0_16px_50px_rgba(31,28,18,0.06)] lg:grid-cols-2"
            >
              <div className={`relative min-h-[360px] sm:min-h-[460px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={chapter.image}
                  alt={chapter.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                  <ConceptInterface variant={chapter.variant} className="!shadow-[0_20px_55px_rgba(0,0,0,.28)]" />
                </div>
              </div>

              <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3c83f] text-sm font-bold text-[#17130a]">
                    {chapter.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{chapter.label}</span>
                </div>
                <h3 className="mt-7 max-w-xl text-3xl font-bold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-4xl">
                  {chapter.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">{chapter.description}</p>
                <div className="mt-8 h-px w-full bg-black/[0.07]" />
                <p className="mt-5 text-xs leading-5 text-zinc-500">
                  Concept preview · Simulated pre-launch data · Human review designed into the workflow
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
