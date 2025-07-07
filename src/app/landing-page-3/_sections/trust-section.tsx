'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function TrustSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      age: 42,
      location: 'California',
      weightLoss: '45 lbs',
      timeframe: '6 months',
      quote: "I've tried everything over the years. This is the first program that actually worked for me. The provider support made all the difference.",
      rating: 5
    },
    {
      name: 'Michael R.',
      age: 38,
      location: 'New York',
      weightLoss: '62 lbs',
      timeframe: '8 months',
      quote: 'The consistent pricing was a game-changer. No surprises, no price hikes. Just steady progress and amazing support.',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      age: 51,
      location: 'Texas',
      weightLoss: '38 lbs',
      timeframe: '5 months',
      quote: 'My provider adjusted my dose perfectly. The personalized approach and regular check-ins kept me motivated and on track.',
      rating: 5
    }
  ];

  const trustIndicators = [
    { value: '50,000+', label: 'Patients Treated' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '98%', label: 'Would Recommend' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[64px]"
        >
          <h2 className="text-[52px] font-bold leading-tight tracking-[-1.5px] text-[var(--text-primary)] mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-[18px] leading-[1.7] text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real stories from real people who have transformed their lives with Enhance.MD
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-[64px]">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-[36px] font-bold rose-gold-text mb-2">
                {indicator.value}
              </div>
              <div className="text-[16px] text-[var(--text-secondary)]">
                {indicator.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[64px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] rounded-[24px] p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="rose-gold-text text-xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-[16px] leading-[1.6] text-[var(--text-secondary)] mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-[#EAEAEA] pt-6">
                <div className="font-semibold text-[var(--text-primary)] mb-1">
                  {testimonial.name}
                </div>
                <div className="text-[14px] text-[var(--text-secondary)] mb-3">
                  {testimonial.age} • {testimonial.location}
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[14px]">
                    <span className="font-semibold rose-gold-text">{testimonial.weightLoss}</span>
                    <span className="text-[var(--text-secondary)]"> lost</span>
                  </div>
                  <div className="text-[14px] text-[var(--text-secondary)]">
                    in {testimonial.timeframe}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#F9F9F9] rounded-[24px] p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
                Why Patients Choose Enhance.MD
              </h3>
              <ul className="space-y-4">
                {[
                  'Board-certified providers who understand your journey',
                  'Transparent pricing with no hidden fees or surprises',
                  'Personalized treatment plans tailored to your needs',
                  'Ongoing support and regular check-ins',
                  'Convenient telehealth platform accessible anywhere',
                  '100% money-back guarantee if not eligible'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="rose-gold-text font-bold text-xl mt-0.5">✓</span>
                    <span className="text-[16px] text-[var(--text-secondary)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center">
                <Image
                  src="/images/enhancemd-logo.webp"
                  alt="Enhance.MD Logo"
                  width={300}
                  height={100}
                  className="mb-6"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-[14px] font-medium text-[var(--text-secondary)]">HIPAA Compliant</span>
                  <span className="text-[#EAEAEA]">•</span>
                  <span className="text-[14px] font-medium text-[var(--text-secondary)]">SSL Secured</span>
                </div>
                <p className="text-[14px] text-[var(--text-secondary)]">
                  Licensed in all 50 states
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}