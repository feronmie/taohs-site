'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function EventMediaBlock() {
  const eventMedia = [
    {
      title: 'Short-form Content Package',
      desc: 'Two cinematic edits optimized for Instagram, TikTok, and Reels. Fast, stylish, and shareable.',
      img: '/images/E1.jpg',
    },
    {
      title: '360° Virtual Reality Experience',
      desc: 'Immersive, headset-ready VR recap of your ceremony or reception.',
      img: '/images/E2.jpg',
    },
    {
      title: 'Luxury Mini-Doc (Editorial Recap Film)',
      desc: 'A 3–5 minute cinematic story of your event, crafted in an editorial style.',
      img: '/images/E3.jpg',
    },
    {
      title: 'Full Production Service',
      desc: 'Highlight film + full documentary edit with multi-camera production.',
      img: '/images/E3.jpg',
    },
  ]

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % eventMedia.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section  id="event-media"
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
        backgroundImage: "url('/images/GP9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        willChange: 'transform',
      }}
    />
  
    {/* Dark brand tint above bg, still behind content */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45),rgba(0,0,0,0.5))]" />
      <div className="mx-auto max-w-6xl px-6 text-right">
        <p className="text-2xl sm:text-3xl uppercase tracking-[0.25em] text-[#B79E62] justify-center">
          Event Media Services
        </p>
        <h3 className="mt-2 font-serif text-xl sm:text-2xl mb-10">
          Cinematic Memories. Digital Assets.
        </h3>

        {/* Custom layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:min-h-[520px]">
          {/* === TEXT === */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-6 flex justify-center md:justify-start"
            >
              <div className="flex flex-col justify-center self-center w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition">
                <h4 className="font-serif text-3xl md:text-4xl text-[#B79E62] mb-3 leading-snug tracking-tight">
                  {eventMedia[index].title}
                </h4>
                <div className="h-px w-16 bg-[#B79E62]/70 mb-4" />
                <p className="text-base md:text-lg text-white/85 leading-relaxed font-light tracking-wide">
                  {eventMedia[index].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* === IMAGE === */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${index}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-6 flex justify-center"
            >
              <div className="relative aspect-[2/3] w-[340px] sm:w-[380px] md:w-[420px] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={eventMedia[index].img}
                  alt={eventMedia[index].title}
                  className="absolute inset-0 h-full w-full object-cover"
                />


                
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
              </div>
              
            </motion.div>
          </AnimatePresence>

          {/* === DOTS === */}
          <div className="col-span-1 md:col-span-12 mt-8 flex justify-center gap-2">
            {eventMedia.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? 'bg-[#B79E62]' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
