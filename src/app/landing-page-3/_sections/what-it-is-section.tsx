"use client";

import { motion } from "framer-motion";

export default function WhatItIsSection() {
  // --- COPY UPDATED HERE ---
  // This new card data aligns with the "Simple Steps" and "All-In-One" theme from the new hero section.
  // It focuses on benefits (Results, Safety, Convenience) rather than just features.
  const cardData = [
    {
      title: "Real Medication, Real Results",
      description: "You'll be prescribed a powerful, provider-led GLP-1 medication. It's not a fad diet; it's a science-backed treatment that works with your body to reduce hunger and support sustainable weight loss."
    },
    {
      title: "Safe and Tailored to You",
      description: "Your journey starts with comprehensive lab work to ensure the treatment is right for you. Our medical team monitors your progress, adjusting your plan to maximize results safely and effectively."
    },
    {
      title: "Complete Concierge Care",
      description: "From your online consultation to medication delivered discreetly to your door, we handle everything. Enjoy ongoing access to your provider and our support team, all from the comfort of home."
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
            {/* --- COPY UPDATED HERE --- */}
            {/* Header - Sticky on desktop */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:h-fit">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6" style={{ fontFamily: "Nouvelle Grotesk" }}>
                Everything Included for Your Success
              </h2>
              <p className="text-xl md:text-2xl text-gray-900 font-light mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
                Our all-inclusive program is built on three core pillars:
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "Nouvelle Grotesk" }}>
                We combine provider-led medical care with a seamless digital experience. No confusing plans, no pharmacy lines, and no hidden fees—just a straightforward path to achieving your goals.
              </p>
              <button 
                className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-2"
                style={{ fontFamily: "Nouvelle Grotesk" }}
                onClick={() => { /* Add your navigation logic here, e.g., scrollTo('#pricing') or router.push('/get-started') */ }}
              >
                Check Your Eligibility →
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