'use client'

import Link from 'next/link'
import { ArrowUp, Mail, Phone } from 'lucide-react'
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
      className="group relative inline-block text-background/75 hover:text-accent transition-colors duration-300"
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
      className="absolute top-0 left-0 w-full h-16 sm:h-20 text-background/10 pointer-events-none footer-ridge-glow"
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
  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden text-background border-t border-background/10">
      {/* Layered premium background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-foreground to-[oklch(0.11_0.01_260)]"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <AnimatedSection direction="up" delay={0}>
            <div>
              <h3 className="font-bold text-lg mb-3 tracking-tight">
                <span className="text-accent">Apex</span> Roofing
              </h3>
              <p className="text-background/70 text-sm leading-relaxed max-w-xs">
                Professional roofing solutions for your home and business — built to last through every season.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-widest text-background/50">
                  Licensed &amp; insured
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={120}>
            <div>
              <h4 className="font-semibold mb-4 text-background/95">Quick Links</h4>
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
            <div>
              <h4 className="font-semibold mb-4 text-background/95">Contact</h4>
              <ul className="space-y-3 text-sm text-background/75 mb-5">
                <li className="flex items-center gap-2.5 transition-colors hover:text-accent">
                  <Phone size={15} className="text-accent/80 shrink-0" />
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-2.5 transition-colors hover:text-accent">
                  <Mail size={15} className="text-accent/80 shrink-0" />
                  <a href="mailto:info@apexroofing.com">info@apexroofing.com</a>
                </li>
              </ul>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-background/40 bg-background/95 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              >
                <ArrowUp />
                Back to Top
              </Button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="fade" delay={360} duration={500}>
          <div className="border-t border-background/15 pt-8">
            <p className="text-center text-background/50 text-sm">
              © 2025 Apex Roofing. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
