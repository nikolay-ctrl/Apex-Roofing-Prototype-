'use client'

import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-block text-foreground/75 hover:text-accent transition-colors duration-300"
    >
      {label}
      <span
        className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full"
        aria-hidden
      />
    </Link>
  )
}

function Roofline() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-16 sm:h-20 text-foreground/10 pointer-events-none footer-ridge-glow"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="footer-ridge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 140, 66, 0)" />
          <stop offset="50%" stopColor="rgba(255, 140, 66, 0.35)" />
          <stop offset="100%" stopColor="rgba(255, 140, 66, 0)" />
        </linearGradient>
      </defs>
      <path
        d="M0 56 L120 28 L240 52 L360 22 L480 48 L600 18 L720 44 L840 26 L960 50 L1080 24 L1200 46 L1200 80 L0 80 Z"
        fill="currentColor"
      />
      <path
        d="M0 56 L120 28 L240 52 L360 22 L480 48 L600 18 L720 44 L840 26 L960 50 L1080 24 L1200 46"
        fill="none"
        stroke="url(#footer-ridge-gradient)"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-foreground border-t border-border">
      {/* Layered premium background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-card via-background to-[oklch(0.11_0.01_260)]"
        aria-hidden
      />
      <div className="footer-shingles absolute inset-0 opacity-80" aria-hidden />
      <div className="absolute inset-0 opacity-[0.18]" aria-hidden>
        <div className="footer-glow-orb absolute -top-20 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="footer-glow-orb-delayed absolute bottom-0 left-1/5 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      <Roofline />
      <div
        className="footer-shine-line absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_0.7fr_1fr] gap-10 lg:gap-14 mb-12 items-start">
          <AnimatedSection direction="up" delay={0}>
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent mb-4">
                Local roofing specialists
              </p>
              <h3 className="font-bold text-4xl sm:text-5xl mb-5 tracking-tight text-balance">
                <span className="text-accent drop-shadow-[0_0_18px_rgba(255,140,66,0.45)]">Apex</span>{' '}
                Roofing
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Premium roof inspections, repairs, and replacements with clear estimates, dependable crews, and workmanship built to handle every season.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {['Licensed & insured', 'Warranty-backed', 'Free estimates'].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent shadow-[0_0_18px_rgba(255,140,66,0.12)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={120}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground/95">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={240}>
            <div className="rounded-2xl border border-accent/35 bg-background/55 p-6 shadow-[0_0_36px_rgba(255,140,66,0.16)] backdrop-blur-sm">
              <h4 className="font-semibold text-foreground/95 mb-2">Ready to talk roofing?</h4>
              <p className="text-sm text-foreground/60 mb-6">
                Reach out for a clear inspection, repair, or replacement estimate.
              </p>
              <ul className="space-y-4 text-sm text-foreground/75 mb-6">
                <li className="flex items-start gap-3 transition-colors hover:text-accent">
                  <Phone size={16} className="mt-0.5 text-accent/90 shrink-0" />
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </li>
                <li className="flex items-start gap-3 transition-colors hover:text-accent">
                  <Mail size={16} className="mt-0.5 text-accent/90 shrink-0" />
                  <a href="mailto:info@apexroofing.com">info@apexroofing.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-accent/90 shrink-0" />
                  <span>Serving homeowners within a 30-mile local radius</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 text-accent/90 shrink-0" />
                  <span>Mon-Sat, 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
              <Button asChild className="btn-glow-accent w-full font-semibold">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="fade" delay={360} duration={500}>
          <div className="border-t border-border/70 pt-8">
            <p className="text-foreground/50 text-sm">
              © 2025 Apex Roofing. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
