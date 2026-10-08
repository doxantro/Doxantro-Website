import type { ReactNode } from 'react';
import AccentStop from './AccentStop';

// Opening block for inner pages. Shares the hero's entrance so every page
// arrives the same way, at a smaller scale than the home page.
export default function PageHeader({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44">
      <h1 className="max-w-[18ch] text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.035em] text-ink">
        <span className="hero-line">
          <span>
            <AccentStop text={title} />
          </span>
        </span>
      </h1>
      <p className="hero-fade mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted [animation-delay:200ms] sm:text-xl sm:leading-relaxed">
        {intro}
      </p>
      {children && <div className="hero-fade mt-10 [animation-delay:320ms]">{children}</div>}
    </section>
  );
}
