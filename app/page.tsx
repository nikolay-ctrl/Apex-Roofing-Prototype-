'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ChevronDown, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'
import { CtaBanner } from '@/components/cta-banner'

const heroStats = [
  { label: 'Years Experience', value: 22, suffix: '+', progress: 88 },
  { label: 'Projects Completed', value: 4850, suffix: '+', progress: 94 },
  { label: 'Satisfaction Rate', value: 98, suffix: '%', progress: 98 },
]

const testimonials = [
  {
    name: 'Michael Turner',
    location: 'Homeowner in North Hills',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    text: 'Apex Roofing found the source of a leak that two other contractors missed. They explained the repair clearly, gave us a written estimate, and finished the work before the next storm came through. The crew was careful around our landscaping and left the property cleaner than when they arrived.',
  },
  {
    name: 'Rachel Bennett',
    location: 'Homeowner in Oak Ridge',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80',
    text: 'We needed a full roof replacement and were nervous about the cost and disruption. Apex walked us through material options, scheduling, and cleanup before anything started. The project stayed on timeline, the communication was consistent, and the finished roof looks excellent.',
  },
  {
    name: 'David Coleman',
    location: 'Property Manager in Brookside',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&q=80',
    text: 'I manage several rental properties, so I value contractors who are direct, organized, and dependable. Apex provided photos from the inspection, prioritized the most urgent repairs, and completed everything without surprises. They have become my first call for roofing work.',
  },
]

