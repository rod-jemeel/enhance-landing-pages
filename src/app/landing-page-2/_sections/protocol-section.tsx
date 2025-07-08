"use client"

import React, { useRef, useState } from "react"
import { ProtocolCarousel, ProtocolCard } from "@/components/ui/protocol-cards-carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ProtocolSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const phases = [
    {
      number: "01",
      title: "Metabolic Analysis",
      description:
        "Your journey begins with a comprehensive medical evaluation to analyze your unique metabolic profile and health markers. This data forms the foundation of your entire program, ensuring your treatment is tailored to your specific biology.",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-900",
      accentColor: "bg-amber-100",
      image: "/Metabolic Data.png",
    },
    {
      number: "02",
      title: "Protocol Design",
      description:
        "You will consult directly with your dedicated physician. Based on your metabolic analysis and personal goals, they will design your personalized treatment protocol within our GLP-1 Provider Led Program, selecting the precise medication and dosage to initiate your transformation.",
      bgColor: "bg-gradient-to-br from-stone-50 to-zinc-50",
      borderColor: "border-stone-200",
      textColor: "text-stone-900",
      accentColor: "bg-stone-100",
      image: "/Protocol Design.png",
    },
    {
      number: "03",
      title: "Biological Recalibration",
      description:
        "This is the active transformation phase. Your prescribed medication is delivered discreetly to your door, and you begin the protocol. The medication works to recalibrate your body's metabolic and hormonal systems, fundamentally changing your relationship with food and energy.",
      bgColor: "bg-gradient-to-br from-neutral-50 to-slate-50",
      borderColor: "border-neutral-200",
      textColor: "text-neutral-900",
      accentColor: "bg-neutral-100",
      image: "/Biological Recalibration.png",
    },
    {
      number: "04",
      title: "Performance Optimization",
      description:
        "Transformation requires data. Through biannual lab work and ongoing provider consultations, we track your progress and fine-tune your protocol. This ensures your results are not only achieved but are sustainable for long-term health and performance.",
      bgColor: "bg-gradient-to-br from-gray-50 to-cool-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-900",
      accentColor: "bg-gray-100",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const cards = phases.map((phase, index) => (
    <ProtocolCard key={phase.number} card={phase} index={index} />
  ))

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-24 md:pb-32 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] -mt-4 sm:-mt-6 md:-mt-8 relative z-10">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 md:px-16 lg:px-20 mb-6 sm:mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-100">
            The 4-Phase Transformation Protocol
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-30 disabled:hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 text-white" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-30 disabled:hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
        <ProtocolCarousel items={cards} carouselRef={carouselRef} onScrollChange={(left, right) => {
          setCanScrollLeft(left)
          setCanScrollRight(right)
        }} />
      </div>
    </section>
  )
}