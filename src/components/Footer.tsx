'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { solutionsData } from '../data/solutionsData';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Link href="/" className="inline-flex flex-col gap-2 mb-4 group">
              <div className="bg-white rounded-lg px-2.5 py-1 inline-block w-fit">
                <Image
                  src="/dox1.jpg"
                  alt="Doxantro Systems"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-orange-400 font-semibold">
                Think, Build and Solve
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed mb-6 max-w-xs font-normal">
              Autonomous, domain-tuned AI infrastructure and zero-trust model orchestration for modern enterprises.
            </p>

            {/* Social Media Links (LinkedIn & X) - Pure Bright White */}
            <div className="flex items-center space-x-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doxantro on LinkedIn"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-150"
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
                aria-label="Doxantro on X"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-150"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg className="w-3.5 h-3.5 text-white fill-white" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-4">
              Solutions
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {solutionsData.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-4">
              Platform
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Model Routing Matrix
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Zero-Trust Guardrails
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Private VPC Deployment
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Customer Benchmarks
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Research Whitepapers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-4">
              Company
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Security & SOC-2
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div>© {new Date().getFullYear()} Doxantro Systems Limited. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Air-Gapped Enterprise SLA</span>
            <span>SOC-2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}