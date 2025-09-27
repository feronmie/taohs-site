'use client'

import { motion } from 'framer-motion'

export default function LatestScene() {
  const scenes = [
  
    { src: '/videos/sample3.mp4', label: 'Scene Drop #3' },
    { src: '/videos/ITG.mp4', label: 'Scene Drop #4' },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {scenes.map((scene, i) => (
        <motion.article
          key={i}
          className="overflow-hidden rounded-xl bg-black shadow-lg relative grayscale opacity-70 hover:opacity-90 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          viewport={{ once: true }}
        >
          {/* Video */}
          <div className="relative h-80 w-full">
            <video
              src={scene.src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
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
            <h3 className="font-serif text-lg text-white/70">{scene.label}</h3>
            <p className="text-sm text-white/50">
              Coded fashion, hidden venues, the vibe decoded.
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
