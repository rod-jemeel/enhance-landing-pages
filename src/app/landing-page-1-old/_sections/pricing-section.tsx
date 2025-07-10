"use client"

import { useState } from "react"
import { Button } from "@/components/ui/custom-button"
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'

export default function PricingSection() {
  const [selectedProduct, setSelectedProduct] = useState<'standard' | 'advanced'>('advanced')

  const products = {
    standard: {
      name: 'Compounded GLP-1',
      price: 212,
      description: 'Everything you need to start your weight loss journey.',
      features: [
        'GLP-1 Medication (4-Week Supply)',
        'Provider Consultations',
        'Metabolic Lab Testing',
        'Injection Supplies Kit',
        'Digital Platform Access',
        'Email Support',
      ],
    },
    advanced: {
      name: 'Advanced GLP-1 + GIP',
      price: 323,
      description: 'Our most effective protocol for accelerated results.',
      features: [
        'Dual GLP-1 + GIP Medication',
        'Unlimited Provider Messaging',
        'Comprehensive Lab Testing',
        'Complete Supplies Kit',
        'Nutrition & Wellness Coaching',
        'Priority Support Access',
      ],
    },
  }

  const currentProduct = products[selectedProduct]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header - Ultra Thin */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Simple, All-Inclusive Pricing
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            One transparent price includes everything: medication, provider care, lab work, and supplies.
          </p>
        </div>

        {/* Product Tabs - Minimal */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white rounded-full shadow-sm">
            <button
              onClick={() => setSelectedProduct('standard')}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                selectedProduct === 'standard'
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              GLP-1
            </button>
            <button
              onClick={() => setSelectedProduct('advanced')}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                selectedProduct === 'advanced'
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              GLP-1 + GIP
            </button>
          </div>
        </div>

        {/* Split View Layout - Ultra Thin */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl sm:text-4xl font-light mb-2 text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>{currentProduct.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{currentProduct.description}</p>
            <div className="mb-6">
              <span className="text-4xl sm:text-5xl font-light text-gray-900">${currentProduct.price}</span>
              <span className="text-lg text-gray-600">/month</span>
            </div>
            <Button variant="default" className="mb-3 py-2 px-5 text-sm">Start Your Journey</Button>
            <p className="text-xs text-gray-500">12-month commitment • Prescription required</p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <video
              autoPlay
              muted
              loop
              playsInline
              key={selectedProduct}
              className="w-full h-[300px] sm:h-[350px] object-cover rounded-xl"
            >
              <source 
                src={selectedProduct === 'standard' 
                  ? "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4"
                  : "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__013735b4-709c-4a90-a0a5-04fc5b8810e9_2.mp4"
                } 
                type="video/mp4" 
              />
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 rounded-b-xl">
              <h4 className="text-white text-sm font-medium mb-3">What's Included:</h4>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {currentProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <Check className="w-3 h-3 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-white/90 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer note - Ultra minimal */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            *Payable upfront with a 12-month plan. Prescription products require an online consultation.
          </p>
        </div>
      </div>
    </section>
  )
}