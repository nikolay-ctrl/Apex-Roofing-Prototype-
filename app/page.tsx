import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Zap, Shield, Home as HomeIcon, Wrench, ClipboardCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Apex Roofing | Professional Roofing Services',
  description: 'Expert roofing services with same-day availability. Inspections, repairs, and replacements for residential and commercial properties.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-card">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-background animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Premium Roofing Solutions
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-background/90 text-balance">
            30-Mile Service Radius • Same-Day Availability • Expert Installation
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
          >
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>

        {/* Pulsing dot indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-balance">
            Complete roofing solutions for every need
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Inspections', desc: 'Professional assessments', icon: ClipboardCheck },
              { title: 'Repairs', desc: 'Fast damage solutions', icon: Wrench },
              { title: 'Replacements', desc: 'New roof installation', icon: HomeIcon },
            ].map((service, idx) => (
              <Link key={idx} href="/services" className="group">
                <div className="p-8 rounded-lg border border-border bg-card hover-lift text-center">
                  <service.icon className="w-16 h-16 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">
            Why Choose Apex Roofing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: '20+ Years Experience', desc: 'Trusted by thousands of homeowners' },
              { icon: Zap, title: 'Same-Day Service', desc: 'Emergency repairs available 24/7' },
              { icon: Shield, title: 'Licensed & Insured', desc: 'Full protection on every project' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg border border-border hover-lift">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Check */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Check Next-Day Availability
          </h2>
          <p className="text-foreground/70 mb-8 text-balance">
            Enter your ZIP code to see service availability in your area
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter ZIP code"
              maxLength={5}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Check Availability
            </Button>
          </div>

          <p className="text-sm text-foreground/60 mt-4">
            ✓ Service available tomorrow at 2:00 PM - 4:00 PM
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">
            Trusted by Our Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'John Smith', text: 'Excellent service and professional team!' },
              { name: 'Sarah Johnson', text: 'Completed faster than expected, highly recommend.' },
              { name: 'Mike Davis', text: 'Best roofing company in the area, very reliable.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border hover-lift">
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-accent">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Ready for Quality Roofing?
          </h2>
          <p className="text-xl text-background/90 mb-8 text-balance">
            Contact Apex Roofing today for a free, no-obligation estimate
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
          >
            <Link href="/contact">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
