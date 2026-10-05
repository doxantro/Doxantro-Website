import Link from 'next/link';
import { contentVariant, exampleEngagements } from '../../content/site';
import Reveal from '../site/Reveal';

// Illustrative variant only. Every scenario and figure is labelled as illustrative.
export default function ExampleEngagements({ sector, limit = 3 }: { sector?: string; limit?: number } = {}) {
  if (contentVariant !== 'illustrative') return null;
  const items = (sector ? exampleEngagements.filter((e) => e.sector === sector) : exampleEngagements).slice(0, limit);
  if (!items.length) return null;

  return (
    <section aria-labelledby="examples-title" className="border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2
            id="examples-title"
            className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
          >
            What an engagement can look like.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink-muted md:justify-self-end">
            Example scenarios that show the shape of the work. Scenarios and figures are illustrative, not verified client results.
          </p>
        </Reveal>

        <div className={`mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${items.length > 1 ? 'md:grid-cols-3' : 'max-w-xl'}`}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} as="article" className="flex flex-col bg-surface p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-ink-muted">{item.sector}</span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-ink">
                  Example scenario
                </span>
              </div>
              <h3 className="mt-8 text-xl font-medium leading-snug tracking-[-0.015em] text-ink">{item.title}</h3>
              <dl className="mb-8 mt-5 space-y-4 text-[0.9375rem] leading-relaxed">
                <div>
                  <dt className="text-ink-faint">Problem</dt>
                  <dd className="mt-1 text-ink-muted">{item.problem}</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Approach</dt>
                  <dd className="mt-1 text-ink-muted">{item.approach}</dd>
                </div>
              </dl>
              <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-line pt-6">
                {item.figures.map((f) => (
                  <div key={f.label}>
                    <dt className="sr-only">{f.label}</dt>
                    <dd>
                      <span className="block text-3xl font-semibold tracking-[-0.03em] text-ink tabular-nums">
                        {f.value}
                        <span className="align-super text-sm font-medium text-accent-ink">*</span>
                      </span>
                      <span aria-hidden="true" className="mt-1 block min-h-[2.6em] text-sm leading-snug text-ink-muted">
                        {f.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-faint">* Illustrative figure for an example scenario, not a measured client result.</p>
          <Link
            href={sector ? `/case-studies#${items[0].slug}` : '/case-studies'}
            className="text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
          >
            {sector ? 'Read the full example' : 'See all examples'}
            {sector && <span className="sr-only">: {items[0].title}</span>}
          </Link>
        </div>
      </div>
    </section>
  );
}
