"use client"

import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { Button } from "@/components/ui/custom-button"
import { motion } from 'motion/react'

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

const videoStyleOptions = [
  {
    id: 1,
    name: "Classic Full",
    description: "Full screen video",
    className: "rounded-none",
    containerClass: "",
    overlayClass: "bg-gradient-to-b from-black/20 via-black/10 to-black/20",
    maskClass: "",
  },
  {
    id: 2,
    name: "Rounded Elegant",
    description: "Soft rounded corners",
    className: "rounded-3xl",
    containerClass: "p-4 sm:p-6 md:p-8",
    overlayClass: "bg-gradient-to-br from-black/30 via-transparent to-black/30 rounded-3xl",
    maskClass: "",
  },
  {
    id: 3,
    name: "Cinema Frame",
    description: "Cinematic letterbox",
    className: "rounded-2xl",
    containerClass: "p-8 sm:p-12 md:p-16",
    overlayClass: "bg-gradient-to-t from-black/60 via-black/20 to-black/60 rounded-2xl",
    maskClass: "shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]",
  },
  {
    id: 4,
    name: "Blob Mask",
    description: "Organic blob shape",
    className: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    containerClass: "p-12 sm:p-16 md:p-20",
    overlayClass: "bg-gradient-radial from-transparent via-black/20 to-black/40",
    maskClass: "",
  },
  {
    id: 5,
    name: "Diagonal Cut",
    description: "Modern diagonal mask",
    className: "clip-path-diagonal",
    containerClass: "",
    overlayClass: "bg-gradient-to-br from-black/40 via-transparent to-black/20",
    maskClass: "",
  },
  {
    id: 6,
    name: "Glow Border",
    description: "Glowing border effect",
    className: "rounded-2xl",
    containerClass: "p-4 sm:p-6 md:p-8",
    overlayClass: "bg-black/20 rounded-2xl",
    maskClass: "shadow-[0_0_100px_rgba(255,255,255,0.1)_inset] ring-2 ring-white/20",
  },
  {
    id: 7,
    name: "Glass Morph",
    description: "Glassmorphism effect",
    className: "rounded-[2rem]",
    containerClass: "p-6 sm:p-8 md:p-12",
    overlayClass: "backdrop-blur-[2px] bg-gradient-to-b from-white/10 to-black/30 rounded-[2rem]",
    maskClass: "ring-1 ring-white/30 shadow-2xl",
  },
  {
    id: 8,
    name: "Vintage Filter",
    description: "Retro film look",
    className: "rounded-xl sepia-[0.2] contrast-[1.1]",
    containerClass: "p-4 sm:p-6 md:p-8",
    overlayClass: "bg-gradient-to-b from-amber-900/20 via-transparent to-amber-900/20 rounded-xl mix-blend-multiply",
    maskClass: "",
  },
  {
    id: 9,
    name: "High Contrast",
    description: "Bold contrast look",
    className: "rounded-2xl contrast-[1.2] brightness-[0.9]",
    containerClass: "p-6 sm:p-8 md:p-10",
    overlayClass: "bg-gradient-to-t from-black/50 to-transparent rounded-2xl",
    maskClass: "",
  },
  {
    id: 10,
    name: "Mesh Overlay",
    description: "Mesh pattern overlay",
    className: "rounded-3xl",
    containerClass: "p-4 sm:p-6 md:p-8",
    overlayClass: "bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.3)_0%,transparent_50%)] rounded-3xl",
    maskClass: "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] before:opacity-30 before:rounded-3xl",
  },
  {
    id: 11,
    name: "Wave Mask",
    description: "Flowing wave shape",
    className: "rounded-[50%_20%_50%_20%/20%_50%_20%_50%]",
    containerClass: "p-8 sm:p-12 md:p-16",
    overlayClass: "bg-gradient-to-br from-black/30 via-transparent to-black/30",
    maskClass: "",
  },
  {
    id: 12,
    name: "Elegant Morph",
    description: "Sophisticated flowing form",
    className: "rounded-[55%_45%_62%_38%/45%_55%_45%_55%]",
    containerClass: "p-10 sm:p-14 md:p-18",
    overlayClass: "bg-gradient-to-br from-black/25 via-transparent to-black/35",
    maskClass: "shadow-[0_0_80px_rgba(255,255,255,0.08)_inset]",
  },
  {
    id: 13,
    name: "Luxury Bubble",
    description: "Premium organic shape",
    className: "rounded-[73%_27%_44%_56%/58%_45%_55%_42%]",
    containerClass: "p-12 sm:p-16 md:p-20",
    overlayClass: "bg-[radial-gradient(ellipse_at_30%_70%,rgba(0,0,0,0.15)_0%,transparent_60%)]",
    maskClass: "backdrop-blur-[0.5px]",
  },
  {
    id: 14,
    name: "Silk Wave",
    description: "Smooth silk-like flow",
    className: "rounded-[42%_58%_70%_30%/45%_62%_38%_55%]",
    containerClass: "p-10 sm:p-14 md:p-18",
    overlayClass: "bg-gradient-to-tr from-black/20 via-black/10 to-transparent",
    maskClass: "animate-gentle-morph",
  },
  {
    id: 15,
    name: "Cloud Dream",
    description: "Soft cloud formation",
    className: "rounded-[67%_33%_29%_71%/43%_61%_39%_57%]",
    containerClass: "p-14 sm:p-18 md:p-22",
    overlayClass: "bg-[radial-gradient(circle_at_60%_40%,rgba(0,0,0,0.2)_0%,transparent_70%)]",
    maskClass: "ring-1 ring-white/10",
  },
  {
    id: 16,
    name: "Velvet Drop",
    description: "Luxurious teardrop",
    className: "rounded-[52%_48%_33%_67%/60%_27%_73%_40%]",
    containerClass: "p-12 sm:p-16 md:p-20",
    overlayClass: "",
    maskClass: "shadow-[inset_0_-30px_60px_rgba(0,0,0,0.2)]",
  },
  {
    id: 17,
    name: "Pearl Shape",
    description: "Refined pearl form",
    className: "rounded-[65%_35%_50%_50%/35%_65%_35%_65%]",
    containerClass: "p-10 sm:p-14 md:p-18",
    overlayClass: "bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.25)_100%)]",
    maskClass: "animate-subtle-float",
  },
  {
    id: 18,
    name: "Zen Stone",
    description: "Balanced stone shape",
    className: "rounded-[48%_52%_57%_43%/52%_48%_52%_48%]",
    containerClass: "p-12 sm:p-16 md:p-20",
    overlayClass: "bg-gradient-to-br from-black/30 to-transparent",
    maskClass: "backdrop-saturate-[1.1] backdrop-brightness-[1.05]",
  },
  {
    id: 19,
    name: "Liquid Blob",
    description: "Fluid blob shape",
    className: "rounded-[40%_60%_60%_40%/40%_60%_60%_40%]",
    containerClass: "p-12 sm:p-16 md:p-20",
    overlayClass: "bg-gradient-radial from-black/10 via-black/20 to-black/40",
    maskClass: "animate-blob",
  },
  {
    id: 20,
    name: "Aura Glow",
    description: "Ethereal glow shape",
    className: "rounded-[58%_42%_55%_45%/42%_58%_42%_58%]",
    containerClass: "p-14 sm:p-18 md:p-22",
    overlayClass: "bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_40%,rgba(0,0,0,0.3)_100%)]",
    maskClass: "shadow-[0_0_120px_rgba(255,255,255,0.15)_inset] animate-pulse-slow",
  },
  {
    id: 21,
    name: "Mystic Orb",
    description: "Mystical sphere blend",
    className: "rounded-[62%_38%_41%_59%/49%_58%_42%_51%]",
    containerClass: "p-12 sm:p-16 md:p-20",
    overlayClass: "bg-gradient-conic from-black/20 via-transparent to-black/20",
    maskClass: "backdrop-contrast-[1.1]",
  },
  {
    id: 22,
    name: "Nebula Form",
    description: "Cosmic cloud shape",
    className: "rounded-[71%_29%_48%_52%/51%_49%_51%_49%]",
    containerClass: "p-16 sm:p-20 md:p-24",
    overlayClass: "bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,0,0,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_30%_70%,rgba(0,0,0,0.2)_0%,transparent_50%)]",
    maskClass: "animate-float",
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
  const currentLayout = layoutOptions.find(layout => layout.id === 2) || layoutOptions[0]
  const currentVideoStyle = videoStyleOptions.find(style => style.id === 16) || videoStyleOptions[0]

  return (
    <section className="w-full h-screen relative pt-24">

      <div className={`relative h-[calc(100vh-6rem)] w-full ${currentVideoStyle.containerClass}`}>
        {/* Video with dynamic styling */}
        <div className={`absolute inset-0 overflow-hidden ${currentVideoStyle.className} ${currentVideoStyle.maskClass}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full object-cover ${currentVideoStyle.className}`}
          >
            <source src="/videos/social_u2634596518_womans_upper_body_holding_a_blank_medicinal_vial__ec939f2d-342c-454e-ad17-6f42eeed4f31_3.mp4" type="video/mp4" />
          </video>
          <div className={`absolute inset-0 ${currentVideoStyle.overlayClass}`} />
        </div>
        
        {/* Layout-specific elements */}
        {currentLayout.showVerticalLine && (
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/30 z-10" />
        )}
        
        {currentLayout.showDiagonal && (
          <div className="hidden sm:block absolute inset-0 z-10">
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[100vw] border-l-transparent border-t-[100vh] border-t-black/30" />
          </div>
        )}
        
        {currentLayout.showMagazineStyle && (
          <div className="hidden sm:block absolute left-8 bottom-8 top-8 w-[2px] bg-white/50 z-10" />
        )}
        
        {/* Dynamic Text Layout */}
        <div className={`relative z-10 h-full w-full flex ${currentLayout.className} ${!currentLayout.ignoreDefaultPadding && 'p-6 sm:p-8 md:p-16'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${!currentLayout.isFullWidth ? 'max-w-2xl' : ''} ${currentLayout.contentClass || ''} ${!currentLayout.isSidePanel ? 'w-full' : ''}`}
          >
            <h1 className={`mb-4 sm:mb-6 font-light leading-tight tracking-tight text-white ${
              currentLayout.isMinimal ? 'text-2xl sm:text-3xl md:text-4xl' : 
              currentLayout.isOffset ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl' :
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            }`} style={{ fontFamily: "Nouvelle Grotesk" }}>
              Your Path to Lasting Weight Loss Starts Here.
            </h1>
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-white mb-3 sm:mb-4">Join thousands who have achieved life-changing results with our simple, provider-led GLP-1 program.</p>
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
              <Button variant="glass" className="text-white hover:bg-white hover:text-black w-full sm:w-auto">
                How It Works
              </Button>
              <Button variant="default" className="w-full sm:w-auto">
                Get Started Today
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        {currentLayout.id === 5 ? (
          <div className="hidden sm:flex absolute bottom-8 right-8 z-20 flex-col items-center animate-bounce">
            <p className="text-xs text-white/70 uppercase tracking-widest rotate-90 mb-8">Scroll</p>
            <div className="w-[1px] h-8 bg-white/30 mb-2" />
            <div className="w-2 h-2 rounded-full bg-white/70" />
          </div>
        ) : (
          <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-white/70 uppercase tracking-widest">Scroll</p>
            <div className="w-[1px] h-8 bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/70" />
          </div>
        )}
      </div>
      
      <style jsx>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        @keyframes blob {
          0% {
            border-radius: 40% 60% 60% 40% / 40% 60% 60% 40%;
          }
          50% {
            border-radius: 60% 40% 40% 60% / 60% 40% 40% 60%;
          }
          100% {
            border-radius: 40% 60% 60% 40% / 40% 60% 60% 40%;
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        @keyframes gentle-morph {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 62% 38% 55%;
          }
          25% {
            border-radius: 48% 52% 68% 32% / 42% 58% 42% 58%;
          }
          50% {
            border-radius: 38% 62% 72% 28% / 48% 52% 48% 52%;
          }
          75% {
            border-radius: 45% 55% 65% 35% / 38% 62% 38% 62%;
          }
        }
        .animate-gentle-morph {
          animation: gentle-morph 15s ease-in-out infinite;
        }
        @keyframes subtle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-subtle-float {
          animation: subtle-float 6s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.02);
          }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}