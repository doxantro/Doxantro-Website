import type { Metadata } from 'next';
import { blogPage, company } from '../../content/site';
import PageHeader from '../../components/site/PageHeader';
import AccentLink from '../../components/site/AccentLink';
import Reveal from '../../components/site/Reveal';

export const metadata: Metadata = {
  title: 'Field notes',
  description: 'Practical writing from Doxantro on software, data and AI engineering.',
};

const notifyHref = `mailto:${company.email}?subject=${encodeURIComponent('Notify me about new Doxantro articles')}`;

export default function BlogPage() {
  return (
    <main id="main">
      <PageHeader title={blogPage.title} intro={blogPage.intro}>
        <AccentLink href={notifyHref}>Email me when articles go live</AccentLink>
      </PageHeader>

      <section aria-labelledby="topics-title" className="border-t border-line pb-24 pt-14 sm:pb-32 sm:pt-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="topics-title" className="text-sm text-ink-faint">
            Planned topics
          </h2>
          <ul className="mt-5 grid border-t border-line md:grid-cols-2">
            {blogPage.topics.map((t, i) => (
              <Reveal
                as="li"
                key={t.title}
                delay={(i % 2) * 80}
                className="border-b border-line py-9 md:odd:border-r md:odd:pr-10 md:even:pl-10"
              >
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-accent-ink">{t.category}</span>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-faint">Planned</span>
                </div>
                <h3 className="mt-4 text-2xl font-medium leading-snug tracking-[-0.02em] text-ink">{t.title}</h3>
                <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-ink-muted">{t.body}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-[0.9375rem] leading-relaxed text-ink-muted">
            Want us to write about something specific? Send a topic to{' '}
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent('Article suggestion')}`}
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
