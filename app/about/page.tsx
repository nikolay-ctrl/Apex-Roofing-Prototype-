import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Award, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Apex Roofing',
  description: 'Learn about Apex Roofing - over 20 years of professional roofing experience serving residential and commercial clients.',
}

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="w-full py-12 sm:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-balance">About Apex Roofing</h1>
          <p className="text-xl text-foreground/70 text-balance">
            Your trusted roofing partner for over two decades
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
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
          </div>
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
              <div key={idx} className="text-center hover-lift">
                <stat.icon className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-foreground/70">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Our Values</h2>
          
          <div className="space-y-6">
            {[
              { title: 'Quality Workmanship', desc: 'We never compromise on quality. Every project receives our full attention and expertise.' },
              { title: 'Customer First', desc: 'Your satisfaction is our priority. We listen, communicate, and deliver beyond expectations.' },
              { title: 'Professional Integrity', desc: 'Licensed, insured, and bonded. We operate with transparency and honesty in all dealings.' },
              { title: 'Local Community', desc: 'We&apos;re proud to serve our community and give back through charitable initiatives.' },
            ].map((value, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border hover-lift">
                <h3 className="text-xl font-bold mb-2 text-accent">{value.title}</h3>
                <p className="text-foreground/80">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">Our Team</h2>
          <p className="text-lg text-foreground/70 mb-12 text-balance">
            Experienced professionals dedicated to excellence
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Michael Torres', role: 'Founder & CEO', exp: '25+ years' },
              { name: 'Jennifer Lee', role: 'Operations Manager', exp: '18 years' },
              { name: 'David Martinez', role: 'Lead Technician', exp: '20 years' },
            ].map((member, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border hover-lift">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-foreground/70">{member.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-balance">Join Our Family</h2>
          <p className="text-xl text-background/90 mb-8 text-balance">
            Experience the Apex Roofing difference today
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
