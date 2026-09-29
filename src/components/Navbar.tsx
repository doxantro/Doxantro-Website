'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import ScrollProgress from './ui/ScrollProgress';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'How it works', href: '/#product-vision' },
  { name: 'Industries', href: '/#industries' },
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/blog' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <>
      <ScrollProgress />
      <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-200 ${isScrolled ? 'border-black/[0.07] bg-[#fbfaf6]/95 py-2 shadow-[0_3px_18px_rgba(31,28,18,.04)] backdrop-blur-xl' : 'border-transparent bg-[#fbfaf6]/90 py-3 backdrop-blur-md'}`}>
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c79200]">
            <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-black/10 bg-zinc-950">
              <Image src="/dox1.jpg" alt="" fill sizes="36px" className="object-cover" priority />
            </span>
            <span className="text-[15px] font-bold tracking-[-0.03em] text-zinc-950">Doxantro</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c79200]">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden min-h-11 items-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8d6800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c79200] focus-visible:ring-offset-2 sm:inline-flex">
              Let&apos;s talk
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white text-zinc-900 lg:hidden"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-black/[0.06] bg-[#fbfaf6] lg:hidden"
            >
              <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="rounded-xl px-3 py-3 text-base font-medium text-zinc-800 hover:bg-white">
                    {link.name}
                  </Link>
                ))}
                <Link href="/contact" className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white">
                  Let&apos;s talk
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
