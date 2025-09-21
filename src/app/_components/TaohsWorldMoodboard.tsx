// src/app/_components/ItGirlDiaspora.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const posts = [
  {
    pillar: 'IT Girl',
    title: 'Visual Identity',
    img: '/images/IT-G-TN.png',
    link: 'https://instagram.com/p/example1',
  },
  {
    pillar: 'IT Girl',
    title: 'Global Style Notes',
    img: '/images/IT-G-TN.png',
    link: 'https://instagram.com/p/example2',
  },
  {
    pillar: 'IT Girl',
    title: 'Moodboard: Alt-Cool',
    img: '/images/scene.jpg',
    link: 'https://instagram.com/p/example3',
  },
  {
    pillar: 'IT Girl',
    title: 'Cultural Threads',
    img: '/images/scene.jpg',
    link: 'https://instagram.com/p/example4',
  },
]

export default function ItGirlDiaspora() {
  const [current, setCurrent] = useState(0)
  const visible = 2

  const next = () =>
    setCurrent((prev) => (prev + visible < posts.length ? prev + visible : 0))
  const prev = () =>
    setCurrent((prev) => (prev - visible >= 0 ? prev - visible : posts.length - visible))

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-gilt">
          IT Girl 
        </h2>
        <p className="text-white/60 mt-2">
          Monthly updates from our pillars of style & culture.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-6 overflow-hidden">
          {posts.slice(current, current + visible).map((post, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={post.link} target="_blank">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs uppercase tracking-wide text-gilt">
                    {post.pillar}
                  </span>
                  <h3 className="text-lg font-serif">{post.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prev}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
