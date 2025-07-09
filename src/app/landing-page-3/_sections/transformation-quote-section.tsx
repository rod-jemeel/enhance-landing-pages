import { Button } from "@/components/ui/custom-button"

export default function TransformationQuoteSection() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/transformation-quote.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Stop Fighting Your Body. It's Time for a Breakthrough.
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            The endless cycle of dieting fails because it ignores the science. Our physician-led program finally addresses the root cause—your biology—giving you the medical tools to achieve results that last.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 italic">
            — This isn't about trying harder. It's about treating smarter.
          </p>
          
          <div className="pt-4">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-100">
              Start My Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}