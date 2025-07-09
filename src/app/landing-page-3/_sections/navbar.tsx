'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Medication', href: '#formula' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-[var(--text-primary)]' : 'text-black'
              } group-hover:text-[var(--rose-gold)]`}>
                Enhance
              </span>
              <span className={`text-2xl font-light transition-colors duration-300 ${
                isScrolled ? 'text-[var(--rose-gold)]' : 'text-black'
              }`}>
                .MD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  isScrolled ? 'text-[var(--text-secondary)] hover:text-[var(--rose-gold)]' : 'text-black hover:text-black/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/consultation"
              className={`text-[14px] font-medium transition-colors ${
                isScrolled ? 'text-[var(--text-secondary)] hover:text-[var(--rose-gold)]' : 'text-black hover:text-black/70'
              }`}
            >
              Book Consultation
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center px-5 py-2.5 text-white text-[14px] font-semibold rounded-full 
                       rose-gold-gradient shadow-[0px_4px_16px_var(--rose-gold-shadow-light)] 
                       hover:shadow-[0px_6px_20px_var(--rose-gold-shadow-dark)]
                       transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-[var(--text-primary)]' : 'bg-black'
            } ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-[var(--text-primary)]' : 'bg-black'
            } ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-[var(--text-primary)]' : 'bg-black'
            } ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-[#E0E0E0]"
      >
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[18px] font-medium text-[var(--text-secondary)] hover:text-[var(--rose-gold)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 space-y-4 border-t border-[#E0E0E0]">
            <Link
              href="/consultation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[18px] font-medium text-[var(--text-secondary)] hover:text-[var(--rose-gold)] transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/get-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 text-white font-semibold rounded-full 
                       rose-gold-gradient shadow-[0px_4px_16px_var(--rose-gold-shadow-light)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}