import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Apex Roofing',
  description: 'Explore our roofing services - inspections, repairs, and full replacements for residential and commercial properties.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
