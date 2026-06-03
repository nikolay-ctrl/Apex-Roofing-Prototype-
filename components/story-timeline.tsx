'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'

const storyMilestones = [
  {
    year: '2005',
    title: 'Founded Locally',
    desc: 'Apex Roofing started as a family-run crew focused on dependable roof repairs and honest recommendations.',
  },
  {
    year: '2012',
    title: 'Expanded Our Crews',
    desc: 'Growing demand allowed us to build dedicated inspection, repair, and storm-damage response teams.',
  },
  {
    year: '2018',
    title: 'Full Replacement Specialists',
    desc: 'We added premium roof replacement services with stronger project planning, cleanup, and warranty support.',
  },
  {
    year: 'Today',
    title: 'Trusted Roofing Partner',
    desc: 'Thousands of completed projects later, we continue serving homeowners with craftsmanship, clarity, and care.',
  },
]

export function StoryTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
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
    <div ref={sectionRef} className={`relative ${hasStarted ? 'story-timeline-active' : ''}`}>
      <div className="story-timeline-track absolute left-5 top-4 bottom-4 w-px bg-accent/20 sm:left-1/2 sm:-translate-x-1/2" aria-hidden>
        <div className="story-timeline-fill absolute left-0 top-0 w-full bg-accent" />
      </div>

      <div className="space-y-8">
        {storyMilestones.map((item, idx) => (
          <AnimatedSection key={item.year} direction="up" delay={idx * 120}>
            <div className="relative grid gap-5 pl-16 sm:grid-cols-2 sm:pl-0">
              <div
                className="story-timeline-node absolute -left-1 top-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-card shadow-[0_0_16px_rgba(255,140,66,0.25)] sm:left-1/2 sm:-translate-x-1/2"
                style={{ animationDelay: `${idx * 0.55}s` }}
              >
                <span className="story-timeline-node-fill absolute inset-0 rounded-full bg-accent" />
                <span className="relative z-10 h-4 w-4 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.45)]" />
              </div>
              <div className={`rounded-2xl border border-border bg-card/80 p-6 glow-card ${idx % 2 === 0 ? '' : 'sm:col-start-2'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  {item.year}
                </p>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
