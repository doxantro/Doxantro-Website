'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles, Menu, X } from 'lucide-react';
import ScrollProgress from './ui/ScrollProgress';
import Button from './ui/Button';
import Badge from './ui/Badge';
import SolutionIcon from './ui/SolutionIcon';
import { solutionsData } from '../data/solutionsData';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
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
    }, 180);
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-md shadow-zinc-900/5 border-b border-zinc-200/80 py-2.5'
            : 'bg-white/70 backdrop-blur-md border-b border-zinc-200/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group focus:outline-none"
            >
              <div className="relative overflow-hidden rounded-xl border border-zinc-200 shadow-sm group-hover:border-orange-500/50 transition-colors">
                <Image
                  src="/dox1.jpg"
                  alt="Doxantro Systems"
                  width={42}
                  height={42}
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 group-hover:text-orange-600 transition-colors">
                  Doxantro <span className="text-orange-600">Systems</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-zinc-600 -mt-1 hidden sm:block">
                  Think · Build · Solve
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-orange-600 bg-orange-50/80 font-semibold'
                    : 'text-zinc-700 hover:text-orange-600 hover:bg-zinc-50'
                }`}
              >
                Home
              </Link>

              {/* Solutions Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterSolutions}
                onMouseLeave={handleMouseLeaveSolutions}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    pathname.startsWith('/ai-')
                      ? 'text-orange-600 bg-orange-50/80 font-semibold'
                      : 'text-zinc-700 hover:text-orange-600 hover:bg-zinc-50'
                  }`}
                  aria-expanded={isSolutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSolutionsOpen ? 'rotate-180 text-orange-600' : 'text-zinc-400'
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-3xl border border-zinc-200/90 bg-white/95 backdrop-blur-2xl p-6 shadow-2xl shadow-zinc-900/10 z-50 overflow-hidden"
                    >
                      {/* Ambient header inside mega menu */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-orange-600" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                            Enterprise AI Solutions by Industry
                          </span>
                        </div>
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 group"
                        >
                          View All Capabilities
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>

                      {/* 2-column Grid of Solutions */}
                      <div className="grid grid-cols-2 gap-3">
                        {solutionsData.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className="group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-orange-50/60 border border-transparent hover:border-orange-200/60"
                          >
                            <div className="p-2.5 rounded-xl bg-orange-100/70 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">
                              <SolutionIcon name={item.iconName} className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors">
                                  {item.shortTitle}
                                </h4>
                                {item.badge && (
                                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 group-hover:bg-orange-100 group-hover:text-orange-700">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-zinc-600 line-clamp-2 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Footer Banner */}
                      <div className="mt-4 pt-4 border-t border-zinc-100 bg-gradient-to-r from-orange-50/80 to-amber-50/50 -mx-6 -mb-6 p-4 px-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="orange" dot pulse size="sm">
                            Custom Solutions
                          </Badge>
                          <span className="text-xs text-zinc-600">
                            Need a proprietary AI model trained on your private enterprise data?
                          </span>
                        </div>
                        <Link
                          href="/contact"
                          className="text-xs font-semibold text-orange-600 hover:text-orange-700 whitespace-nowrap"
                        >
                          Talk to an AI Architect →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-orange-600 bg-orange-50/80 font-semibold'
                      : 'text-zinc-700 hover:text-orange-600 hover:bg-zinc-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Header Right Action */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button href="/contact" size="sm" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Start Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-zinc-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-zinc-200 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
                <Link
                  href="/"
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    pathname === '/' ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-zinc-800'
                  }`}
                >
                  Home
                </Link>

                {/* Mobile Solutions Collapsible */}
                <div className="border border-zinc-100 rounded-2xl p-2 bg-zinc-50/60 my-2">
                  <div className="px-3 py-1.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-600">
                    <span>AI Solutions</span>
                    <Badge variant="orange" size="sm">6 Verticals</Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1.5">
                    {solutionsData.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <SolutionIcon name={item.iconName} className="w-4 h-4 text-orange-600" />
                        <span>{item.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      pathname === link.href ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-zinc-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 px-1">
                  <Button href="/contact" size="md" variant="primary" className="w-full">
                    Start Your Project
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