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
    className="relative isolate overflow-hidden w-full text-white py-20 sm:py-28"
  >
    {/* Moving background */}
    <motion.div
      aria-hidden
      className="absolute inset-0 -z-20"
      initial={{ scale: 1.05, x: 0 }}
      animate={{ scale: 1.15, x: 120 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
      style={{
        backgroundImage: "url('/images/GP2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        willChange: 'transform',
      }}
    />
  
    {/* Dark brand tint above bg, still behind content */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
      <div className="mx-auto max-w-7xl px-6">
      <p className="text-2xl sm:text-3xl uppercase tracking-[0.25em] text-[#B79E62]">Creative Projects & Productions</p>
        <h3 className="mt-2 font-serif text-xl sm:text-2xl mb-10">Original Formats. Seamless Delivery.</h3>
        <SplitEditorialCarousel items={creative} flipped={false} />
      </div>
    </section>
  )
}
