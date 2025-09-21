import SplitEditorialCarousel from './EditorialCarousel'

export default function BrandMediaBlock() {
  const brandMedia = [
    { title: 'Brand Films & Recap Documentaries', desc: '2–5 minute cinematic films showcasing your heritage, story, or product.', img: '/images/B1.jpg' },
    { title: 'Digital Asset Pack', desc: 'Photo + video deliverables designed for ads, Instagram/TikTok, LinkedIn, and websites.', img: '/images/B1.jpg' },
    { title: 'Campaign Coverage', desc: 'Editorial documentation of launches, pop-ups, press previews, and fashion shows.', img: '/images/B1.jpg' },
  ]

  return (
    <section id="brand-corporate" className="bg-[#003829] py-20 sm:py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#B79E62]">Brand & Corporate Media</p>
        <h3 className="mt-2 font-serif text-3xl sm:text-4xl mb-10">
          Polished Stories. Cultural Edge.
        </h3>
        <SplitEditorialCarousel items={brandMedia} flipped={false}/>
      </div>
    </section>
  )
}



