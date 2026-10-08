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
  metadataBase: new URL('https://www.doxantro.com'),
  title: {
    default: siteTitle,
    template: '%s · Doxantro',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Doxantro',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/doxantro-social-card.png?v=1',
        width: 1200,
        height: 630,
        alt: 'Doxantro — Think, build and solve',
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
        alt: 'Doxantro — Think, build and solve',
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${host.variable} ${jetbrains.variable}`}>
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
