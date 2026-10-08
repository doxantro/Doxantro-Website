import { Suspense } from 'react';
import type { Metadata } from 'next';
import { company, contactPage } from '../../content/site';
import PageHeader from '../../components/site/PageHeader';
import Reveal from '../../components/site/Reveal';
import ContactForm from '../../components/contact/ContactForm';
import Faq from '../../components/home/Faq';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Doxantro. Tell us what needs building and we reply within 24 hours.',
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader title={contactPage.title} intro={contactPage.intro} />

      <section aria-label="Contact form" className="border-t border-line pb-24 pt-14 sm:pb-32 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-sm text-ink-faint">Prefer email?</h2>
            <a
              href={`mailto:${company.email}`}
              className="mt-2 inline-block text-2xl font-medium tracking-[-0.02em] text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              {company.email}
            </a>

            <h2 className="mt-14 text-sm text-ink-faint">What happens next</h2>
            <ol className="mt-4 border-t border-line">
              {contactPage.next.map((item, i) => (
                <li key={item.step} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line py-5">
                  <span className="font-mono text-sm text-ink-faint tabular-nums">{i + 1}</span>
                  <div>
                    <p className="font-medium text-ink">{item.step}</p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <Suspense fallback={<div className="h-[52rem] rounded-2xl border border-line bg-surface" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <Faq />
    </main>
  );
}
