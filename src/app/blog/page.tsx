import type { Metadata } from 'next';
import { blogPage, company } from '../../content/site';
import PageHeader from '../../components/site/PageHeader';
import Reveal from '../../components/site/Reveal';
import NewsletterForm from '../../components/blog/NewsletterForm';

export const metadata: Metadata = {
  title: 'Field notes',
  description: 'Practical writing from Doxantro on software, data and AI engineering.',
};

export default function BlogPage() {
  return (
    <main id="main">
      <PageHeader title={blogPage.title} intro={blogPage.intro} />

      <section aria-labelledby="themes-title" className="border-t border-line pb-24 pt-14 sm:pb-32 sm:pt-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="themes-title" className="text-sm font-medium tracking-wide text-ink-faint uppercase">
            What we write about
          </h2>

          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {blogPage.pillars.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.title}
                delay={i * 90}
                className="flex flex-col justify-between rounded-2xl border border-line bg-surface/40 p-7 transition-colors hover:border-line-strong"
              >
                <div>
                  <span className="text-xs font-medium tracking-wide text-accent-ink uppercase">
                    {pillar.category}
                  </span>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 max-w-3xl">
            <NewsletterForm />
          </div>

          <p className="mt-10 max-w-xl text-[0.9375rem] leading-relaxed text-ink-muted">
            Have a specific architecture or engineering challenge you&apos;d like us to dissect? Send a topic suggestion to{' '}
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent('Field Notes topic suggestion')}`}
              className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
            >
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
