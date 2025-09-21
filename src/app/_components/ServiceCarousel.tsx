'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type ServiceItem = {
  title: string
  desc: string
  img: string
}

export default function ServiceCarousel({ items }: { items: ServiceItem[] }) {
  const [index, setIndex] = useState(0)

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center gap-12 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
        >
          {/* IMAGE LEFT with floating effect */}
          <motion.div
            className="relative w-full md:w-1/2 h-80 md:h-[28rem]"
            animate={{ y: [0, -10, 0, 10, 0] }} // floating effect
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src={items[index].img}
              alt={items[index].title}
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* TEXT RIGHT */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <h3 className="text-3xl font-serif text-gilt mb-4">
              {items[index].title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {items[index].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls (bottom center) */}
      <div className="absolute bottom-4 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? 'bg-gilt' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
