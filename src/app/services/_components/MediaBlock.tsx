import SplitEditorialCarousel from './EditorialCarousel'

export default function EventMediaBlock() {
  const eventMedia = [
    { title: 'Short-form Content Package', desc: 'Two cinematic edits optimized for Instagram, TikTok, and Reels. Fast, stylish, and shareable.', img: '/images/E1.jpg' },
    { title: '360° Virtual Reality Experience ', desc: '— Immersive, headset-ready VR recap of your ceremony or reception.', img: '/images/E2.jpg' },
    { title: 'Luxury Mini-Doc (Editorial Recap Film)', desc: 'A 3–5 minute cinematic story of your event, crafted in an editorial style.', img: '/images/E3.jpg' },
    { title: 'Full Production Service', desc: 'Highlight film + full documentary edit with multi-camera production.', img: '/images/E3.jpg' },
  ]

  return (
    <section id="event-media" className="bg-zinc-950 py-20 sm:py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#B79E62]">Event Media Services</p>
        <h3 className="mt-2 font-serif text-3xl sm:text-4xl mb-10">
          Cinematic Memories. Digital Assets.
        </h3>
        <SplitEditorialCarousel items={eventMedia} flipped={true}/>
      </div>
    </section>
  )
}
