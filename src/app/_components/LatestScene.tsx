'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LatestScene() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((n) => (
        <motion.article
          key={n}
          className="overflow-hidden rounded-xl bg-sable shadow-lg relative grayscale opacity-70 hover:opacity-80 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: n * 0.15 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="relative h-60 w-full">
            <Image
              src={`/images/scene${n}.jpg`}
              alt={`Scene ${n}`}
              fill
              className="object-cover object-center"
            />
            {/* Overlay badge */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-white font-serif text-lg tracking-wide uppercase">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Caption */}
          <div className="p-4 text-center">
            <h3 className="font-serif text-lg text-white/70">Scene Drop #{n}</h3>
            <p className="text-sm text-white/50">Coded fashion, hidden venues, the vibe decoded.</p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
