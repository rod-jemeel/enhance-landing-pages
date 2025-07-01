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
    <section ref={container} className="relative h-screen overflow-hidden">
      <motion.div 
        style={{ y, scale }} 
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury sports car"
          fill
          quality={100}
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/30" />
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
                className="text-sm text-yellow-400 uppercase tracking-wider font-medium"
              >
                Lorem Ipsum Dolor
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-white mt-4 leading-tight"
              >
                Lorem ipsum dolor
                <span className="block text-yellow-400">Sit amet consectetur.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-200 text-lg mt-6 max-w-lg"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 mt-8"
              >
                <select className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors">
                  <option value="" className="text-gray-900">Lorem ipsum dolor</option>
                  <option value="" className="text-gray-900">Consectetur adipiscing</option>
                  <option value="" className="text-gray-900">Sed do eiusmod</option>
                </select>
                <select className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors">
                  <option value="" className="text-gray-900">Sit amet consectetur</option>
                  <option value="" className="text-gray-900">Tempor incididunt</option>
                  <option value="" className="text-gray-900">Labore et dolore</option>
                </select>
              </motion.div>
            </div>
            <div className="relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative z-20"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>
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
    </section>
  );
}