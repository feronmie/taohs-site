// src/app/_components/Experiences.tsx 
'use client'
import { motion } from 'framer-motion'

const drops = [
  { title: 'Past Events', desc: 'Recaps, loops, and scene snapshots', img: '/images/vertical2.jpg' },
  { title: 'Upcoming Drops', desc: 'Waitlist or RSVP for next era.', img: '/images/scene.jpg' },
  { title: 'The High Table', desc: 'Guestlist status and access.', img: '/images/media3.jpg' },
  { title: 'Partnerships', desc: 'Brand collabs and co-creations.', img: '/images/event4.jpg' },
]

export default function Experiences() {
  return (
    <section id="experiences" className="px-6 py-24 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-serif text-gilt mb-12 text-center">TAOHS IRL</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {drops.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden bg-white/5 p-4 backdrop-blur shadow"
            whileHover={{ scale: 1.03 }}
          >
            <img src={item.img} alt={item.title} className="h-40 w-full object-cover rounded-md mb-4" />
            <h3 className="text-lg font-serif text-gilt mb-2">{item.title}</h3>
            <p className="text-white/70 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}