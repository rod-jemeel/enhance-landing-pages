"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./_sections/header";
import HeroSection from "./_sections/hero-section";
import AboutSection from "./_sections/about-section";
import FeaturedProducts from "./_sections/featured-products";
import StepsSection from "./_sections/steps-section";
import CustomerServiceSection from "./_sections/customer-service-section";
import CTASection from "./_sections/cta-section";
import Footer from "./_sections/footer";

export default function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <StepsSection />
      <CustomerServiceSection />
      <CTASection />
      <Footer />
    </div>
  );
}
