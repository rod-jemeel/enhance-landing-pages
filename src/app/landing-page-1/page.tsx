import Header from './_sections/header';
import HeroSection from './_sections/hero-section';
import AboutSection from './_sections/about-section';
import FeaturedCarSection from './_sections/featured-car-section';
import BrandPartnersSection from './_sections/brand-partners-section';
import CustomerServiceSection from './_sections/customer-service-section';
import Footer from './_sections/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedCarSection />
      <BrandPartnersSection />
      <CustomerServiceSection />
      <Footer />
    </div>
  );
}