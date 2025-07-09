'use client';

import Image from 'next/image';

export default function Header() {

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 text-[#333333]">
        <nav className="flex items-center justify-between">
          <div className="relative h-10 w-36">
            <Image
              src="/images/enhancemd-logo.webp"
              alt="Enhance.MD"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-[#666666] transition-colors duration-300">Medication & Pricing</a>
            <a href="#" className="hover:text-[#666666] transition-colors duration-300">FAQ</a>
            <a href="#" className="hover:text-[#666666] transition-colors duration-300">How it Works</a>
            <a href="#" className="hover:text-[#666666] transition-colors duration-300">Book a Consultation</a>
          </div>
          <button className="relative overflow-hidden px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
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