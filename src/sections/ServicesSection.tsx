'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import SolutionIcon from '../components/ui/SolutionIcon';
import { solutionsData } from '../data/solutionsData';

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-[#fafafa] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ENTERPRISE CAPABILITIES"
          title="Engineered AI Solutions for High-Impact Sectors"
          subtitle="From algorithmic transaction security to precision agricultural computer vision, our modular neural systems integrate seamlessly into your existing enterprise stack."
        />

        {/* 6-Card Solution Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {solutionsData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="h-full"
            >
              <div className="card-minimal h-full flex flex-col justify-between p-6 group">
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      <SolutionIcon name={service.iconName} className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 bg-zinc-50 border border-black/[0.06] px-2 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Metric Callout */}
                  <div className="mb-4 p-2.5 rounded-lg bg-zinc-50 border border-black/[0.04] flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500">
                      {service.statLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-900">
                      {service.stat}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-zinc-600">
                        <div className="w-3.5 h-3.5 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center mr-2 flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-3.5 border-t border-black/[0.04] mt-auto">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors"
                  >
                    <span>Explore {service.shortTitle} Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-[#0f0f12] p-8 sm:p-10 text-white border border-white/[0.08] shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-2 block">
                ■ CUSTOM SOVEREIGN DEPLOYMENT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-1.5">
                Have proprietary data or a specialized domain requirement?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
                We design custom neural foundation models, private cloud deployments, and air-gapped on-premise AI architectures.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#111111] font-medium hover:bg-zinc-100 transition-colors text-xs"
              >
                Schedule Architecture Review
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/[0.15] text-zinc-300 font-medium hover:bg-white/[0.05] transition-colors text-xs"
              >
                Full Services Spec
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
