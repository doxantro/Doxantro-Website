'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { services } from '../../content/site';
import CodePreview from '../site/CodePreview';
import Reveal from '../site/Reveal';

export default function ServicesExplorer() {
  const [active, setActive] = useState<string | null>(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];

  const toggle = (id: string, open: boolean, button: HTMLButtonElement) => {
    setActive(open ? null : id);
    // On narrow screens the panel above may collapse and pull the tapped heading
    // upward; once the 280ms transition settles, bring it back into view.
    if (!open && window.matchMedia('(max-width: 1023px)').matches) {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      window.setTimeout(() => button.scrollIntoView({ block: 'nearest', behavior }), 300);
    }
  };

  return (
    <section id="services" className="scroll-mt-24 border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
            Four kinds of work, one team that owns the outcome.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Most projects need more than one of these. We plan them together so the software, data and AI fit from the
            start.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <ul className="border-t border-line">
            {services.map((service) => {
              const open = service.id === active;
              return (
                <li key={service.id} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={(e) => toggle(service.id, open, e.currentTarget)}
                      aria-expanded={open}
                      aria-controls={`service-${service.id}`}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-opacity duration-150 active:opacity-70"
                    >
                      <span
                        className={`text-2xl font-medium tracking-[-0.02em] transition-colors duration-200 sm:text-[1.75rem] ${
                          open ? 'text-ink' : 'text-ink-faint group-hover:text-ink'
                        }`}
                      >
                        {service.name}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-200 ease-[var(--ease-out)] ${
                          open
                            ? 'rotate-45 border-ink bg-ink text-paper'
                            : 'border-line-strong text-ink-muted group-hover:border-ink group-hover:text-ink'
                        }`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div id={`service-${service.id}`} className="collapse-rows" data-open={open} inert={!open}>
                    <div>
                      <div className="pb-7 pr-2">
                        <p className="max-w-md text-[1.0625rem] leading-relaxed text-ink-muted">{service.summary}</p>
                        <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-[0.9375rem] text-ink">
                              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        {/* Keyed on open so the lines replay each time the panel opens on mobile. */}
                        <CodePreview key={open ? 'open' : 'closed'} service={service} className="mt-7 lg:hidden" />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <CodePreview service={current} />
              <p className="mt-4 text-sm text-ink-faint">Example of what a finished piece of work reports back.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
