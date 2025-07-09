"use client"

import { useState } from "react"
import { Button } from "@/components/ui/custom-button"
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'

export default function PricingSection() {
  const [selectedProduct, setSelectedProduct] = useState<'standard' | 'advanced'>('advanced')

  // Updated product copy for better conversion
  const products = {
    standard: {
      name: 'Standard GLP-1',
      price: 212,
      description: 'The foundational tools for your physician-led weight loss journey.',
      features: [
        'GLP-1 Medication (4-Week Supply)',
        'Dedicated Provider Check-Ins',
        'Initial Metabolic Lab Work',
        'Complete Supply & Support Kit',
        'Access to Wellness Coaching',
        'Ongoing Provider Care',
      ],
    },
    advanced: {
      name: 'Advanced GLP-1 + GIP',
      price: 323,
      description: 'Our most powerful protocol for accelerated, sustainable results.',
      features: [
        'Advanced GLP-1 + GIP Medication',
        'Unlimited Provider Messaging & Support',
        'Comprehensive Lab Testing Every 6 Months',
        'Complete Supply & Support Kit',
        'Personalized Nutrition & Wellness Coaching',
        'Full Access to Educational Content',
      ],
    },
  }

  const currentProduct = products[selectedProduct]

  return (
    <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start mb-12 sm:mb-20 md:mb-24">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Your All-Inclusive Transformation Program
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Everything you need for a total metabolic transformation in one simple, transparent plan. Your journey is fully supported from day one, with no hidden fees or surprise costs.
            </p>
          </div>
          <div className="flex items-center justify-start sm:justify-end mt-4 sm:mt-0">
            <Button variant="default" className="w-full sm:w-auto">
              Get Started Today
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
              Standard GLP-1
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
              Advanced GLP-1 + GIP
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
            <Button variant="default" className="mb-4">Start Your Transformation</Button>
            <p className="text-sm text-gray-500">12-month commitment • Prescription required</p>
          </div>
          <div className="relative">
            <img 
              src="/u7488359357_product_photo_of_a_plain_medical_vial_for_GLP-1_w_1a39bc17-8f61-449b-be38-41204fd21630_1.png" 
              alt="GLP-1 Product Vial"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
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
            *Payable upfront with a 12-month plan. Prescription products require an online consultation with a healthcare provider.
          </p>
        </div>
      </div>
    </section>
  )
}