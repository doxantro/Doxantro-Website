import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '../../content/site';
import Reveal from '../site/Reveal';

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
            Sectors where we know the ground.
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-muted">
            The engineering is the same everywhere. Knowing the data, rules and people in a sector is what makes it land.
          </p>
        </Reveal>

        <ul className="border-t border-line">
          {industries.map((industry) => (
            <li key={industry.name} className="border-b border-line">
              <Link
                href={industry.href}
                className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-6 sm:grid-cols-[11rem_1fr_auto]"
              >
                <span className="col-start-1 row-start-1 text-xl font-medium tracking-[-0.015em] text-ink transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-2">{industry.name}</span>
                <span className="col-span-2 col-start-1 row-start-2 text-[0.9375rem] text-ink-muted sm:col-span-1 sm:col-start-2 sm:row-start-1">
                  {industry.body}
                </span>
                <ArrowUpRight
                  className="col-start-2 row-start-1 h-5 w-5 text-ink-faint sm:col-start-3 transition-[transform,color] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
