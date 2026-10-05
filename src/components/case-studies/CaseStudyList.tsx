'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { exampleEngagements } from '../../content/site';

const sectors = ['All', ...Array.from(new Set(exampleEngagements.map((e) => e.sector)))];

export default function CaseStudyList() {
  const [sector, setSector] = useState('All');
  const items = sector === 'All' ? exampleEngagements : exampleEngagements.filter((e) => e.sector === sector);

  return (
    <div>
      <div role="group" aria-label="Filter by industry" className="flex flex-wrap gap-2">
        {sectors.map((s) => {
          const active = s === sector;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSector(s)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-[0.9375rem] transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] ${
                active ? 'border-ink bg-ink text-paper' : 'border-line-strong bg-surface text-ink hover:border-ink/40'
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {items.length} {items.length === 1 ? 'example' : 'examples'}
      </p>

      <ul key={sector} className="mt-10 border-t border-line">
        {items.map((cs) => (
          <li
            key={cs.slug}
            id={cs.slug}
            className="grid scroll-mt-24 animate-[fade-up-sm_0.35s_var(--ease-out)_both] gap-10 border-b border-line py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-16"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="text-ink-muted">{cs.sector}</span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-ink">
                  Example scenario
                </span>
              </div>
              <h2 className="mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-ink">
                {cs.title}
              </h2>
              <dl className="mt-7 space-y-3 text-[0.9375rem]">
                <div className="grid grid-cols-[6rem_1fr] gap-3">
                  <dt className="text-ink-faint">Client</dt>
                  <dd className="text-ink">{cs.client}</dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-3">
                  <dt className="text-ink-faint">Duration</dt>
                  <dd className="text-ink">{cs.duration}</dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-3">
                  <dt className="text-ink-faint">Team</dt>
                  <dd className="text-ink">{cs.team}</dd>
                </div>
              </dl>
            </div>

            <div>
              <dl className="grid gap-7 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-ink-faint">The problem</dt>
                  <dd className="mt-2 text-[1.0625rem] leading-relaxed text-ink-muted">{cs.problem}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-faint">The approach</dt>
                  <dd className="mt-2 text-[1.0625rem] leading-relaxed text-ink-muted">{cs.approach}</dd>
                </div>
              </dl>

              <div className="mt-9 rounded-2xl border border-line bg-surface p-6 sm:p-7">
                <h3 className="text-sm text-ink-faint">Illustrative results</h3>
                <dl className="mt-5 grid grid-cols-2 gap-6">
                  {cs.figures.map((f) => (
                    <div key={f.label}>
                      <dt className="sr-only">{f.label}</dt>
                      <dd>
                        <span className="block text-4xl font-semibold tracking-[-0.03em] text-ink tabular-nums">
                          {f.value}
                          <span className="align-super text-sm font-medium text-accent-ink">*</span>
                        </span>
                        <span aria-hidden="true" className="mt-1 block text-sm leading-snug text-ink-muted">
                          {f.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-6 space-y-1.5 border-t border-line pt-5 text-[0.9375rem] text-ink-muted">
                  {cs.moreResults.map((r) => (
                    <li key={r}>
                      {r}
                      {/\d/.test(r) && <span className="text-accent-ink">*</span>}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {cs.technologies.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-ink-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?subject=${encodeURIComponent(`Similar project: ${cs.title}`)}`}
                  className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
                >
                  Discuss a similar project
                  <span className="sr-only">: {cs.title}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-px group-hover:translate-x-px"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-ink-faint">
        * Illustrative figure for an example scenario, not a measured client result. The clients described are examples, not
        real organisations.
      </p>
    </div>
  );
}
