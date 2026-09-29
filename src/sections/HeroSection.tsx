'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import ConceptInterface from '../components/home/ConceptInterface';

export default function HeroSection() {
  return (
    <section className="bg-[#fbfaf6] px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/[0.06] bg-[#f3c83f] shadow-[0_24px_80px_rgba(84,61,0,0.10)]">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(70,51,0,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(70,51,0,.10)_1px,transparent_1px)] [background-size:68px_68px]" />
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/35 blur-3xl" />

        <div className="relative grid min-h-[650px] items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-12 lg:px-14 lg:py-16 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#584100]">
              <span className="h-2 w-2 rounded-full bg-[#11120f]" />
              Enterprise applied AI
            </span>

            <h1 className="mt-6 max-w-2xl text-[2.75rem] font-bold leading-[0.98] tracking-[-0.055em] text-[#11120f] sm:text-6xl lg:text-[4.25rem]">
              AI systems built around real operations.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#46390f] sm:text-lg">
              Doxantro helps enterprises turn private data into governed, accountable decisions—without forcing teams to replace the systems they already trust.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" className="w-full !border-[#11120f] !bg-[#11120f] !text-white hover:!bg-black sm:w-auto">
                Discuss a pilot
              </Button>
              <Button href="#product-vision" size="lg" variant="outline" className="w-full !border-black/20 !bg-white/55 hover:!bg-white sm:w-auto">
                See how it works
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#584b23]">
              {['Private by design', 'Human oversight', 'Clear evaluation'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#11120f]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6 lg:col-start-7 xl:col-span-7"
          >
            <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#171713] shadow-[0_24px_70px_rgba(36,27,0,0.25)] sm:min-h-[500px]">
              <Image
                src="/images/doxantro/operations-hero.webp"
                alt="An enterprise AI engineer reviewing operational systems"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[64%_center] opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] text-white backdrop-blur-md">
                DOXANTRO PRODUCT VISION
              </div>
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                <ConceptInterface variant="operations" className="!rounded-2xl !shadow-none" />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff4bf] text-[#6d4f00]">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.12em] text-zinc-400">Designed for</div>
                <div className="text-sm font-semibold text-zinc-900">Controlled decisions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-7xl items-start gap-2 px-2 text-[11px] leading-relaxed text-zinc-500 sm:px-4">
        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c79200]" />
        Product interfaces are concept previews using simulated data unless explicitly marked as verified.
      </div>
    </section>
  );
}
