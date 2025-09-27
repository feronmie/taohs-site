// FILE: src/app/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'




import Navbar from './_components/Navbar'
import HeroVideoCarousel from './_components/HeroVideoCarousel'
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
    <Navbar />

      {/* Hero */}
      <HeroVideoCarousel />

    

      {/* WHO WE ARE */}
      <WhoWeAreSection />

      {/* Moodboard */}
      <TaohsWorldMoodboard />

      {/* Society List */}
      <SocietyList />

        {/* Scene and Society */}
<section id='scene-society'
  className="mx-auto max-w-7xl px-6 py-20 text-white"
  aria-labelledby="scene-banner"
>
<h2  className="text-4xl font-serif text-gilt mb-12 text-center">
    Scene and Society
  </h2>

  <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/images/SS.png"
      alt="Scene and Society Latest Project"
      className="w-full h-[600px] object-cover"
    />

    {/* Overlay Text */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6">
      <h3 className="text-2xl font-serif text-[#B79E62]">Coming Soon</h3>
      <p className="text-sm text-white/80">
        Our latest Scene & Society drop — culture decoded through style, sound, and stories.
      </p>
    </div>
  </div>
</section>


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

    

      {/* Join */}
      <section id="join" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <JoinTheList />
      </section>

      {/* Footer */}
      <FooterNav />
    </main>
  )
}
