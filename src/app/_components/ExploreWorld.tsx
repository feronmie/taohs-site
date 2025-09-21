'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const verticals = [
  { title: 'Scene & Society', img: '/images/SS.png', href: '/media?tab=scene' },
  { title: 'It Girl', img: '/images/IT-G-TN.png', href: '/society/it-girls' },
  { title: 'Diaspora Diaries', img: '/images/DD.png', href: '/media/city' },
  { title: 'City Circulations', img: '/images/vertical4.jpg', href: '/world' },
]

export default function ExploreWorld() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      {verticals.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          className="group relative block overflow-hidden rounded-xl"
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative h-48 w-full">
            <Image src={item.img} alt={item.title} fill className="object-cover object-center transition-opacity duration-300 group-hover:opacity-90" />
          </div>
          <div className="absolute inset-0 flex items-end bg-black/50 p-4">
            <h3 className="font-serif text-lg text-white">{item.title}</h3>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
