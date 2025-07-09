"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Advanced GLP-1 + GIP℞",
    type: "GLP-1 + GIP",
    price: "$323/mo*",
    tagline: "Consistent Price Regardless of Dosage",
    availability: "Available",
    image: "/images/bottle-1.webp",
    features: [
      "4 Weeks of Medication",
      "Ongoing Provider Care & Support",
      "Metabolic Laboratory Testing Every 6 Months",
      "Syringes & Alcohol Pads Kit",
      "Nutrition & Wellness Coaching",
      "Platform Access & Educational Content"
    ],
    disclaimer: "*Payable up front with a 12-month plan. Prescription products require an online consultation with a healthcare professional who will determine if a prescription is appropriate. This is a compounded medication and is not FDA-approved. Its safety or effectiveness has not been verified by the FDA."
  },
  {
    id: 2,
    name: "Compounded GLP-1℞",
    type: "GLP-1",
    price: "$212/mo*",
    tagline: "Consistent Price Regardless of Dosage",
    availability: "Available",
    image: "/images/bottle-2.webp",
    features: [
      "4 Weeks of Medication",
      "Ongoing Provider Care & Support",
      "Metabolic Laboratory Testing Every 6 Months",
      "Syringes & Alcohol Pads Kit",
      "Nutrition & Wellness Coaching",
      "Platform Access & Educational Content"
    ],
    disclaimer: "*Payable up front with a 12-month plan. Prescription products require an online consultation with a healthcare professional who will determine if a prescription is appropriate. This is a compounded medication and is not FDA-approved. Its safety or effectiveness has not been verified by the FDA."
  }
];

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-15vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const productY = useTransform(scrollYProgress, [0, 1], ['-5vh', '5vh']);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section ref={container} className="relative h-[90vh] w-full pt-20 bg-[#1A1E29] overflow-hidden border-t border-[#F0E68C]/20">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2C3E50] via-[#1A1E29] to-black opacity-50"
      ></motion.div>
      
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="absolute top-8 right-8 text-white">
          <span className="text-2xl font-bold tracking-wide">{currentProduct.type}</span>
        </div>

        <div className="absolute top-20 right-8 text-white text-right">
          <div className="mb-2">
            <span className="text-sm text-[#E0E0E0]">All doses starting at</span>
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-[#F0E68C] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">{currentProduct.price}</div>
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full overflow-hidden z-0 pointer-events-none select-none">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex whitespace-nowrap"
          >
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex"
            >
              <span className="text-[12rem] font-black text-gray-800/20 mr-20">
                {currentProduct.name.split("℞")[0]}
              </span>
              <span className="text-[12rem] font-black text-gray-800/20 mr-20">
                {currentProduct.name.split("℞")[0]}
              </span>
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ y: productY }}
            className="relative z-20"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-3xl opacity-50"></div>
            <div className="absolute -inset-8 bg-gray-900/50 blur-2xl"></div>
            
            <motion.img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="relative h-[500px] w-auto object-contain drop-shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-12 left-8 right-8 max-w-2xl mx-auto">
          <p className="text-gray-500 text-xs leading-relaxed">
            {currentProduct.disclaimer}
          </p>
        </div>

        <div className="absolute bottom-8 right-8 flex gap-4">
          <button className="relative overflow-hidden px-8 py-3 rounded-full font-medium transition-all hover:scale-105 text-[#333333] shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)',
            }}>
            Get Started
          </button>
          <button className="border border-[#F0E68C] text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all">
            Book a Consultation
          </button>
        </div>

        <button
          onClick={prev}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 text-white p-3 rounded-full transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 text-white p-3 rounded-full transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute top-8 left-8 space-y-2">
          {currentProduct.features.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 text-gray-400"
            >
              <Check className="w-4 h-4 text-[#B8860B]" />
              <span className="text-sm text-[#E0E0E0]">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-[#B8860B] w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}