import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, ClipboardCheck, Wrench, Home as HomeIcon, FileText, Calendar, Sparkles } from 'lucide-react'
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

const processSteps = [
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
                  <div className="p-8 rounded-lg glow-card text-center h-full flex flex-col justify-between">
                    <div>
                      <service.icon className="w-20 h-20 mx-auto mb-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <h2 className="text-2xl font-bold mb-6 group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                      <ul className="space-y-4 text-left">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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

      <ProcessSection steps={processSteps} />

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
