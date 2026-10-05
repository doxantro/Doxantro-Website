import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company } from '../../content/site';
import Reveal from '../site/Reveal';

export default function ClosingCta() {
  return (
    <section className="bg-paper px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate mx-auto max-w-[90rem] overflow-hidden rounded-[28px] bg-accent">
        {/* The logo ring's yellow end, glowing out of its orange. Mixed in oklab so the
            fade stays clean instead of dulling at the midpoint. */}
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side_in_oklab,var(--accent-glow)_0%,transparent_100%)] opacity-70"
        />
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="max-w-[16ch] text-[clamp(2.5rem,6.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-ink">
              Have something that needs building?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
              Tell us what you are trying to fix. We reply with questions, a first view on approach and who you would work
              with.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-medium text-paper transition-[transform,background-color] duration-200 hover:bg-black active:scale-[0.97]"
              >
                Start a project
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-px group-hover:translate-x-px"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex h-12 items-center justify-center rounded-full px-5 text-base font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
              >
                {company.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
