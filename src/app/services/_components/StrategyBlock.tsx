'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const strategies = [
  {
    title: 'Brand Identity & Positioning',
    description: 'Crafting narratives and visuals that cut through noise and build emotional resonance with your audience.',
  },
  {
    title: 'Creative Direction',
    description: 'Guiding the vision, tone, and aesthetic for your campaigns and cultural collaborations.',
  },
  {
    title: 'Editorial & Content Strategy',
    description: 'Planning and shaping stories that drive engagement, relevance, and cultural capital.',
  },
  {
    title: 'Partnership Strategy',
    description: 'Identifying aligned brand synergies and structuring high-impact collaborations.',
  },
]

export default function StrategyBlock() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="bg-black px-6 py-24 text-white" id="strategy">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-serif text-gold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Strategy Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              className="border border-white/10 rounded-xl p-6 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <h3 className="text-xl font-semibold text-gold mb-2">{item.title}</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  expandedIndex === index
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                className="overflow-hidden text-white/80 text-sm transition-all duration-300 ease-in-out"
              >
                <p className="mt-2">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
