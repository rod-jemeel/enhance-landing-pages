'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-10vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <section ref={container} className="relative h-[90vh] bg-[#1A1E29] overflow-hidden border-t border-[#F0E68C]/20 flex items-center">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-8 lg:px-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Start Your Weight Loss Journey Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl lg:text-2xl text-[#E0E0E0] mb-12 leading-relaxed"
          >
            Join thousands who have transformed their lives with our provider-led GLP-1 program. No insurance required. No hidden fees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all text-[#333333]"
              style={{
                background: 'linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)',
              }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-[#F0E68C] px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all"
            >
              Book a Consultation
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#E0E0E0] text-sm mt-8"
          >
            100% Money-Back Guarantee • Same Price at Every Dose
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}