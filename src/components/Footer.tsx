import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case studies', href: '/case-studies' },
  { name: 'Research', href: '/blog' },
  { name: 'Careers', href: '/careers' },
];

const solutionLinks = [
  { name: 'Finance', href: '/ai-finance' },
  { name: 'Healthcare', href: '/ai-healthcare' },
  { name: 'Agriculture', href: '/ai-agriculture' },
  { name: 'Supply chain', href: '/ai-supply-chain' },
  { name: 'Security', href: '/ai-security' },
  { name: 'Energy', href: '/ai-energy' },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-white text-zinc-700">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link href="/" aria-label="Doxantro Technologies home" className="inline-flex items-center">
              <Image
                src="/dox1.jpg"
                alt="Doxantro"
                width={175}
                height={52}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
              Governed AI systems for complex enterprise workflows, with verified results kept clearly separate from concepts and future targets.
            </p>
            <Link href="/contact" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 bg-[#fbfaf6] px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-[#f3c83f]">
              Start a conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">Company</h2>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((link) => <li key={link.name}><Link href={link.href} className="text-sm hover:text-zinc-950">{link.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">Solutions</h2>
              <ul className="mt-5 space-y-3">
                {solutionLinks.map((link) => <li key={link.name}><Link href={link.href} className="text-sm hover:text-zinc-950">{link.name}</Link></li>)}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">Status</h2>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#fff8dc] px-3 py-2 text-xs font-medium text-[#6f5200]">
                <span className="h-2 w-2 rounded-full bg-[#c79200]" />
                Product development active
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/[0.07] pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Doxantro Technologies Limited.</p>
          <p>Private by design · Human review · Honest measurement</p>
        </div>
      </div>
    </footer>
  );
}
