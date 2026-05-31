'use client'

import React, { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number // in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  duration?: number // in ms
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Fallback for browsers/environments without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8 opacity-0'
      case 'down':
        return '-translate-y-8 opacity-0'
      case 'left':
        return 'translate-x-8 opacity-0'
      case 'right':
        return '-translate-x-8 opacity-0'
      case 'fade':
        return 'opacity-0'
      default:
        return 'translate-y-8 opacity-0'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: isVisible ? 'translate(0, 0)' : undefined,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={!isVisible ? getDirectionClass() : 'transition-all duration-300'}>
        {children}
      </div>
    </div>
  )
}