export default function HomePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [animatedStats, setAnimatedStats] = useState(
    heroStats.map(() => ({ value: 0, progress: 0 }))
  )
  const [postalCode, setPostalCode] = useState('')
  const [availabilityResult, setAvailabilityResult] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  useEffect(() => {
    const duration = 1600
    const startDelay = 250
    let animationFrame: number
    let startTime: number | null = null

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3)

    const timer = window.setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp
        }

        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easeOutCubic(progress)

        setAnimatedStats(
          heroStats.map((stat) => ({
            value: Math.round(stat.value * easedProgress),
            progress: Math.round(stat.progress * easedProgress),
          }))
        )

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate)
        }
      }

      animationFrame = window.requestAnimationFrame(animate)
    }, startDelay)

    return () => {
      window.clearTimeout(timer)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  const handleAvailabilityCheck = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalizedPostalCode = postalCode.trim().toUpperCase()

    if (!/^[A-Z0-9][A-Z0-9 -]{2,11}$/.test(normalizedPostalCode)) {
      setAvailabilityResult({
        type: 'error',
        message: 'Enter a valid ZIP or postal code using 3-12 letters or numbers.',
      })
      return
    }

    setAvailabilityResult({
      type: 'success',
      message: `Service available tomorrow at 2:00 PM - 4:00 PM for ${normalizedPostalCode}.`,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card pt-24 pb-12">
        <img
          src="https://images.unsplash.com/photo-1635424824800-692767998d07?fm=jpg&q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/55 to-card/75" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="text-foreground space-y-6">
              <div className="space-y-4">
                <AnimatedSection direction="up" delay={100}>
                  <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                    Professional Roofing Services
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={200}>
                  <h1 className="text-6xl sm:text-7xl font-bold text-balance leading-tight">
                    Premium Solutions for Your Roof
                  </h1>
                </AnimatedSection>
              </div>
              
              <AnimatedSection direction="up" delay={300}>
                <p className="text-xl text-foreground/85 text-balance leading-relaxed">
                  Expert inspections, reliable repairs, and complete replacements. We&apos;re your trusted partner for all roofing needs.
                </p>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection direction="up" delay={500}>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="btn-glow-accent font-semibold px-8 text-base h-12"
                  >
                    <Link href="/contact">Claim Your Free Inspection</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="btn-glow-dark font-semibold px-8 text-base h-12"
                  >
                    <Link href="/services">Explore Premium Services</Link>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Availability Check */}
              <AnimatedSection direction="up" delay={600}>
                <div className="glow-card rounded-xl p-5 sm:p-6 max-w-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-balance">
                    Check Next-Day Availability
                  </h2>
                  <p className="text-foreground/70 mb-5 text-balance">
                    Enter your ZIP or postal code to see service availability in your area
                  </p>

                  <form onSubmit={handleAvailabilityCheck} className="flex flex-col sm:flex-row gap-3" noValidate>
                    <input
                      type="text"
                      inputMode="text"
                      placeholder="Enter ZIP / postal code"
                      maxLength={12}
                      value={postalCode}
                      onChange={(event) => {
                        setPostalCode(event.target.value.replace(/[^a-zA-Z0-9 -]/g, '').toUpperCase().slice(0, 12))
                        setAvailabilityResult(null)
                      }}
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner"
                      aria-label="ZIP or postal code"
                      aria-describedby={availabilityResult?.type === 'error' ? 'availability-error' : undefined}
                    />
                    <Button type="submit" className="btn-glow-accent font-semibold px-6 cursor-pointer">
                      Check Availability
                    </Button>
                  </form>

                  {availabilityResult && (
                    <p
                      id={availabilityResult.type === 'error' ? 'availability-error' : undefined}
                      className={`text-sm mt-4 font-medium flex items-center gap-2 ${
                        availabilityResult.type === 'success'
                          ? 'text-green-300'
                          : 'text-white'
                      }`}
                    >
                      {availabilityResult.type === 'success' && (
                        <CheckCircle className="w-4 h-4" aria-hidden="true" />
                      )}
                      {availabilityResult.message}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Visual Stats */}
            <div className="hidden lg:flex flex-col gap-6">
              {heroStats.map((stat, i) => (
                <AnimatedSection key={i} direction="right" delay={150 * (i + 1)}>
                  <div className="group p-6 rounded-xl bg-foreground/5 border border-accent/30 shadow-[0_0_28px_rgba(255,140,66,0.16)] glow-card-static hover:border-accent/70 hover:bg-foreground/10 hover:shadow-[0_0_42px_rgba(255,140,66,0.32)] transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-3xl font-bold text-accent drop-shadow-[0_0_12px_rgba(255,140,66,0.45)]">
                          {animatedStats[i].value.toLocaleString()}
                          {stat.suffix}
                        </p>
                        <p className="text-foreground/75 group-hover:text-foreground transition-colors font-medium">
                          {stat.label}
                        </p>
                      </div>
                      <p className="rounded-full border border-accent/45 bg-accent/10 px-3 py-1 text-sm font-bold text-accent shadow-[0_0_18px_rgba(255,140,66,0.22)]">
                        {animatedStats[i].progress}%
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="grid flex-1 grid-cols-10 gap-1 rounded-lg border border-accent/35 bg-background/80 p-1.5 shadow-inner"
                        role="progressbar"
                        aria-valuenow={animatedStats[i].progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={stat.label}
                      >
                        {Array.from({ length: 10 }).map((_, segmentIndex) => (
                          <div
                            key={segmentIndex}
                            className={`h-6 rounded-sm transition-all duration-300 ${
                              animatedStats[i].progress >= (segmentIndex + 1) * 10
                                ? 'bg-accent shadow-[0_0_14px_rgba(255,140,66,0.65)]'
                                : 'bg-foreground/10'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="h-8 w-2 rounded-r-sm border-y border-r border-accent/40 bg-accent/20 shadow-[0_0_12px_rgba(255,140,66,0.25)]" />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-foreground/45">
                      Live Progress
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">
              Our Services
            </h2>
            <p className="text-center text-foreground/70 mb-12 text-balance">
              Complete roofing solutions for every need
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Inspections', desc: 'Professional assessments', image: '/service-inspection-real.jpg', position: 'center 42%' },
              { title: 'Repairs', desc: 'Fast damage solutions', image: '/service-repair-real.jpg', position: 'center 52%' },
              { title: 'Replacements', desc: 'New roof installation', image: '/service-replacement-real.jpg', position: 'center 48%' },
            ].map((service, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="overflow-hidden rounded-lg glow-card text-center">
                  <div className="relative h-40 overflow-hidden border-b border-border">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover opacity-40 grayscale saturate-75 contrast-125"
                      style={{ objectPosition: service.position }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/45 to-transparent" />
                    <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                  </div>
                  <div className="p-8 pt-6">
                    <h3 className="text-xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70">{service.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="btn-glow-outline px-8 py-5 h-auto text-base"
            >
              <Link href="/services">Browse All Premium Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">
              Why Choose Apex Roofing
            </h2>
            <p className="text-center text-foreground/70 mb-12 text-balance max-w-2xl mx-auto">
              A clearer, more dependable roofing experience from the first inspection to the final cleanup.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            <AnimatedSection direction="left" delay={100}>
              <div className="h-full rounded-2xl border border-border bg-background/35 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45 mb-4">
                  Typical Contractor
                </p>
                <div className="space-y-4">
                  {[
                    'Vague pricing with unclear add-ons',
                    'Quick patch recommendations without full roof context',
                    'Limited updates once the job begins',
                    'Cleanup quality depends on the crew',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 rounded-xl border border-border bg-card/45 p-4">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/35 flex-shrink-0" />
                      <p className="text-foreground/65">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="h-full rounded-2xl border border-accent/40 bg-background/55 p-6 sm:p-8 shadow-[0_0_36px_rgba(255,140,66,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                  Apex Roofing
                </p>
                <div className="space-y-4">
                  {[
                    'Detailed written estimates before work starts',
                    'Honest repair-or-replace guidance based on roof condition',
                    'Clear timelines and communication throughout the project',
                    'Property protection and thorough cleanup after completion',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 rounded-xl border border-accent/25 bg-card/70 p-4 shadow-[0_0_18px_rgba(255,140,66,0.08)]">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                      <p className="text-foreground/85 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">
              Trusted by Our Clients
            </h2>
            <p className="text-center text-foreground/70 mb-12 text-balance max-w-2xl mx-auto">
              Real feedback from homeowners and property managers who needed dependable roof work without the guesswork.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="p-8 rounded-2xl glow-card h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={testimonial.image}
                      alt={`Portrait of ${testimonial.name}`}
                      className="h-16 w-16 rounded-full object-cover border-2 border-accent/40 shadow-[0_0_18px_rgba(255,140,66,0.25)]"
                    />
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/55">{testimonial.location}</p>
                    </div>
                  </div>

                  <div
                    className="flex gap-1 mb-5 text-accent"
                    aria-label={`${testimonial.rating} out of 5 star rating`}
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`h-5 w-5 ${
                          starIndex < testimonial.rating
                            ? 'fill-accent drop-shadow-[0_0_8px_rgba(255,140,66,0.45)]'
                            : 'text-foreground/25'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 italic leading-relaxed flex-1">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-16 sm:py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-70 pointer-events-none" aria-hidden>
          <div className="cta-banner-orb absolute top-12 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="cta-banner-orb-delayed absolute bottom-20 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute left-[12%] top-1/3 h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_rgba(255,140,66,0.8)] animate-float" />
          <div className="absolute right-[18%] top-24 h-2 w-2 rounded-full bg-accent/80 shadow-[0_0_20px_rgba(255,140,66,0.7)] animate-float" style={{ animationDelay: '0.8s' }} />
          <div className="absolute right-[28%] bottom-28 h-4 w-4 rounded-full bg-accent/70 shadow-[0_0_28px_rgba(255,140,66,0.75)] animate-float" style={{ animationDelay: '1.6s' }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent pointer-events-none" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-foreground/70 mb-12 text-balance">
              Get answers to common questions about our roofing services
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                question: 'How much will a roof replacement cost?',
                answer: 'Roof replacement costs vary based on size, materials, and complexity. Most residential roofs range from $8,000-$25,000. We provide free, detailed estimates with no obligation. Plus, we offer flexible financing options to fit your budget, and we can help maximize your insurance claim if applicable.',
              },
              {
                question: 'Will a roof replacement disrupt my daily life?',
                answer: 'Our professional crews work efficiently to minimize disruption. Most replacements are completed in 2-4 days. We protect your property, manage debris removal, and work during reasonable hours. We\'ll provide a clear timeline upfront so you know exactly what to expect.',
              },
              {
                question: 'Do I really need a new roof, or can I just repair it?',
                answer: 'Our free inspection will help determine if repairs or replacement is best for your situation. If your roof is under 15 years old with minor damage, repairs may be sufficient. However, if it\'s aging or has extensive damage, replacement is more cost-effective long-term. We\'ll always recommend the most economical option.',
              },
              {
                question: 'What if I\'m not sure if my roof needs work?',
                answer: 'Get a free professional inspection—no commitment required. We\'ll assess your roof\'s condition, identify any issues, and explain your options clearly. Many roof problems start small and worsen over time, so early detection can save thousands in preventive maintenance.',
              },
              {
                question: 'Are you really licensed and insured?',
                answer: 'Yes, absolutely. We\'re fully licensed, insured, and bonded. All work is covered by comprehensive liability insurance and workers\' compensation. You can verify our credentials anytime, and we stand behind every project with written warranties.',
              },
              {
                question: 'Can you help with my insurance claim?',
                answer: 'Yes, we work with insurance companies regularly on storm and damage claims. We document damage professionally, provide detailed reports, and communicate directly with your adjuster. Many customers are surprised how much their insurance covers—let us help maximize your claim.',
              },
            ].map((faq, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 50}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left group cursor-pointer"
                >
                  <div className="p-6 rounded-lg border border-border bg-card glow-card transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                          expandedFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {expandedFaq === idx && (
                      <p className="mt-4 text-foreground/80 leading-relaxed animate-slide-up">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready for Quality Roofing?"
        description="Contact Apex Roofing today for a free, no-obligation estimate"
      >
        <Button
          asChild
          size="lg"
          className="btn-glow-accent font-semibold px-8 text-base h-12"
        >
          <Link href="/contact">Schedule Your Free Consultation</Link>
        </Button>
      </CtaBanner>
    </>
  )
}
