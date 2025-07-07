"use client";

import React from "react";
import { motion } from "motion/react";
import { FileText, FlaskConical, Video, Package } from "lucide-react";
import { AnimatedTabs } from "@/components/ui/animated-tabs";

const steps = [
  {
    id: "assessment",
    label: "Step 1",
    title: "Medical Assessment",
    description:
      "Complete health questionnaire in 5-10 minutes for personalized treatment.",
    icon: FileText,
    videoId: "KWcO3KoiPg0",
  },
  {
    id: "testing",
    label: "Step 2",
    title: "Lab Testing",
    description:
      "Complete blood work and health screenings at Quest Diagnostics.",
    icon: FlaskConical,
    videoId: "mG5I5uryXDk",
  },
  {
    id: "consultation",
    label: "Step 3",
    title: "Provider Consultation",
    description: "Meet with licensed providers via secure video call.",
    icon: Video,
    videoId: "-7QqY7UxlwA",
  },
  {
    id: "delivery",
    label: "Step 4",
    title: "Doorstep Delivery",
    description: "Free home delivery with automatic refills.",
    icon: Package,
    videoId: "stRKESZuQ6g",
  },
];

export default function StepsSection() {
  const tabs = steps.map((step) => ({
    id: step.id,
    label: step.label,
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#D4AF37]">
              {step.label.replace("Step ", "")}
            </div>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] mt-2">
            {step.title}
          </h3>
          <p className="text-lg text-[#666666]">
            {step.description}
          </p>
        </div>
        
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${step.videoId}?rel=0&modestbranding=1`}
            title={step.title}
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    ),
  }));

  return (
    <section className="relative py-20 bg-white border-t border-[#F0E68C]/20">
      <motion.div className="relative px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-4"
          >
            Your Path to Transformation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto"
          >
            Four simple steps to start your journey
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <AnimatedTabs 
            tabs={tabs}
            defaultTab="assessment"
            className="max-w-6xl w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-12 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 transition-all hover:scale-105 text-[#333333]"
            style={{
              background:
                "linear-gradient(to bottom right, #F0E68C, #D4AF37, #FFD700, #D4AF37)",
            }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
