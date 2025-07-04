'use client';

import { ReactLenis } from 'lenis/react';
import HeroSection from './_sections/hero-section';
import TransformationSection from './_sections/transformation-section';
import HowItWorksSection from './_sections/how-it-works-section';
import PricingSection from './_sections/pricing-section';
import TrustSection from './_sections/trust-section';
import FAQSection from './_sections/faq-section';
import FinalCTASection from './_sections/final-cta-section';
import Footer from './_sections/footer';

export default function LandingPage2() {
  return (
    <ReactLenis root>
      <main className='bg-black'>
        <div className='wrapper'>
          <HeroSection />
          <TransformationSection />
          <HowItWorksSection />
          <PricingSection />
          <TrustSection />
          <FAQSection />
          <FinalCTASection />
        </div>
        <Footer />
      </main>
    </ReactLenis>
  );
}