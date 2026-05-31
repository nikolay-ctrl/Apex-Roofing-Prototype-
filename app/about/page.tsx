import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Award, Users, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About Us | Apex Roofing',
  description: 'Learn about Apex Roofing - over 20 years of professional roofing experience serving residential and commercial clients.',
}

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl font-bold mb-4 text-balance">About Apex Roofing</h1>
            <p className="text-xl text-foreground/70 text-balance">
              Your trusted roofing partner for over two decades
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold mb-6 text-balance">Our Story</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Founded in 2005, Apex Roofing began as a small family operation with a simple mission: deliver exceptional roofing solutions with unmatched customer service.
            </p>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Today, we&apos;ve grown to become the most trusted roofing contractor in the region, serving thousands of satisfied customers across residential and commercial sectors.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our success is built on a foundation of quality craftsmanship, timely service, and genuine care for every project we undertake.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: '20+ Years', desc: 'Industry Excellence' },
              { icon: Users, title: '5,000+', desc: 'Happy Customers' },
              { icon: Clock, title: '24/7', desc: 'Emergency Support' },
            ].map((stat, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="text-center p-8 rounded-lg glow-card h-full">
                  <stat.icon className="w-16 h-16 mx-auto mb-4 text-accent animate-float" style={{ animationDelay: `${idx * 0.4}s`, animationDuration: '3.8s' }} />
                  <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-foreground/70">{stat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold text-center mb-12 text-balance">Our Values</h2>
          </AnimatedSection>
          
          <div className="space-y-6">
            {[
              { title: 'Quality Workmanship', desc: 'We never compromise on quality. Every project receives our full attention and expertise.' },
              { title: 'Customer First', desc: 'Your satisfaction is our priority. We listen, communicate, and deliver beyond expectations.' },
              { title: 'Professional Integrity', desc: 'Licensed, insured, and bonded. We operate with transparency and honesty in all dealings.' },
              { title: 'Local Community', desc: 'We&apos;re proud to serve our community and give back through charitable initiatives.' },
            ].map((value, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 100}>
                <div className="p-6 rounded-lg glow-card">
                  <h3 className="text-xl font-bold mb-2 text-accent">{value.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-4xl font-bold mb-4 text-balance">Our Team</h2>
            <p className="text-lg text-foreground/70 mb-12 text-balance">
              Experienced professionals dedicated to excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Michael Torres', role: 'Founder & CEO', exp: '25+ years' },
              { name: 'Jennifer Lee', role: 'Operations Manager', exp: '18 years' },
              { name: 'David Martinez', role: 'Lead Technician', exp: '20 years' },
            ].map((member, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="p-8 rounded-lg glow-card h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold mb-4">{member.role}</p>
                  </div>
                  <p className="text-sm text-foreground/70 border-t border-border pt-4 mt-2">{member.exp} experience</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Join Our Family"
        description="Experience the Apex Roofing difference today"
      >
        <Button
          asChild
          size="lg"
          className="btn-glow-accent font-semibold px-8 text-base h-12"
        >
          <Link href="/contact">Get Started With Apex</Link>
        </Button>
      </CtaBanner>
    </>
  )
}
