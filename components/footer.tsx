'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-foreground text-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              <span className="text-accent">Apex</span> Roofing
            </h3>
            <p className="text-background/80 text-sm">Professional roofing solutions for your home and business.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-background/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-background/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-background/80 hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-background/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-background/80 text-sm mb-2">📞 (555) 123-4567</p>
            <p className="text-background/80 text-sm mb-4">📧 info@apexroofing.com</p>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-background/30 text-background hover:bg-background/10 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(255,140,66,0.4)] transition-all duration-300 cursor-pointer"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            © 2025 Apex Roofing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
