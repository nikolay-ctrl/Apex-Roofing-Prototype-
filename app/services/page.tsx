import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, ClipboardCheck, Wrench, Home as HomeIcon, FileText, Calendar, Sparkles, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { CtaBanner } from '@/components/cta-banner'

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

      {/* Process Section */}
      <section className="w-full py-20 sm:py-28 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-4 text-balance">Our Process</h2>
            <p className="text-center text-foreground/70 mb-16 text-balance max-w-lg mx-auto">
              How we deliver premium roofing results, step-by-step from start to finish
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((item, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150} className="relative h-full">
                <div className="group p-6 rounded-lg glow-card text-center h-full flex flex-col justify-start pt-10 min-h-[220px] relative">
                  {/* Step badge in upper right — neon accent per plan */}
                  <span className="absolute top-4 right-4 text-3xl font-bold font-mono text-accent/60 select-none group-hover:text-accent transition-colors duration-300">
                    {item.step}
                  </span>
                  
                  {/* Icon — glows and scales on hover */}
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 text-accent flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(255,140,66,0.45)] group-hover:border-accent/60 group-hover:bg-accent/20">
                    <item.icon size={22} className="animate-float" style={{ animationDelay: `${idx * 0.3}s`, animationDuration: '3.5s' }} />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Connect arrow/chevron on desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 w-7 h-7 items-center justify-center bg-card border border-border rounded-full shadow-xs text-accent">
                      <ChevronRight size={14} className="animate-pulse" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
