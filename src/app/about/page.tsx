import type { Metadata } from 'next';
import { aboutPage, company, teamGroups, values } from '../../content/site';
import PageHeader from '../../components/site/PageHeader';
import Reveal from '../../components/site/Reveal';
import ClosingCta from '../../components/home/ClosingCta';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Doxantro builds software, data and AI systems that serve the people who use them. Our story, mission, vision and values.',
};

// The mantra's three verbs, each tied to a stage of the work.
const mantraParts = [
  { word: 'Think.', body: 'Understand the operation, the data and the people before writing code.' },
  { word: 'Build.', body: 'Ship working software in small steps that people can see and steer.' },
  { word: 'Solve.', body: 'Measure whether it fixed the problem, then keep it running.' },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader title={aboutPage.title} intro={aboutPage.intro} />

      <section aria-labelledby="story-title" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <h2
              id="story-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              Why we started.
            </h2>
          </Reveal>
          <Reveal className="space-y-6">
            {aboutPage.story.map((p) => (
              <p key={p} className="max-w-[60ch] text-xl leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission and vision as two large statements, not cards. */}
      <section aria-label="Mission and vision" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          {[
            { label: 'Mission', text: aboutPage.mission },
            { label: 'Vision', text: aboutPage.vision },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <h2 className="text-sm text-accent-ink">{item.label}</h2>
              <p className="mt-4 text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-[1.25] tracking-[-0.02em] text-ink">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="mantra-title" className="bg-paper px-3 sm:px-5">
      <div data-nav-theme="dark" className="mx-auto max-w-[90rem] rounded-[28px] bg-night py-24 sm:py-32 text-night-ink">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 id="mantra-title" className="sr-only">
                Our mantra: {company.mantra}
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-night-muted">{aboutPage.mantraBody}</p>
            </Reveal>
            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {mantraParts.map((part, i) => (
                <Reveal as="li" key={part.word} delay={i * 60}>
                  <p className="text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.04em]">
                    <span className={i === mantraParts.length - 1 ? 'text-accent' : ''}>{part.word}</span>
                  </p>
                  <p className="mt-5 max-w-xs text-[1.0625rem] leading-relaxed text-night-muted">{part.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
      </div>
    </section>

      <section aria-labelledby="values-title" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2
              id="values-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              What we hold ourselves to.
            </h2>
          </Reveal>
          <dl className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) * 60} className="border-t border-line py-7">
                <dt className="text-xl font-medium tracking-[-0.015em] text-ink">{v.name}</dt>
                <dd className="mt-2 text-[1.0625rem] leading-relaxed text-ink-muted">{v.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="team-title" className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
          <Reveal>
            <h2
              id="team-title"
              className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              The people behind the work.
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-muted">
              Each engagement brings together the three kinds of people it needs.
            </p>
          </Reveal>
          <ul className="border-t border-line">
            {teamGroups.map((g) => (
              <li key={g.name} className="grid gap-1 border-b border-line py-6 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <span className="text-xl font-medium tracking-[-0.015em] text-ink">{g.name}</span>
                <span className="text-[1.0625rem] leading-relaxed text-ink-muted">{g.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
