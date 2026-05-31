import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, ClipboardCheck, Wrench, Home as HomeIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Apex Roofing',
  description: 'Comprehensive roofing services including inspections, repairs, and full replacements for residential and commercial properties.',
}

const services = [
  {
    title: 'Roof Inspections',
    icon: ClipboardCheck,
    benefits: [
      'Professional damage assessment',
      'Detailed written reports',
      'Free estimates provided',
      'Preventive maintenance advice',
    ],
  },
  {
    title: 'Roof Repairs',
    icon: Wrench,
    benefits: [
      'Same-day emergency service',
      'Leak detection and fixing',
      'Shingle and gutter repairs',
      'Storm damage restoration',
    ],
  },
  {
    title: 'Roof Replacements',
    icon: HomeIcon,
    benefits: [
      'Complete roof installation',
      'Premium material options',
      'Warranty on all work',
      'Expert crew installation',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="w-full py-12 sm:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-balance">Our Services</h1>
          <p className="text-xl text-foreground/70 text-balance">
            Complete roofing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group hover-lift">
                <div className="p-8 rounded-lg border border-border bg-card text-center">
                  <service.icon className="w-20 h-20 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <h2 className="text-2xl font-bold mb-6 group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <ul className="space-y-3 text-left">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Our Process</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Assessment', desc: 'Free inspection' },
              { step: '2', title: 'Quote', desc: 'Detailed estimate' },
              { step: '3', title: 'Schedule', desc: 'Flexible timing' },
              { step: '4', title: 'Complete', desc: 'Quality guaranteed' },
            ].map((item, idx) => (
              <div key={idx} className="text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-balance">Ready to get started?</h2>
          <p className="text-xl text-background/90 mb-8 text-balance">
            Contact us today for a free consultation
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
