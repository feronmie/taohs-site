'use client'
import { motion } from 'framer-motion'
import SplitEditorialCarousel from './EditorialCarousel'

export default function CreativeProjectsBlock() {
  const creative = [
    { title: 'Consulting & Creative Direction', desc: 'Building creative teams, managing productions, and ensuring seamless delivery.', img: '/images/C1.jpg' },
    { title: 'Show & Docu-Series Development', desc: 'Producing original projects like Scene & Society and other cultural storytelling formats.', img: '/images/C2.jpg' },
    { title: 'Content Collaborations & Partnerships', desc: 'Co-creating storytelling projects with clients and brands.', img: '/images/C3.jpg' },
  ]

  return (
    <section 
    id="brand-media"
    className="relative isolate overflow-hidden bg-[url('/images/GP2.png')] w-full text-white py-20 sm:py-28"
  >
  
  
    {/* Dark brand tint above bg, still behind content */}
  
      <div className="mx-auto max-w-7xl px-6">
      <p className="text-2xl sm:text-3xl uppercase tracking-[0.25em] text-[#B79E62]">Creative Projects & Productions</p>
        <h3 className="mt-2 font-serif text-xl sm:text-2xl mb-10">Original Formats. Seamless Delivery.</h3>
        <SplitEditorialCarousel items={creative} flipped={false} />
      </div>
    </section>
  )
}
