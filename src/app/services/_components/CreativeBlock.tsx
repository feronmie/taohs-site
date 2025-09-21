// === FILE: src/app/services/_components/CreativeBlock.tsx ===
'use client'
import { motion } from 'framer-motion'
import { Lightbulb, Palette, PenTool } from 'lucide-react'

const creativeServices = [
  {
    icon: <Palette className="h-6 w-6 text-gold" />,
    title: 'Visual Identity & Branding',
    desc: 'Logos, moodboards, visual direction, style guides, and more.',
  },
  {
    icon: <PenTool className="h-6 w-6 text-gold" />,
    title: 'Creative Direction',
    desc: 'Scene styling, campaign shoots, art direction for events or brands.',
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-gold" />,
    title: 'Content Production',
    desc: 'Short films, reels, editorial photoshoots, and branded storytelling.',
  },
]

export default function CreativeBlock() {
  return (
    <section className="bg-black text-white px-6 py-20" id="creative">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-12 text-center">
          Creative Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {creativeServices.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 hover:shadow-gold/20 transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
