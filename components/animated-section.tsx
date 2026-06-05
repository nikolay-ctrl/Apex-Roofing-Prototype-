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
  duration = 720,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    // Fallback for browsers/environments without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const isDesktop = window.matchMedia('(min-width: 768px)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: isDesktop ? 0.12 : 0.08,
        rootMargin: isDesktop ? '0px 0px -8% 0px' : '0px 0px -36px 0px',
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

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 28px, 0)'
      case 'down':
        return 'translate3d(0, -28px, 0)'
      case 'left':
        return 'translate3d(28px, 0, 0)'
      case 'right':
        return 'translate3d(-28px, 0, 0)'
      case 'fade':
        return 'translate3d(0, 0, 0)'
      default:
        return 'translate3d(0, 28px, 0)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transform: isVisible ? 'translate3d(0, 0, 0)' : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
