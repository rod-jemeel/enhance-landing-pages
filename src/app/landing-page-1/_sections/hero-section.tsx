"use client";

import { useState } from "react"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { Button } from "@/components/ui/custom-button"

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

const layoutOptions = [
  { 
    id: 1, 
    name: "Blob Mask Organic", 
    className: "items-center justify-center text-center",
    contentClass: "",
    useBlobMask: true,
    blobType: "organic"
  },
  { 
    id: 2, 
    name: "Blob Mask Fluid", 
    className: "items-end justify-start text-left",
    contentClass: "sm:max-w-xl",
    useBlobMask: true,
    blobType: "fluid"
  },
  { 
    id: 3, 
    name: "Bordered Video Frame", 
    className: "items-center justify-center text-center",
    contentClass: "",
    useBorderedVideo: true,
    borderStyle: "thick"
  },
  { 
    id: 4, 
    name: "Split Frame Video", 
    className: "items-center justify-end text-right",
    contentClass: "sm:w-1/2 sm:pr-8",
    useBorderedVideo: true,
    borderStyle: "split"
  },
  { 
    id: 5, 
    name: "Modular Grid - Bento", 
    className: "items-center justify-center",
    contentClass: "",
    useModularGrid: true,
    gridType: "bento"
  },
  { 
    id: 6, 
    name: "Modular Grid - Asymmetric", 
    className: "items-start justify-start",
    contentClass: "",
    useModularGrid: true,
    gridType: "asymmetric"
  },
  { 
    id: 7, 
    name: "Blob + Grid Hybrid", 
    className: "items-center justify-center",
    contentClass: "",
    useBlobMask: true,
    blobType: "geometric",
    useModularGrid: true,
    gridType: "minimal"
  },
  { 
    id: 8, 
    name: "Rounded Corner Video", 
    className: "items-center justify-center text-center",
    contentClass: "",
    useBorderedVideo: true,
    borderStyle: "rounded"
  },
  { 
    id: 9, 
    name: "Brutalist Grid", 
    className: "items-start justify-start",
    contentClass: "",
    useModularGrid: true,
    gridType: "brutalist"
  },
  { 
    id: 10, 
    name: "Liquid Blob Mask", 
    className: "items-center justify-start text-left",
    contentClass: "sm:max-w-lg",
    useBlobMask: true,
    blobType: "liquid"
  }
]

