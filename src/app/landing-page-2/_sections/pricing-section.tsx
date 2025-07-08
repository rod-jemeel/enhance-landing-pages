"use client"

import { useState } from "react"
import { Button } from "@/components/ui/custom-button"

export default function PricingSection() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Intro section */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start mb-12 sm:mb-20 md:mb-24">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Investment in Your Metabolic Future
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Premium medical care that delivers real results. No gimmicks, no shortcuts—just proven science and comprehensive support for lasting transformation.
            </p>
          </div>
          <div className="flex items-center justify-start sm:justify-end mt-4 sm:mt-0">
            <Button variant="default" className="w-full sm:w-auto">
              See Pricing Details
            </Button>
          </div>
        </div>

        {/* Product section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Video container - full width rectangle */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_V5Py85fOiXtkX4lFFgwlrWk5jRcA/-zl6-wBHiE84JNdgsPYEUC/public/videos/Minimal_Product_Shot_Video_Ready.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Title and price below video */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline gap-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Advanced GLP-1 + GIP℞
            </h3>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
              $323/mo
            </p>
          </div>

          {/* Info container - separate */}
          <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12" style={{ backgroundColor: '#f1f0ed' }}>
            {!showDetails ? (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <p className="text-base sm:text-lg" style={{ color: '#67645e' }}>
                  Everything you need: medication, provider care, lab testing, supplies, coaching, and educational resources.
                </p>
                <button 
                  onClick={() => setShowDetails(true)}
                  className="hover:opacity-70 transition-opacity text-sm font-light flex items-center gap-2 self-start sm:ml-4 flex-shrink-0" 
                  style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}
                >
                  More info
                  <span className="text-xs">↓</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p style={{ color: '#67645e' }}>• 4 Weeks of Medication</p>
                    <p style={{ color: '#67645e' }}>• Ongoing Provider Care & Support</p>
                    <p style={{ color: '#67645e' }}>• Metabolic Laboratory Testing Every 6 Months</p>
                  </div>
                  <div className="space-y-3">
                    <p style={{ color: '#67645e' }}>• Syringes & Alcohol Pads Kit</p>
                    <p style={{ color: '#67645e' }}>• Nutrition & Wellness Coaching</p>
                    <p style={{ color: '#67645e' }}>• Platform Access & Educational Content</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t" style={{ borderColor: '#67645e33' }}>
                  <div className="space-y-2">
                    <Button variant="default">
                      Get Started
                    </Button>
                    <div className="text-xs space-y-0.5" style={{ color: '#67645e', opacity: 0.7 }}>
                      <p>*Payable up front with a 12-month plan.</p>
                      <p>Prescription products require an online consultation.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowDetails(false)}
                    className="hover:opacity-70 transition-opacity text-sm font-light flex items-center gap-2" 
                    style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}
                  >
                    Less info
                    <span className="text-xs">↑</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}