import type { Metadata } from 'next';
import Link from 'next/link';
import AccentLink from '../components/site/AccentLink';
import AccentStop from '../components/site/AccentStop';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="mx-auto flex min-h-[70dvh] max-w-6xl flex-col justify-center px-5 pb-20 pt-36 sm:px-8">
        <p className="font-mono text-sm text-ink-faint">404</p>
        <h1 className="mt-4 max-w-[16ch] text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.035em] text-ink">
          <AccentStop text="This page does not exist." />
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          The link may be old or mistyped. Everything we do is one click away from the home page.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <AccentLink href="/">Back to the home page</AccentLink>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full px-5 text-base font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