export default function HeroSection() {
  // You can change the ID here to test different layouts. Default is 7.
  const currentLayout = layoutOptions.find(layout => layout.id === 7)!

  // --- NEW CONVERSION-FOCUSED COPY IS MANAGED HERE ---
  const copy = {
    headline: "Stop Fighting Your Body. Start Working With It.",
    headlinePart1: "Stop Fighting Your Body.",
    headlinePart2: "Start Working With It.",
    subheadline: "Our physician-led GLP-1 program uses medical science to reset your biology, helping you achieve the lasting results that traditional diets can't.",
    secondaryCTA: "Discover the Science",
    primaryCTA: "Start My Consultation"
  };

  return (
    <section className="w-full h-screen relative" style={{ marginTop: '80px' }}>

      <div className="relative h-[calc(100vh-80px)] w-full">
        {/* All layout rendering logic remains unchanged */}
        {currentLayout.useBlobMask && (
          <>
            {currentLayout.blobType === "organic" && (
              <div className="absolute inset-0">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ clipPath: "url(#organic-blob)", WebkitClipPath: "url(#organic-blob)" }}>
                  <source src="/videos/hero-video (2).mp4" type="video/mp4" />
                </video>
                <svg width="0" height="0"><defs><clipPath id="organic-blob" clipPathUnits="objectBoundingBox"><path d="M0.8,0.1 C0.95,0.15 0.98,0.3 0.95,0.5 C0.92,0.7 0.85,0.85 0.7,0.9 C0.55,0.95 0.35,0.92 0.2,0.85 C0.05,0.78 0.02,0.6 0.05,0.4 C0.08,0.2 0.15,0.05 0.3,0.02 C0.45,-0.01 0.65,0.05 0.8,0.1" /></clipPath></defs></svg>
              </div>
            )}
            {currentLayout.blobType === "fluid" && (
              <div className="absolute inset-0">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ maskImage: "radial-gradient(ellipse 80% 60% at 30% 40%, black 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 30% 40%, black 40%, transparent 70%)" }}>
                  <source src="/videos/hero-video (2).mp4" type="video/mp4" />
                </video>
              </div>
            )}
            {currentLayout.blobType === "geometric" && (
              <div className="absolute inset-0">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ clipPath: "polygon(0 20%, 40% 0, 100% 15%, 100% 80%, 60% 100%, 0 85%)", WebkitClipPath: "polygon(0 20%, 40% 0, 100% 15%, 100% 80%, 60% 100%, 0 85%)" }}>
                  <source src="/videos/hero-video (2).mp4" type="video/mp4" />
                </video>
              </div>
            )}
            {currentLayout.blobType === "liquid" && (
              <div className="absolute inset-0">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover animate-pulse" style={{ maskImage: "radial-gradient(circle at 20% 50%, black 30%, transparent 70%), radial-gradient(circle at 80% 50%, black 30%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle at 20% 50%, black 30%, transparent 70%), radial-gradient(circle at 80% 50%, black 30%, transparent 70%)" }}>
                  <source src="/videos/hero-video (2).mp4" type="video/mp4" />
                </video>
              </div>
            )}
          </>
        )}
        {currentLayout.useBorderedVideo && (
          <>
            {currentLayout.borderStyle === "thick" && (
              <div className="absolute inset-8 sm:inset-12 md:inset-16 border-4 border-white/80 rounded-2xl overflow-hidden">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover"><source src="/videos/hero-video (2).mp4" type="video/mp4" /></video>
              </div>
            )}
            {currentLayout.borderStyle === "split" && (
              <>
                <div className="absolute left-0 top-0 w-1/2 h-full border-r-2 border-white/30 overflow-hidden">
                  <video autoPlay muted loop playsInline className="h-full w-full object-cover scale-110"><source src="/videos/hero-video (2).mp4" type="video/mp4" /></video>
                </div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-black/90" />
              </>
            )}
            {currentLayout.borderStyle === "rounded" && (
              <div className="absolute inset-4 sm:inset-8 md:inset-12">
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                  <video autoPlay muted loop playsInline className="h-full w-full object-cover"><source src="/videos/hero-video (2).mp4" type="video/mp4" /></video>
                  <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/20" />
                </div>
              </div>
            )}
          </>
        )}
        {!currentLayout.useBlobMask && !currentLayout.useBorderedVideo && (
          <>
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover"><source src="/videos/hero-video (2).mp4" type="video/mp4" /></video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
          </>
        )}
        {currentLayout.useModularGrid && (
          <>
            {currentLayout.gridType === "bento" && (
              <div className="absolute inset-0 pointer-events-none z-10"><div className="h-full w-full grid grid-cols-12 grid-rows-6 gap-1"><div className="col-span-4 row-span-2 border border-white/20" /><div className="col-span-8 row-span-3 border border-white/20" /><div className="col-span-4 row-span-4 border border-white/20" /><div className="col-span-8 row-span-3 border border-white/20" /></div></div>
            )}
            {currentLayout.gridType === "asymmetric" && (
              <div className="absolute inset-0 pointer-events-none z-10"><div className="h-full w-full grid grid-cols-5 gap-px bg-white/10"><div className="col-span-2 bg-black" /><div className="col-span-1 bg-black" /><div className="col-span-2 bg-black" /></div></div>
            )}
            {currentLayout.gridType === "brutalist" && (
              <div className="absolute inset-0 pointer-events-none z-10"><div className="h-full w-full"><div className="absolute top-0 left-0 w-1/3 h-1/3 border-4 border-white" /><div className="absolute bottom-0 right-0 w-2/3 h-1/2 border-4 border-white" /><div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-white/20" /></div></div>
            )}
            {currentLayout.gridType === "minimal" && (
              <div className="absolute inset-0 pointer-events-none z-10"><div className="h-full w-full grid grid-cols-3 grid-rows-3"><div className="border-r border-b border-white/10" /><div className="border-r border-b border-white/10" /><div className="border-b border-white/10" /><div className="border-r border-b border-white/10" /><div className="border-r border-b border-white/10" /><div className="border-b border-white/10" /><div className="border-r border-white/10" /><div className="border-r border-white/10" /><div /></div></div>
            )}
          </>
        )}
        
        {/* --- DYNAMIC TEXT LAYOUT WITH NEW COPY --- */}
        <div className={`relative z-20 h-[calc(100vh-80px)] w-full flex ${currentLayout.className} p-6 sm:p-8 md:p-16`}>
          {currentLayout.useModularGrid && currentLayout.gridType === "bento" ? (
            <div className="grid grid-cols-12 grid-rows-6 gap-4 w-full h-full">
              <div className="col-span-12 sm:col-span-8 row-span-2 sm:row-span-3 flex items-center justify-center sm:justify-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white text-center sm:text-left" style={{ fontFamily: "Nouvelle Grotesk" }}>
                  {copy.headlinePart1}<br className="hidden sm:block" />
                  <span className="block sm:inline">{copy.headlinePart2}</span>
                </h1>
              </div>
              <div className="col-span-12 sm:col-span-4 row-span-1 sm:row-span-2 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <AnimatedTooltip items={successStories} />
              </div>
              <div className="col-span-12 sm:col-span-8 row-span-2 sm:row-span-3 flex flex-col items-center sm:items-start justify-center gap-4">
                <p className="text-base sm:text-lg text-white text-center sm:text-left">{copy.subheadline}</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <Button variant="glass" className="text-white hover:bg-white hover:text-black w-full sm:w-auto">{copy.secondaryCTA}</Button>
                  <Button variant="default" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">{copy.primaryCTA}</Button>
                </div>
              </div>
            </div>
          ) : currentLayout.useModularGrid && currentLayout.gridType === "asymmetric" ? (
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 w-full h-full">
              <div className="sm:col-span-2 flex flex-col justify-center items-center sm:items-start bg-black/60 backdrop-blur-md p-8 rounded-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white mb-6 text-center sm:text-left" style={{ fontFamily: "Nouvelle Grotesk" }}>
                  {copy.headline}
                </h1>
                <div className="flex justify-center sm:justify-start mb-4">
                  <AnimatedTooltip items={successStories} />
                </div>
              </div>
              <div className="sm:col-span-1 flex items-center justify-center">
                <div className="w-full h-48 sm:h-full max-h-96 border-2 border-white/30 rounded-lg" />
              </div>
              <div className="sm:col-span-2 flex flex-col justify-center items-center sm:items-start gap-6 bg-black/60 backdrop-blur-md p-8 rounded-lg">
                <p className="text-base sm:text-lg text-white text-center sm:text-left">{copy.subheadline}</p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button variant="glass" className="text-white hover:bg-white hover:text-black flex-1">{copy.secondaryCTA}</Button>
                  <Button variant="default" className="bg-white text-black hover:bg-gray-100 flex-1">{copy.primaryCTA}</Button>
                </div>
              </div>
            </div>
          ) : currentLayout.useModularGrid && currentLayout.gridType === "brutalist" ? (
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full sm:w-1/2 lg:w-1/3 h-auto sm:h-1/3 p-8 bg-white text-black">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase" style={{ fontFamily: "Nouvelle Grotesk" }}>{copy.headlinePart1}</h1>
              </div>
              <div className="absolute top-1/3 sm:top-1/3 left-0 sm:left-1/3 right-0 sm:right-auto w-full sm:w-1/3 p-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>{copy.headlinePart2}</h2>
              </div>
              <div className="absolute bottom-0 right-0 w-full sm:w-2/3 p-8 bg-black/80 backdrop-blur-md">
                <p className="text-base sm:text-lg text-white mb-6">{copy.subheadline}</p>
                <div className="flex justify-center sm:justify-start mb-4">
                  <AnimatedTooltip items={successStories} />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="glass" className="text-white hover:bg-white hover:text-black">{copy.secondaryCTA}</Button>
                  <Button variant="default" className="bg-white text-black hover:bg-gray-100">{copy.primaryCTA}</Button>
                </div>
              </div>
            </div>
          ) : (
            <div className={`max-w-2xl ${currentLayout.contentClass || ''} w-full`}>
              <h1 className="mb-4 sm:mb-6 font-light leading-tight tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "Nouvelle Grotesk" }}>
                {copy.headline}
              </h1>
              <div className="mb-6 sm:mb-8">
                <p className="text-base sm:text-lg text-white mb-3 sm:mb-4">{copy.subheadline}</p>
                <div className={`flex ${currentLayout.className.includes('text-right') ? 'justify-center sm:justify-end' : currentLayout.className.includes('text-left') ? 'justify-center sm:justify-start' : 'justify-center'}`}>
                  <AnimatedTooltip items={successStories} />
                </div>
              </div>
              <div className={`flex flex-col gap-3 sm:gap-4 sm:flex-row ${currentLayout.className.includes('text-right') ? 'justify-center sm:justify-end' : currentLayout.className.includes('text-left') ? 'justify-center sm:justify-start' : 'justify-center'}`}>
                <Button variant="glass" className="text-white hover:bg-white hover:text-black w-full sm:w-auto">{copy.secondaryCTA}</Button>
                <Button variant="default" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">{copy.primaryCTA}</Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-white/70 uppercase tracking-widest">Scroll</p>
          <div className="w-[1px] h-8 bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/70" />
        </div>
 
     </div>
    </section>
  )
}