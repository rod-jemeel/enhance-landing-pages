'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroSectionHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="relative h-10 w-36">
            <Image
              src="/images/enhancemd-logo.webp"
              alt="Enhance.MD"
              fill
              className={`object-contain transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-[#4A4A4A] hover:text-[#333333]' : 'text-white/90 hover:text-white'
            }`}>Medication & Pricing</a>
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-[#4A4A4A] hover:text-[#333333]' : 'text-white/90 hover:text-white'
            }`}>FAQ</a>
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-[#4A4A4A] hover:text-[#333333]' : 'text-white/90 hover:text-white'
            }`}>How it Works</a>
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-[#4A4A4A] hover:text-[#333333]' : 'text-white/90 hover:text-white'
            }`}>Book a Consultation</a>
          </div>
          <button className="relative overflow-hidden px-6 py-2 rounded-full font-medium transition-all duration-300 text-[#333333] shadow-md hover:shadow-lg"
            style={{
              background: 'linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)',
            }}>
            <span className="relative z-10">Get Started</span>
          </button>
        </nav>
      </div>
    </header>
  );
}