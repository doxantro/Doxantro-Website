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
  { name: 'Blog & Insights', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800/80 relative overflow-hidden">
      {/* Ambient warm lighting glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center space-x-3 mb-5 group">
              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <Image
                  src="/dox1.jpg"
                  alt="Doxantro Systems"
                  width={42}
                  height={42}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  Doxantro <span className="text-orange-500">Systems</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-zinc-500 -mt-0.5">
                  Think · Build · Solve
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering global enterprises, healthcare systems, and institutions with mission-critical AI solutions engineered for speed, accuracy, and measurable ROI.
            </p>

            {/* Social Media Links (LinkedIn & X) - Pure Bright White */}
            <div className="flex items-center space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doxantro on LinkedIn"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-500 hover:scale-105 transition-all duration-200 shadow-sm"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-white fill-white" fill="white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.6z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doxantro on X (Twitter)"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-500 hover:scale-105 transition-all duration-200 shadow-sm"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg className="w-4.5 h-4.5 text-white fill-white" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Company & Insights
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions Links (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4">
              AI Vertical Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {solutionsData.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="text-sm text-zinc-400 hover:text-orange-400 transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{service.shortTitle}</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-orange-400 font-mono">
                    {service.stat}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Doxantro Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-zinc-500">
            <Link href="/contact" className="hover:text-orange-400 transition-colors">
              Enterprise Inquiries
            </Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">
              About Doxantro
            </Link>
            <Link href="/services" className="hover:text-orange-400 transition-colors">
              Architecture & Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}