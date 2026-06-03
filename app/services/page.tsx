import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-section'
import { CtaBanner } from '@/components/cta-banner'
import { ProcessSection } from '@/components/process-section'

export const metadata: Metadata = {
  title: 'Our Services | Apex Roofing',
  description: 'Comprehensive roofing services including inspections, repairs, and full replacements for residential and commercial properties.',
}

const services = [
  {
    title: 'Roof Inspections',
    image: '/service-inspection-real.jpg',
    position: 'center 42%',
    benefits: [
      'Professional damage assessment',
      'Detailed written reports',
      'Free estimates provided',
      'Preventive maintenance advice',
    ],
  },
  {
    title: 'Roof Repairs',
    image: '/service-repair-real.jpg',
    position: 'center 52%',
    benefits: [
      'Same-day emergency service',
      'Leak detection and fixing',
      'Shingle and gutter repairs',
      'Storm damage restoration',
    ],
  },
  {
    title: 'Roof Replacements',
    image: '/service-replacement-real.jpg',
    position: 'center 48%',
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
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl font-bold mb-4 text-balance">Our Services</h1>
            <p className="text-xl text-foreground/70 text-balance">
              Complete roofing solutions tailored to your needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="group block h-full">
                  <div className="overflow-hidden rounded-lg glow-card h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden border-b border-border">
                      <img
                        src={service.image}
                        alt=""
                        className="h-full w-full object-cover opacity-40 grayscale saturate-75 contrast-125 transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: service.position }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/55 to-transparent" />
                      <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                    </div>
                    <div className="p-8 text-center flex flex-1 flex-col justify-between">
                      <h2 className="text-2xl font-bold mb-6 group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                      <ul className="space-y-4 text-left">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,140,66,0.45)] flex-shrink-0" />
                            <span className="text-foreground/80 font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <CtaBanner
        title="Ready to get started?"
        description="Contact us today for a free consultation"
      >
        <Button
          asChild
          size="lg"
          className="btn-glow-accent font-semibold px-8 text-base h-12"
        >
          <Link href="/contact">Claim Your Free Quote</Link>
        </Button>
      </CtaBanner>
    </>
  )
}
