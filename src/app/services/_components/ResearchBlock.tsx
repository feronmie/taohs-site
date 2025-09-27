import SplitEditorialCarousel from './EditorialCarousel'

export default function CreativeProjectsBlock() {
  const creative = [
    { title: 'Consulting & Creative Direction', desc: 'Building creative teams, managing productions, and ensuring seamless delivery.', img: '/images/C1.jpg' },
    { title: 'Show & Docu-Series Development', desc: 'Producing original projects like Scene & Society and other cultural storytelling formats.', img: '/images/C2.jpg' },
    { title: 'Content Collaborations & Partnerships', desc: 'Co-creating storytelling projects with clients and brands.', img: '/images/C3.jpg' },
  ]

  return (
    <section id="creative-projects" className="bg-[url('/images/gp3.png')] bg-cover bg-center py-20 sm:py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#B79E62]">Creative Projects & Productions</p>
        <h3 className="mb-10 mt-2 font-serif text-3xl sm:text-4xl">Original Formats. Seamless Delivery.</h3>
        <SplitEditorialCarousel items={creative} flipped={false} />
      </div>
    </section>
  )
}
