"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Package, FlaskConical, Users, TestTube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsIncludedSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Provider-Prescribed Medication",
      summary: "Powerful GLP-1 medication tailored to your biology.",
      description: "Your provider prescribes compounded GLP-1 medication from vetted US pharmacies, ensuring both safety and effectiveness for your unique needs.",
      icon: <FlaskConical className="w-5 h-5" />,
      image: "/u7488359357_product_photo_of_a_plain_medical_vial_for_GLP-1_w_1a39bc17-8f61-449b-be38-41204fd21630_1.png"
    },
    {
      title: "Dedicated Medical Support",
      summary: "Your personal provider guides your journey.",
      description: "Get ongoing access to your provider through virtual check-ins and unlimited messaging for dosage adjustments and support.",
      icon: <Users className="w-5 h-5" />,
      image: "/Metabolic Data.png"
    },
    {
      title: "Comprehensive Lab Work",
      summary: "Data-driven monitoring for your safety.",
      description: "Includes metabolic lab work at start and every 6 months, allowing your provider to track progress and optimize treatment.",
      icon: <TestTube className="w-5 h-5" />,
      image: "/images/landing-page-2/protocol-1.5.png"
    },
    {
      title: "Complete Supply Kit",
      summary: "Everything delivered to your door.",
      description: "Monthly delivery includes medication, syringes, alcohol pads, and full access to our nutrition coaching platform.",
      icon: <Package className="w-5 h-5" />,
      image: "/videos/u2634596518_We_make_it_easy._Each_month_youll_receive_a_complet_27d08ece-15b2-4127-a971-00fdff5c6ffe.png"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white rounded-t-2xl -mt-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Header - Ultra Minimal */}
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Everything You Need in One Plan
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-4 sm:mb-6">
            No hidden fees, no surprises. Just a clear path to results.
          </p>
          <Button variant="default" className="py-2 px-5 text-sm">
            Check Your Eligibility
          </Button>
        </div>

        {/* Compact Grid Layout - Ultra Thin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 left-3 text-white">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-600 line-clamp-2">{feature.summary}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Active Feature Description - Ultra Thin */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="mt-6 p-4 bg-gray-50 rounded-xl"
          >
            <p className="text-sm text-gray-700 leading-relaxed">{features[activeFeature].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}