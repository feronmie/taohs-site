// FILE: src/app/services/_components/ServicesIndex.tsx
'use client'

import { ArrowRight } from 'lucide-react'

export default function ServicesIndex() {
  const sections = [
    { id: 'event-media', title: 'Event Media Services', desc: 'Cinematic edits, VR, multi-camera coverage.' },
    { id: 'brand-corporate', title: 'Brand & Corporate Media', desc: 'Films, asset packs, campaign coverage.' },
    { id: 'creative-projects', title: 'Creative Projects & Productions', desc: 'Series, collaborations, and direction.' },
  ]

  return (
    <section id="services-index" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#B79E62]">Category</p>
              <h3 className="mt-2 font-serif text-2xl text-white group-hover:text-[#B79E62] transition">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-[#B79E62] group-hover:translate-x-1 transition">
                Explore <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}