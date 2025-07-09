"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Package, FlaskConical, Users, TestTube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsIncludedSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Provider-Prescribed GLP-1 Medication",
      summary: "Powerful, compounded GLP-1 medication personalized to your needs.",
      description: "Receive a powerful, compounded GLP-1 medication, personalized to your needs by your provider. Our medications are prepared by trusted, vetted pharmacies to ensure quality and efficacy.",
      icon: <FlaskConical className="w-6 h-6" />,
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_V5Py85fOiXtkX4lFFgwlrWk5jRcA/fjbjMTCU7xCthObZs2V28S/public/videos/Vial%20Rotating.mp4",
      image: "/u7488359357_product_photo_of_a_plain_medical_vial_for_GLP-1_w_1a39bc17-8f61-449b-be38-41204fd21630_1.png"
    },
    {
      title: "Ongoing Provider Care",
      summary: "Direct access to your dedicated medical provider.",
      description: "Direct access to your dedicated medical provider for virtual consultations, progress tracking, and any dosage adjustments needed to optimize your results safely.",
      icon: <Users className="w-6 h-6" />,
      image: "/Metabolic Data.png"
    },
    {
      title: "Comprehensive Lab Testing",
      summary: "In-depth metabolic lab work before you start and every 6 months.",
      description: "Your plan includes in-depth metabolic lab work before you start and every 6 months after. This data allows your provider to monitor your health and tailor your treatment.",
      icon: <TestTube className="w-6 h-6" />,
      image: "/images/landing-page-2/protocol-1.5.png"
    },
    {
      title: "Complete Supply & Support Kit",
      summary: "All necessary supplies and wellness coaching delivered monthly.",
      description: "Receive your monthly medication, all necessary syringes and alcohol pads, plus access to our nutrition/wellness coaching platform—all delivered discreetly to your door.",
      icon: <Package className="w-6 h-6" />,
      image: "/images/landing-page-2/protocol-4.png"
    },
  ];

  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Your All-Inclusive Transformation Program
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mb-6 sm:mb-8">
            We provide everything you need for a complete metabolic transformation in one simple, transparent plan. Your journey is fully supported from day one with no hidden fees or surprise costs.
          </p>
          <Button variant="default" className="w-full sm:w-auto">
            Get Started Today
          </Button>
        </div>

        <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-8" style={{ fontFamily: "Nouvelle Grotesk" }}>
          Included in Your Plan:
        </h3>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
        
        <AnimatePresence>
          {activeFeature >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-6 bg-gray-100 rounded-2xl"
            >
              <p className="text-gray-700 leading-relaxed">{features[activeFeature].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}