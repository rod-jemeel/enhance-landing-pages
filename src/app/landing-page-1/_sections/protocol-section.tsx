"use client"

import React, { useRef, useState } from "react"
import { ProtocolCarousel, ProtocolCard } from "@/components/ui/protocol-cards-carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const layoutOptions = [
  {
    id: 1,
    name: "Blob Timeline",
    style: "blob-timeline"
  },
  {
    id: 2,
    name: "Grid Journey Map",
    style: "grid-journey"
  },
  {
    id: 3,
    name: "Geometric Steps",
    style: "geometric-steps"
  },
  {
    id: 4,
    name: "Bento Process Grid",
    style: "bento-process"
  },
  {
    id: 5,
    name: "Floating Video Phases",
    style: "floating-phases"
  },
  {
    id: 6,
    name: "Brutalist Timeline",
    style: "brutalist-timeline"
  },
  {
    id: 7,
    name: "Liquid Flow Process",
    style: "liquid-flow"
  },
  {
    id: 8,
    name: "Asymmetric Pathway",
    style: "asymmetric-pathway"
  }
];

export default function ProtocolSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  // Using Asymmetric Pathway layout (id: 8)
  const currentLayout = layoutOptions.find(layout => layout.id === 8)!
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
    <section className="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-24 md:pb-32 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] -mt-4 sm:-mt-6 md:-mt-8 relative z-10 overflow-hidden">
      <div className="w-full relative">
        <div className="px-6 sm:px-8 md:px-16 lg:px-20 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-100 mb-4">
            The 4-Step Path to Your Transformation
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
            Our simple, provider-led process is designed for clarity, safety, and lasting results.
          </p>
        </div>

        {/* Different Layouts */}
        {currentLayout.style === "blob-timeline" ? (
          <div className="px-6 sm:px-8 md:px-16 lg:px-20">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20" />
              
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Blob Video Background */}
                  <div className="absolute -left-20 top-0 w-96 h-96 opacity-10">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                      style={{
                        clipPath: `circle(30% at ${index % 2 === 0 ? '20%' : '80%'} 50%)`,
                        WebkitClipPath: `circle(30% at ${index % 2 === 0 ? '20%' : '80%'} 50%)`
                      }}
                    >
                      <source src="/videos/hero-video (2).mp4" type="video/mp4" />
                    </video>
                  </div>
                  
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl relative z-10">
                      {phase.number}
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <h3 className="text-2xl font-light text-white mb-3">{phase.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : currentLayout.style === "grid-journey" ? (
          <div className="px-6 sm:px-8 md:px-16 lg:px-20">
            <div className="grid grid-cols-12 gap-1 bg-white/10 p-1 rounded-2xl">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="col-span-12 md:col-span-6 lg:col-span-3 bg-black p-6 relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-5xl font-thin text-white/20">{phase.number}</span>
                    <h3 className="text-lg font-medium text-white mt-4 mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-3">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : currentLayout.style === "geometric-steps" ? (
          <div className="px-6 sm:px-8 md:px-16 lg:px-20">
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div 
                    className="relative overflow-hidden"
                    style={{
                      clipPath: index % 2 === 0 
                        ? 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)'
                        : 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
                      WebkitClipPath: index % 2 === 0 
                        ? 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)'
                        : 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)'
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12">
                      <div className="flex items-center gap-6">
                        <span className="text-6xl font-bold text-white/20">{phase.number}</span>
                        <div>
                          <h3 className="text-2xl font-light text-white mb-2">{phase.title}</h3>
                          <p className="text-gray-300">{phase.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : currentLayout.style === "bento-process" ? (
          <div className="px-6 sm:px-8 md:px-16 lg:px-20">
            <div className="grid grid-cols-12 grid-rows-4 gap-4 h-[800px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-12 md:col-span-6 row-span-2 relative rounded-2xl overflow-hidden"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                >
                  <source src="/videos/hero-video (2).mp4" type="video/mp4" />
                </video>
                <div className="relative h-full bg-gradient-to-br from-black/80 to-black/60 p-8 flex flex-col justify-center">
                  <span className="text-8xl font-thin text-white/20">{phases[0].number}</span>
                  <h3 className="text-3xl font-light text-white mt-4 mb-3">{phases[0].title}</h3>
                  <p className="text-gray-300">{phases[0].description}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="col-span-12 md:col-span-6 row-span-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-white/30">{phases[1].number}</span>
                  <div>
                    <h3 className="text-xl font-medium text-white">{phases[1].title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{phases[1].description}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="col-span-12 md:col-span-6 row-span-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-white/30">{phases[2].number}</span>
                  <div>
                    <h3 className="text-xl font-medium text-white">{phases[2].title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{phases[2].description}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="col-span-12 md:col-span-6 row-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center"
              >
                <span className="text-6xl font-thin text-white/20">{phases[3].number}</span>
                <h3 className="text-2xl font-light text-white mt-4 mb-3">{phases[3].title}</h3>
                <p className="text-gray-300">{phases[3].description}</p>
              </motion.div>
            </div>
          </div>
        ) : currentLayout.style === "floating-phases" ? (
          <div className="px-6 sm:px-8 md:px-16 lg:px-20 relative h-[800px]">
            {/* Floating video orbs */}
            <div className="absolute top-10 left-10 w-60 h-60 rounded-full overflow-hidden opacity-20">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/hero-video (2).mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full overflow-hidden opacity-20">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/hero-video (2).mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Phases positioned absolutely */}
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-80"
                style={{
                  top: index < 2 ? `${index * 200}px` : 'auto',
                  bottom: index >= 2 ? `${(index - 2) * 200}px` : 'auto',
                  left: index % 2 === 0 ? '0' : 'auto',
                  right: index % 2 === 1 ? '0' : 'auto'
                }}
              >
                <span className="text-4xl font-thin text-white/30">{phase.number}</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-3">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        ) : currentLayout.style === "brutalist-timeline" ? (
          <div className="px-6 sm:px-8 md:px-16 lg:px-20">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-0 border-4 border-white"
                style={{
                  marginLeft: index % 2 === 0 ? '0' : '20%',
                  marginRight: index % 2 === 1 ? '0' : '20%',
                  marginTop: index === 0 ? '0' : '-4px'
                }}
              >
                <div className="bg-black p-8 md:p-12">
                  <span className="text-8xl font-bold text-white">{phase.number}</span>
                  <h3 className="text-2xl font-bold uppercase text-white mt-4 mb-3">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : currentLayout.style === "liquid-flow" ? (
          <div className="relative">
            {/* Liquid mask background */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                style={{
                  maskImage: "radial-gradient(circle at 20% 50%, black 30%, transparent 70%), radial-gradient(circle at 80% 50%, black 30%, transparent 70%)",
                  WebkitMaskImage: "radial-gradient(circle at 20% 50%, black 30%, transparent 70%), radial-gradient(circle at 80% 50%, black 30%, transparent 70%)"
                }}
              >
                <source src="/videos/hero-video (2).mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className="px-6 sm:px-8 md:px-16 lg:px-20">
              <div className="grid md:grid-cols-2 gap-8">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{phase.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white mb-3">{phase.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : currentLayout.style === "asymmetric-pathway" ? (
          <div className="px-6 sm:px-8 md:px-16 lg:px-20">
            <div className="grid grid-cols-12 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="col-span-12 lg:col-span-7 space-y-4"
              >
                {phases.slice(0, 3).map((phase, index) => (
                  <div key={phase.number} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-bold text-white/30">{phase.number}</span>
                      <h3 className="text-xl font-medium text-white">{phase.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{phase.description}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="col-span-12 lg:col-span-5"
              >
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src="/videos/hero-video (2).mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                    <span className="text-6xl font-thin text-white/40">{phases[3].number}</span>
                    <h3 className="text-2xl font-light text-white mt-2 mb-3">{phases[3].title}</h3>
                    <p className="text-gray-300">{phases[3].description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-6 sm:px-8 md:px-16 lg:px-20 mb-6">
              <div></div>
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
          </>
        )}
      </div>
    </section>
  )
}