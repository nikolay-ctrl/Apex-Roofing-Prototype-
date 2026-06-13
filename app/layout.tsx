import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'),
)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Apex Roofing | Local Roofing Services',
  description: 'Professional roofing services for residential and commercial properties. Same-day service available in your area.',
  openGraph: {
    title: 'Apex Roofing | Local Roofing Services',
    description: 'Professional roofing services for residential and commercial properties. Same-day service available in your area.',
    type: 'website',
    images: [
      {
        url: '/hero-roofing.png',
        width: 1024,
        height: 1024,
        alt: 'Apex Roofing team working on a residential roof',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Roofing | Local Roofing Services',
    description: 'Professional roofing services for residential and commercial properties. Same-day service available in your area.',
    images: ['/hero-roofing.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}
