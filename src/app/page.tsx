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
import PortfolioHomepageSection from "./_components/PortfolioHomepageSection";


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
  {/* Responsive YouTube container */}
  <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/StaNi0TPxXY?si=TaXyaaPbGiX4ySBz"
      title="Scene & Society Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
  </div>

   
  </div>
</section>



    

<PortfolioHomepageSection /> 


    

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