'use client';

import { ReactLenis } from 'lenis/react';
import './styles.css';
import Navbar from './_sections/navbar';
import HeroSection from './_sections/hero-section';
import ProductShowcaseSection from './_sections/product-showcase-section';
import TransformationSection from './_sections/transformation-section';
import FormulaSection from './_sections/formula-section';
import PricingSection from './_sections/pricing-section';
import HowItWorksSection from './_sections/how-it-works-section';
import TrustSection from './_sections/trust-section';
import CTASection from './_sections/cta-section';
import Footer from './_sections/footer';

export default function LandingPage3() {
  return (
    <ReactLenis root>
      <Navbar />
      <main className='min-h-screen bg-[#FAFAFA]'>
        <HeroSection />
        <ProductShowcaseSection />
        <TransformationSection />
        <FormulaSection />
        <PricingSection />
        <HowItWorksSection />
        <TrustSection />
        <CTASection />
        <Footer />
      </main>
    </ReactLenis>
  );
}