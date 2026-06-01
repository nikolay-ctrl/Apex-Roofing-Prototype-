'use client'

import { AnimatedSection } from '@/components/animated-section'

interface CtaBannerProps {
  title: string
  description: string
  children: React.ReactNode
}

export function CtaBanner({ title, description, children }: CtaBannerProps) {
  return (
    <section className="relative w-full overflow-hidden border-y border-border/60 py-3 sm:py-4">
      {/* Pulsing orange frame around the section */}
      <div
        className="cta-banner-pulse-frame absolute inset-3 sm:inset-5 md:inset-6 z-[1] pointer-events-none"
        aria-hidden
      />
      <div
        className="cta-banner-orbit absolute inset-3 sm:inset-5 md:inset-6 z-[1] pointer-events-none"
        aria-hidden
      />
      <div
        className="cta-banner-corner cta-banner-corner-tl z-[2] pointer-events-none"
        aria-hidden
      />
      <div
        className="cta-banner-corner cta-banner-corner-tr z-[2] pointer-events-none"
        aria-hidden
      />
      <div
        className="cta-banner-corner cta-banner-corner-bl z-[2] pointer-events-none"
        aria-hidden
      />
      <div
        className="cta-banner-corner cta-banner-corner-br z-[2] pointer-events-none"
        aria-hidden
      />
      <div
        className="cta-banner-side-glow absolute left-2 sm:left-4 top-1/4 bottom-1/4 z-[2] pointer-events-none"
        aria-hidden
      />
      <div
        className="cta-banner-side-glow cta-banner-side-glow-right absolute right-2 sm:right-4 top-1/4 bottom-1/4 z-[2] pointer-events-none"
        aria-hidden
      />

      {/* Bright layer — contrasts with dark animated footer below */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/40 to-background"
        aria-hidden
      />
      <div className="cta-banner-beam absolute inset-0" aria-hidden />
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="cta-banner-orb absolute -top-16 right-[15%] w-64 h-64 bg-accent/25 rounded-full blur-3xl" />
        <div className="cta-banner-orb-delayed absolute -bottom-20 left-[10%] w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
      </div>
      <div
        className="cta-banner-sweep absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-foreground/8 pointer-events-none"
        aria-hidden
      />
      <div className="cta-banner-border-glow absolute top-0 left-0 right-0 h-px" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <AnimatedSection direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Start your project
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            {description}
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150}>
          {children}
        </AnimatedSection>
      </div>
    </section>
  )
}
