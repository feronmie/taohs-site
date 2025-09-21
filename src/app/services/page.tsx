// FILE: src/app/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import ServicesHero from './_components/ServicesHero'
import ServicesIndex from './_components/ServicesIndex'
import EventMediaBlock from './_components/EventMediaBlock2'
import BrandMediaBlock from './_components/MediaBlock'
import CreativeProjectsBlock from './_components/ResearchBlock'
import WhyWorkWithUsBlock from './_components/WhyWorkWithUS'
import ContactBlock from './_components/ContactBlock'
import FooterNav from '../_components/FooterNav'

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
      {/* Sticky Navbar (same as homepage) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="TAOHS home" className="shrink-0">
            <Image
              src="/taohscolored.svg"
              alt="TAOHS logo"
              width={120}
              height={120}
              priority
              sizes="120px"
            />
          </Link>
          <nav aria-label="Primary" className="text-sm font-medium">
            <ul className="flex gap-6">
              <li><a href="/#scene" className="text-[#B79E62] hover:text-[#BEB5A9]">Scene & Society</a></li>
              <li><a href="/#taohs-world" className="text-[#B79E62] hover:text-[#BEB5A9]">IT Girl</a></li>
              <li><a href="/#society-list" className="text-[#B79E62] hover:text-[#BEB5A9]">Diaspora Diaries</a></li>
              <li><a href="/services" className="text-[#B79E62] hover:text-[#BEB5A9]">Services</a></li>
              <li><a href="/#join" className="text-[#B79E62] hover:text-[#BEB5A9]">Join</a></li>
            </ul>
          </nav>
        </div>
      </header>

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
