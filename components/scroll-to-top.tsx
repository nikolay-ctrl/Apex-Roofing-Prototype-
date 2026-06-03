'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    // Run once initially
    toggleVisibility()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full border-2 border-accent bg-accent text-accent-foreground shadow-[0_0_24px_rgba(255,140,66,0.75),0_0_58px_rgba(255,140,66,0.38)] transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_32px_rgba(255,140,66,0.9),0_0_76px_rgba(255,140,66,0.48)] hover:scale-105',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="mx-auto h-6 w-6" />
    </button>
  )
}
