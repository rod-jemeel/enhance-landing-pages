"use client"

import { useEffect } from "react"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { Button } from "@/components/ui/custom-button"
import { useNavbar } from "@/contexts/navbar-context"

const successStories = [
  {
    id: 1,
    name: "Sarah M.",
    designation: "Lost 45 lbs",
    image:
      "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Michael R.",
    designation: "Lost 38 lbs",
    image:
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Jessica L.",
    designation: "Lost 52 lbs",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "David K.",
    designation: "Lost 41 lbs",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "Emma T.",
    designation: "Lost 36 lbs",
    image:
      "https://images.unsplash.com/photo-1567598508481-65985588e295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
]

export default function HeroSection() {
  const { setIsTransparent } = useNavbar()

  useEffect(() => {
    // Set navbar transparency
    setIsTransparent(true)
    
    // Cleanup function to reset transparency when component unmounts
    return () => setIsTransparent(false)
  }, [setIsTransparent])


  return (
    <section className="w-full h-screen relative">
      <div className="relative h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_V5Py85fOiXtkX4lFFgwlrWk5jRcA/F8DPURkRjElKG80aJGVbAj/public/videos/social_u7488359357_super_close-up_of_a_fit_womans_toned_torso_in_min_1a122104-047f-4f05-b23f-a15819f9c2e1_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
        
        {/* Bottom Right Text Layout */}
        <div className="relative z-10 h-full w-full flex items-end justify-center sm:justify-end p-6 sm:p-8 md:p-16">
          <div className="max-w-2xl text-center sm:text-right w-full">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "Nouvelle Grotesk" }}>
              Transform Your Body<br />
              With a True GLP-1<br />
              Provider Led Program
            </h1>
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-white mb-3 sm:mb-4">Join thousands who transformed their bodies</p>
              <div className="flex justify-center sm:justify-end">
                <AnimatedTooltip items={successStories} />
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center sm:justify-end">
              <Button variant="glass" className="text-white hover:bg-white hover:text-black w-full sm:w-auto">Learn More</Button>
              <Button variant="default" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">Start My Transformation</Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-white/70 uppercase tracking-widest">Scroll</p>
          <div className="w-[1px] h-8 bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  )
}