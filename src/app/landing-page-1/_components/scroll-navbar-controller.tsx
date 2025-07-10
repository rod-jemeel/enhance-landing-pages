"use client"

import { useEffect } from "react"
import { useNavbar } from "@/contexts/navbar-context"

export default function ScrollNavbarController() {
  const { setIsTransparent } = useNavbar()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Get all sections that have dark backgrounds
      const darkSections = [
        document.getElementById('hero-section'),
        document.getElementById('protocol-section'),
        document.getElementById('transformation-quote-section'),
      ]
      
      let isDarkBackground = false
      
      // Check if navbar is over a dark section
      darkSections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect()
          // Check if navbar (top 80px) overlaps with this section
          if (rect.top <= 80 && rect.bottom >= 0) {
            isDarkBackground = true
          }
        }
      })
      
      // Also check if we're at the very top of the page (hero section)
      if (scrollY < 100) {
        isDarkBackground = true
      }
      
      setIsTransparent(isDarkBackground)
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [setIsTransparent])

  return null
}