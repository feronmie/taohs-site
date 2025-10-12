'use client'
import { motion } from 'framer-motion'

const society = [
  { name: 'Diaspora Diaries', desc: 'A seasonal high society feature', img: '/images/DD.png' },
  { name: 'Diaspora Diaries', desc: 'Iconic energy. Presence. Influence.', img: '/images/DD.png' },
  { name: 'Tastemakers to Know', desc: 'Stylists, DJs, curators and more.', img: '/images/DD.png' },
]

export default function SocietyList() {
  return (
    <section
      id="society-list"
      className="relative isolate overflow-hidden bg-[#003829] w-full text-white py-20 sm:py-28"
      >
   
      
   

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-gilt mb-12 text-center text-[#B79E62]">
          Diaspora Diaries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {society.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-white/10 p-5 shadow-lg backdrop-blur-sm hover:bg-white/15 transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-md mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-2xl font-serif text-gilt mb-2">{item.name}</h3>
              <p className="text-white/80 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
