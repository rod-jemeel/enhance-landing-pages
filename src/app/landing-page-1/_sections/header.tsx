'use client';

import { useState, useEffect } from 'react';

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
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>LUXEDRIVE</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>Lorem Ipsum</a>
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>Dolor Sit</a>
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>Consectetur</a>
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>Adipiscing</a>
            <a href="#" className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>Elit Sed</a>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-medium transition-colors">
            Contact Lorem
          </button>
        </nav>
      </div>
    </header>
  );
}