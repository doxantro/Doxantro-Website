import Link from 'next/link';
import { Check } from 'lucide-react';
import { hero } from '../../content/site';
import AccentLink from '../site/AccentLink';
import AccentStop from '../site/AccentStop';
import HeroLogDrift from './HeroLogDrift';

// The kind of output our work produces: deploys, pipeline runs, evals, infra plans.
const buildLog = [
  ['09:41:02', 'pipeline', 'orders_daily      ✓ 48,211 rows  fresh'],
  ['09:41:05', 'tests', 'api               ✓ 214 passed   0 failed'],
  ['09:41:09', 'eval', 'invoice-extract   ✓ held-out set  reviewed'],
  ['09:41:12', 'deploy', 'web@v1.8.0        → production'],
  ['09:41:14', 'infra', 'plan              2 to add · 0 to destroy'],
  ['09:41:18', 'monitor', 'p95 latency       182ms  within budget'],
  ['09:41:21', 'pipeline', 'payments_sync     ✓ reconciled'],
  ['09:41:24', 'review', 'low-confidence    → queued for a person'],
  ['09:41:27', 'deploy', 'mobile@2.3.1      → staged rollout 10%'],
  ['09:41:31', 'backup', 'warehouse         ✓ snapshot verified'],
  ['09:41:34', 'alerts', 'all checks        green'],
  ['09:41:38', 'pipeline', 'inventory_hourly  ✓ 3 sources merged'],
];

function LogLines() {
  return (
    <>
      {buildLog.map(([time, kind, text], i) => (
        <div key={i} className="flex gap-5 whitespace-pre py-[0.42rem]">
          <span className="text-ink-faint/70">{time}</span>
          <span className="w-16 text-accent-ink/80">{kind}</span>
          <span>{text}</span>
        </div>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Build-log texture, masked so it dissolves into the page. */}
      <div
        aria-hidden="true"
        className="hero-code pointer-events-none absolute inset-y-0 right-[-6%] -z-10 hidden w-[58%] select-none font-mono text-[0.8125rem] text-ink/30 md:block"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, #000 55%, #000 82%, transparent 100%), linear-gradient(to bottom, transparent 30%, #000 50%, #000 72%, transparent 92%)',
          maskComposite: 'intersect',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, #000 55%, #000 82%, transparent 100%), linear-gradient(to bottom, transparent 30%, #000 50%, #000 72%, transparent 92%)',
          WebkitMaskComposite: 'source-in',
        }}
      >
        <HeroLogDrift>
          <LogLines />
          <LogLines />
        </HeroLogDrift>
      </div>

      <div className="mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:pb-24">
        <h1 className="max-w-[15ch] text-[clamp(2.75rem,7.4vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-ink">
          {hero.title.map((line, i) => (
            <span key={line} className="hero-line">
              <span>{i === hero.title.length - 1 ? <AccentStop text={line} /> : line}</span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end">
          <p className="hero-fade text-lg leading-relaxed text-ink-muted [animation-delay:260ms] sm:text-xl sm:leading-relaxed">
            {hero.body}
          </p>

          <div className="hero-fade flex flex-col gap-3 [animation-delay:380ms] sm:flex-row md:justify-end">
            <AccentLink href={hero.primary.href}>{hero.primary.label}</AccentLink>
            <Link
              href={hero.secondary.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong bg-surface px-6 text-base font-medium text-ink transition-[transform,background-color] duration-200 hover:bg-surface active:scale-[0.97]"
            >
              {hero.secondary.label}
            </Link>
          </div>
        </div>

        <ul className="hero-fade mt-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-6 text-[0.9375rem] text-ink-muted [animation-delay:480ms]">
          {hero.facts.map((fact) => (
            <li key={fact} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" strokeWidth={2.5} aria-hidden="true" />
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
