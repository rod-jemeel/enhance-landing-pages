"use client"

import React from "react"
import { motion } from "motion/react"

export default function ProtocolSection() {
  const phases = [
    {
      number: "01",
      title: "Phase 01: Metabolic Analysis",
      description:
        "Your journey begins with a detailed online intake and comprehensive lab work at a nearby facility. This essential data gives your provider a complete picture of your unique metabolic health, forming the foundation for a safe and personalized treatment plan.",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-900",
      accentColor: "bg-amber-100",
      image: "/images/landing-page-2/protocol-1.5.png",
      cta: "Learn more →",
    },
    {
      number: "02",
      title: "Phase 02: Personalized Protocol Design",
      description:
        "You'll connect one-on-one with your dedicated provider via a private telehealth consultation. They will review your lab results, discuss your goals, and design your personalized GLP-1 medication protocol, including the precise dosage to ensure the best start.",
      bgColor: "bg-gradient-to-br from-stone-50 to-zinc-50",
      borderColor: "border-stone-200",
      textColor: "text-stone-900",
      accentColor: "bg-stone-100",
      image: "/Protocol Design.png",
      cta: "Learn more →",
    },
    {
      number: "03",
      title: "Phase 03: Treatment & Transformation",
      description:
        "Once prescribed, your medication is shipped discreetly to your doorstep. As you begin your protocol, the GLP-1 medication starts working with your body's natural hormones to reduce hunger, manage cravings, and reset your metabolic pathways for effective weight loss.",
      bgColor: "bg-gradient-to-br from-neutral-50 to-slate-50",
      borderColor: "border-neutral-200",
      textColor: "text-neutral-900",
      accentColor: "bg-neutral-100",
      image: "/images/landing-page-2/protocol-3.png",
      cta: "Learn more →",
    },
    {
      number: "04",
      title: "Phase 04: Ongoing Optimization & Support",
      description:
        "Your transformation is supported by continuous care. With ongoing provider check-ins, follow-up lab work every 6 months, and access to wellness coaching, we monitor your progress and fine-tune your plan. This data-driven approach ensures you achieve and sustain your long-term health goals.",
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
            The 4-Step Path to Your Transformation
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
            Our simple, provider-led process is designed for clarity, safety, and lasting results.
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
                  <span className="text-white font-bold">Phase {phase.number}</span>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{phase.description}</p>
                <button className="text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium transition-colors">
                  {phase.cta}
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src={phase.image} alt="" className="w-full h-full object-cover" />
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