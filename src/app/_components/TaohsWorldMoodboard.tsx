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
    link: 'https://www.instagram.com/theartofhighsociety/',
  },
  {
    pillar: 'IT Girl',
    title: 'Global Style Notes',
    img: '/images/IT-G-TN.png',
    link: 'https://www.instagram.com/theartofhighsociety/',
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
    <section
  id="taohs-ITG"
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
        backgroundImage: "url('/images/GP2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        willChange: 'transform',
      }}
    />
  
    {/* Dark brand tint above bg, still behind content */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />

  <div className="relative max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-serif text-gilt">IT Girl</h2>
      <p className="text-white/70 mt-3 text-lg">
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
    </div>
  </div>
</section>

  )
}
