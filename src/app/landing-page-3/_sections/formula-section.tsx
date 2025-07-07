'use client';

import { motion } from 'motion/react';

export default function FormulaSection() {
  return (
    <section id="formula" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[64px]"
        >
          <h2 className="text-[52px] font-bold leading-tight tracking-[-1.5px] text-[var(--text-primary)] mb-6">
            Science-Backed Formulations
          </h2>
          <p className="text-[18px] leading-[1.7] text-[var(--text-secondary)] max-w-2xl mx-auto">
            Our compounded medications work by mimicking naturally occurring hormones 
            that regulate appetite and metabolism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-10 shadow-[0px_16px_48px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rose-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0px_4px_16px_var(--rose-gold-shadow-light)]">
                GLP-1
              </div>
              <h3 className="text-[28px] font-semibold text-[var(--text-primary)]">
                Compounded GLP-1
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                GLP-1 receptor agonists mimic the GLP-1 hormone released in response to eating. 
                They work by:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold text-xl">•</span>
                  <span className="text-[16px] text-[var(--text-secondary)]">Stimulating insulin production to lower blood sugar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold text-xl">•</span>
                  <span className="text-[16px] text-[var(--text-secondary)]">Slowing gastric emptying to increase fullness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold text-xl">•</span>
                  <span className="text-[16px] text-[var(--text-secondary)]">Reducing appetite through brain receptor interaction</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-[#EAEAEA]">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium tracking-[1px] uppercase text-[var(--text-secondary)]">
                  Starting at
                </span>
                <span className="text-[24px] font-bold rose-gold-text">
                  $212/mo
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-10 shadow-[0px_16px_48px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rose-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0px_4px_16px_var(--rose-gold-shadow-light)]">
                GLP-1<br/>+GIP
              </div>
              <h3 className="text-[28px] font-semibold text-[var(--text-primary)]">
                Advanced GLP-1 + GIP
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                Dual receptor agonists target both GLP-1 and GIP pathways for enhanced results:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold text-xl">•</span>
                  <span className="text-[16px] text-[var(--text-secondary)]">Dual hormone action for superior blood sugar control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold text-xl">•</span>
                  <span className="text-[16px] text-[var(--text-secondary)]">Enhanced weight loss through multiple pathways</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rose-gold-text font-bold text-xl">•</span>
                  <span className="text-[16px] text-[var(--text-secondary)]">Improved metabolic health markers</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-[#EAEAEA]">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium tracking-[1px] uppercase text-[var(--text-secondary)]">
                  Starting at
                </span>
                <span className="text-[24px] font-bold rose-gold-text">
                  $323/mo
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-[64px] bg-white rounded-[24px] p-12 shadow-[0px_16px_48px_rgba(0,0,0,0.05)]"
        >
          <div className="text-center mb-8">
            <h3 className="text-[28px] font-semibold text-[#222222] mb-4">
              Safety & Quality Assurance
            </h3>
            <p className="text-[16px] text-[#666666] max-w-2xl mx-auto">
              All medications are compounded in FDA-regulated facilities and undergo rigorous testing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '✓', text: 'FDA-regulated facilities' },
              { icon: '✓', text: 'Third-party tested' },
              { icon: '✓', text: 'Physician prescribed' },
              { icon: '✓', text: 'Ongoing monitoring' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="rose-gold-text font-bold text-xl">{item.icon}</span>
                <span className="text-[16px] text-[var(--text-secondary)]">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}