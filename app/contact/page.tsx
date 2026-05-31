'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'
import { CtaBanner } from '@/components/cta-banner'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Header */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl font-bold mb-4 text-balance">Get in Touch</h1>
            <p className="text-xl text-foreground/70 text-balance">
              Contact us for a free consultation and quote
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
              { icon: Mail, label: 'Email', value: 'info@apexroofing.com', href: 'mailto:info@apexroofing.com' },
              { icon: MapPin, label: 'Service Area', value: '30-Mile Radius', href: '#' },
            ].map((contact, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <a
                  href={contact.href}
                  className="p-8 rounded-lg text-center hover:text-accent block glow-card h-full"
                >
                  <contact.icon className="w-12 h-12 mx-auto mb-4 text-accent animate-float" style={{ animationDelay: `${idx * 0.4}s`, animationDuration: '3.6s' }} />
                  <h3 className="font-bold mb-2 text-foreground group-hover:text-accent transition-colors">{contact.label}</h3>
                  <p className="text-foreground/70">{contact.value}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <AnimatedSection direction="up">
              <h2 className="text-3xl font-bold text-center mb-8 text-balance">Send us a Message</h2>
            </AnimatedSection>
            
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800 animate-fade-in font-medium">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}

            <AnimatedSection direction="up" delay={150}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="inspection">Inspection</option>
                      <option value="repair">Repair</option>
                      <option value="replacement">Replacement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your roofing needs..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner resize-none"
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="btn-glow-accent font-semibold px-8 cursor-pointer h-12"
                  >
                    Submit Your Request
                  </Button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Area Map Placeholder */}
      <section className="w-full py-16 sm:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-8 text-balance">Our Service Area</h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={150}>
            <div className="relative h-96 rounded-lg overflow-hidden border border-border bg-slate-900 shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,66,0.15)_0%,transparent_70%)]" />
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full border-4 border-accent mx-auto mb-4 animate-pulse-glow flex items-center justify-center bg-accent/15">
                    <MapPin className="w-10 h-10 text-accent" />
                  </div>
                  <p className="text-white text-lg font-bold">30-Mile Local Service Radius</p>
                  <p className="text-sm text-white/50 mt-2">Map placeholder - Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner
        title="Ready to transform your roof?"
        description="Reach out today and let's discuss your roofing needs"
      >
        <Button
          asChild
          size="lg"
          className="btn-glow-accent font-semibold px-8 text-base h-12"
        >
          <Link href="tel:+15551234567">Call Now</Link>
        </Button>
      </CtaBanner>
    </>
  )
}
