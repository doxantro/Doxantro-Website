'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import NewsletterSubscribe from '../components/home/NewsletterSubscribe';
import StatCounter from '../components/ui/StatCounter';
import SectionHeader from '../components/ui/SectionHeader';
import SolutionIcon from '../components/ui/SolutionIcon';
import { solutionsData } from '../data/solutionsData';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Industry Benchmark Statistics */}
      <section className="py-16 md:py-20 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="MEASURABLE IMPACT"
            title="Quantifiable Results Across AI Implementation, Integration & Deployment"
            subtitle="Our AI implementations, custom integrations, and production deployments deliver compounding ROI, operational velocity, and defensible competitive advantages."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            <div className="card-minimal p-5 sm:p-6 text-center">
              <StatCounter
                value="500"
                prefix="$"
                suffix="B+"
                label="Global AI Market Value by 2027"
              />
              <p className="text-[11px] font-mono text-zinc-400 mt-2">Enterprise adoption curve</p>
            </div>

            <div className="card-minimal p-5 sm:p-6 text-center">
              <StatCounter
                value="40"
                suffix="%"
                label="Average Operational Cost Reduction"
              />
              <p className="text-[11px] font-mono text-zinc-400 mt-2">Across automated workflows</p>
            </div>

            <div className="card-minimal p-5 sm:p-6 text-center">
              <StatCounter
                value="85"
                suffix="%"
                label="Enterprises Integrating Private AI"
              />
              <p className="text-[11px] font-mono text-zinc-400 mt-2">Production workflows & systems</p>
            </div>

            <div className="card-minimal p-5 sm:p-6 text-center">
              <StatCounter
                value="3.5"
                suffix="x"
                label="Institutional Productivity Multiplier"
              />
              <p className="text-[11px] font-mono text-zinc-400 mt-2">Task completion velocity</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Enterprise Industry Verticals Grid */}
      {/* <section className="py-16 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-black/[0.06] gap-4">
            <div>
              <div className="subheading mb-2">PRODUCTION ARCHITECTURE</div>
              <h3 className="display-3">
                6 Mission-Critical Industry Verticals
              </h3>
            </div>
            <Link
              href="/services"
              className="text-xs font-medium text-zinc-900 hover:text-orange-600 inline-flex items-center gap-1 group self-start sm:self-auto"
            >
              <span>Explore technical architecture</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {solutionsData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="card-minimal p-5 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      <SolutionIcon name={item.iconName} className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-black/[0.06]">
                      {item.stat}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-medium text-zinc-700 group-hover:text-zinc-950">
                  <span>View Vertical Blueprint</span>
                  <span className="text-zinc-400 group-hover:text-zinc-900">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* 6. Newsletter Subscription */}
      <NewsletterSubscribe />
    </main>
  );
}
