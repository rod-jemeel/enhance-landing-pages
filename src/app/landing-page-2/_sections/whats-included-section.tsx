"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/custom-button";

export default function WhatsIncludedSection() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const features = [
    {
      title: "Advanced GLP-1 Medication",
      summary: "FDA-approved Semaglutide delivered to your door.",
      description: "The same powerful medication used by celebrities and executives worldwide. Our pharmacy-grade GLP-1 agonists are carefully formulated and quality-tested to ensure maximum efficacy and safety.",
    },
    {
      title: "Medical Provider Access",
      summary: "Direct access to your dedicated physician.",
      description: "Get consultations, dosage adjustments, and support throughout your journey. Your provider monitors your progress and adjusts your protocol based on your individual response and health markers.",
    },
    {
      title: "Laboratory Testing",
      summary: "Biannual comprehensive metabolic lab work.",
      description: "Track your metabolic health markers and ensure safe, effective progress. We monitor key indicators including hormones, blood sugar, lipids, and inflammatory markers to optimize your results.",
    },
    {
      title: "Complete Care Package",
      summary: "Everything included in one seamless program.",
      description: "Medication, supplies, syringes, alcohol pads, educational materials, and ongoing support. No hidden fees or surprise costs - your transformation journey is fully supported from day one.",
    },
  ];

  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Your Scientific Transformation Toolkit
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mb-6 sm:mb-8">
            Everything you need for a complete metabolic transformation. Our comprehensive program combines cutting-edge medication with continuous medical oversight, ensuring your journey is safe, effective, and sustainable.
          </p>
          <Button variant="default" className="w-full sm:w-auto">
            Start Your Transformation
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left - Video */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_V5Py85fOiXtkX4lFFgwlrWk5jRcA/fjbjMTCU7xCthObZs2V28S/public/videos/Vial%20Rotating.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right - Content */}
          <div className="h-auto lg:h-[600px] space-y-3 sm:space-y-4 flex flex-col order-1 lg:order-2">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 flex-1" 
                style={{ backgroundColor: '#f1f0ed' }}
              >
                <h3 className="text-base sm:text-lg font-medium mb-2" style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}>
                  {feature.title}
                </h3>
                
                <p className="text-sm mb-2 leading-relaxed" style={{ color: '#67645e' }}>
                  {expandedItems[feature.title] ? feature.description : feature.summary}
                </p>
                
                <button
                  onClick={() => toggleExpanded(feature.title)}
                  className="text-xs font-light hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}
                >
                  {expandedItems[feature.title] ? 'Show less ↑' : 'Show more ↓'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}