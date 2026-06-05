'use client'

import Link from 'next/link'

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <Link href="/" className="font-bold text-xl text-foreground hover-scale">
            <span className="text-accent">Apex</span> Roofing
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
