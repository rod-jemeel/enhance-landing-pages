'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | '3-month' | '6-month' | '12-month'>('12-month');

  const pricingData = {
    'glp1': {
      'monthly': { price: 249, billing: 'Billed every 4 weeks' },
      '3-month': { price: 237, billing: 'Billed every 12 weeks', savings: 36 },
      '6-month': { price: 224, billing: 'Billed every 24 weeks', savings: 150 },
      '12-month': { price: 212, billing: 'Billed every 48 weeks', savings: 444 }
    },
    'glp1-gip': {
      'monthly': { price: 379, billing: 'Billed every 4 weeks' },
      '3-month': { price: 360, billing: 'Billed every 12 weeks', savings: 57 },
      '6-month': { price: 341, billing: 'Billed every 24 weeks', savings: 228 },
      '12-month': { price: 323, billing: 'Billed every 48 weeks', savings: 672 }
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[64px]"
        >
          <h2 className="text-[52px] font-bold leading-tight tracking-[-1.5px] text-[var(--text-primary)] mb-6">
            Transparent Pricing
          </h2>
          <p className="text-[18px] leading-[1.7] text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Same price at every dose. No hidden fees. Choose the plan that works for you.
          </p>
          
          <div className="inline-flex items-center bg-[#F9F9F9] rounded-full p-1">
            {(['monthly', '3-month', '6-month', '12-month'] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  billingCycle === cycle
                    ? 'rose-gold-gradient text-white shadow-[0px_4px_16px_var(--rose-gold-shadow-light)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cycle === 'monthly' ? 'Monthly' : cycle.replace('-', ' ').replace('month', 'Months')}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F5] rounded-[24px] p-10"
          >
            <div className="mb-8">
              <h3 className="text-[28px] font-semibold text-[var(--text-primary)] mb-2">
                Compounded GLP-1
              </h3>
              <p className="text-[16px] text-[var(--text-secondary)]">
                Proven weight loss medication
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[48px] font-bold text-[var(--text-primary)]">
                  ${pricingData.glp1[billingCycle].price}
                </span>
                <span className="text-[18px] text-[var(--text-secondary)]">/month</span>
              </div>
              <p className="text-[14px] text-[var(--text-secondary)] mb-2">
                {pricingData.glp1[billingCycle].billing}
              </p>
              {pricingData.glp1[billingCycle].savings && (
                <p className="text-[14px] font-medium rose-gold-text">
                  Save ${pricingData.glp1[billingCycle].savings}/year
                </p>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '4 Weeks of Medication',
                'Ongoing Provider Care & Support',
                'Metabolic Lab Testing Every 6 Months',
                'Syringes & Alcohol Pads Kit',
                'Nutrition & Wellness Coaching',
                'Platform Access & Educational Content'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold">✓</span>
                  <span className="text-[16px] text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/get-started"
              className="block w-full text-center px-8 py-4 bg-white font-semibold rounded-full 
                       rose-gold-border hover:rose-gold-gradient hover:text-white
                       transition-all duration-300 rose-gold-text"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[var(--text-primary)] text-white rounded-[24px] p-10 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 rose-gold-gradient text-white px-4 py-2 rounded-full text-[14px] font-semibold shadow-[0px_4px_16px_var(--rose-gold-shadow-light)]">
              Most Popular
            </div>

            <div className="mb-8">
              <h3 className="text-[28px] font-semibold mb-2">
                Advanced GLP-1 + GIP
              </h3>
              <p className="text-[16px] text-gray-300">
                Enhanced dual-action formula
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[48px] font-bold">
                  ${pricingData['glp1-gip'][billingCycle].price}
                </span>
                <span className="text-[18px] text-gray-300">/month</span>
              </div>
              <p className="text-[14px] text-gray-300 mb-2">
                {pricingData['glp1-gip'][billingCycle].billing}
              </p>
              {pricingData['glp1-gip'][billingCycle].savings && (
                <p className="text-[14px] font-medium rose-gold-text">
                  Save ${pricingData['glp1-gip'][billingCycle].savings}/year
                </p>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '4 Weeks of Medication',
                'Ongoing Provider Care & Support',
                'Metabolic Lab Testing Every 6 Months',
                'Syringes & Alcohol Pads Kit',
                'Nutrition & Wellness Coaching',
                'Platform Access & Educational Content'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold">✓</span>
                  <span className="text-[16px] text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/get-started"
              className="block w-full text-center px-8 py-4 rose-gold-gradient text-white font-semibold rounded-full 
                       shadow-[0px_8px_24px_var(--rose-gold-shadow-light)] hover:shadow-[0px_12px_32px_var(--rose-gold-shadow-dark)]
                       transition-all duration-300 hover:-translate-y-1"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[14px] text-[var(--text-secondary)] mb-4">
            *Payable up front with selected plan. Prescription products require an online consultation with a healthcare professional who will determine if a prescription is appropriate.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-[#FFD700] font-bold text-xl">✓</span>
              <span className="text-[16px] text-[var(--text-secondary)]">100% Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FFD700] font-bold text-xl">✓</span>
              <span className="text-[16px] text-[var(--text-secondary)]">No Insurance Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FFD700] font-bold text-xl">✓</span>
              <span className="text-[16px] text-[var(--text-secondary)]">Cancel Anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}