'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-[var(--rose-gold-dark)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--rose-gold)]/10 to-transparent" />
      
      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--rose-gold)]/20 px-4 py-2 rounded-full mb-8 rose-gold-text">
            <span className="text-sm font-medium tracking-[1px] uppercase">
              Limited Time Offer
            </span>
            <span className="font-bold">$100 OFF</span>
            <span className="text-sm">select plans</span>
          </div>
          
          <h2 className="text-[52px] font-bold leading-tight tracking-[-1.5px] mb-6">
            Start Your Transformation Today
          </h2>
          
          <p className="text-[20px] leading-[1.7] text-gray-300 max-w-2xl mx-auto mb-12">
            Join over 50,000 patients who have achieved lasting weight loss with our 
            physician-led GLP-1 program. Your journey to a healthier you starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/get-started"
              className="inline-flex items-center px-10 py-5 rose-gold-gradient text-white font-semibold rounded-full 
                       shadow-[0px_8px_24px_var(--rose-gold-shadow-light)] hover:shadow-[0px_12px_32px_var(--rose-gold-shadow-intense)]
                       transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center px-10 py-5 rose-gold-border 
                       font-medium rounded-full hover:rose-gold-gradient hover:text-white
                       transition-all duration-300 text-lg rose-gold-text"
            >
              Book Free Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: '✓', text: 'No insurance required' },
              { icon: '✓', text: '100% money-back guarantee' },
              { icon: '✓', text: 'Cancel anytime' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2"
              >
                <span className="rose-gold-text font-bold text-xl">{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-[64px] border-t border-gray-700 pt-12"
        >
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">
              Questions? Call us at{' '}
              <a href="tel:1-888-299-5088" className="rose-gold-text font-semibold hover:opacity-80">
                1-888-299-5088
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Available Monday-Friday 8AM-8PM EDT • Saturday-Sunday 9AM-5PM EDT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}