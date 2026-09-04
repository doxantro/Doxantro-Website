'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import AIDemoSection from '../sections/AIDemoSection';
import NewsletterSubscribe from '../components/home/NewsletterSubscribe';
import StatCounter from '../components/ui/StatCounter';
import GlowCard from '../components/ui/GlowCard';
import SectionHeader from '../components/ui/SectionHeader';
import SolutionIcon from '../components/ui/SolutionIcon';
import { solutionsData } from '../data/solutionsData';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Industry Benchmark Statistics */}
      <section className="py-20 bg-zinc-50/60 border-y border-zinc-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Measurable Impact"
            badgeVariant="orange"
            title="Quantifiable Results Across"
            highlightText="Global Deployments"
            subtitle="Our AI implementations deliver compounding ROI, operational velocity, and defensible competitive advantages."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlowCard className="p-8 text-center bg-white">
              <StatCounter
                value="500"
                prefix="$"
                suffix="B+"
                label="Global AI Market Value by 2027"
              />
              <p className="text-xs text-zinc-600 mt-2">Explosive industry adoption curve</p>
            </GlowCard>

            <GlowCard className="p-8 text-center bg-white">
              <StatCounter
                value="40"
                suffix="%"
                label="Average Operational Cost Reduction"
              />
              <p className="text-xs text-zinc-600 mt-2">Across automated workflows</p>
            </GlowCard>

            <GlowCard className="p-8 text-center bg-white">
              <StatCounter
                value="85"
                suffix="%"
                label="Enterprises Deploying Private AI"
              />
              <p className="text-xs text-zinc-600 mt-2">Active production infrastructure</p>
            </GlowCard>

            <GlowCard className="p-8 text-center bg-white">
              <StatCounter
                value="3.5"
                suffix="x"
                label="Institutional Productivity Multiplier"
              />
              <p className="text-xs text-zinc-600 mt-2">Measured in task completion speed</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Enterprise Industry Verticals Grid ("Trusted By") */}
      <section className="py-20 bg-zinc-50/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">
              Cross-Industry Deployment Framework
            </h3>
            <p className="text-2xl font-bold text-zinc-900">
              Trusted by Innovators Across Key Sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {solutionsData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col items-center p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-sm hover:border-orange-400/80 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-3 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <SolutionIcon name={item.iconName} className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  {item.shortTitle}
                </span>
                <span className="text-[11px] text-zinc-600 mt-1">
                  {item.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI Demo Section */}
      <AIDemoSection />

      {/* 7. Newsletter Subscription */}
      <NewsletterSubscribe />
    </main>
  );
}
