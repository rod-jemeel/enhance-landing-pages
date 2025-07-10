import { Button } from "@/components/ui/custom-button"

export default function TransformationQuoteSection() {
  return (
    <section id="transformation-quote-section" className="relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/social_u2634596518_a_woman_holding_a_medicinal_vial_--ar_9151_--moti_e72ce3e4-4fe9-4b5b-877d-3a0a82717b60_2.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay - Lighter for ultra-thin */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content - Ultra Minimal */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Stop Fighting Your Body. Start Working With It.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Real weight loss happens when we address the biology, not just the behavior. Our physician-led approach gives you the medical support to finally succeed.
          </p>
          
          <p className="text-sm sm:text-base text-white/80 italic">
            — This isn't another diet. It's medical science.
          </p>
          
          <div className="pt-2">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-100 py-2 px-6 text-sm">
              Begin Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}