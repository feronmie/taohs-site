"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioHomepageSection() {
  const events = [
  
    {
      id: "scene-society",
      title: "Scene & Society – Lagos",
      date: "2025",
      cover: "/images/scene-society/ss2.jpg",
    },
  
    
    {
      id: "weddings",
      title: "Owambe – Lagos",
      date: "2025",
      type: "video",
      cover: "/images/weddings/w2.mp4",
    },



    {
      id: "Events",
      title: "Events – Exclusive",
      date: "2025",
      cover: "/images/E1/E1.jpeg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative  w-full isolate overflow-hidden bg-[#003829] text-white py-20 sm:py-28 "
      aria-labelledby="portfolio-heading"
    >
      
      <div className="relative mx-auto max-w-7xl px-6">
        <h2
          id="portfolio-heading"
          className="text-4xl md:text-5xl font-serif text-center text-[#B79E62] mb-12"
        >
          TAOHS Archive
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
  <motion.div
    key={event.id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.6 }}
    className="group cursor-pointer"
  >
    <Link href={`/portfolio/${event.id}`}>
      <div className="overflow-hidden rounded-2xl shadow-lg">

        {/* If the cover is a video */}
        {event.type === "video" ? (
          <video
            src={event.cover}
            muted
            autoPlay
            loop
            playsInline
            className="object-cover h-72 w-full group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <Image
            src={event.cover}
            alt={event.title}
            width={800}
            height={600}
            className="object-cover h-72 w-full group-hover:scale-105 transition-all duration-700 ease-out"
          />
        )}

      </div>

      <div className="mt-4">
        <p className="text-sm opacity-70">{event.date}</p>
        <h3 className="text-xl font-serif text-[#B79E62] group-hover:underline tracking-wide">
          {event.title}
        </h3>
      </div>
    </Link>
  </motion.div>
))}

        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 border border-[#B79E62] text-[#B79E62] rounded-lg text-lg tracking-wide hover:bg-[#B79E62] hover:text-black transition-all"
          >
            View Full Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
