// src/app/_components/WhoWeAreSection.tsx
'use client'
import { motion } from 'framer-motion'

export default function WhoWeAreSection() {
  return (
    <section className="relative w-full isolate overflow-hidden bg-[#003829] text-white py-20 sm:py-28">
    <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-start">
      
      {/* LEFT COLUMN */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl sm:text-6xl font-serif text-[#B79E62] mb-3 leading-tight">
          Who We Are
        </h2>
        <div className="h-[3px] w-16 bg-[#B79E62] mb-6"></div>
        <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-md">
          TAOHS is the society page for the now — archiving presence, pace, and
          the cultural pulse.
        </p>
      </motion.div>

      {/* RIGHT COLUMN */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-5xl sm:text-6xl font-serif text-[#B79E62] mb-3 leading-tight">
          Our Essence
        </h3>
        <div className="h-[3px] w-16 bg-[#B79E62] mb-6"></div>
        <p className="italic text-white/80 text-base sm:text-lg mb-4">
          “Culture’s front row, captured.”
        </p>
        <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-md">
          Scene. Style. Society. TAOHS frames the bold moments where they
          converge — an editorial lens for a digital age.
        </p>
      </motion.div>
    </div>
  </section>
  

  )
}