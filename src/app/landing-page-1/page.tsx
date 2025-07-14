import type { Metadata } from "next"
import { NavbarProvider } from "@/contexts/navbar-context"
import Navbar from "@/components/navbar"
import ScrollNavbarController from "./_components/scroll-navbar-controller"
import HeroSection from "./_sections/hero-section"
import WhatItIsSection from "./_sections/what-it-is-section"
import PricingSection from "./_sections/pricing-section"
import DifferentiatorSection from "./_sections/differentiator-section"
import ProtocolSection from "./_sections/protocol-section"
import WhatsIncludedSection from "./_sections/whats-included-section"
import TransformationQuoteSection from "./_sections/transformation-quote-section"
import SocialProofSection from "./_sections/social-proof-section"
import CTASection from "./_sections/cta-section"
import Footer from "./_sections/footer"

export const metadata: Metadata = {
  title: "Transform Your Skin in 30 Days | Premium Skincare Protocol",
  description: "Discover the revolutionary 3-step skincare protocol that delivers professional-grade results at home. Clinically proven to reduce wrinkles by 67% in just 30 days.",
  keywords: "premium skincare, anti-aging, wrinkle reduction, skincare protocol, clinical results, luxury skincare",
  openGraph: {
    title: "Transform Your Skin in 30 Days | Premium Skincare Protocol",
    description: "Discover the revolutionary 3-step skincare protocol that delivers professional-grade results at home.",
    type: "website",
    locale: "en_US",
    siteName: "Premium Skincare Protocol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transform Your Skin in 30 Days",
    description: "Revolutionary 3-step skincare protocol with clinical results",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
}

export default function LandingPage() {
  return (
    <NavbarProvider>
      <div className="min-h-screen bg-white font-nouvelle">
        <Navbar />
        <ScrollNavbarController />
        <div id="hero-section">
          <HeroSection />
        </div>
        <div id="what-it-is-section">
          <WhatItIsSection />
        </div>
        <div id="pricing-section">
          <PricingSection />
        </div>
        {/* <DifferentiatorSection /> */}
        <div id="protocol-section">
          <ProtocolSection />
        </div>
        <div id="whats-included-section">
          <WhatsIncludedSection />
        </div>
        <div id="transformation-quote-section">
          <TransformationQuoteSection />
        </div>
        <div id="social-proof-section">
          <SocialProofSection />
        </div>
        <div id="cta-section">
          <CTASection />
        </div>
        <Footer />
      </div>
    </NavbarProvider>
  )
}