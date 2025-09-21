// src/app/_components/MediaFeed.tsx 
'use client'
import { motion } from 'framer-motion'

const media = [
  { type: 'Watch', desc: 'Full episodes and Reels/Shorts', img: '/images/media1.jpg' },
  { type: 'Read', desc: 'Commentary, essays, think pieces', img: '/images/media2.jpg' },
  { type: 'Social Pulls', desc: 'Embedded memes, polls, threads', img: '/images/media3.jpg' },
  { type: 'City Diaries', desc: 'Diaspora stories and essays', img: '/images/media4.jpg' },
]

export default function MediaFeed() {
  return (
    <section id="media" className="px-6 py-24 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-serif text-gilt mb-12 text-center">The Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {media.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden bg-white/5 p-4 backdrop-blur shadow"
            whileHover={{ scale: 1.02 }}
          >
            <img src={item.img} alt={item.type} className="h-40 w-full object-cover rounded-md mb-4" />
            <h3 className="text-lg font-serif text-gilt mb-2">{item.type}</h3>
            <p className="text-white/70 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}