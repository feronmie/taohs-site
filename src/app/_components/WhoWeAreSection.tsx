// src/app/_components/WhoWeAreSection.tsx
'use client'
import { motion } from 'framer-motion'

export default function WhoWeAreSection() {
  return (
    <section
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
      backgroundImage: "url('/images/GP8.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      willChange: 'transform',
    }}
  />

  {/* Dark brand tint above bg, still behind content */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
    
    <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
    {/* Left Column */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-6xl font-serif text-gilt mb-5 leading-tight">
        Who We Are
      </h2>
      <div className="h-1 w-20 bg-gilt mb-8"></div>
      <p className="text-xl text-white/85 leading-relaxed max-w-md">
        TAOHS is the society page for the now — archiving presence, pace, and
        the cultural pulse.
      </p>
    </motion.div>

    {/* Right Column */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-6xl font-serif text-gilt mb-5 leading-tight">
        Our Essence
      </h3>
      <p className="italic text-white/80 text-lg mb-6">
        “Culture’s front row, captured.”
      </p>
      <p className="text-xl text-white/85 leading-relaxed max-w-md">
        Scene. Style. Society. TAOHS frames the bold moments where they
        converge — an editorial lens for a digital age.
      </p>
    </motion.div>
  </div>
  </section>
  

  )
}
