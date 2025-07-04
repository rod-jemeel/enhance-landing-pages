'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function CustomerServiceSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-10vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <section ref={container} className="relative h-[90vh] bg-white overflow-hidden border-t border-[#F0E68C]/20 flex items-center">
      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
              A Message from Our Medical Director
            </h2>
          </motion.div>

          <div className="bg-[#F8F8F8] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 items-stretch">
              <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
                <div className="w-12 h-12 mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)',
                    WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z\'%3E%3C/path%3E%3Cpath d=\'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z\'%3E%3C/path%3E%3C/svg%3E")',
                    maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z\'%3E%3C/path%3E%3Cpath d=\'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z\'%3E%3C/path%3E%3C/svg%3E")',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                  }}>
                </div>
                <blockquote className="text-xl lg:text-2xl text-[#333333] leading-relaxed mb-8 font-medium">
                  "Real progress in health and wellness comes when we treat the whole person—not just the symptoms. By focusing on personalized care and addressing the root causes of your challenges, I can help you achieve sustainable results that improve not just your body but your entire quality of life. Let's take this journey to better health together."
                </blockquote>
                
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img 
                      src="/images/erik-signature.webp" 
                      alt="Dr. Erik Stark signature"
                      className="h-16 w-auto opacity-80"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#333333]">Dr. Erik Stark</p>
                    <p className="text-[#666666]">Medical Director, Enhance.MD</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 relative bg-white">
                <img 
                  src="/images/erik.webp"
                  alt="Dr. Erik Stark"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}