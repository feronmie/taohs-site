'use client'
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const brandingServices = [
  {
    title: "Brand Films & Recap Documentaries",
    desc: "2–5 minute cinematic films showcasing your heritage, story, or product.",
    img: "/images/event1.jpg",
  },
  {
    title: "Digital Asset Packs",
    desc: "Photo + video deliverables designed for ads, Instagram/TikTok, LinkedIn, and websites.",
    img: "/images/event2.png",
  },
  {
    title: "Campaign Coverage",
    desc: "Editorial documentation of launches, pop-ups, press previews, and fashion shows.",
    img: "/images/event3.png",
  },
]

export default function BrandingBlock() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % brandingServices.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <h2 className="text-4xl font-serif text-[#B79E62] mb-12 text-center">
        EVENT MEDIA SERVICES
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Carousel (images) */}
       

        {/* Animated Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-serif text-[#B79E62]">
              {brandingServices[index].title}
            </h3>
            <p className="text-white/80">{brandingServices[index].desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={brandingServices[index].img}
                alt={brandingServices[index].title}
                width={800}   // ✅ forces a size
                height={900}  // ✅ ensures visibility
                priority
                className="rounded-2xl shadow-xl object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
