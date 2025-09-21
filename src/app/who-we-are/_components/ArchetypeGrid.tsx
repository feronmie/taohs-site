'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

const archetypes = [
  { title: 'The Tastemaker', img: '/icons/tastemaker.png', href: '/archetypes/tastemaker' },
  { title: 'The Ruler', img: '/icons/ruler.png', href: '/archetypes/ruler' },
  { title: 'The Archivist', img: '/icons/archivist.png', href: '/archetypes/archivist' },
  { title: 'The Scene Whisperer', img: '/icons/whisperer.png', href: '/archetypes/whisperer' },
  { title: 'The Curator', img: '/icons/curator.png', href: '/archetypes/curator' },
  { title: 'The It Girl', img: '/icons/itgirl.png', href: '/archetypes/itgirl' },
]

export default function ArchetypeGrid() {
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {archetypes.map(({ title, img, href }, i) => (
        <motion.button
          key={i}
          onClick={() => router.push(href)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md transition hover:bg-white/10"
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <Image src={img} alt="" width={48} height={48} className="rounded-full bg-white/10" sizes="48px" />
            <h3 className="text-xl font-semibold text-gilt">{title}</h3>
          </div>
          <p className="text-sm text-white/70">
            {title} is a visual code in the TAOHS language — they style, shape, remix, and document what the culture becomes next.
          </p>
        </motion.button>
      ))}
    </div>
  )
}