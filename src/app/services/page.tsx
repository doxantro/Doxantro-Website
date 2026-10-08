import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { engagementModels, serviceDetail, services, servicesPage } from '../../content/site';
import PageHeader from '../../components/site/PageHeader';
import CodePreview from '../../components/site/CodePreview';
import Reveal from '../../components/site/Reveal';
import Process from '../../components/home/Process';
import ExampleEngagements from '../../components/home/ExampleEngagements';
import ClosingCta from '../../components/home/ClosingCta';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Software builds, AI integration, data engineering and infrastructure — designed, built and run by one Doxantro team.',
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader title={servicesPage.title} intro={servicesPage.intro}>
        <nav aria-label="Services on this page" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-line-strong bg-surface px-4 py-2 text-[0.9375rem] text-ink transition-[transform,background-color,border-color] duration-200 hover:border-ink active:scale-[0.97]"
            >
              {s.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      {services.map((service) => {
        const detail = serviceDetail[service.id];
        return (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-title`}
            className="scroll-mt-24 border-t border-line py-20 sm:py-28"
          >
            <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <h2
                  id={`${service.id}-title`}
                  className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
                >
                  {service.name}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">{service.summary}</p>
                <CodePreview service={service} className="mt-10 max-w-lg" />
              </Reveal>

              <div className="space-y-12">
                <Reveal>
                  <h3 className="text-sm text-ink-faint">A good fit when</h3>
                  <ul className="mt-4 border-t border-line">
                    {detail.fit.map((item) => (
                      <li key={item} className="border-b border-line py-4 text-[1.0625rem] leading-relaxed text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal>
                  <h3 className="text-sm text-ink-faint">What we deliver</h3>
                  <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-[1.0625rem] text-ink">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal className="rounded-2xl bg-accent-soft p-6 sm:p-7">
                  <h3 className="text-sm text-accent-ink">What you end up with</h3>
                  <p className="mt-2 text-xl font-medium leading-snug tracking-[-0.015em] text-ink">{detail.outcome}</p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section aria-labelledby="models-title" className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2
              id="models-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              Three ways to work with us.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Pick the shape that matches the problem. Many clients start with an assessment and move to a project.
            </p>
          </Reveal>
          <div className="mt-14 grid border-t border-line md:grid-cols-3">
            {engagementModels.map((model, i) => (
              <Reveal
                key={model.name}
                delay={i * 80}
                className="border-b border-line py-8 md:border-b-0 md:pr-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-8"
              >
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-ink">{model.name}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-muted">{model.body}</p>
                <p className="mt-6 text-sm text-ink-faint">Best for</p>
                <p className="mt-1 text-[0.9375rem] text-ink">{model.bestFor}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <ExampleEngagements />
      <ClosingCta />
    </main>
  );
}
