'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Research & Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0e] text-zinc-300 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Company Info (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center space-x-2.5 mb-4 group">
              <div className="overflow-hidden rounded-md border border-white/[0.12] bg-zinc-900 p-0.5 flex-shrink-0">
                <Image
                  src="/dox1.jpg"
                  alt="Doxantro Systems"
                  width={28}
                  height={28}
                  className="rounded-[3px] object-cover"
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold tracking-tight text-white text-base">
                  DOXANTRO
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  SYSTEMS
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 max-w-sm">
              Empowering global enterprises, healthcare systems, and institutions with mission-critical AI solutions engineered for speed, accuracy, and measurable ROI.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All systems operational · v3.4</span>
            </div>

            {/* Social Media Links (LinkedIn & X) - Pure Bright White */}
            <div className="flex items-center space-x-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doxantro on LinkedIn"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.1] flex items-center justify-center text-white hover:bg-zinc-800 hover:border-white/[0.2] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 text-white fill-white" fill="white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.6z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doxantro on X (Twitter)"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.1] flex items-center justify-center text-white hover:bg-zinc-800 hover:border-white/[0.2] transition-colors"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg className="w-3.5 h-3.5 text-white fill-white" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3.5">
              ■ Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions Links (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3.5">
              ■ Industry Verticals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {solutionsData.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors py-0.5 flex items-center justify-between group"
                >
                  <span>{service.shortTitle}</span>
                  <span className="text-[10px] text-zinc-600 group-hover:text-zinc-400 font-mono">
                    {service.stat}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-zinc-500 text-xs font-mono">
            © {new Date().getFullYear()} Doxantro Systems Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 font-mono">
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Enterprise Inquiries
            </Link>
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              Security Standards
            </Link>
            <Link href="/services" className="hover:text-zinc-300 transition-colors">
              Architecture Spec
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}