"use client";

import { motion } from "framer-motion";

const society = [
  {
    img: "/images/dia2.jpg",
    link: "https://www.instagram.com/p/DSnTT-tDYmG/?igsh=MTF5NjVrZnhiY3JhYw==",
    available: true,
  },
  {
    img: "/images/dia.jpeg",
    link: "https://www.instagram.com/p/DQO534pDVqY/?igsh=aTE0MmM3ajB2dzFn",
    available: true,
  },
  
];

export default function SocietyList() {
  // Fade-in stagger animation container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  // Each card animation
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="society-list"
      className="relative isolate overflow-hidden bg-[#003829] w-full text-white py-20 sm:py-28"
    >
      <div className="relative max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#B79E62] mb-16 text-center">
          Diaspora Diaries
        </h2>

        {/* SINGLE RESPONSIVE GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {society.map((item, i) => (
            <motion.a
              key={i}
              variants={itemVariant}
              href={item.available ? item.link : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl overflow-hidden cursor-pointer block"
            >
              <motion.img
                src={item.img}
                alt=""
                className={`w-full h-[520px] object-cover rounded-xl ${
                  !item.available
                    ? "opacity-40 grayscale pointer-events-none"
                    : ""
                }`}
                // Hover zoom only on desktop
                whileHover={{ scale: item.available ? 1.08 : 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Coming Soon Overlay */}
              {!item.available && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                  <p className="text-white text-2xl font-serif tracking-wide">
                    Coming Soon
                  </p>
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
