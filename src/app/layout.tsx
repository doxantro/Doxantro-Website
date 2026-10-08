import type { Metadata } from 'next';
import { Host_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/site/SmoothScroll';

const host = Host_Grotesk({
  variable: '--font-host',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

const siteTitle = 'Doxantro — Software, data and AI engineering';
const siteDescription =
  'Doxantro designs, builds and runs production software, data infrastructure and AI integrations for businesses and public organisations.';

export const metadata: Metadata = {
  metadataBase: new URL('https://doxantro.com'),
  title: {
    default: siteTitle,
    template: '%s · Doxantro',
  },
  description: siteDescription,
  keywords: [
    'Doxantro',
    'Doxantro Technologies',
    'AI engineering agency',
    'software engineering company',
    'production AI systems',
    'data infrastructure engineering',
    'machine learning integration',
    'enterprise cloud architecture',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Doxantro Technologies',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/doxantro-social-card.png?v=1',
        width: 1200,
        height: 630,
        alt: 'Doxantro Technologies — Software, data and AI engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/doxantro-social-card.png?v=1',
        alt: 'Doxantro Technologies — Software, data and AI engineering',
      },
    ],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Doxantro',
  legalName: 'Doxantro Technologies',
  alternateName: ['Doxantro Technologies', 'Doxantro Sys'],
  url: 'https://doxantro.com',
  logo: 'https://doxantro.com/doxantro-logo.png',
  image: 'https://doxantro.com/doxantro-social-card.png',
  description:
    'Doxantro Technologies designs, builds and runs production software, data infrastructure and AI integrations for businesses and public organisations.',
  email: 'info@doxantro.com',
  sameAs: [
    'https://github.com/doxantro',
    'https://www.linkedin.com/company/doxantro',
  ],
  serviceType: [
    'Software Engineering',
    'Artificial Intelligence Engineering',
    'Data Infrastructure & Analytics',
    'Machine Learning Integration',
    'Cloud Architecture',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${host.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
