// src/app/_components/WhoWeAreSection.tsx
'use client'
import { motion } from 'framer-motion'

export default function WhoWeAreSection() {
  return (
    <section className="relative px-6 py-28 max-w-6xl mx-auto text-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-serif text-gilt mb-4">Who We Are</h2>
          <div className="h-1 w-16 bg-gilt mb-6"></div>
          <p className="text-lg text-white/80 leading-relaxed">
            TAOHS is the society page for the now. We archive presence, pace, and the cultural pulse.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-serif text-gilt mb-3">Our Essence</h3>
          <p className="italic text-white/70 mb-6">“Culture’s front row, captured.”</p>
          <p className="text-white/70 leading-relaxed">
            Scene. Style. Society. TAOHS frames the bold moments where they converge — an editorial lens for a digital age.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
