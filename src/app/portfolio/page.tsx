"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "../_components/Navbar";
import FooterNav from "../_components/FooterNav";

const events = [
 
  {
    id: "Events",
    title: "Events – Exclusive",
    date: "2025",
    cover: "/images/E1/E1.jpeg",
  },
  {
    id: "lagos-fashion-week",
    title: "Fashion Week – Lagos",
    date: "2025",
    cover: "/images/lagos01/18.jpg",
  },
  {
    id: "scene-society",
    title: "Scene & Society – Lagos",
    date: "2024",
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
    id: "lagos-gallery-weekend",
    title: "Lagos Gallery Weekend – Lagos",
    date: "2026",
    type: "video",
    cover: "/images/lgw/lgw1.mp4",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white font-sans min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/GP2.png')] bg-cover bg-center opacity-30" />
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight z-10 text-[#B79E62]">
          TAOHS Archive
        </h1>
      </section>

      {/* Event Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

      </section>

      {/* Footer */}
      <FooterNav />
    </main>
  );
}
