import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

// The one orange-filled action in a view: the opening call to action of a page.
// Ink text on the brand orange measures 7.0:1 (6.1:1 on hover).
export default function AccentLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    'group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-base font-medium text-ink shadow-[0_10px_24px_-12px_color-mix(in_oklab,var(--accent)_70%,transparent)] transition-[transform,background-color,box-shadow] duration-200 hover:bg-accent-hover hover:shadow-[0_14px_28px_-12px_color-mix(in_oklab,var(--accent)_80%,transparent)] active:scale-[0.97]';
  const content = (
    <>
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-px group-hover:translate-x-px"
        aria-hidden="true"
      />
    </>
  );
  // mailto: and other non-route links use a plain anchor.
  return href.startsWith('/') || href.startsWith('#') ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
