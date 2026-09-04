'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import ScrollProgress from './ui/ScrollProgress';
import Button from './ui/Button';
import { solutionsData } from '../data/solutionsData';

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
    }, 150);
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] py-3 shadow-[0_1px_8px_rgba(0,0,0,0.03)]'
            : 'bg-white/80 backdrop-blur-sm border-b border-black/[0.06] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between relative h-10">
            {/* Left: Brand Wordmark */}
            <Link
              href="/"
              className="flex items-center space-x-2.5 flex-shrink-0 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-black/10 shadow-xs flex items-center justify-center bg-zinc-900">
                <Image
                  src="/dox1.jpg"
                  alt="Doxantro"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-semibold text-lg tracking-tight text-[#111111]">
                  Doxantro
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-medium hidden sm:inline-block">
                  Systems
                </span>
              </div>
            </Link>

            {/* Center: bachs.io-style Floating Dock Pill */}
            <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 border border-black/[0.12] rounded-xl bg-white px-2 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <Link
                href="/#features"
                className={`px-3 py-1.5 text-[13px] font-normal transition-colors rounded-lg ${
                  pathname === '/' ? 'text-[#111111] hover:text-black' : 'text-zinc-600 hover:text-black'
                }`}
              >
                Features
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterSolutions}
                onMouseLeave={handleMouseLeaveSolutions}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-[13px] font-normal text-zinc-600 hover:text-black transition-colors rounded-lg cursor-pointer"
                  aria-expanded={isSolutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-150 ${
                      isSolutionsOpen ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-black/[0.1] bg-white p-2 shadow-xl shadow-black/5 z-50"
                    >
                      <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                        Industry Verticals
                      </div>
                      <div className="space-y-0.5">
                        {solutionsData.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-normal text-zinc-800 hover:bg-zinc-100/80 transition-colors"
                          >
                            <span>{item.title}</span>
                            <span className="text-[10px] font-mono text-zinc-400">{item.badge}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-1.5 pt-1.5 border-t border-zinc-100">
                        <Link
                          href="/services"
                          className="flex items-center justify-between px-2.5 py-1.5 text-xs font-medium text-orange-600 hover:text-orange-700 transition-colors"
                        >
                          <span>Full Platform Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/case-studies"
                className={`px-3 py-1.5 text-[13px] font-normal transition-colors rounded-lg ${
                  pathname === '/case-studies' ? 'text-[#111111] font-medium' : 'text-zinc-600 hover:text-black'
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/blog"
                className={`px-3 py-1.5 text-[13px] font-normal transition-colors rounded-lg ${
                  pathname === '/blog' ? 'text-[#111111] font-medium' : 'text-zinc-600 hover:text-black'
                }`}
              >
                Research
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 text-[13px] font-normal transition-colors rounded-lg ${
                  pathname === '/about' ? 'text-[#111111] font-medium' : 'text-zinc-600 hover:text-black'
                }`}
              >
                Company
              </Link>
            </nav>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center space-x-3.5 flex-shrink-0">
              <Link
                href="/contact"
                className="text-xs font-normal text-zinc-600 hover:text-[#111111] transition-colors"
              >
                Contact Sales
              </Link>
              <Button href="/contact" size="sm" variant="primary" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Get Started
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
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
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1.5">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-lg text-sm text-zinc-900 font-medium hover:bg-zinc-50"
                >
                  Home
                </Link>
                <div className="px-3 py-2">
                  <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-2">Solutions</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {solutionsData.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="text-xs text-zinc-700 py-1 hover:text-orange-600"
                      >
                        {item.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/services"
                  className="block px-3 py-2 rounded-lg text-sm text-zinc-900 font-medium hover:bg-zinc-50"
                >
                  Services & Capabilities
                </Link>
                <Link
                  href="/case-studies"
                  className="block px-3 py-2 rounded-lg text-sm text-zinc-900 font-medium hover:bg-zinc-50"
                >
                  Case Studies
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 rounded-lg text-sm text-zinc-900 font-medium hover:bg-zinc-50"
                >
                  Research Papers
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-lg text-sm text-zinc-900 font-medium hover:bg-zinc-50"
                >
                  About Doxantro
                </Link>
                <Link
                  href="/careers"
                  className="block px-3 py-2 rounded-lg text-sm text-zinc-900 font-medium hover:bg-zinc-50"
                >
                  Careers
                </Link>
                <div className="pt-3">
                  <Button href="/contact" size="md" variant="primary" className="w-full">
                    Get Started →
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}