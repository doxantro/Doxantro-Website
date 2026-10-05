import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industryPages, services, type Industry } from '../../content/site';
import PageHeader from '../site/PageHeader';
import Reveal from '../site/Reveal';
import ExampleEngagements from '../home/ExampleEngagements';
import ClosingCta from '../home/ClosingCta';

const serviceName = Object.fromEntries(services.map((s) => [s.id, s.name]));

export default function IndustryPage({ industry }: { industry: Industry }) {
  const others = industryPages.filter((i) => i.slug !== industry.slug);

  return (
    <main id="main">
      <PageHeader title={industry.title} intro={industry.intro}>
        <p className="text-[0.9375rem] text-ink-muted">
          <span className="text-ink-faint">Built for </span>
          {industry.idealFor.join(' · ')}
        </p>
      </PageHeader>

      <section aria-labelledby="use-cases-title" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2
              id="use-cases-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              What we build for {industry.name.toLowerCase()} teams.
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-muted">
              Each one draws on one or more of our four services, planned together by the same team.
            </p>
          </Reveal>

          <ul className="border-t border-line">
            {industry.useCases.map((uc, i) => (
              <Reveal as="li" key={uc.name} delay={i * 60} className="border-b border-line py-7">
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-ink">{uc.name}</h3>
                <p className="mt-2 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">{uc.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Services involved">
                  {uc.services.map((id) => (
                    <li key={id}>
                      <Link
                        href={`/services#${id}`}
                        className="inline-flex rounded-full border border-line-strong px-3 py-1 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
                      >
                        {serviceName[id]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="aims-title" className="bg-paper px-3 sm:px-5">
      <div data-nav-theme="dark" className="mx-auto max-w-[90rem] rounded-[28px] bg-night py-20 sm:py-28 text-night-ink">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 id="aims-title" className="max-w-xl text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
                What the work is for.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-night-line sm:grid-cols-2 lg:grid-cols-4">
              {industry.aims.map((aim, i) => (
                <Reveal as="li" key={aim} delay={i * 80} className="bg-night p-7">
                  <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-accent" />
                  <p className="mt-8 text-xl font-medium leading-snug tracking-[-0.015em]">{aim}</p>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-sm text-night-muted">
              These are the goals we design towards and agree with you up front. We measure against them together.
            </p>
          </div>
      </div>
    </section>

      {industry.exampleSector && <ExampleEngagements sector={industry.exampleSector} />}

      <section aria-labelledby="other-industries-title" className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="other-industries-title" className="text-sm text-ink-faint">
            Other industries
          </h2>
          <ul className="mt-5 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <li key={o.slug} className="border-b border-line lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-5">
                <Link
                  href={`/${o.slug}`}
                  className="group flex items-center justify-between gap-3 py-5 text-lg font-medium text-ink"
                >
                  {o.name}
                  <ArrowUpRight
                    className="h-4 w-4 text-ink-faint transition-[transform,color] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink lg:mr-5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
