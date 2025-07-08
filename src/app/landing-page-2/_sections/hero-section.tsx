"use client"

import { useEffect, useState } from "react"
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

const layoutOptions = [
  { 
    id: 1, 
    name: "Classic Center", 
    className: "items-center justify-center text-center",
    contentClass: ""
  },
  { 
    id: 2, 
    name: "Bottom Right", 
    className: "items-end justify-center sm:justify-end text-center sm:text-right",
    contentClass: ""
  },
  { 
    id: 3, 
    name: "Split Vertical", 
    className: "items-center justify-end text-left",
    contentClass: "sm:w-1/2 sm:pl-8",
    showVerticalLine: true
  },
  { 
    id: 4, 
    name: "Corner Card", 
    className: "items-start justify-start",
    contentClass: "bg-black/50 backdrop-blur-md p-8 sm:p-12 rounded-br-3xl mt-20",
    isCard: true,
    ignoreDefaultPadding: true
  },
  { 
    id: 5, 
    name: "Full Width Bottom", 
    className: "items-end justify-center text-center",
    contentClass: "w-full max-w-none bg-gradient-to-t from-black/80 to-transparent pb-12 pt-20 -mx-6 sm:-mx-8 md:-mx-16 px-6 sm:px-8 md:px-16",
    isFullWidth: true,
    ignoreDefaultPadding: true
  },
  { 
    id: 6, 
    name: "Diagonal Split", 
    className: "items-center justify-end text-right",
    contentClass: "relative",
    showDiagonal: true
  },
  { 
    id: 7, 
    name: "Side Panel", 
    className: "items-stretch justify-end",
    contentClass: "bg-black/70 backdrop-blur-lg p-8 sm:p-16 sm:w-[500px] flex flex-col justify-center h-full -my-6 sm:-my-8 md:-my-16 -mr-6 sm:-mr-8 md:-mr-16",
    isSidePanel: true,
    ignoreDefaultPadding: true
  },
  { 
    id: 8, 
    name: "Offset Stack", 
    className: "items-center justify-center sm:justify-start sm:items-end pb-20 sm:pl-20",
    contentClass: "",
    isOffset: true
  },
  { 
    id: 9, 
    name: "Minimal Top", 
    className: "items-start justify-center text-center",
    contentClass: "mt-32",
    isMinimal: true
  },
  { 
    id: 10, 
    name: "Magazine", 
    className: "items-end justify-start text-left",
    contentClass: "sm:max-w-lg",
    showMagazineStyle: true
  }
]

export default function HeroSection() {
  const { setIsTransparent } = useNavbar()
  const [selectedLayout, setSelectedLayout] = useState(5)

  useEffect(() => {
    // Set navbar transparency
    setIsTransparent(true)
    
    // Cleanup function to reset transparency when component unmounts
    return () => setIsTransparent(false)
  }, [setIsTransparent])

  const currentLayout = layoutOptions.find(layout => layout.id === selectedLayout) || layoutOptions[1]


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
          <source src="/videos/hero-video (2).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
        
        {/* Vertical Line for Split Layout */}
        {currentLayout.showVerticalLine && (
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/30 z-10" />
        )}
        
        {/* Diagonal Line for Diagonal Split */}
        {currentLayout.showDiagonal && (
          <div className="hidden sm:block absolute inset-0 z-10">
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[100vw] border-l-transparent border-t-[100vh] border-t-black/30" />
          </div>
        )}
        
        {/* Magazine Style Border */}
        {currentLayout.showMagazineStyle && (
          <div className="hidden sm:block absolute left-8 bottom-8 top-8 w-[2px] bg-white/50 z-10" />
        )}
        
        {/* Dynamic Text Layout */}
        <div className={`relative z-10 h-full w-full flex ${currentLayout.className} ${!currentLayout.ignoreDefaultPadding && 'p-6 sm:p-8 md:p-16'}`}>
          <div className={`${!currentLayout.isFullWidth ? 'max-w-2xl' : ''} ${currentLayout.contentClass || ''} ${!currentLayout.isSidePanel ? 'w-full' : ''}`}>
            <h1 className={`mb-4 sm:mb-6 font-light leading-tight tracking-tight text-white ${
              currentLayout.isMinimal ? 'text-2xl sm:text-3xl md:text-4xl' : 
              currentLayout.isOffset ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl' :
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            }`} style={{ fontFamily: "Nouvelle Grotesk" }}>
              {currentLayout.isMinimal ? (
                <>Your Path to Lasting Weight Loss</>
              ) : currentLayout.showMagazineStyle ? (
                <>
                  <span className="block text-sm uppercase tracking-widest mb-2 text-white/70">Medical Weight Loss</span>
                  Your Path to<br />
                  Lasting Weight Loss<br />
                  With a Physician-Led<br />
                  GLP-1 Program
                </>
              ) : (
                <>
                  Your Path to Lasting Weight Loss<br />
                  With a Physician-Led GLP-1 Program
                </>
              )}
            </h1>
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-white mb-3 sm:mb-4">Join thousands achieving life-changing results with our simple, provider-led plan.</p>
              <div className={`flex ${
                currentLayout.className.includes('text-right') ? 'justify-center sm:justify-end' : 
                currentLayout.className.includes('text-left') ? 'justify-center sm:justify-start' : 
                'justify-center'
              }`}>
                <AnimatedTooltip items={successStories} />
              </div>
            </div>
            <div className={`flex flex-col gap-3 sm:gap-4 sm:flex-row ${
              currentLayout.className.includes('text-right') ? 'justify-center sm:justify-end' : 
              currentLayout.className.includes('text-left') ? 'justify-center sm:justify-start' : 
              'justify-center'
            }`}>
              <Button variant="glass" className="text-white hover:bg-white hover:text-black w-full sm:w-auto">How It Works</Button>
              <Button variant="default" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">Get Started</Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        {selectedLayout === 5 ? (
          // Right-side scroll indicator for Full Width Bottom
          <div className="hidden sm:flex absolute bottom-8 right-8 z-20 flex-col items-center animate-bounce">
            <p className="text-xs text-white/70 uppercase tracking-widest rotate-90 mb-8">Scroll</p>
            <div className="w-[1px] h-8 bg-white/30 mb-2" />
            <div className="w-2 h-2 rounded-full bg-white/70" />
          </div>
        ) : (
          // Default centered scroll indicator for other layouts
          <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-white/70 uppercase tracking-widest">Scroll</p>
            <div className="w-[1px] h-8 bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/70" />
          </div>
        )}
      </div>
    </section>
  )
}