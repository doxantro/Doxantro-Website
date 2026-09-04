'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import GlowCard from '../components/ui/GlowCard';
import SolutionIcon from '../components/ui/SolutionIcon';
import Badge from '../components/ui/Badge';
import { solutionsData } from '../data/solutionsData';

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Enterprise Capabilities"
          badgeVariant="orange"
          title="Engineered AI Solutions for"
          highlightText="High-Impact Sectors"
          subtitle="From algorithmic transaction security to precision agricultural computer vision, our modular neural systems integrate seamlessly into your existing enterprise stack."
        />

        {/* 6-Card Solution Grid with Staggered Motion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutionsData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <GlowCard className="h-full flex flex-col justify-between p-7 group hover:border-orange-400/60">
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <SolutionIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <Badge variant="orange" size="sm">
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Metric Callout */}
                  <div className="mb-6 p-3 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-600">
                      {service.statLabel}
                    </span>
                    <span className="text-sm font-extrabold font-mono text-orange-600">
                      {service.stat}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-zinc-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2.5 flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-zinc-100 mt-auto">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors"
                  >
                    <span>Explore {service.shortTitle} Architecture</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-orange-600" />
                  </Link>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-8 sm:p-12 text-white border border-zinc-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <div className="inline-flex mb-3">
                <Badge variant="orange" dot size="sm">Custom Enterprise Deployment</Badge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Have proprietary data or a specialized use case?
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                We design custom foundation models, private cloud deployments, and air-gapped on-premise AI architectures.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 shadow-lg shadow-orange-600/30 transition-all hover:scale-105 text-sm"
              >
                Schedule Architecture Review
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-semibold hover:bg-zinc-800 transition-colors text-sm"
              >
                View Full Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
