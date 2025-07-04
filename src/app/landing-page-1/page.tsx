"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./_sections/header";
import HeroSection from "./_sections/hero-section";
import AboutSection from "./_sections/about-section";
import FeaturedProducts from "./_sections/featured-products";
import StepsSection from "./_sections/steps-section";
import CustomerServiceSection from "./_sections/customer-service-section";
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

    // Get navbar height
    const navbarHeight = 72; // Approximate height of navbar when white

    // Get all sections except hero
    const sections = document.querySelectorAll("section:not(:first-of-type)");

    // Scroll snapping logic
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScrollEnd = () => {
      if (isScrolling) return;

      const currentScroll = window.scrollY;
      const heroHeight = window.innerHeight;

      // Only snap if we're past the hero section
      if (currentScroll > heroHeight - 100) {
        let closestSection = null;
        let closestDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + currentScroll;
          const targetPosition = sectionTop - navbarHeight;
          const distance = Math.abs(currentScroll - targetPosition);

          // Only consider sections within 150px for subtle snapping
          if (distance < 150 && distance < closestDistance) {
            closestDistance = distance;
            closestSection = targetPosition;
          }
        });

        if (closestSection !== null) {
          isScrolling = true;
          lenis.scrollTo(closestSection, {
            duration: 0.6,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            onComplete: () => {
              isScrolling = false;
            },
          });
        }
      }
    };

    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    };

    window.addEventListener("scroll", onScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
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
      <Footer />
    </div>
  );
}
