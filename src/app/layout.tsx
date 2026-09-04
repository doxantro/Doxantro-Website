import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Doxantro Systems - Enterprise AI for Modern Industry",
  description: "Think, build, and solve with domain-tuned AI models, low-latency edge orchestration, and zero-trust guardrails across finance, healthcare, agriculture, supply chain, security, and energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#111111] overflow-x-hidden min-h-screen selection:bg-orange-100 selection:text-orange-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
