// ==============================================
// FILE: src/app/who-we-are/page.tsx (SERVER COMPONENT)
// Brand identity page with hero + editorial sections
// ==============================================
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import HeroRotator from '../_components/HeroRotator'
import ArchetypeGrid from './_components/ArchetypeGrid'
import VoiceVibe from './_components/VoiceVibe'


export const metadata: Metadata = {
  title: 'Who We Are — TAOHS',
  description:
    'TAOHS is a digital society page for the now generation — presence, power, Pan-African pace. Our voice is editorial; our lens is the scene.',
  openGraph: {
    title: 'Who We Are — TAOHS',
    description: 'A clear, elevated identity. Scene-first, people-forward.',
    type: 'website',
  },
}

export default function WhoWeArePage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Local nav back to home */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="TAOHS home" className="shrink-0">
            <Image src="/TAOHS-Transparent-Logo.png" alt="" width={100} height={100} priority sizes="100px" />
          </Link>
          <nav aria-label="Primary" className="text-sm font-medium text-white/80">
            <ul className="flex gap-6">
              <li><Link href="/" className="hover:text-gilt">Home</Link></li>
              <li><Link href="/who-we-are" className="text-gilt">Who We Are</Link></li>
              <li><Link href="/media" className="hover:text-gilt">Media</Link></li>
              <li><Link href="/experiences" className="hover:text-gilt">Experiences</Link></li>
              <li><Link href="/subscribe" className="hover:text-gilt">Join</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero (decorative video background; text on top) */}
      <section className="relative h-[80svh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          poster="/videos/sample2-poster.jpg"
        >
          <source src="/videos/sample2.mp4" type="video/mp4" />
          <source src="/videos/sample2.webm" type="video/webm" />
        </video>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/10" />
        <div className="relative z-20 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <h1 className="sr-only">Who We Are — TAOHS</h1>
          <HeroRotator
            headlines={[
              'TAOHS is the vibe. The scene. The record.',
              'A society page for the now generation.',
              'Presence. Power. Pan-African pace.',
              'We document what drives culture — and who drives it.',
            ]}
          />
        </div>
      </section>

      {/* Our Essence */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-6 font-serif text-4xl text-gilt">Our Essence</h2>
        <p className="text-xl italic leading-loose text-white/80">
          “A digital society page for the now generation.”
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          TAOHS captures the pulse of culture’s front row — where scene, style, and society converge. Our lens is bold. Our presence is editorial.
        </p>
      </section>

      {/* Voice & Vibe */}
      <section className="mx-auto max-w-7xl px-6 py-20">
  <VoiceVibe />
</section>


      {/* Mission & Vision */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-6 font-serif text-4xl text-gilt">Mission &amp; Vision</h2>
        <p className="text-xl leading-loose text-white/80">
          Our mission is to elevate and archive Africa&apos;s cultural class, centering authentic narratives, stylish disruption, and regional fluency. We see a future where African culture drives the global cool — and TAOHS is both chronicle and catalyst.
        </p>
      </section>

      {/* Founder Manifesto */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-6 font-serif text-4xl text-gilt">From the Founder</h2>
        <p className="text-xl italic leading-loose text-white/80">
          "TAOHS began as a shared Google Doc among friends who wanted to name the vibe. We saw the rise — the coded captions, the scene drops, the girlies whose presence was the story. TAOHS is how we archive the culture we shape in real time."
        </p>
        <p className="mt-4 text-white/60">— The Founder</p>
      </section>

      {/* Archetypes */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center font-serif text-4xl text-gilt">Brand Archetypes</h2>
        <ArchetypeGrid />
      </section>
    </main>
  )
}