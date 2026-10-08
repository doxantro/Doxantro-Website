import Image from 'next/image';
import Link from 'next/link';
import { company, industries, services } from '../content/site';

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'How we work', href: '/#process' },
  { name: 'Case studies', href: '/case-studies' },
  { name: 'Field notes', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

function Column({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm text-ink-faint">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-[0.9375rem] text-ink-muted transition-colors hover:text-ink">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Doxantro home" className="inline-flex">
              <Image src="/doxantro-logo.png" alt="Doxantro" width={587} height={158} className="h-9 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-muted">{company.summary}</p>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-block text-[0.9375rem] font-medium text-ink underline decoration-line-strong hover:decoration-ink"
            >
              {company.email}
            </a>
          </div>
          <Column title="Services" links={services.map((s) => ({ name: s.name, href: `/services#${s.id}` }))} />
          <Column title="Industries" links={industries.map((i) => ({ name: i.name, href: i.href }))} />
          <Column title="Company" links={companyLinks} />
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <p>{company.mantra}</p>
        </div>
      </div>
    </footer>
  );
}
