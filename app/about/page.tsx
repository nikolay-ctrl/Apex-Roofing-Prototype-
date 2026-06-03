import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Award, Users, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { CtaBanner } from '@/components/cta-banner'
import { StoryTimeline } from '@/components/story-timeline'

export const metadata: Metadata = {
  title: 'About Us | Apex Roofing',
  description: 'Learn about Apex Roofing - over 20 years of professional roofing experience serving residential and commercial clients.',
}

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="relative w-full overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-card to-background">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/65 via-background/45 to-background" />
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-balance">Our Story</h2>
              <p className="text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
                From a small local crew to a trusted roofing partner, Apex Roofing has grown by keeping the same promise: quality work and honest service.
              </p>
            </div>
          </AnimatedSection>

          <StoryTimeline />
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
              {
                name: 'Michael Torres',
                role: 'Founder & CEO',
                image:
                  'https://images.unsplash.com/photo-1556157382-97eda2d62296?fm=jpg&q=80&w=500&auto=format&fit=crop&crop=faces',
                bio: 'Michael started Apex Roofing after two decades in residential construction. He leads estimates, quality standards, and long-term customer relationships.',
              },
              {
                name: 'Jennifer Lee',
                role: 'Operations Manager',
                image:
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=80&w=500&auto=format&fit=crop&crop=faces',
                bio: 'Jennifer coordinates scheduling, materials, and customer updates so every project runs smoothly from inspection to final cleanup.',
              },
              {
                name: 'David Martinez',
                role: 'Lead Technician',
                image:
                  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fm=jpg&q=80&w=500&auto=format&fit=crop&crop=faces',
                bio: 'David oversees on-site crews and installation details, bringing hands-on roofing experience to repairs, replacements, and final inspections.',
              },
            ].map((member, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="overflow-hidden rounded-2xl glow-card h-full text-left">
                  <div className="relative h-64 overflow-hidden border-b border-border">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      className={`h-full w-full transition-transform duration-500 hover:scale-105 ${
                        idx === 0
                          ? 'object-cover object-top'
                          : 'object-cover object-top'
                      }`}
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold mb-4">{member.role}</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
                  </div>
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
