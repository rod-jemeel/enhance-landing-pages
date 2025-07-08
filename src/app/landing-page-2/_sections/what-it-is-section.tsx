import { Button } from "@/components/ui/custom-button";

export default function WhatItIsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-start mb-12 sm:mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-3" style={{ fontFamily: "Nouvelle Grotesk" }}>
              The Science Behind<br />Your Transformation
            </h2>
            <Button variant="link" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Discover →
            </Button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-light" style={{ fontFamily: "Nouvelle Grotesk" }}>
              A medical revolution that turns weight loss from a struggle into a systematic outcome.
            </p>
            <p className="text-base sm:text-lg text-gray-900 leading-relaxed" style={{ fontFamily: "Nouvelle Grotesk" }}>
              — The convergence of FDA-approved medication, physician oversight, and metabolic science. This is healthcare reimagined for the modern professional.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="group rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: '#f1f0ed' }}>
            <div className="mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl font-bold" style={{ color: '#67645e', opacity: 0.3 }}>01</span>
            </div>
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-medium" style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}>
              Medical-Grade Protocol
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#67645e' }}>
              FDA-approved GLP-1 medication combined with physician oversight. This isn't another supplement—it's real medicine that rewires how your body processes hunger and stores fat.
            </p>
          </div>

          <div className="group rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: '#f1f0ed' }}>
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: '#67645e', opacity: 0.3 }}>02</span>
            </div>
            <h3 className="mb-4 text-xl font-medium" style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}>
              Data-Driven Results
            </h3>
            <p className="leading-relaxed" style={{ color: '#67645e' }}>
              Biannual lab work tracks your metabolic markers. We measure everything—hormones, blood sugar, inflammation. Your transformation is guided by data, not guesswork.
            </p>
          </div>

          <div className="group rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: '#f1f0ed' }}>
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: '#67645e', opacity: 0.3 }}>03</span>
            </div>
            <h3 className="mb-4 text-xl font-medium" style={{ fontFamily: "Nouvelle Grotesk", color: '#67645e' }}>
              Built for Success
            </h3>
            <p className="leading-relaxed" style={{ color: '#67645e' }}>
              Designed for executives, professionals, and anyone who values their time. Everything delivered to your door. Consultations via telehealth. Results that last.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}