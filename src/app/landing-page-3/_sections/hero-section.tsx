'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="relative h-full flex items-end justify-start pt-16" 
           style={{
             backgroundImage: 'url(/images/hero-3.png)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat'
           }}>
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 pb-32">
          <motion.div
            className="space-y-8 max-w-2xl text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-medium tracking-[1px] uppercase text-white/90"
            >
              Medical-Grade Weight Loss
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[72px] font-bold leading-[1.1] tracking-[-2.5px] text-white"
            >
              Transform Your Life<br />
              With Enhance.MD
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[18px] leading-[1.7] text-white/90 max-w-xl"
            >
              Provider-led GLP-1 weight loss program with personalized dosing. 
              Same price at every dose, starting at $212/month.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4 pt-8"
            >
              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full 
                         rose-gold-gradient shadow-[0px_8px_24px_var(--rose-gold-shadow-light)] hover:shadow-[0px_12px_32px_var(--rose-gold-shadow-dark)]
                         transition-all duration-300 hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 font-medium transition-all text-white hover:text-white/80"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[5]" />
      </div>
    </section>
  );
}