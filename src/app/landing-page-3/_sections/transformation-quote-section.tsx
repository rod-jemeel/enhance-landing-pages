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
            Your Body Isn't Broken. It's Ready for a Breakthrough.
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            For too long, weight loss has been a battle of willpower. We believe it's a matter of science. Our provider-led program gives you the medical tools to work with your biology, not against it.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 italic">
            — The future of weight loss isn't more struggle. It's smarter science.
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