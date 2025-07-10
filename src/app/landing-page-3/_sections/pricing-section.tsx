"use client"

import { useState } from "react"
import { Button } from "@/components/ui/custom-button"
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'

export default function PricingSection() {
  const [selectedProduct, setSelectedProduct] = useState<'standard' | 'advanced'>('advanced')

  // --- COPY UPDATED HERE ---
  // The copy is now consistent with the "all-in-one" and "fully supported" messaging.
  // Feature lists are more parallel and benefit-focused.
  const products = {
    standard: {
      name: 'Compounded GLP-1',
      price: 212,
      description: 'Our all-in-one program with everything you need to start your journey using the proven power of GLP-1 medication.',
      features: [
        'Compounded GLP-1 Medication',
        'Ongoing Provider Care & Support',
        'Metabolic Lab Testing Every 6 Months',
        'Syringes & Alcohol Pads Kit',
        'Nutrition & Wellness Coaching',
        'Platform Access & Educational Content',
      ],
    },
    advanced: {
      name: 'Advanced GLP-1 + GIP',
      price: 323,
      description: 'For enhanced results, this plan combines GLP-1 and GIP for our most powerful approach to metabolic health.',
      features: [
        'Advanced GLP-1 + GIP Medication',
        'Unlimited Provider Messaging',
        'Metabolic Lab Testing Every 6 Months',
        'Syringes & Alcohol Pads Kit',
        'Personalized Nutrition & Wellness Plan',
        'Full Platform & Content Access',
      ],
    },
  }

  const currentProduct = products[selectedProduct]

  return (
    <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* --- COPY UPDATED HERE --- */}
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start mb-12 sm:mb-20 md:mb-24">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Simple, All-Inclusive Pricing
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Choose the plan that's right for you. Both are fully supported from day one, with medication, provider care, and lab work included. No hidden fees or surprise costs.
            </p>
          </div>
          <div className="flex items-center justify-start sm:justify-end mt-4 sm:mt-0">
            <Button variant="default" className="w-full sm:w-auto">
              Check Your Eligibility
            </Button>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setSelectedProduct('standard')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                selectedProduct === 'standard'
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              GLP-1 Plan
            </button>
            <button
              onClick={() => setSelectedProduct('advanced')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                selectedProduct === 'advanced'
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              GLP-1 + GIP Plan
            </button>
          </div>
        </div>

        {/* Split View Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-5xl font-light mb-4 text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>{currentProduct.name}</h3>
            <p className="text-lg text-gray-600 mb-8">{currentProduct.description}</p>
            <div className="mb-8">
              <span className="text-6xl font-light text-gray-900">${currentProduct.price}</span>
              <span className="text-2xl text-gray-600">/month</span>
            </div>
            {/* --- CTA UPDATED --- */}
            <Button variant="default" className="mb-4">Start With This Plan</Button>
            <p className="text-sm text-gray-500">Billed upfront for 12-month plan • Prescription required</p>
          </div>
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              key={selectedProduct}
              className="w-full h-[400px] object-cover rounded-2xl"
            >
              <source 
                src={selectedProduct === 'standard' 
                  ? "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4"
                  : "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__013735b4-709c-4a90-a0a5-04fc5b8810e9_2.mp4"
                } 
                type="video/mp4" 
              />
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-8 rounded-b-2xl">
              <h4 className="text-white font-medium mb-4">What's Included:</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {currentProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer notes */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            *Pricing reflects the cost for a 12-month plan, payable upfront. Prescription products require an online consultation with a healthcare provider.
          </p>
        </div>
      </div>
    </section>
  )
}