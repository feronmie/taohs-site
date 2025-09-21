// FILE: src/app/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'



import HeroRotator from './_components/HeroRotator'
import VisualCarousel from './_components/VisualCarousel'
import ExploreWorld from './_components/ExploreWorld'
import LatestScene from './_components/LatestScene'
import JoinTheList from './_components/JoinTheList'
import WhoWeAreSection from './_components/WhoWeAreSection'
import TaohsWorldMoodboard from './_components/TaohsWorldMoodboard'
import SocietyList from './_components/SocietyList'

import FooterNav from './_components/FooterNav'

export const metadata: Metadata = {
  title: 'Inside TAOHS — Culture is currency',
  description:
    'Editorial homepage with a hero vibe scan, visual loops, and latest drops from the scene.',
  openGraph: {
    title: 'Inside TAOHS',
    description: 'Scene-makers. Mood-movers. Society decoded.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Sticky Navbar */}
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
              <li>
                <a href="#scene" className="text-[#B79E62] hover:text-[#BEB5A9]">
                  Scene & Society
                </a>
              </li>
              <li>
                <a href="#taohs-world" className="text-[#B79E62] hover:text-[#BEB5A9]">
                  IT Girl
                </a>
              </li>
              <li>
                <a href="#society-list" className="text-[#B79E62] hover:text-[#BEB5A9]">
                  Diaspora Diaries
                </a>
              </li>
              <li>
                <a href="/services" className="text-[#B79E62] hover:text-[#BEB5A9]">
                  Services
                </a>
              </li>
              <li>
                <a href="#join" className="text-[#B79E62] hover:text-[#BEB5A9]">
                  Join
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[90svh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover z-0"
          poster="/videos/sample3-poster.jpg"
        >
          <source src="/videos/sample3.mp4" type="video/mp4" />
          <source src="/videos/sample3.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <HeroRotator
            headlines={[
              'Culture is currency. We report its rise.',
              'Scene-makers. Mood-movers. Society decoded.',
              'TAOHS is presence, power, and pace.',
              "Your favorite tastemaker’s favorite page.",
            ]}
          />
          <a
            href="#scene"
            className="mt-10 inline-block rounded-lg border border-[#B79E62] px-6 py-3 text-white backdrop-blur transition hover:bg-pink-500/20"
          >
            Explore TAOHS
          </a>
        </div>
      </section>

      {/* Visual Carousel */}
      <section
        className="mx-auto max-w-7xl px-6 py-20 text-white"
        aria-labelledby="visual-carousel"
      >
        <h2 id="visual-carousel" className="mb-8 font-serif text-3xl text-[#B79E62]">
          Scene and Society
        </h2>
        <VisualCarousel
          items={[
            { src: '/videos/sample.mp4', label: 'Accra After Dark' },
            { src: '/videos/sample2.mp4', label: 'Diaspora Club Vibes' },
            { src: '/videos/sample3.mp4', label: 'OJude OBA' },
            { src: '/videos/ITG.mp4', label: 'IT Girl' },
          ]}
        />
      </section>

      {/* WHO WE ARE */}
      <WhoWeAreSection />

      {/* Moodboard */}
      <TaohsWorldMoodboard />

      {/* Society List */}
      <SocietyList />

      {/* Latest Scene */}
      <section
        id="scene"
        className="mx-auto max-w-7xl px-6 py-20 text-white"
        aria-labelledby="latest-scene"
      >
        <h2 id="latest-scene" className="mb-8 font-serif text-3xl text-[#B79E62]">
          Latest From the Scene
        </h2>
        <LatestScene />
      </section>

      {/* Explore World */}
      <section
        id="world"
        className="mx-auto max-w-7xl px-6 py-20 text-white"
        aria-labelledby="explore-world"
      >
        <h2 id="explore-world" className="mb-8 font-serif text-3xl text-[#B79E62]">
          Explore TAOHS World
        </h2>
        <p className="mb-10 max-w-2xl text-slate-300">
          Our editorial pillars — where culture circulates across fashion, cities, scenes,
          and society.
        </p>
        <ExploreWorld />
      </section>

      {/* Join */}
      <section id="join" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <JoinTheList />
      </section>

      {/* Footer */}
      <FooterNav />
    </main>
  )
}
