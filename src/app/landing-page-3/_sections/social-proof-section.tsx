"use client";

import { Button } from "@/components/ui/custom-button";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

// Updated testimonials for more impact and relatability
const testimonials = [
  {
    text: "42 lbs gone in 4 months. The medical guidance was a game-changer. I feel like myself again.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop",
    name: "Sarah M.",
    role: "42 lb Transformation",
  },
  {
    text: "As a physician, I was blown away by the data-driven approach. I'm down 38 lbs and my energy is back.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop",
    name: "Dr. Michael C.",
    role: "Physician & Member",
  },
  {
    text: "My A1C plummeted from 8.2 to 5.6, reversing my prediabetes. This program gave me my health back.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=200&h=200&fit=crop",
    name: "Jennifer R.",
    role: "Prediabetes Reversed",
  },
  {
    text: "I lost 60 lbs and have kept it off for 8 months. The continuous provider support made me feel safe and confident.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    name: "Robert T.",
    role: "Sustainable Success",
  },
  {
    text: "As a busy professional, the convenience is unmatched. 35 lbs down without the stress. I feel incredible.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop",
    name: "Amanda F.",
    role: "Busy Professional",
  },
  {
    text: "After years of yo-yo dieting, this was the answer. I've lost 52 lbs and my energy is limitless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    name: "Marcus J.",
    role: "Yo-Yo Dieting Ended",
  },
  {
    text: "The lab work pinpointed exactly what my body needed. My metabolic health has completely turned around.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&h=200&fit=crop",
    name: "Dr. Patricia L.",
    role: "Metabolic Health Restored",
  },
  {
    text: "This program fit seamlessly into my life as a busy executive. I'm down 44 lbs and have reclaimed my health.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&h=200&fit=crop",
    name: "David C.",
    role: "Executive Transformation",
  },
  {
    text: "The science-first approach is what convinced me. My blood pressure is normal, I've lost 56 lbs. Real medicine, real results.",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=200&h=200&fit=crop",
    name: "Rebecca M.",
    role: "Down 56 lbs",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function SocialProofSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-24 sm:pb-32 md:pb-40 px-6 sm:px-8 md:px-16 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-start justify-between mb-8 sm:mb-12 gap-4"
      >
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 md:text-4xl mb-3 sm:mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Real Stories from People Just Like You
          </h2>
          <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Thousands have already transformed their health with our physician-led GLP-1 program. See for yourself how our science-backed approach delivers life-changing, sustainable results.
          </p>
        </div>
        <Button variant="default" className="w-full sm:w-auto sm:ml-8">
          See Their Stories
        </Button>
      </motion.div>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] md:max-h-[600px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>
    </section>
  );
}