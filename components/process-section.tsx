'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Calendar,
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
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || hasStarted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [hasStarted])

  return (
    <section ref={sectionRef} className="relative w-full overflow-x-hidden py-20 sm:py-28 border-y border-border">
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

        <div className={`process-switch-panel relative mx-auto max-w-5xl rounded-3xl border border-accent/20 bg-background/35 p-5 sm:p-8 shadow-[0_0_40px_rgba(255,140,66,0.1)] backdrop-blur-sm ${hasStarted ? 'process-is-active' : ''}`}>
          <div className="process-vertical-track absolute left-[3.75rem] sm:left-[5.5rem] top-12 bottom-12 w-1.5 rounded-full" aria-hidden />
          <div className="process-vertical-flow absolute left-[3.75rem] sm:left-[5.5rem] top-12 bottom-12 w-1.5 rounded-full" aria-hidden />

          <div className="relative space-y-7 sm:space-y-8">
            {processSteps.map((item, idx) => {
              const Icon = item.icon
              const stepNumber = idx + 1

              return (
                <AnimatedSection
                  key={item.step}
                  direction="up"
                  delay={idx * 120}
                  className="relative z-10"
                >
                  <article className="group grid grid-cols-[5rem_1fr] sm:grid-cols-[7rem_1fr] gap-5 sm:gap-7">
                    <div className="relative flex justify-center pt-2">
                      <div
                        className="process-number-circle relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-accent bg-card text-4xl font-bold text-accent shadow-[0_0_24px_rgba(255,140,66,0.35)]"
                        style={{ animationDelay: `${idx * 0.65}s` }}
                      >
                        <span className="process-number-fill absolute inset-0" aria-hidden />
                        <span className="relative z-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">{stepNumber}</span>
                      </div>
                    </div>

                    <div
                      className="process-card process-step-card relative rounded-2xl border border-border/80 bg-card/85 p-6 sm:p-7 text-left backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-[0_0_28px_rgba(255,140,66,0.16)]"
                      style={{ animationDelay: `${idx * 0.65}s` }}
                    >
                      <div className="process-selection-caret absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 rounded-sm bg-accent opacity-0 shadow-[0_0_20px_rgba(255,140,66,0.75)]" aria-hidden />
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/75">
                            Step {item.step}
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                            {item.title}
                          </h3>
                        </div>
                        <div className="process-icon-ring flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:border-accent/70 group-hover:bg-accent/20">
                          <Icon size={22} />
                        </div>
                      </div>

                      <p className="text-foreground/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
