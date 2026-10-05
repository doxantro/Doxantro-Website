import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { careersPage, company, contentVariant, exampleRoles } from '../../content/site';
import PageHeader from '../../components/site/PageHeader';
import AccentLink from '../../components/site/AccentLink';
import Reveal from '../../components/site/Reveal';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Work at Doxantro: engineers and domain specialists building software, data and AI systems people rely on.',
};

// type=application tells the contact form to ask applicant questions instead of project ones.
const applyHref = (subject: string) => `/contact?type=application&subject=${encodeURIComponent(subject)}`;

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-medium text-paper transition-[transform,background-color] duration-200 hover:bg-black active:scale-[0.97]"
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-px group-hover:translate-x-px"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function CareersPage() {
  const showRoles = contentVariant === 'illustrative';

  return (
    <main id="main">
      <PageHeader title={careersPage.title} intro={careersPage.intro}>
        <AccentLink href={applyHref('Open application')}>Send an open application</AccentLink>
      </PageHeader>

      <section aria-labelledby="why-title" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2
              id="why-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              What working here is like.
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {careersPage.why.map((item, i) => (
              <Reveal key={item.name} delay={i * 70} className="border-t border-line py-7">
                <dt className="text-xl font-medium tracking-[-0.015em] text-ink">{item.name}</dt>
                <dd className="mt-2 text-[1.0625rem] leading-relaxed text-ink-muted">{item.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section id="roles" aria-labelledby="roles-title" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2
              id="roles-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              {showRoles ? 'Roles we hire for.' : 'Open roles.'}
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-muted">
              {showRoles
                ? 'The kinds of positions our projects need. Ask us which are open right now.'
                : 'We post specific roles here when projects need them. An open application is always welcome.'}
            </p>
          </Reveal>

          {showRoles ? (
            <ul className="border-t border-line">
              {exampleRoles.map((role, i) => (
                <Reveal as="li" key={role.title} delay={i * 60} className="border-b border-line">
                  <Link
                    href={applyHref(`Application for ${role.title}`)}
                    className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 py-7"
                  >
                    <span className="text-2xl font-medium tracking-[-0.02em] text-ink">{role.title}</span>
                    <ArrowUpRight
                      className="row-span-3 mt-2 h-5 w-5 text-ink-faint transition-[transform,color] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-ink-faint">
                      {role.team} · {role.experience} · Remote or hybrid
                    </span>
                    <span className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">{role.body}</span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <div>
                <p className="text-2xl font-medium tracking-[-0.02em] text-ink">No listed openings right now.</p>
                <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-ink-muted">
                  Software, data and AI engineers, designers and domain specialists: tell us what you do best and we will
                  reach out when there is a fit.
                </p>
              </div>
              <PrimaryLink href={applyHref('Open application')}>Send an open application</PrimaryLink>
            </Reveal>
          )}
        </div>
      </section>

      <section aria-labelledby="hiring-title" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2
              id="hiring-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              How hiring works.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
            {careersPage.hiring.map((stage, i) => (
              <Reveal as="li" key={stage.step} delay={i * 80}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong font-mono text-sm text-ink tabular-nums">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em] text-ink">{stage.step}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-muted">{stage.body}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-14 text-[0.9375rem] text-ink-muted">
            Questions first? Write to{' '}
            <a href={`mailto:${company.email}`} className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
