"use client"

import React from "react"
import { motion } from "motion/react"

export default function ProtocolSection() {
  // Merged: New conversion-focused copy + original styling props
  const phases = [
    {
      number: "01",
      title: "Step 01: Decode Your Metabolism",
      description:
        "We start with comprehensive lab work and a detailed health intake. This gives your provider the precise data needed to understand your unique biology and craft a treatment plan that’s perfectly tailored to you.",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-900",
      accentColor: "bg-amber-100",
      image: "/images/landing-page-2/protocol-1.5.png",
      cta: "Learn more →",
    },
    {
      number: "02",
      title: "Step 02: Craft Your Personalized Plan",
      description:
        "In a private telehealth visit, you'll meet your provider to review your lab results and set your goals. Together, you will design a custom GLP-1 protocol with the precise dosage to maximize your success.",
      bgColor: "bg-gradient-to-br from-stone-50 to-zinc-50",
      borderColor: "border-stone-200",
      textColor: "text-stone-900",
      accentColor: "bg-stone-100",
      image: "/Protocol Design.png",
      cta: "Learn more →",
    },
    {
      number: "03",
      title: "Step 03: Begin Your Transformation",
      description:
        "Your medication is delivered discreetly to your door. From the first dose, your protocol works with your body’s hormones to reduce hunger, eliminate cravings, and reset your metabolism for powerful, sustainable weight loss.",
      bgColor: "bg-gradient-to-br from-neutral-50 to-slate-50",
      borderColor: "border-neutral-200",
      textColor: "text-neutral-900",
      accentColor: "bg-neutral-100",
      image: "/images/landing-page-2/protocol-3.png",
      cta: "Learn more →",
    },
    {
      number: "04",
      title: "Step 04: Optimize for Long-Term Success",
      description:
        "Your journey is supported by continuous care. With regular provider check-ins and follow-up labs, we fine-tune your plan to ensure you not only reach your goals, but maintain them for life.",
      bgColor: "bg-gradient-to-br from-gray-50 to-cool-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-900",
      accentColor: "bg-gray-100",
      image: "/images/landing-page-2/protocol-4.png",
      cta: "Learn more →",
    },
  ]

  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-24 md:pb-32 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] -mt-4 sm:-mt-6 md:-mt-8 relative z-10">
      <div className="w-full">
        <div className="px-6 sm:px-8 md:px-16 lg:px-20 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-100 mb-4">
            Your 4-Step Path to Lasting Results
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
            Our physician-led protocol is built on science, ensuring your journey is safe, personalized, and effective from day one.
          </p>
        </div>
        <div className="px-6 sm:px-8 md:px-16 lg:px-20">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16 last:mb-0`}
            >
              <div className="flex-1">
                <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <span className="text-white font-bold">Step {phase.number}</span>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{phase.description}</p>
                <button className="text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium transition-colors">
                  {phase.cta}
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src={phase.image} alt={`${phase.title} illustration`} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}