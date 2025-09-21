//src/app/_components/SocietyList.tsx
'use client'
import { motion } from 'framer-motion'

const society = [
  { name: 'Diaspora Diaries', desc: 'A seasonal high society feature', img: '/images/DD.png' },
  { name: 'Diaspora Diaries', desc: 'Iconic energy. Presence. Influence.', img: '/images/DD.png' },
  { name: 'Tastemakers to Know', desc: 'Stylists, DJs, curators and more.', img: '/images/DD.png' },
]

export default function SocietyList() {
  return (
    <section id="society-list" className="px-6 py-24 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-serif text-gilt mb-12 text-center">Diaspora Diaries</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {society.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl bg-white/5 p-4 shadow-md backdrop-blur"
            whileHover={{ scale: 1.03 }}
          >
            <img src={item.img} alt={item.name} className="rounded-md mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-serif text-gilt mb-2">{item.name}</h3>
            <p className="text-white/70 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}