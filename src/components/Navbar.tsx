'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import ScrollProgress from './ui/ScrollProgress';
import SolutionIcon from './ui/SolutionIcon';
import { solutionsData } from '../data/solutionsData';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Research', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [pathname]);

  const handleMouseEnterSolutions = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsSolutionsOpen(true);
  };

  const handleMouseLeaveSolutions = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 160);
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_8px_rgba(0,0,0,0.03)] py-2.5 sm:py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-black/[0.05] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Brand Lettermark */}
            <Link
              href="/"
              className="flex items-center space-x-2 group focus:outline-none flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-md border border-zinc-200/80 bg-zinc-950 p-0.5 flex-shrink-0">
                <Image
                  src="/dox1.jpg"
                  alt="Doxantro Systems"
                  width={26}
                  height={26}
                  className="rounded-[3px] object-cover"
                  priority
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold tracking-tight text-[#111111] text-sm sm:text-base md:text-lg">
                  DOXANTRO
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-400 uppercase hidden xs:inline sm:inline">
                  SYSTEMS
                </span>
              </div>
            </Link>

            {/* Desktop Centered Pill Menu */}
            <nav className="hidden lg:flex items-center gap-1 border border-black/[0.08] rounded-full px-3 py-1 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-[#111111] bg-zinc-100 font-semibold'
                    : 'text-zinc-600 hover:text-[#111111]'
                }`}
              >
                Overview
              </Link>

              {/* Solutions Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterSolutions}
                onMouseLeave={handleMouseLeaveSolutions}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    pathname.startsWith('/ai-')
                      ? 'text-[#111111] bg-zinc-100 font-semibold'
                      : 'text-zinc-600 hover:text-[#111111]'
                  }`}
                  aria-expanded={isSolutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      isSolutionsOpen ? 'rotate-180 text-zinc-900' : 'text-zinc-400'
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-50 overflow-hidden"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                        <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-500">
                          ■ Production AI Verticals
                        </span>
                        <Link
                          href="/services"
                          className="text-xs font-medium text-zinc-900 hover:text-orange-600 flex items-center gap-1 group"
                        >
                          All Capabilities
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>

                      {/* 2-column Grid of Solutions */}
                      <div className="grid grid-cols-2 gap-2">
                        {solutionsData.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-zinc-50 border border-transparent hover:border-black/[0.06]"
                          >
                            <div className="p-2 rounded-lg bg-zinc-100 text-zinc-800 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                              <SolutionIcon name={item.iconName} className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors">
                                  {item.shortTitle}
                                </h4>
                                {item.badge && (
                                  <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-zinc-100 text-zinc-600">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Bottom Bar */}
                      <div className="mt-3 pt-3 border-t border-black/[0.06] flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          Custom model training on sovereign enterprise infrastructure
                        </span>
                        <Link
                          href="/contact"
                          className="text-xs font-medium text-zinc-900 hover:text-orange-600 flex items-center gap-1"
                        >
                          Scoping questionnaire →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-[#111111] bg-zinc-100 font-semibold'
                      : 'text-zinc-600 hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-md"
              >
                <span>Get Started</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -mr-1 rounded-lg text-zinc-800 hover:bg-zinc-100 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-b border-black/[0.08] overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <Link
                  href="/"
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === '/' ? 'bg-zinc-100 text-[#111111] font-semibold' : 'text-zinc-700'
                  }`}
                >
                  Overview
                </Link>

                <div className="border border-black/[0.06] rounded-xl p-2.5 bg-zinc-50 my-2">
                  <div className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase text-zinc-500">
                    ■ AI Verticals
                  </div>
                  <div className="grid grid-cols-1 gap-1 mt-1">
                    {solutionsData.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-zinc-700 hover:bg-white transition-colors"
                      >
                        <SolutionIcon name={item.iconName} className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                        <span className="truncate">{item.shortTitle}</span>
                        <span className="text-[10px] font-mono text-zinc-400 ml-auto">{item.stat}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href ? 'bg-zinc-100 text-[#111111] font-semibold' : 'text-zinc-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#111111] text-white text-xs font-medium text-center"
                  >
                    <span>Get Started</span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}