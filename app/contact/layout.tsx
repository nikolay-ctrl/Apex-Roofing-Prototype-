import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Apex Roofing',
  description: 'Get in touch with Apex Roofing for a free consultation and estimate. Available 24/7 for emergency repairs.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
