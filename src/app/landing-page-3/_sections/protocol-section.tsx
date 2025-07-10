"use client"

import React from "react"
import { motion } from "framer-motion"

export default function ProtocolSection() {
  // --- COPY & STYLING MERGED HERE ---
  // This combines the new, consistent copy with your original styling properties.
  // The CTA text is updated to be a reinforcing benefit statement.
  const phases = [
    {
      number: "01",
      title: "Start With Your Intake & Labs",
      description: "Your journey begins with a simple online intake form and comprehensive lab work at a location near you. This gives your provider the data needed to create a safe, effective, and truly personalized plan.",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-900",
      accentColor: "bg-amber-100",
      image: "/images/landing-page-2/protocol-1.5.png",
      cta: "Safety is Our Priority", // New, stronger CTA text
    },
    {
      number: "02",
      title: "Meet Your Provider Online",
      description: "From the comfort of your home, you'll have a private telehealth visit to review your results and discuss your goals. Your provider will answer all your questions and finalize your personalized GLP-1 treatment plan.",
      bgColor: "bg-gradient-to-br from-stone-50 to-zinc-50",
      borderColor: "border-stone-200",
      textColor: "text-stone-900",
      accentColor: "bg-stone-100",
      video: "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4",
      cta: "Personalized For You",
    },
    {
      number: "03",
      title: "Receive Your Medication",
      description: "Once prescribed, your medication and all necessary supplies are shipped discreetly to your door. No pharmacy lines, no hassle. You'll have everything you need to begin your transformation.",
      bgColor: "bg-gradient-to-br from-neutral-50 to-slate-50",
      borderColor: "border-neutral-200",
      textColor: "text-neutral-900",
      accentColor: "bg-neutral-100",
      image: "/images/landing-page-2/protocol-3.png",
      cta: "Convenience at Your Door",
    },
    {
      number: "04",
      title: "Get Ongoing Support & Care",
      description: "Your journey doesn't end with the first shipment. With regular provider check-ins and unlimited messaging, we fine-tune your plan to ensure you're getting the best results and have the support you need to succeed.",
      bgColor: "bg-gradient-to-br from-gray-50 to-cool-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-900",
      accentColor: "bg-gray-100",
      image: "/images/landing-page-2/protocol-4.png",
      cta: "We're With You All The Way",
    },
  ]

  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-24 md:pb-32 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] -mt-4 sm:-mt-6 md:-mt-8 relative z-10">
      <div className="w-full">
        <div className="px-6 sm:px-8 md:px-16 lg:px-20 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-100 mb-4">
            How It Works: 4 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
            We’ve designed a simple, provider-led process to ensure your journey is safe, personalized, and effective from day one.
          </p>
        </div>
        <div className="px-6 sm:px-8 md:px-16 lg:px-20">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 mb-16 last:mb-0`}
            >
              <div className="flex-1">
                <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <span className="text-white font-bold">Step {phase.number}</span>
                </div>
                <h3 className="text-3xl font-light text-white mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>{phase.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{phase.description}</p>
                {/* --- Restored original button styling with new CTA text --- */}
                <button className="text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium transition-colors cursor-default">
                  {phase.cta}
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  {phase.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={phase.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={phase.image} alt={`${phase.title} illustration`} className="w-full h-full object-cover" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}