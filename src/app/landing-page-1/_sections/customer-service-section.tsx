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
    <section ref={container} className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              A Message from Our Medical Director
            </h2>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 items-stretch">
              <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-blue-600 mb-6" />
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
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
                    <p className="text-xl font-bold text-gray-900">Dr. Erik Stark</p>
                    <p className="text-gray-600">Medical Director, Enhance.MD</p>
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