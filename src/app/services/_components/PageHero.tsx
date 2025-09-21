// === FILE: src/app/services/_components/PageHero.tsx ===
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type PageHeroProps = {
  title: string
  subtitle: string
  image: string
}
export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }} // zoom in and out
        transition={{
          duration: 6, // loop length
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/images/services-hero2.png"
          alt="TAOHS Services Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[#003829]/80" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-serif text-gold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Services & Collaborations
        </motion.h1>
        <motion.p
          className="text-white/80 max-w-xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          TAOHS offers culture-led, aesthetic-first services for brands, creators, and communities.
        </motion.p>
      </div>
    </section>
  )
}
