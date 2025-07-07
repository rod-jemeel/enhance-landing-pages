'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Online Medical Intake',
      description: 'Complete our 5-10 minute health questionnaire. Share your health history, current medications, and upload required documents.',
      details: ['Health history review', 'Medication assessment', 'Photo ID verification'],
      icon: '📋'
    },
    {
      number: '02',
      title: 'Lab Work & Testing',
      description: 'Get comprehensive lab work at a Quest Diagnostics location near you. We check key health markers to ensure safety.',
      details: ['Complete blood count', 'Metabolic panel', 'Cholesterol & TSH levels'],
      icon: '🔬'
    },
    {
      number: '03',
      title: 'Provider Consultation',
      description: 'Meet with your dedicated provider via video call. Discuss your personalized treatment plan and get all questions answered.',
      details: ['1-on-1 consultation', 'Personalized dosing', 'Treatment planning'],
      icon: '👨‍⚕️'
    },
    {
      number: '04',
      title: 'Direct Delivery',
      description: 'Receive your medication directly at home. Temperature-controlled shipping ensures quality and convenience.',
      details: ['Monthly delivery', 'All supplies included', 'Ongoing support'],
      icon: '📦'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[64px]"
        >
          <h2 className="text-[52px] font-bold leading-tight tracking-[-1.5px] text-[var(--text-primary)] mb-6">
            Start in 4 Simple Steps
          </h2>
          <p className="text-[18px] leading-[1.7] text-[var(--text-secondary)] max-w-2xl mx-auto">
            No insurance required. No hidden fees. Get started on your weight loss journey today.
          </p>
        </motion.div>

        <div className="space-y-[48px]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-10 shadow-[0px_16px_48px_rgba(0,0,0,0.08)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 rose-gold-gradient rounded-full text-white text-3xl mb-4 shadow-[0px_4px_16px_var(--rose-gold-shadow-light)]">
                    {step.icon}
                  </div>
                  <div className="text-[48px] font-bold rose-gold-text opacity-20">
                    {step.number}
                  </div>
                </div>
                
                <div className="md:col-span-7">
                  <h3 className="text-[28px] font-semibold text-[var(--text-primary)] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[var(--text-secondary)] mb-6">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <span
                        key={detailIndex}
                        className="inline-flex items-center gap-2 text-[14px] text-[var(--text-secondary)]"
                      >
                        <span className="rose-gold-text">✓</span>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-3 text-center md:text-right">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block rose-gold-text text-6xl font-light">
                      ↓
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-[64px] text-center"
        >
          <div className="bg-white rounded-[24px] p-12 shadow-[0px_16px_48px_rgba(0,0,0,0.08)]">
            <h3 className="text-[28px] font-semibold text-[var(--text-primary)] mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-[18px] text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Join thousands who have already started their weight loss journey with Enhance.MD. 
              Get personalized care from real providers.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center px-8 py-4 rose-gold-gradient text-white font-semibold rounded-full 
                         shadow-[0px_8px_24px_var(--rose-gold-shadow-light)] hover:shadow-[0px_12px_32px_var(--rose-gold-shadow-dark)]
                         transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Journey
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center px-8 py-4 font-medium transition-all rose-gold-text hover:opacity-80"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}