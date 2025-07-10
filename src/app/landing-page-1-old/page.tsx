import { NavbarProvider } from "@/contexts/navbar-context"
import Navbar from "@/components/navbar"
import ScrollNavbarController from "./_components/scroll-navbar-controller"
import HeroSection from "./_sections/hero-section"
import WhatItIsSection from "./_sections/what-it-is-section"
import PricingSection from "./_sections/pricing-section"
import ProtocolSection from "./_sections/protocol-section"
import WhatsIncludedSection from "./_sections/whats-included-section"
import TransformationQuoteSection from "./_sections/transformation-quote-section"
import SocialProofSection from "./_sections/social-proof-section"
import CTASection from "./_sections/cta-section"
import Footer from "./_sections/footer"

export default function LandingPage() {
  return (
    <NavbarProvider>
      <div className="min-h-screen bg-white font-lexend">
        <ScrollNavbarController />
        <Navbar />
        <main>
          <HeroSection />
          <WhatItIsSection />
          <PricingSection />
          <ProtocolSection />
          <WhatsIncludedSection />
          <TransformationQuoteSection />
          <SocialProofSection />
          <CTASection />
          <Footer />
        </main>
      </div>
    </NavbarProvider>
  );
}
