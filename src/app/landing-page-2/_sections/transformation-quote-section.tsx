export default function TransformationQuoteSection() {
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_V5Py85fOiXtkX4lFFgwlrWk5jRcA/N-_EtY5eHymKSDC7nQapnu/public/videos/social_u7488359357_super_close-up_of_a_fit_womans_toned_torso_in_min_db1a6e22-5dc6-49ff-83d7-ea6e77626cac_3.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="space-y-4 sm:space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white" style={{ fontFamily: "Nouvelle Grotesk" }}>
              "Your body isn't broken. It's been waiting for the right science to unlock its potential."
            </p>
            <footer className="space-y-2">
              <p className="text-base sm:text-lg md:text-xl text-white/90">
                Every transformation begins with a decision. Today, 10,000+ people chose science over struggle.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/70">
                — The future of weight loss isn't willpower. It's medicine.
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}