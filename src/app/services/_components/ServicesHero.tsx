// FILE: src/app/services/_components/ServicesHero.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const images = [
  '/images/H1.jpg',
  '/images/H2.jpg',
  '/images/H3.jpg',
]

export default function ServicesHero() {
  const [index, setIndex] = useState(0)

  // Auto-rotate every 6s
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hero background ${index + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />

      {/* Hero content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl text-[#B79E62] mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg text-white/80"
        >
          Editorial-grade films, branded productions, and cultural projects —
          crafted with precision and style.
        </motion.p>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? 'bg-[#B79E62]' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
