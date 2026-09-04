'use client';

import React from 'react';
import HeroSection from '../sections/HeroSection';
import SocialProof from '../components/home/SocialProof';
import ArchitectureTabs from '../components/home/ArchitectureTabs';
import ProblemGapSection from '../components/home/ProblemGapSection';
import FeaturePillars from '../components/home/FeaturePillars';
import ProductDeepDives from '../components/home/ProductDeepDives';
import FeatureGrid from '../components/home/FeatureGrid';
import SDKSandbox from '../components/home/SDKSandbox';
import FAQSection from '../components/home/FAQSection';
import WaitlistCTA from '../components/home/WaitlistCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section with Tactile Model Dispatch Console */}
      <HeroSection />

      {/* 2. Enterprise Social Proof Ticker */}
      <SocialProof />

      {/* 3. Interactive Architecture Tabs [Build | Orchestrate | Govern] */}
      <ArchitectureTabs />

      {/* 4. The Gap Manifesto Section */}
      <ProblemGapSection />

      {/* 5. 4-Column Feature Pillars (Fast | Secure | Full-Stack | Domain-Tuned) */}
      <FeaturePillars />

      {/* 6. Product Deep Dives (3 Alternating 2-Column Showcases with Software Mockups) */}
      <ProductDeepDives />

      {/* 7. Comprehensive 9-Card Feature Matrix */}
      <FeatureGrid />

      {/* 8. Developer SDK Integration Sandbox */}
      <SDKSandbox />

      {/* 9. Editorial FAQ Accordion */}
      <FAQSection />

      {/* 10. High-Contrast Dark CTA Callout */}
      <WaitlistCTA />
    </main>
  );
}
