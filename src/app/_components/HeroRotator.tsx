'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

type Props = { headlines: string[] }
export default function HeroRotator({ headlines }: Props) {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % headlines.length), 3500)
    return () => clearInterval(id)
  }, [headlines.length, prefersReducedMotion])

  return (
    <div className="relative mx-auto max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          className="font-serif text-4xl md:text-6xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{ duration: 0.6 }}
        >
          {headlines[index]}
        </motion.h1>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_50%_at_50%_50%,#000,transparent)]">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ultra/20 blur-3xl" />
      </div>
    </div>
  )
}