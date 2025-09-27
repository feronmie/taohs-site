'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Item = { title: string; desc: string; img: string }

export default function SplitEditorialCarousel({
  items,
  interval = 6000,
  flipped = false,           // false = image left / text right; true = text left / image right
  tone = 'dark',             // 'dark' or 'light' (affects dot colors)
}: {
  items: Item[]
  interval?: number
  flipped?: boolean
  tone?: 'dark' | 'light'
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), interval)
    return () => clearInterval(t)
  }, [items.length, interval])

  // Explicit grid placement (no "order" shenanigans)
  const imgColStart = flipped ? 'md:col-start-7 md:justify-end' : 'md:col-start-1 md:justify-start'
  const textColStart = flipped ? 'md:col-start-1' : 'md:col-start-7'

  const dotOn  = tone === 'light' ? 'bg-zinc-900' : 'bg-[#B79E62]'
  const dotOff = tone === 'light' ? 'bg-zinc-400' : 'bg-white/40'

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
      {/* IMAGE SIDE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`img-${index}`}
          initial={{ opacity: 0, x: flipped ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: flipped ? -60 : 60 }}
          transition={{ duration: 0.5 }}
          className={`col-span-1 md:col-span-6 ${imgColStart} h-full flex items-center justify-center`}
        >
          {/* Portrait frame with consistent size */}
          <div className="relative aspect-[2/3] w-[340px] sm:w-[380px] md:w-[420px] overflow-hidden rounded-2xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[index].img}
              alt={items[index].title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* optional subtle film grain / vignette overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* TEXT SIDE */}
      <AnimatePresence mode="wait">
  <motion.div
    key={`text-${index}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="col-span-1 md:col-span-6 flex flex-col justify-center items-center md:items-start"
  >
    <div className="max-w-lg">
      <h4 className="font-serif text-3xl tracking-tight text-white mb-4 border-b border-[#B79E62]/40 pb-2">
        {items[index].title}
      </h4>
      <p className="text-lg text-white/70 leading-relaxed font-light">
        {items[index].desc}
      </p>
    </div>
  </motion.div>
</AnimatePresence>


      {/* DOTS */}
      <div className="col-span-1 md:col-span-12 mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${i === index ? dotOn : dotOff}`}
          />
        ))}
      </div>
    </div>
  )
}
