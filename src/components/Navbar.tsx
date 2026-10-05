'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '../content/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const pathname = usePathname();

  // Track whether a dark panel sits behind the bar, so the pill can switch to a
  // dark surface instead of blending into a muddy grey over it.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const probeY = 44;
      const dark = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]')).some((el) => {
        if (el.closest('header')) return false; // the bar itself carries the attribute when dark
        const r = el.getBoundingClientRect();
        return r.top <= probeY && r.bottom >= probeY;
      });
      setOverDark(dark);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Accordions, filters and late content change the page height without scrolling.
    const ro = new ResizeObserver(onScroll);
    ro.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  const dark = overDark && !open;

  useEffect(() => setOpen(false), [pathname]);

  // The mobile menu has no toggle at desktop widths, so close it if the window grows.
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)');
    const onChange = () => wide.matches && setOpen(false);
    wide.addEventListener('change', onChange);
    return () => wide.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      // The menu unmounts, so return focus to the button that opened it.
      toggleRef.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`pointer-events-auto mx-auto max-w-6xl rounded-[22px] border transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-[var(--ease-out)] ${
          open
            ? 'border-line bg-surface shadow-[0_16px_40px_-16px_rgba(20,20,18,0.35)]'
            : dark
              ? 'border-night-line bg-night-raised/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl'
              : scrolled
                ? 'border-line bg-surface/85 shadow-[0_8px_30px_-12px_rgba(20,20,18,0.18)] backdrop-blur-xl'
                : 'border-transparent bg-transparent'
        }`}
        data-nav-theme={dark ? 'dark' : undefined}
      >
        <div className="flex h-14 items-center justify-between gap-4 pl-4 pr-2">
          <Link href="/" aria-label="Doxantro home" className="relative flex shrink-0 items-center rounded-lg">
            {/* Both wordmarks are stacked and crossfaded, so switching themes never flashes. */}
            <Image
              src="/doxantro-logo.png"
              alt="Doxantro"
              width={587}
              height={158}
              priority
              className={`h-8 w-auto transition-opacity duration-300 ease-[var(--ease-out)] ${dark ? 'opacity-0' : 'opacity-100'}`}
            />
            <Image
              src="/doxantro-logo-light.png"
              alt=""
              aria-hidden="true"
              width={587}
              height={158}
              priority
              className={`absolute inset-0 h-8 w-auto transition-opacity duration-300 ease-[var(--ease-out)] ${dark ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-200 ${
                  dark
                    ? 'text-night-muted hover:bg-night-ink/10 hover:text-night-ink'
                    : 'text-ink-muted hover:bg-ink/[0.05] hover:text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`group hidden h-10 items-center gap-1.5 rounded-full pl-4 pr-3.5 text-[0.9375rem] font-medium transition-[transform,background-color,color] duration-200 active:scale-[0.97] sm:inline-flex ${
                dark ? 'bg-paper text-ink hover:bg-surface' : 'bg-ink text-paper hover:bg-black'
              }`}
            >
              Start a project
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden="true"
              />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls={open ? 'mobile-nav' : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-[background-color,transform] duration-150 active:scale-[0.94] md:hidden ${
                dark ? 'text-night-ink hover:bg-night-ink/10' : 'text-ink hover:bg-ink/[0.06]'
              }`}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* reducedMotion="user" makes the menu open and close instantly when the visitor asks for less motion. */}
        <MotionConfig reducedMotion="user">
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: [0.7, 0, 0.84, 0] } }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-0.5 px-2 pb-3 pt-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-3 py-3 text-lg text-ink transition-colors hover:bg-ink/[0.05]"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex h-12 items-center justify-center gap-1.5 rounded-full bg-ink text-base font-medium text-paper"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        </MotionConfig>
      </div>
    </header>
  );
}
