"use client";

import { motion } from "framer-motion";

export default function WhatItIsSection() {
  const cardData = [
    {
      number: "01",
      title: "Provider-Prescribed GLP-1 Medication",
      description: "Under physician oversight, you receive a personalized, compounded GLP-1 medication. This is real medicine that works with your body's hormones to reduce hunger, control cravings, and reset your metabolic baseline."
    },
    {
      number: "02",
      title: "Data-Driven & Personalized",
      description: "Your journey is guided by data, not guesswork. Comprehensive lab work before you start and every 6 months ensures your plan is safe, effective, and tailored to your unique metabolic profile. Our providers use this data to fine-tune your treatment."
    },
    {
      number: "03",
      title: "Concierge Telehealth Experience",
      description: "Our program is designed for your life. From the initial online consultation to medication delivered directly to your door, we've removed the friction. Get ongoing provider care and nutrition coaching, all from the comfort of your home."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-start mb-12 sm:mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-3" style={{ fontFamily: "Nouvelle Grotesk" }}>
              A Smarter Approach to<br />Weight Loss
            </h2>
            <button 
              className="text-base font-medium text-gray-500 hover:text-gray-700 transition-colors"
              style={{ fontFamily: "Nouvelle Grotesk" }}
            >
              Discover →
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-light" style={{ fontFamily: "Nouvelle Grotesk" }}>
              This is weight management, reimagined.
            </p>
            <p className="text-base sm:text-lg text-gray-900 leading-relaxed" style={{ fontFamily: "Nouvelle Grotesk" }}>
              — Our program uses proven medical science to go beyond conventional diets, addressing the biological factors of weight loss for lasting results.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl"
              style={{ 
                background: 'linear-gradient(to right, #1a1a1a 0%, #2a2a2a 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex items-center p-8 lg:p-12">
                <div className="mr-8 lg:mr-12">
                  <span className="text-6xl lg:text-7xl font-thin text-white opacity-20">{card.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl lg:text-3xl font-light text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>
                    {card.title}
                  </h3>
                  <p className="text-base lg:text-lg leading-relaxed text-gray-300">
                    {card.description}
                  </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}