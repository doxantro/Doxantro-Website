'use client';

import { useEffect, useRef } from 'react';
import { transformation } from '../../content/site';
import Reveal from '../site/Reveal';

// Each row resolves (strike the "before", light up the "after") as it passes the
// middle of the viewport, so the story reads at the pace of the scroll.
export default function Transformation() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const rows = listRef.current?.querySelectorAll<HTMLElement>('.fix-row');
    if (!rows?.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rows.forEach((r) => (r.dataset.done = 'true'));
      return;
    }
    // Rows start readable in the HTML; only now that the scroll check is running do
    // we dim them so they can resolve on scroll.
    rows.forEach((r) => (r.dataset.done = 'false'));

    // Resolve every row whose top has passed 55% of the viewport. Checking positions
    // (not intersection changes) also catches jumps like End, scrollbar drags or find.
    let frame = 0;
    const check = () => {
      frame = 0;
      const line = window.innerHeight * 0.55;
      let pending = 0;
      rows.forEach((r) => {
        if (r.dataset.done === 'true') return;
        if (r.getBoundingClientRect().top < line) r.dataset.done = 'true';
        else pending++;
      });
      if (!pending) stop();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const stop = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();
    return () => {
      cancelAnimationFrame(frame);
      stop();
    };
  }, []);

  return (
    <section aria-labelledby="transformation-title" className="bg-paper px-3 sm:px-5">
      <div data-nav-theme="dark" className="mx-auto max-w-[90rem] rounded-[28px] bg-night py-24 sm:py-32 text-night-ink">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <h2
              id="transformation-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em]"
            >
              {transformation.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-night-muted">{transformation.body}</p>
          </Reveal>

          <div aria-hidden="true" className="mt-16 hidden grid-cols-[1fr_auto_1fr] gap-8 border-b border-night-line pb-4 text-sm text-night-muted md:grid">
            <span>Before</span>
            <span className="w-3" />
            <span>After</span>
          </div>

          <ol ref={listRef} className="mt-4 md:mt-0">
            {transformation.rows.map((row) => (
              <li
                key={row.before}
                className="fix-row grid gap-3 border-b border-night-line py-7 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-9"
              >
                <p className="text-lg leading-snug text-night-ink sm:text-xl">
                  <span className="mb-1 block text-sm text-night-muted md:sr-only">Before</span>
                  <span className="before-text">{row.before}</span>
                </p>
                <span aria-hidden="true" className="fix-dot hidden h-3 w-3 rounded-full bg-night-ink/20 md:block" />
                <p className="after-text text-lg leading-snug text-night-ink sm:text-xl">
                  <span className="mb-1 block text-sm text-accent md:sr-only">After</span>
                  {row.after}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
