'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function HeroSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={container} className="relative bg-white pt-20 p-[10px]">
      <div className="rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative h-[calc(100vh-6rem)]">
        <motion.div 
          style={{ y, scale }} 
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            quality={100}
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-[#1A1E29]/50" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm text-[#D4AF37] uppercase tracking-wider font-medium"
                >
                  Provider Led
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-bold text-white mt-4 leading-tight"
                >
                  Enhance Your
                  <span className="block bg-gradient-to-r from-[#F0E68C] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">Weight Loss Journey</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-[#E0E0E0] text-lg mt-6 max-w-lg"
                >
                  Affordable weight loss starting at $212/mo. Provider personalized dosages, one all-in price. It's that simple.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex gap-4 mt-8"
                >
                  <button className="relative overflow-hidden px-8 py-3 rounded-full font-medium transition-all hover:scale-105 text-[#333333] shadow-lg hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)',
                    }}>
                    Get Started
                  </button>
                  <button className="bg-transparent hover:bg-white/10 text-white border border-[#F0E68C] px-8 py-3 rounded-full font-medium transition-all">
                    Book a Consultation
                  </button>
                </motion.div>
              </div>
              <div className="relative hidden lg:block">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative z-20"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B8860B] rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#F0E68C] rounded-full blur-2xl opacity-20"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}