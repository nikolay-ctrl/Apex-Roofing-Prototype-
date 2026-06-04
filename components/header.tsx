'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl text-foreground hover-scale">
          <span className="text-accent">Apex</span> Roofing
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="btn-glow-accent font-semibold"
          >
            <Link href="/contact">Get Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile Burger Menu */}
        <button
          className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="relative block h-6 w-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                menuOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-panel md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="relative overflow-hidden px-4 py-5 space-y-3">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-accent/15 blur-3xl" aria-hidden />
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-menu-item relative block rounded-xl border border-transparent px-4 py-3 text-foreground/80 transition-all hover:border-accent/25 hover:bg-accent/10 hover:text-accent"
                style={{ animationDelay: `${idx * 55}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-menu-item pt-2" style={{ animationDelay: `${navLinks.length * 55}ms` }}>
              <Button
                asChild
                className="w-full btn-glow-accent font-semibold"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
