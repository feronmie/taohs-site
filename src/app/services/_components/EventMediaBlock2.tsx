'use client'
import { motion } from 'framer-motion'

import SplitEditorialCarousel from './EditorialCarousel'

export default function BrandMediaBlock() {
  const brandMedia = [
    { title: 'Brand Films & Recap Documentaries', desc: '2–5 minute cinematic films showcasing your heritage, story, or product.', img: '/images/B1.jpg' },
    { title: 'Digital Asset Pack', desc: 'Photo + video deliverables designed for ads, Instagram/TikTok, LinkedIn, and websites.', img: '/images/B1.jpg' },
    { title: 'Campaign Coverage', desc: 'Editorial documentation of launches, pop-ups, press previews, and fashion shows.', img: '/images/B1.jpg' },
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

  <div className="relative z-10 mx-auto max-w-7xl px-6">
      <p className="text-2xl sm:text-3xl uppercase tracking-[0.25em] text-[#B79E62]">
  Brand & Corporate Media
</p>
<h3 className="mt-2 font-serif text-xl sm:text-2xl mb-10">
  Polished Stories. Cultural Edge.
</h3>


        <SplitEditorialCarousel items={brandMedia} flipped={false}/>
      </div>
    </section>
  )
}



