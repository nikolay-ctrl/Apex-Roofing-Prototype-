import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Apex Roofing | Professional Roofing Services',
  description: 'Learn about Apex Roofing - over 20 years of professional roofing experience and commitment to quality.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
