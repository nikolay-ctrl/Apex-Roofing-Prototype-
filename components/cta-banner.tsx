import type { ReactNode } from 'react'

interface CtaBannerProps {
  title: string
  description: string
  children: ReactNode
}

export function CtaBanner({ title, description, children }: CtaBannerProps) {
  return (
    <section className="minimal-cta-banner relative w-full overflow-hidden border-y border-border/60 py-3 sm:py-4">
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"
        aria-hidden
      />
      <div
        className="absolute top-0 left-0 right-0 h-px bg-border/80"
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
          Start your project
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-foreground">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          {description}
        </p>

        {children}
      </div>
    </section>
  )
}
