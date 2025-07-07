'use client';

import { motion } from 'motion/react';

export default function TransformationSection() {
  const results = [
    { value: '15-20%', label: 'Average Weight Loss', sublabel: 'in 6 months' },
    { value: '87%', label: 'Success Rate', sublabel: 'with provider support' },
    { value: '4.9/5', label: 'Patient Satisfaction', sublabel: 'from 10,000+ reviews' },
    { value: '24/7', label: 'Provider Access', sublabel: 'ongoing support' }
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
            Real Results. Real People.
          </h2>
          <p className="text-[18px] leading-[1.7] text-[var(--text-secondary)] max-w-2xl mx-auto">
            Join thousands who have transformed their lives with our physician-led program. 
            Sustainable weight loss backed by science and supported by experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-[64px]">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-[48px] font-bold rose-gold-text mb-2">
                {result.value}
              </div>
              <div className="text-[18px] font-semibold text-[var(--text-primary)] mb-1">
                {result.label}
              </div>
              <div className="text-[14px] text-[var(--text-secondary)]">
                {result.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#F9F9F9] rounded-[24px] p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-[24px] leading-[1.6] text-[var(--text-primary)] mb-8 italic">
              "Real progress in health and wellness comes when we treat the whole person—not just the symptoms. 
              By focusing on personalized care and addressing the root causes of your challenges, 
              I can help you achieve sustainable results that improve not just your body but your entire quality of life."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rose-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0px_4px_16px_var(--rose-gold-shadow-light)]">
                DS
              </div>
              <div className="text-left">
                <div className="font-semibold text-[var(--text-primary)]">Dr. Erik Stark</div>
                <div className="text-[14px] text-[var(--text-secondary)]">Medical Director, Enhance.MD</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-[64px] text-center"
        >
          <h3 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
            What Makes Us Different
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Biology-Centered Approach',
                description: "We focus on improving metabolic health, not just counting calories. Our treatments work with your body's natural systems."
              },
              {
                title: 'Consistent Pricing',
                description: 'Same price at every dose. No hidden fees or price jumps as your treatment progresses.'
              },
              {
                title: 'Concierge Experience',
                description: "This isn't just about medication—it's a complete telehealth experience tailored to your needs."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[20px] shadow-[0px_8px_24px_rgba(0,0,0,0.05)]"
              >
                <h4 className="text-[20px] font-semibold text-[var(--text-primary)] mb-4">
                  {feature.title}
                </h4>
                <p className="text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}