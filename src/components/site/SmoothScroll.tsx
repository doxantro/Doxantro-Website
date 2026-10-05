'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

// Inertial page scroll for wheel and trackpad. Skipped entirely when the visitor
// prefers reduced motion; Lenis leaves touch scrolling native by default.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.95,
      // Lenis already honours each target's scroll-margin-top (scroll-mt-24), so no extra offset.
      anchors: true,
    });
    window.__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // On a route change Next has already put the page where it belongs (top for a new
  // page, the saved position for Back/Forward). Resync Lenis to that position so a
  // smooth scroll left over from the previous page cannot drag it elsewhere.
  useEffect(() => {
    const lenis = window.__lenis;
    if (!lenis) return;
    const frame = requestAnimationFrame(() => lenis.scrollTo(window.scrollY, { immediate: true, force: true }));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
