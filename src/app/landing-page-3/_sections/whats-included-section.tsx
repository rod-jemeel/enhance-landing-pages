"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Package, FlaskConical, Users, TestTube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Corrected import for consistency

export default function WhatsIncludedSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  // --- COPY UPDATED HERE ---
  // The copy is now more direct and benefit-focused, proving the "all-inclusive" value.
  const features = [
    {
      title: "Provider-Prescribed GLP-1 Medication",
      summary: "Powerful medication prescribed by your provider to reduce hunger and reset your metabolism.",
      description: "Your dedicated provider prescribes a powerful, compounded GLP-1 medication tailored to your biology. We partner exclusively with vetted, high-quality US-based pharmacies to ensure your treatment is both safe and effective.",
      icon: <FlaskConical className="w-6 h-6" />,
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_V5Py85fOiXtkX4lFFgwlrWk5jRcA/fjbjMTCU7xCthObZs2V28S/public/videos/Vial%20Rotating.mp4",
      image: "/u7488359357_product_photo_of_a_plain_medical_vial_for_GLP-1_w_1a39bc17-8f61-449b-be38-41204fd21630_1.png"
    },
    {
      title: "Dedicated Medical Support",
      summary: "Your personal provider is with you every step, guiding your journey and ensuring your safety.",
      description: "You get ongoing access to your dedicated medical provider. Through virtual check-ins and unlimited messaging, they'll track your progress, adjust your dosage, and ensure your treatment is optimized for lasting results.",
      icon: <Users className="w-6 h-6" />,
      image: "/Metabolic Data.png"
    },
    {
      title: "Comprehensive Lab Work",
      summary: "We use lab data, not guesswork, to monitor your health and personalize your plan.",
      description: "Your program includes comprehensive metabolic lab work at a local testing center before you begin and every 6 months after. This critical data allows your provider to ensure your safety and precisely tailor your treatment for the best possible health outcomes.",
      icon: <TestTube className="w-6 h-6" />,
      image: "/images/landing-page-2/protocol-1.5.png"
    },
    {
      title: "Complete Welcome & Refill Kit",
      summary: "Everything you need—medication, supplies, and coaching access—delivered discreetly to your door.",
      description: "We make starting simple. Your medication is delivered discreetly to your doorstep in a complete kit, which includes all necessary supplies like syringes and alcohol pads, plus full access to our nutrition and wellness coaching platform.",
      icon: <Package className="w-6 h-6" />,
      image: "/videos/u2634596518_We_make_it_easy._Each_month_youll_receive_a_complet_27d08ece-15b2-4127-a971-00fdff5c6ffe.png"
    },
  ];

  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* --- COPY UPDATED HERE --- */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
            What's Included in Your All-Inclusive Plan
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mb-6 sm:mb-8">
            We've bundled everything you need for a successful metabolic reset into one simple plan. One price, no hidden fees, no surprises. Just a clear path to results.
          </p>
          <Button variant="default" className="w-full sm:w-auto">
            Check Your Eligibility
          </Button>
        </div>

        <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-8" style={{ fontFamily: "Nouvelle Grotesk" }}>
          Your Plan Includes:
        </h3>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                {index === 0 && feature.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  >
                    <source src={feature.video} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                    <span className="text-white">{feature.icon}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{feature.summary}</p>
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature} // Key change triggers the animation
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-8 p-6 bg-gray-100 rounded-2xl"
          >
            <p className="text-gray-700 leading-relaxed">{features[activeFeature].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}