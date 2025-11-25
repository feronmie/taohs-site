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
import SceneSocietySection from './_components/SceneSocietySection'

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
        <SceneSocietySection />

    

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