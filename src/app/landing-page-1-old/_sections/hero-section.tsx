"use client"

import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { Button } from "@/components/ui/custom-button"
import { motion } from 'motion/react'

const successStories = [
  {
    id: 1,
    name: "Sarah M.",
    designation: "Lost 45 lbs",
    image:
      "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Michael R.",
    designation: "Lost 38 lbs",
    image:
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Jessica L.",
    designation: "Lost 52 lbs",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "David K.",
    designation: "Lost 41 lbs",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "Emma T.",
    designation: "Lost 36 lbs",
    image:
      "https://images.unsplash.com/photo-1567598508481-65985588e295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
]

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative bg-white pt-20 p-[10px]">
      <div className="rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative h-[calc(100vh-6rem)]">
        {/* Video Background - Ultra Thin Design */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/social_u2634596518_womans_upper_body_holding_a_blank_medicinal_vial__ec939f2d-342c-454e-ad17-6f42eeed4f31_3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Content - Ultra Thin Spacing */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl w-full text-center"
          >
            <h1 className="mb-2 sm:mb-3 font-light leading-tight tracking-tight text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Physician-Led Weight Loss. Real, Lasting Results.
            </h1>
            <div className="mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-3">Your health is our top priority. Our program combines proven GLP-1 medication with dedicated provider care.</p>
              <div className="flex justify-center">
                <AnimatedTooltip items={successStories} />
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row justify-center">
              <Button variant="glass" className="text-white hover:bg-white hover:text-black w-full sm:w-auto py-2 px-5 text-sm">
                How It Works
              </Button>
              <Button variant="default" className="w-full sm:w-auto py-2 px-5 text-sm">
                Start My Consultation
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator - Minimal */}
        <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 animate-bounce">
          <p className="text-xs text-white/50 uppercase tracking-widest">Scroll</p>
          <div className="w-[1px] h-6 bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}