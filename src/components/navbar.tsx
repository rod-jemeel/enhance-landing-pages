"use client"

import { Search, MoreHorizontal, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/custom-button"
import { useNavbar } from "@/contexts/navbar-context"
import { useState } from "react"

export default function Navbar() {
  const { isTransparent } = useNavbar()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <>
    <nav className={`fixed top-0 z-50 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-16 sm:h-20 flex items-center transition-all duration-300 ${
      isTransparent 
        ? 'backdrop-blur-sm' 
        : 'bg-white/95 backdrop-blur-lg backdrop-saturate-150 border-b border-gray-200/50 shadow-sm'
    }`}>
      <div className="w-full flex items-center justify-between">
        {/* Left side - empty on mobile for balance */}
        <div className="sm:hidden order-1 w-12"></div>

        {/* Left Navigation - Hidden on mobile */}
        <div className="hidden sm:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <Link href="/about" className={`text-sm md:text-base transition-colors ${
            isTransparent ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
          }`}>
            About Us
          </Link>
          <Link href="/treatments" className={`text-sm md:text-base transition-colors ${
            isTransparent ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
          }`}>
            Treatments
          </Link>
          <Link href="/science" className={`text-sm md:text-base transition-colors ${
            isTransparent ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
          }`}>
            Science
          </Link>
        </div>

        {/* Center Brand - Order 2 on mobile */}
        <div className="flex-1 sm:flex-none sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 order-2 text-center sm:text-left">
          <h1 className={`text-lg sm:text-xl md:text-2xl font-light tracking-wider font-nouvelle ${
            isTransparent ? 'text-white' : 'text-gray-800'
          }`}>ENHANCEMD</h1>
        </div>

        {/* Right Actions - Order 3 on mobile */}
        <div className="flex items-center space-x-2 sm:space-x-4 order-3">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search here..."
              className={`glass-input-light w-40 lg:w-48 h-9 sm:h-10 rounded-full px-4 pr-10 text-sm backdrop-blur-md border ${
                isTransparent 
                  ? 'bg-white/10 text-white placeholder-gray-300 border-white/20' 
                  : 'bg-gray-100/60 text-gray-800 placeholder-gray-500 border-gray-200/50'
              }`}
            />
            <Search className={`absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
              isTransparent ? 'text-gray-300' : 'text-gray-500'
            }`} />
          </div>
          <Button variant="circle-arrow" size="sm" className="hidden sm:flex text-xs sm:text-sm">
            Book now
          </Button>
          
          {/* Mobile Menu Button - iOS style pill shape */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`sm:hidden px-4 py-2 backdrop-blur-md border transition-all ${
              isTransparent 
                ? 'bg-black/20 border-white/10' 
                : 'bg-gray-100/80 border-gray-300/50'
            }`}
            style={{ borderRadius: '100px' }}
          >
            {mobileMenuOpen ? (
              <X className={`h-4 w-4 ${isTransparent ? 'text-white' : 'text-gray-800'}`} />
            ) : (
              <MoreHorizontal className={`h-4 w-4 ${isTransparent ? 'text-white' : 'text-gray-800'}`} />
            )}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu */}
    <div className={`fixed inset-0 z-40 sm:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-lg">
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="/about" 
              className="text-xl text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/treatments" 
              className="text-xl text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Treatments
            </Link>
            <Link 
              href="/science" 
              className="text-xl text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Science
            </Link>
            <div className="pt-8 space-y-4">
              <Button variant="circle-arrow" className="w-full bg-white text-black hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Button>
              <Button variant="glass" className="w-full border-white text-white hover:bg-white hover:text-black" onClick={() => setMobileMenuOpen(false)}>
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}