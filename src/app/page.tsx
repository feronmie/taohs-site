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
        <section
  id="scene-society"
  className="relative w-full bg-[url('/images/GP2.png')] bg-cover bg-center bg-no-repeat text-white py-24"
  aria-labelledby="scene-banner"
>
  
  

  {/* Content Container */}
  <div className="relative mx-auto max-w-7xl px-6">
    <h2
      id="scene-banner"
      className="text-4xl md:text-5xl font-serif text-gilt mb-12 text-center text-[#B79E62]"
    >
      Scene & Society
    </h2>

    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/SS.png"
        alt="Scene and Society Latest Project"
        className="w-full h-[600px] object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8">
        <h3 className="text-2xl md:text-3xl font-serif text-[#B79E62] mb-2">
          Coming Soon
        </h3>
        <p className="text-base md:text-lg text-white/85 max-w-2xl">
          Our latest Scene & Society drop — culture decoded through style, sound, and stories.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Latest Scene */}
      <section
  id="scene"
  className="relative  w-full isolate overflow-hidden bg-[#003829] text-white py-20 sm:py-28 "

  aria-labelledby="latest-scene"
>

  
  <div className="relative z-10 mx-auto max-w-7xl px-6">
    <h2 id="latest-scene" className="mb-10 font-serif text-4xl md:text-5xl text-[#B79E62]">
      Latest From The Scene
    </h2>

    {/* Keep your component here */}
    <div className="relative z-20">
      <LatestScene />
    </div>
  </div>
</section>


    

      {/* Join */}
      <section id="join" className="relative isolate w-full
             bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.25)),url('/images/GP3.png')]
             bg-cover bg-center bg-no-repeat text-white py-24">
        <JoinTheList />
      </section>

      {/* Footer */}
      <FooterNav />
    </main>
  )
}