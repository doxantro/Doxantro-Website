'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../../content/site';
import Reveal from '../site/Reveal';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
        <Reveal>
          <h2
            id="faq-title"
            className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
          >
            Questions we hear first.
          </h2>
        </Reveal>

        <ul className="border-t border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-opacity duration-150 active:opacity-70 text-lg font-medium tracking-[-0.01em] text-ink sm:text-xl"
                  >
                    {item.q}
                    <Plus
                      className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 ease-[var(--ease-out)] group-hover:text-ink ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={`faq-${i}`} className="collapse-rows" data-open={isOpen} inert={!isOpen}>
                  <div>
                    <p className="max-w-xl pb-7 text-[1.0625rem] leading-relaxed text-ink-muted">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
