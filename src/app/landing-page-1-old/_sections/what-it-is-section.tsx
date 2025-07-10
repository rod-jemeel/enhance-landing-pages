"use client";

import Image from "next/image";
import { Button } from "@/components/ui/custom-button";
import { motion } from "motion/react";

export default function WhatItIsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white" id="what-it-is">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
              The Science of GLP-1 Weight Loss
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              GLP-1 medications work by mimicking your body's natural hormones to reduce appetite and slow digestion. This physician-supervised approach helps you achieve sustainable weight loss without constant hunger or cravings.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Our program combines FDA-approved medication with comprehensive care, ensuring your journey is both safe and effective. With regular monitoring and personalized dosing, we help you reach your goals while maintaining your health.
            </p>
            <Button variant="default" className="py-2 px-5 text-sm">
              Learn How It Works
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/u7488359357_product_photo_of_a_plain_medical_vial_for_GLP-1_w_1a39bc17-8f61-449b-be38-41204fd21630_1.png"
              alt="GLP-1 Medication"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>

        {/* Key Benefits - Ultra Thin Grid */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {[
            {
              title: "Physician-Led Care",
              description: "Board-certified providers guide your journey with personalized treatment plans.",
            },
            {
              title: "Proven Results",
              description: "Clinical studies show average weight loss of 15-20% of body weight.",
            },
            {
              title: "All-Inclusive Support",
              description: "Everything you need in one plan: medication, supplies, and ongoing care.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}