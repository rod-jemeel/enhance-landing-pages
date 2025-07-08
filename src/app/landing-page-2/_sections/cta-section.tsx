import { Button } from "@/components/ui/custom-button";

export default function CTASection() {
  return (
    <section 
      className="relative py-20 sm:py-28 md:py-32 lg:py-40 before:absolute before:inset-x-0 before:-top-20 sm:before:-top-32 before:h-20 sm:before:h-32 before:bg-gradient-to-b before:from-white before:to-transparent before:pointer-events-none"
    >
      {/* Gradient background that starts from very light and ends with white */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(to bottom, #fffefb 0%, #fffbf5 10%, #fff8f0 20%, #ffedd5 40%, #fed7aa 60%, #fbbf24 80%, #fef3c7 90%, #fffefb 95%, #ffffff 100%)' 
      }} />
      
      {/* Main radial gradient - the sun effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 250% 200% at 50% 180%, 
            #fde047 0%, 
            #facc15 5%, 
            #fbbf24 10%, 
            #f59e0b 15%, 
            rgba(245, 158, 11, 0.9) 25%, 
            rgba(217, 119, 6, 0.7) 35%, 
            rgba(180, 83, 9, 0.5) 45%, 
            rgba(146, 64, 14, 0.3) 60%, 
            rgba(255, 255, 255, 0.5) 75%,
            rgba(255, 255, 255, 0.8) 85%,
            #ffffff 95%
          )`,
        }}
      />
      
      {/* Additional radial layers for richness */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 300% at 50% 200%, 
            rgba(254, 240, 138, 0.3) 0%, 
            rgba(252, 211, 77, 0.25) 15%, 
            rgba(251, 191, 36, 0.2) 30%, 
            rgba(245, 158, 11, 0.15) 45%, 
            rgba(255, 255, 255, 0.3) 60%, 
            rgba(255, 255, 255, 0.6) 70%,
            #ffffff 85%
          )`,
        }}
      />
      
      {/* Bright center glow */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[80%]"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 100%, 
            #fde047 0%, 
            #facc15 20%, 
            rgba(255, 255, 255, 0.5) 50%,
            transparent 70%
          )`,
          opacity: 0.7,
        }}
      />
      
      {/* Extra vibrancy layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 100%, 
            rgba(251, 191, 36, 0.4) 0%, 
            rgba(245, 158, 11, 0.3) 30%, 
            rgba(255, 255, 255, 0.5) 60%,
            #ffffff 80%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto px-6 sm:px-8">
        <h2 
          className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 md:text-4xl lg:text-5xl transition-all duration-500"
          style={{ 
            fontFamily: "Nouvelle Grotesk",
          }}
        >
          Begin Your Transformation.
        </h2>
        <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600">
          The science is proven. The protocol is clear. Your transformation is waiting. Start your confidential
          evaluation to see if you qualify for our GLP-1 Provider Led Program.
        </p>
        <div className="pt-2 sm:pt-4">
          <Button variant="circle-arrow" className="w-full sm:w-auto">
            Start My Transformation Now
          </Button>
        </div>
      </div>
    </section>
  )
}