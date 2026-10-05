import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { contentVariant, services } from '../../content/site';
import PageHeader from '../../components/site/PageHeader';
import Reveal from '../../components/site/Reveal';
import CaseStudyList from '../../components/case-studies/CaseStudyList';
import Process from '../../components/home/Process';
import ClosingCta from '../../components/home/ClosingCta';

export const metadata: Metadata = {
  title: 'Case studies',
  description: 'How Doxantro engagements run, from the problem to the system in production.',
};

// Lean: no case studies until real, client-approved ones exist.
function LeanCaseStudies() {
  return (
    <>
      <PageHeader
        title="Case studies, published with permission."
        intro="We publish a case study only once a project has shipped and the client has agreed to share it. Until then, here is what we build and how we work."
      />
      <section aria-labelledby="meanwhile-title" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-16">
          <Reveal>
            <h2
              id="meanwhile-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              What we can build for you.
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-muted">
              Tell us about your project and we will explain how we would approach it.
            </p>
          </Reveal>
          <ul className="border-t border-line">
            {services.map((s) => (
              <li key={s.id} className="border-b border-line">
                <Link href={`/services#${s.id}`} className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-6">
                  <span className="text-xl font-medium tracking-[-0.015em] text-ink">{s.name}</span>
                  <ArrowUpRight
                    className="row-span-2 h-5 w-5 text-ink-faint transition-[transform,color] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-muted">{s.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Process />
    </>
  );
}

function IllustrativeCaseStudies() {
  return (
    <>
      <PageHeader
        title="What an engagement can look like."
        intro="Four example scenarios that show the shape of our work: the problem, the approach, the team and the kind of result we aim for. They are illustrations, not client results."
      />
      <section aria-label="Example engagements" className="border-t border-line pb-24 pt-14 sm:pb-32 sm:pt-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CaseStudyList />
        </div>
      </section>
    </>
  );
}

export default function CaseStudiesPage() {
  return (
    <main id="main">
      {contentVariant === 'illustrative' ? <IllustrativeCaseStudies /> : <LeanCaseStudies />}
      <ClosingCta />
    </main>
  );
}
