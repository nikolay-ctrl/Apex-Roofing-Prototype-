'use client'

import {
  Calendar,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

const processSteps: {
  step: string
  title: string
  desc: string
  icon: LucideIcon
}[] = [
  {
    step: '01',
    title: 'Assessment',
    desc: 'Free, comprehensive roofing inspection to evaluate current state and identify issues.',
    icon: ClipboardCheck,
  },
  {
    step: '02',
    title: 'Transparent Quote',
    desc: 'A detailed estimate breakdown of costs, materials, and timeline with zero hidden fees.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Flexible Schedule',
    desc: 'We schedule the work at a time convenient for you, preparing materials and safety plans.',
    icon: Calendar,
  },
  {
    step: '04',
    title: 'Quality Execution',
    desc: 'Professional installation with premium cleanup, final inspection, and warranty activation.',
    icon: Sparkles,
  },
]

export function ProcessSection() {
  return (
    <section className="relative w-full overflow-x-hidden py-20 sm:py-28 border-y border-border">
      <div
        className="absolute inset-0 bg-gradient-to-b from-card via-muted/30 to-card"
        aria-hidden
      />
      <div className="process-section-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="process-section-orb absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="process-section-orb-delayed absolute bottom-1/4 -right-16 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              How we work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">Our Process</h2>
            <p className="text-foreground/70 text-balance max-w-lg mx-auto">
              Step-by-step quality assurance from first inspection to final warranty
            </p>
          </div>
        </AnimatedSection>

        <div
          className="process-flow-line hidden lg:block absolute left-[12.5%] right-[12.5%] top-[calc(50%+2rem)] h-0.5 -translate-y-1/2"
          aria-hidden
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative pl-5 md:pl-0">
          {processSteps.map((item, idx) => {
            const Icon = item.icon
            const directions = ['left', 'up', 'right', 'up'] as const

            return (
              <AnimatedSection
                key={item.step}
                direction={directions[idx] ?? 'up'}
                delay={idx * 120}
                className="relative h-full"
              >
                <div
                  className="lg:hidden absolute -left-1 top-8 w-3 h-3 rounded-full bg-accent process-timeline-dot z-10"
                  aria-hidden
                />

                <article className="process-card group relative h-full min-h-[240px] flex flex-col rounded-xl glow-card bg-card/80 backdrop-blur-sm px-6 pt-12 pb-6 text-center border border-border/80 transition-all duration-500 hover:-translate-y-1">
                  <span
                    className="process-step-badge absolute top-4 right-4 text-3xl font-bold font-mono text-accent/50 select-none transition-colors duration-300 group-hover:text-accent"
                    style={{ animationDelay: `${idx * 0.4}s` }}
                  >
                    {item.step}
                  </span>

                  <div className="process-icon-ring w-14 h-14 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:border-accent/70 group-hover:bg-accent/20">
                    <Icon
                      size={24}
                      className="animate-float"
                      style={{
                        animationDelay: `${idx * 0.35}s`,
                        animationDuration: '3.5s',
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-foreground transition-colors duration-300 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                    {item.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border/60">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent/80 group-hover:text-accent transition-colors">
                      Step {item.step}
                    </span>
                  </div>

                  {idx < processSteps.length - 1 && (
                    <div
                      className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-7 h-7 items-center justify-center rounded-full bg-card border border-accent/30 text-accent shadow-sm process-connector-arrow"
                      aria-hidden
                    >
                      <ChevronRight size={14} />
                    </div>
                  )}
                </article>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
