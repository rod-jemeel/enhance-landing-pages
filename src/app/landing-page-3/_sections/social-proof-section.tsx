"use client";

import { Button } from "@/components/ui/custom-button";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Lost 42 pounds in 4 months. The medical supervision made all the difference. This program changed my life.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop",
    name: "Sarah Mitchell",
    role: "Transformed Member",
  },
  {
    text: "As a physician myself, I was impressed by the comprehensive approach. Down 38 pounds and feeling great.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop",
    name: "Dr. Michael Chen",
    role: "Medical Professional",
  },
  {
    text: "My A1C dropped from 8.2 to 5.6. The medication and physician guidance helped me reverse my prediabetes.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=200&h=200&fit=crop",
    name: "Jennifer Rodriguez",
    role: "Health Success Story",
  },
  {
    text: "60 pounds down and maintaining for 8 months. The direct physician access made me feel safe throughout.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    name: "Robert Thompson",
    role: "Long-term Success",
  },
  {
    text: "The convenience of home delivery and telehealth fits my busy schedule. Down 35 pounds and feeling incredible.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop",
    name: "Amanda Foster",
    role: "Busy Professional",
  },
  {
    text: "After years of yo-yo dieting, I finally found a solution. 52 pounds gone and my energy is through the roof.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    name: "Marcus Johnson",
    role: "Energy Transformed",
  },
  {
    text: "The lab work showed exactly what my body needed. My metabolic health has completely transformed.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&h=200&fit=crop",
    name: "Dr. Patricia Lee",
    role: "Metabolic Success",
  },
  {
    text: "As a busy executive, this program fit my lifestyle perfectly. 44 pounds down and reclaimed my life.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&h=200&fit=crop",
    name: "David Chen",
    role: "Executive Member",
  },
  {
    text: "The science-based approach sold me. Blood pressure normalized, lost 56 pounds. Real medicine, real results.",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=200&h=200&fit=crop",
    name: "Rebecca Martinez",
    role: "Science Believer",
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
            Real People. Real Science. Real Results.
          </h2>
          <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Join the thousands of members who have transformed their health with our provider-led GLP-1 program. This is proof that a comprehensive, physician-guided approach delivers sustainable, life-changing outcomes.
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