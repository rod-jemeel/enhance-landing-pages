"use client"

import { useState } from "react"
import { Button } from "@/components/ui/custom-button"
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'

const layoutOptions = [
  {
    id: 1,
    name: "Blob Video Cards",
    style: "blob-cards"
  },
  {
    id: 2,
    name: "Grid Overlay Pricing",
    style: "grid-overlay"
  },
  {
    id: 3,
    name: "Geometric Split",
    style: "geometric-split"
  },
  {
    id: 4,
    name: "Bento Grid Layout",
    style: "bento-grid"
  },
  {
    id: 5,
    name: "Floating Video Orbs",
    style: "floating-orbs"
  },
  {
    id: 6,
    name: "Brutalist Blocks",
    style: "brutalist"
  },
  {
    id: 7,
    name: "Liquid Mask Video",
    style: "liquid-mask"
  },
  {
    id: 8,
    name: "Asymmetric Grid",
    style: "asymmetric"
  }
];

export default function PricingSection() {
  const [selectedProduct, setSelectedProduct] = useState<'standard' | 'advanced'>('advanced')
  // Using Asymmetric Grid layout (id: 8)
  const currentLayout = layoutOptions.find(layout => layout.id === 8)!

  const products = {
    standard: {
      name: 'Standard GLP-1℞',
      price: 212,
      features: [
        '4 Weeks of GLP-1 Medication',
        'Provider Consultations',
        'Basic Metabolic Testing',
        'Injection Supplies',
        'Digital Platform Access',
        'Email Support',
      ],
    },
    advanced: {
      name: 'Advanced GLP-1 + GIP℞',
      price: 323,
      features: [
        '4 Weeks of Dual Medication',
        'Ongoing Provider Care & Support',
        'Metabolic Laboratory Testing Every 6 Months',
        'Syringes & Alcohol Pads Kit',
        'Nutrition & Wellness Coaching',
        'Platform Access & Educational Content',
      ],
    },
  }

  const currentProduct = products[selectedProduct]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start mb-12 sm:mb-20 md:mb-24">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Comprehensive Care for a Healthier Future
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              We believe in all-inclusive care. Your plan includes everything you need for a successful transformation, with one consistent price from your first dose to your last. This is medical weight loss, simplified.
            </p>
          </div>
          <div className="flex items-center justify-start sm:justify-end mt-4 sm:mt-0">
            <Button variant="default" className="w-full sm:w-auto">
              See Pricing Details
            </Button>
          </div>
        </div>


        {/* Different Layouts */}
        {currentLayout.style === "blob-cards" ? (
          <div className="grid lg:grid-cols-2 gap-4">
            {Object.entries(products).map(([key, product], index) => (
              <div
                key={key}
                onClick={() => setSelectedProduct(key as 'standard' | 'advanced')}
                className={cn(
                  "relative cursor-pointer transition-all duration-500",
                  selectedProduct === key ? "scale-105" : "scale-100 opacity-80"
                )}
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      clipPath: `circle(45% at ${index === 0 ? '30%' : '70%'} 50%)`,
                      WebkitClipPath: `circle(45% at ${index === 0 ? '30%' : '70%'} 50%)`
                    }}
                  >
                    <source 
                      src={key === 'standard' 
                        ? "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4"
                        : "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__013735b4-709c-4a90-a0a5-04fc5b8810e9_2.mp4"
                      } 
                      type="video/mp4" 
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-light mb-4 text-white">{product.name}</h3>
                      <div className="mb-8">
                        <span className="text-5xl font-light text-white">${product.price}</span>
                        <span className="text-xl text-white/80">/month</span>
                      </div>
                      <div className="space-y-2">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant={selectedProduct === key ? "default" : "glass"} 
                      className={selectedProduct === key ? "bg-white text-black" : "text-white"}
                    >
                      {selectedProduct === key ? "Selected Plan" : "Select This Plan"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : currentLayout.style === "geometric-split" ? (
          <div className="relative h-[600px]">
            <div className="absolute inset-0 grid grid-cols-2">
              {Object.entries(products).map(([key, product], index) => (
                <div
                  key={key}
                  onClick={() => setSelectedProduct(key as 'standard' | 'advanced')}
                  className="relative cursor-pointer overflow-hidden"
                  style={{
                    clipPath: index === 0 
                      ? 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
                      : 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                    WebkitClipPath: index === 0 
                      ? 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
                      : 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source 
                      src={key === 'standard' 
                        ? "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4"
                        : "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__013735b4-709c-4a90-a0a5-04fc5b8810e9_2.mp4"
                      } 
                      type="video/mp4" 
                    />
                  </video>
                  <div className={cn(
                    "absolute inset-0 p-12 flex flex-col justify-center transition-all",
                    selectedProduct === key 
                      ? "bg-black/60" 
                      : "bg-black/80 hover:bg-black/70"
                  )}>
                    <h3 className="text-4xl font-light mb-4 text-white">{product.name}</h3>
                    <div className="mb-8">
                      <span className="text-6xl font-light text-white">${product.price}</span>
                      <span className="text-2xl text-white/80">/month</span>
                    </div>
                    <Button 
                      variant={selectedProduct === key ? "default" : "glass"}
                      className={selectedProduct === key ? "bg-white text-black" : ""}
                    >
                      Choose Plan
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentLayout.style === "bento-grid" ? (
          <div className="grid grid-cols-12 grid-rows-3 gap-4 h-[600px]">
            <div className="col-span-12 md:col-span-7 row-span-2 relative rounded-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                key={selectedProduct}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source 
                  src={selectedProduct === 'standard' 
                    ? "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4"
                    : "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__013735b4-709c-4a90-a0a5-04fc5b8810e9_2.mp4"
                  } 
                  type="video/mp4" 
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-4xl font-light mb-2 text-white">{currentProduct.name}</h3>
                <p className="text-white/80">Premium medical care that delivers real results.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 row-span-1 bg-gray-900 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <span className="text-4xl font-light text-white">${currentProduct.price}</span>
                <span className="text-lg text-white/60">/month</span>
              </div>
              <Button variant="default" className="bg-white text-black">Start Now</Button>
            </div>
            <div className="col-span-12 md:col-span-5 row-span-1 bg-gray-100 rounded-2xl p-6">
              <div className="flex justify-center space-x-2">
                {Object.entries(products).map(([key, product]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProduct(key as 'standard' | 'advanced')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm transition-all",
                      selectedProduct === key
                        ? "bg-black text-white"
                        : "bg-white text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {key === 'standard' ? 'Standard' : 'Advanced'}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-12 row-span-1 bg-white border border-gray-200 rounded-2xl p-6 overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : currentLayout.style === "liquid-mask" ? (
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover opacity-20"
                style={{
                  maskImage: "radial-gradient(ellipse 60% 40% at 50% 50%, black 40%, transparent 70%)",
                  WebkitMaskImage: "radial-gradient(ellipse 60% 40% at 50% 50%, black 40%, transparent 70%)"
                }}
              >
                <source src="/videos/hero-video (2).mp4" type="video/mp4" />
              </video>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-5xl font-light mb-4 text-gray-900">{currentProduct.name}</h3>
                <p className="text-lg text-gray-600 mb-8">Premium medical care that delivers real results.</p>
                <div className="mb-8">
                  <span className="text-6xl font-light text-gray-900">${currentProduct.price}</span>
                  <span className="text-2xl text-gray-600">/month</span>
                </div>
                <Button variant="default" className="mb-4">Start Your Journey</Button>
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
              </div>
            </div>
          </div>
        ) : currentLayout.style === "brutalist" ? (
          <div className="space-y-8">
            {Object.entries(products).map(([key, product], index) => (
              <div
                key={key}
                onClick={() => setSelectedProduct(key as 'standard' | 'advanced')}
                className={cn(
                  "relative cursor-pointer transition-all",
                  index === 0 ? "ml-0 mr-20" : "ml-20 mr-0"
                )}
              >
                <div className="relative h-[300px] border-4 border-black overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                  >
                    <source 
                      src={key === 'standard' 
                        ? "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4"
                        : "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__013735b4-709c-4a90-a0a5-04fc5b8810e9_2.mp4"
                      } 
                      type="video/mp4" 
                    />
                  </video>
                  <div className={cn(
                    "absolute inset-0 p-8 flex items-center justify-between transition-all",
                    selectedProduct === key ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
                  )}>
                    <div>
                      <h3 className="text-3xl font-bold uppercase mb-4">{product.name}</h3>
                      <div className="mb-4">
                        <span className="text-5xl font-bold">${product.price}</span>
                        <span className="text-xl">/MO</span>
                      </div>
                    </div>
                    <Button 
                      variant={selectedProduct === key ? "default" : "outline"}
                      className={cn(
                        "border-2",
                        selectedProduct === key ? "bg-white text-black border-white" : "border-black"
                      )}
                    >
                      SELECT
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : currentLayout.style === "asymmetric" ? (
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  key={selectedProduct}
                  className="h-full w-full object-cover"
                >
                  <source 
                    src={selectedProduct === 'standard' 
                      ? "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__1c69a947-f478-467f-b3dc-7edb77eed054_0.mp4"
                      : "/videos/social_u2634596518_feature_a_medicinal_vial_--ar_9151_--motion_high__013735b4-709c-4a90-a0a5-04fc5b8810e9_2.mp4"
                    } 
                    type="video/mp4" 
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60 p-12 flex flex-col justify-center">
                  <h3 className="text-5xl font-light mb-4 text-white drop-shadow-lg">{currentProduct.name}</h3>
                  <div className="mb-8">
                    <span className="text-7xl font-light text-white drop-shadow-lg">${currentProduct.price}</span>
                    <span className="text-2xl text-white/90">/month</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                    {currentProduct.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0 drop-shadow" />
                        <span className="text-sm text-white drop-shadow">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="default" className="bg-white text-black hover:bg-gray-100 w-fit shadow-lg">Start Your Journey</Button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-4">
              {Object.entries(products).map(([key, product]) => (
                <div
                  key={key}
                  onClick={() => setSelectedProduct(key as 'standard' | 'advanced')}
                  className={cn(
                    "p-6 rounded-xl cursor-pointer transition-all",
                    selectedProduct === key 
                      ? "bg-black text-white shadow-lg scale-105" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  )}
                >
                  <h4 className={cn(
                    "text-lg font-medium mb-2",
                    selectedProduct === key ? "text-white" : "text-gray-900"
                  )}>{key === 'standard' ? 'Standard' : 'Advanced'}</h4>
                  <p className={cn(
                    "text-2xl font-light",
                    selectedProduct === key ? "text-white" : "text-gray-900"
                  )}>${product.price}/mo</p>
                </div>
              ))}
              <div className="p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">12-month commitment</p>
                <p className="text-sm text-gray-600">Prescription required</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-light mb-4 text-gray-900">{currentProduct.name}</h3>
              <p className="text-lg text-gray-600 mb-8">Premium medical care that delivers real results. No gimmicks, no shortcuts.</p>
              <div className="mb-8">
                <span className="text-6xl font-light text-gray-900">${currentProduct.price}</span>
                <span className="text-2xl text-gray-600">/month</span>
              </div>
              <Button variant="default" className="mb-4">Start Your Journey</Button>
              <p className="text-sm text-gray-500">12-month commitment • Prescription required</p>
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
                <h4 className="text-white font-medium mb-4">Everything Included:</h4>
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
        )}

        {/* Footer notes */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            *Payable up front with a 12-month plan. Prescription products require an online consultation.
          </p>
        </div>
      </div>
    </section>
  )
}