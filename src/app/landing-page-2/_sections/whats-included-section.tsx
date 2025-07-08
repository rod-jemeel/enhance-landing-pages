"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Package, FlaskConical, Users, TestTube } from "lucide-react";

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
      title: "Provider-Prescribed GLP-1 Medication",
      summary: "Powerful, compounded GLP-1 medication personalized to your needs.",
      description: "Receive a powerful, compounded GLP-1 medication, personalized to your needs by your provider. Our medications are prepared by trusted, vetted pharmacies to ensure quality and efficacy.",
      icon: <FlaskConical className="w-6 h-6" />,
    },
    {
      title: "Ongoing Provider Care",
      summary: "Direct access to your dedicated medical provider.",
      description: "Direct access to your dedicated medical provider for virtual consultations, progress tracking, and any dosage adjustments needed to optimize your results safely.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Comprehensive Lab Testing",
      summary: "In-depth metabolic lab work before you start and every 6 months.",
      description: "Your plan includes in-depth metabolic lab work before you start and every 6 months after. This data allows your provider to monitor your health and tailor your treatment.",
      icon: <TestTube className="w-6 h-6" />,
    },
    {
      title: "Complete Supply & Support Kit",
      summary: "All necessary supplies and wellness coaching delivered monthly.",
      description: "Receive your monthly medication, all necessary syringes and alcohol pads, plus access to our nutrition/wellness coaching platform—all delivered discreetly to your door.",
      icon: <Package className="w-6 h-6" />,
    },
  ];

  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Your All-Inclusive Transformation Program
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mb-6 sm:mb-8">
            We provide everything you need for a complete metabolic transformation in one simple, transparent plan. Your journey is fully supported from day one with no hidden fees or surprise costs.
          </p>
          <Button variant="default" className="w-full sm:w-auto">
            Get Started Today
          </Button>
        </div>

        <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-8" style={{ fontFamily: "Nouvelle Grotesk" }}>
          Included in Your Plan:
        </h3>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_V5Py85fOiXtkX4lFFgwlrWk5jRcA/fjbjMTCU7xCthObZs2V28S/public/videos/Vial%20Rotating.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative z-10 p-8 h-full flex items-end">
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  {features[0].icon}
                </div>
                <h3 className="text-3xl font-light mb-4 text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>
                  {features[0].title}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">{features[0].description}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black text-white rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white">{features[1].icon}</span>
              </div>
              <h3 className="text-xl font-light mb-3" style={{ fontFamily: "Nouvelle Grotesk" }}>
                {features[1].title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm">{features[1].summary}</p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="/u7488359357_product_photo_of_a_plain_medical_vial_for_GLP-1_w_1a39bc17-8f61-449b-be38-41204fd21630_1.png" 
              alt="Laboratory Testing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative z-10 p-8 h-full flex items-end">
              <div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  {features[2].icon}
                </div>
                <h3 className="text-xl font-light mb-3 text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>
                  {features[2].title}
                </h3>
                <p className="text-white/80 text-sm">{features[2].summary}</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gradient-to-r from-[#f1f0ed] to-[#e8e7e4] rounded-3xl p-8">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-white">{features[3].icon}</span>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900" style={{ fontFamily: "Nouvelle Grotesk" }}>
              {features[3].title}
            </h3>
            <p className="text-gray-600">{features[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}