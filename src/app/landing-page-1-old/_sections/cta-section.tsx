"use client";

import { Button } from "@/components/ui/custom-button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Provider-Led Care",
  "All-Inclusive Pricing",
  "Lab Work Included",
  "Ongoing Support",
];

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3" style={{ fontFamily: "Nouvelle Grotesk" }}
        >
          Ready to Start Your
          <span className="block text-white mt-1">Weight Loss Journey?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-sm sm:text-base text-white/80 mb-6 max-w-2xl mx-auto"
        >
          Join thousands who have achieved lasting results with our physician-led GLP-1 program.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
        >
          <Button 
            variant="default"
            className="py-2 px-6 text-sm group bg-white text-black hover:bg-gray-100"
          >
            Start Your Consultation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="glass" 
            className="py-2 px-6 text-sm text-white hover:bg-white hover:text-black"
          >
            View Pricing
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-white/70" />
              <span className="text-white/70 text-xs">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
