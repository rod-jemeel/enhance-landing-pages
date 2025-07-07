'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export default function ProductShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const bottle1X = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const bottle2X = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[64px]"
        >
          <h2 className="text-[52px] font-bold leading-tight tracking-[-1.5px] text-[var(--text-primary)] mb-6">
            Pharmaceutical Excellence
          </h2>
          <p className="text-[18px] leading-[1.7] text-[var(--text-secondary)] max-w-2xl mx-auto">
            FDA-regulated compounded medications, personalized for your journey. 
            Delivered directly to your door with ongoing provider support.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center">
            <motion.div
              style={{ x: bottle1X }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-[10px] rounded-[24px] shadow-[0px_16px_48px_rgba(0,0,0,0.1)]"
              >
                <div className="rounded-[20px] overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-white p-12">
                  <Image
                    src="/images/bottle-1.webp"
                    alt="GLP-1 Medication"
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <h3 className="text-[28px] font-semibold text-[var(--text-primary)] mb-2">
                  Compounded GLP-1
                </h3>
                <p className="text-[14px] font-medium tracking-[1px] uppercase rose-gold-text">
                  Starting at $212/month
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ x: bottle2X }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-[10px] rounded-[24px] shadow-[0px_16px_48px_rgba(0,0,0,0.1)]"
              >
                <div className="rounded-[20px] overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-white p-12">
                  <Image
                    src="/images/bottle-2.webp"
                    alt="Advanced GLP-1 + GIP"
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <h3 className="text-[28px] font-semibold text-[var(--text-primary)] mb-2">
                  Advanced GLP-1 + GIP
                </h3>
                <p className="text-[14px] font-medium tracking-[1px] uppercase rose-gold-text">
                  Starting at $323/month
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-[64px] grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '✨',
                title: 'Lab-Tested Quality',
                description: 'Every batch tested for purity and potency'
              },
              {
                icon: '💎',
                title: 'Provider Prescribed',
                description: 'Personalized dosing from licensed physicians'
              },
              {
                icon: '🌟',
                title: 'Direct Delivery',
                description: 'Temperature-controlled shipping to your door'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-[18px] font-semibold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h4>
                <p className="text-[14px] text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}