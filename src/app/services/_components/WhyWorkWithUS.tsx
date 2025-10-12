// FILE: src/app/services/_components/WhyWorkWithUsBlock.tsx
'use client'

import { motion } from 'framer-motion'

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function WhyWorkWithUsBlock() {
  const pillars = [
    { title: 'Luxury Positioning', desc: 'Editorial-quality content that elevates client image.' },
    { title: 'Timeless Assets', desc: 'Content designed to live beyond the moment — replayable and versatile.' },
    { title: 'Network & Talent', desc: 'Access to vetted creatives, cultural tastemakers, and production expertise.' },
  ]

  return (
    <section 
     
    id="why-us"
    className="relative isolate overflow-hidden w-full bg-[#003829] text-white py-20 sm:py-28"
  >
   
  
    {/* Dark brand tint above bg, still behind content */}
   
      {/* Subtle glow effects */}
      <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[#B79E62]/10 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[#B79E62]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#B79E62]">Why Work With Us</p>
          <h3 className="mt-2 font-serif text-4xl">Your brand. Our scene.</h3>
          <p className="mt-3 text-white/80">
            Whether you want to go big with a featured episode or subtly seed your brand into culture,
            we co-create moments the culture will talk about — and replay.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={sectionFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h4 className="font-serif text-xl">{p.title}</h4>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
