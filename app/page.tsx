'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Zap, Shield, HomeIcon, Wrench, ClipboardCheck, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-foreground via-foreground/98 to-card pt-20">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="text-background space-y-6">
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
                <p className="text-xl text-background/85 text-balance leading-relaxed">
                  Expert inspections, reliable repairs, and complete replacements. We&apos;re your trusted partner for all roofing needs.
                </p>
              </AnimatedSection>

              {/* Key Features */}
              <AnimatedSection direction="up" delay={400}>
                <div className="space-y-3 pt-2">
                  {[
                    { icon: '⚡', text: 'Same-Day Availability' },
                    { icon: '📍', text: '30-Mile Service Radius' },
                    { icon: '✓', text: 'Licensed & Insured' },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-background/90 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
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
                    className="btn-glow-white font-semibold px-8 text-base h-12"
                  >
                    <Link href="/services">Explore Premium Services</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Visual Stats */}
            <div className="hidden lg:flex flex-col gap-6">
              {[
                { number: '20+', label: 'Years Experience' },
                { number: '5000+', label: 'Projects Completed' },
                { number: '100%', label: 'Satisfaction Rate' },
              ].map((stat, i) => (
                <AnimatedSection key={i} direction="right" delay={150 * (i + 1)}>
                  <div className="group p-6 rounded-lg bg-background/5 border border-background/25 glow-card-static hover:border-accent/40 hover:bg-background/10 transition-all duration-300">
                    <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                    <p className="text-background/80 group-hover:text-background transition-colors font-medium">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Pulsing dot indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow" />
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
              { title: 'Inspections', desc: 'Professional assessments', icon: ClipboardCheck },
              { title: 'Repairs', desc: 'Fast damage solutions', icon: Wrench },
              { title: 'Replacements', desc: 'New roof installation', icon: HomeIcon },
            ].map((service, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <Link href="/services" className="group block">
                  <div className="p-8 rounded-lg glow-card text-center">
                    <service.icon className="w-16 h-16 mx-auto mb-4 text-accent group-hover:scale-115 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70">{service.desc}</p>
                  </div>
                </Link>
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
            <h2 className="text-4xl font-bold text-center mb-12 text-balance">
              Why Choose Apex Roofing
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: '20+ Years Experience', desc: 'Trusted by thousands of homeowners' },
              { icon: Zap, title: 'Same-Day Service', desc: 'Emergency repairs available 24/7' },
              { icon: Shield, title: 'Licensed & Insured', desc: 'Full protection on every project' },
            ].map((item, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="text-center p-8 rounded-lg glow-card">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-accent animate-float" style={{ animationDelay: `${idx * 0.5}s`, animationDuration: '3s' }} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Check */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold mb-4 text-balance">
              Check Next-Day Availability
            </h2>
            <p className="text-foreground/70 mb-8 text-balance">
              Enter your ZIP code to see service availability in your area
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={150}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter ZIP code"
                maxLength={5}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner"
              />
              <Button className="btn-glow-accent font-semibold px-6 cursor-pointer">
                Check Availability
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={250}>
            <p className="text-sm text-foreground/60 mt-4 font-medium">
              ✓ Service available tomorrow at 2:00 PM - 4:00 PM
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-12 text-balance">
              Trusted by Our Clients
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'John Smith', text: 'Excellent service and professional team!' },
              { name: 'Sarah Johnson', text: 'Completed faster than expected, highly recommend.' },
              { name: 'Mike Davis', text: 'Best roofing company in the area, very reliable.' },
            ].map((testimonial, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="p-8 rounded-lg glow-card h-full flex flex-col justify-between">
                  <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-bold text-accent">— {testimonial.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
