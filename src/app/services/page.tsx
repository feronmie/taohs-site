// FILE: src/app/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from './_components/Navbar'
import ServicesHero from './_components/ServicesHero'
import ServicesIndex from './_components/ServicesIndex'
import EventMediaBlock from './_components/EventMediaBlock2'
import BrandMediaBlock from './_components/MediaBlock'
import CreativeProjectsBlock from './_components/ResearchBlock'
import WhyWorkWithUsBlock from './_components/WhyWorkWithUS'
import ContactBlock from './_components/ContactBlock'
import FooterNav from './_components/FooterNav'

export const metadata: Metadata = {
  title: 'TAOHS Services — Cinematic Media & Storytelling',
  description:
    'Explore TAOHS event media, brand productions, and creative projects — editorial-grade services that define culture.',
  openGraph: {
    title: 'TAOHS Services',
    description:
      'Explore TAOHS event media, brand productions, and creative projects — editorial-grade services that define culture.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Sticky Navbar */}
    <Navbar />
      {/* Services Hero */}
      <ServicesHero />

   

      {/* Service Blocks */}
      <EventMediaBlock />
      <BrandMediaBlock />
      <CreativeProjectsBlock />

      {/* Why Work With Us */}
      <WhyWorkWithUsBlock />

      {/* Contact */}
      <ContactBlock />

      {/* Footer (same as homepage) */}
      <FooterNav />
    </main>
  )
}