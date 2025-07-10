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
        <source src="/videos/social_u2634596518_a_woman_holding_a_medicinal_vial_--ar_9151_--moti_e72ce3e4-4fe9-4b5b-877d-3a0a82717b60_2.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* --- COPY UPDATED HERE --- */}
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>
            Renewed Willpower—Centered on Biology.
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            “Real progress in health and wellness comes when we treat the whole person—not just the symptoms. By focusing on personalized care and addressing the root causes of your challenges, we can help you achieve sustainable results that improve not just your body, but your entire quality of life.”
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80">
            — Dr. Erik Stark, Medical Director, Enhance.MD
          </p>
          
          <div className="pt-4">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-100">
              Begin Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}