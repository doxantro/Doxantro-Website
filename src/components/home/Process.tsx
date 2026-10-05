import { engagementSteps } from '../../content/site';
import Reveal from '../site/Reveal';

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
            How an engagement runs.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink-muted md:justify-self-end">
            The same four stages whether it is a two-month build or a long partnership. You always know what happens next.
          </p>
        </Reveal>

        <Reveal className="relative mt-16">
          {/* Timeline rule; the numbers matter because the order does. */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[1.1rem] hidden h-px bg-line md:block">
            <div className="draw-x h-px w-full bg-ink" />
          </div>
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {engagementSteps.map((stage, i) => (
              <li key={stage.step} className="relative">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-paper font-mono text-sm text-ink tabular-nums">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em] text-ink">{stage.step}</h3>
                <p className="mt-1 text-sm text-accent-ink">{stage.time}</p>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-muted">{stage.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
