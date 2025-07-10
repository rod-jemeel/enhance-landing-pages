"use client"

import React from "react"
import { motion } from "motion/react"

export default function ProtocolSection() {
  const phases = [
    {
      number: "01",
      title: "Start With Your Intake & Labs",
      description: "Complete a simple online form and get comprehensive lab work at a location near you for personalized care.",
      image: "/images/landing-page-2/protocol-1.5.png",
      cta: "Safety First",
    },
    {
      number: "02",
      title: "Meet Your Provider Online",
      description: "Have a private telehealth visit to review results and create your personalized GLP-1 treatment plan.",
      video: "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4",
      cta: "Personalized Care",
    },
    {
      number: "03",
      title: "Receive Your Medication",
      description: "Your medication and supplies are shipped discreetly to your door. No pharmacy visits needed.",
      image: "/images/landing-page-2/protocol-3.png",
      cta: "Convenient Delivery",
    },
    {
      number: "04",
      title: "Get Ongoing Support",
      description: "Regular check-ins and unlimited messaging ensure your plan stays optimized for the best results.",
      image: "/images/landing-page-2/protocol-4.png",
      cta: "Continuous Care",
    },
  ]

  return (
    <section id="protocol-section" className="w-full py-12 sm:py-16 md:py-20 bg-black rounded-t-2xl -mt-2 relative z-10">
      <div className="w-full">
        <div className="px-4 sm:px-6 md:px-12 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-100 mb-2" style={{ fontFamily: "Nouvelle Grotesk" }}>
            How It Works: 4 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Our physician-led process ensures your journey is safe and effective from day one.
          </p>
        </div>
        <div className="px-4 sm:px-6 md:px-12">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10 mb-8 sm:mb-12 last:mb-0`}
            >
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-3 text-sm">
                  <span className="text-white font-medium">Step {phase.number}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2" style={{ fontFamily: "Nouvelle Grotesk" }}>{phase.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{phase.description}</p>
                <button className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default">
                  {phase.cta}
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl shadow-black/20">
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