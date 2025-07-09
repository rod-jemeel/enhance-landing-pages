"use client";

import { motion } from "framer-motion";

export default function WhatItIsSection() {
  const cardData = [
    {
      number: "01",
      title: "Provider-Prescribed GLP-1 Medication",
      description: "Under the care of a physician, you'll receive a personalized GLP-1 medication. This is real medicine that works with your body's hormones to curb hunger and reset your metabolism."
    },
    {
      number: "02",
      title: "Data-Driven and Personalized",
      description: "Your treatment is guided by science, not guesswork. We use comprehensive lab work at the start and every 6 months to ensure your plan is safe, effective, and perfectly tuned to your body's needs."
    },
    {
      number: "03",
      title: "Concierge Telehealth Experience",
      description: "Our program is designed for your life. From your first online visit to medication delivered to your door, we provide a seamless experience with ongoing provider care, all from the comfort of your home."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Header - Sticky on desktop */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:h-fit">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6" style={{ fontFamily: "Nouvelle Grotesk" }}>
                A Smarter Approach to Weight Loss
              </h2>
              <p className="text-xl md:text-2xl text-gray-900 font-light mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
                This is weight management, reimagined.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "Nouvelle Grotesk" }}>
                — Our program uses proven medical science to address the biological drivers of weight, delivering results that last. Forget the guesswork and frustration of traditional diets.
              </p>
              <button 
                className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-2"
                style={{ fontFamily: "Nouvelle Grotesk" }}
              >
                Discover more →
              </button>
            </div>

            {/* Cards with separators */}
            <div className="space-y-0">
              {cardData.map((card, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`${index === 0 ? 'pb-8' : 'py-8'}`}>
                    <h3 className="mb-3 text-2xl lg:text-3xl font-light text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
                      {card.title}
                    </h3>
                    <p className="text-base lg:text-lg leading-relaxed text-gray-600">
                      {card.description}
                    </p>
                  </div>
                  {index < cardData.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}