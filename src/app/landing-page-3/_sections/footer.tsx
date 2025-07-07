'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = {
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Medication & Pricing', href: '#pricing' },
      { label: 'Contact Us', href: '/contact' }
    ],
    'Support': [
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' }
    ],
    'Resources': [
      { label: 'Weight Loss Guide', href: '/guide' },
      { label: 'Success Stories', href: '/stories' },
      { label: 'Healthcare Providers', href: '/providers' },
      { label: 'Florida Patients', href: '/florida' }
    ]
  };

  return (
    <footer className="bg-[#F5F5F5] border-t border-[#E0E0E0]">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/images/enhancemd-logo.webp"
              alt="Enhance.MD"
              width={180}
              height={60}
              className="mb-6"
            />
            <p className="text-[14px] text-[var(--text-secondary)] mb-6 leading-relaxed">
              Provider-led weight loss program with personalized GLP-1 treatment. 
              Transform your life with medical expertise and ongoing support.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--rose-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--rose-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--rose-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--rose-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-[var(--text-primary)] mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--rose-gold)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#EAEAEA] pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-[12px] text-[var(--text-secondary)] space-y-2">
              <p>©2025 Enhance MD. All Rights reserved.</p>
              <p>285 N. El Camino Real, STE 211, Encinitas, CA 92024</p>
              <p>13280 Evening Creek Drive South, STE 225, San Diego, CA 92128</p>
            </div>
            <div className="text-[12px] text-[#666666] md:text-right space-y-2">
              <p>Call: <a href="tel:1-888-299-5088" className="rose-gold-text hover:opacity-80">1-888-299-5088</a></p>
              <p>Email: <a href="mailto:support@enhance.md" className="rose-gold-text hover:opacity-80">support@enhance.md</a></p>
              <p>Mon-Fri: 8AM-8PM EDT • Sat-Sun: 9AM-5PM EDT</p>
            </div>
          </div>
          
          <div className="mt-8 text-[11px] text-[var(--text-light)] leading-relaxed">
            <p className="mb-4">
              Products not intended to diagnose, treat, cure, or prevent any disease. 
              Prescription products require an online consultation with a licensed healthcare provider who will determine if the medication is appropriate.
            </p>
            <p>
              Enhance.MD LLC is a patient management platform that provides administrative and operational support to physicians and practitioners employed by Enhance Wellness PC and iThriveMD PC, 
              who deliver care through a telehealth platform. Enhance.MD LLC does not provide medical or pharmacy services, employ healthcare providers, or influence clinical decision-making. 
              Payment does not guarantee the prescribing or dispensing of medication. The information on this website is for informational purposes only and is not a substitute for professional medical advice, 
              diagnosis, or treatment. If you have questions or concerns about your health, please consult a healthcare professional. 
              This site is an advertisement for telehealth services, and any treatment or prescription is at the sole discretion of the prescribing provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}