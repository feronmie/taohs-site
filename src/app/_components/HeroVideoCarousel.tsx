// FILE: src/app/_components/HeroVideoCarousel.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroRotator from './HeroRotator'

const videos = [
  { src: 'videos/sample3.mp4', poster: '/videos/sample1-poster.jpg' },
  { src: 'videos/sample4.mp4', poster: '/videos/sample2-poster.jpg' },
  { src: 'videos/sample7.mp4', poster: '/videos/sample3-poster.jpg' },
]

export default function HeroVideoCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % videos.length)
    }, 8000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-[90svh] w-full overflow-hidden">
      {/* Video Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={index}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            poster={videos[index].poster}
            className="absolute inset-0 h-full w-full object-cover z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <source src={videos[index].src} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <HeroRotator
          headlines={[
            'Culture is currency. We report its rise.',
            'Scene-makers. Mood-movers. Society decoded.',
            'TAOHS is presence, power, and pace.',
            "Your favorite tastemaker’s favorite page.",
          ]}
        />
        <a
          href="#scene"
          className="mt-10 inline-block rounded-lg border border-[#B79E62] px-6 py-3 text-white backdrop-blur transition hover:bg-pink-500/20"
        >
          Explore TAOHS
        </a>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {videos.map((_, i) => (
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