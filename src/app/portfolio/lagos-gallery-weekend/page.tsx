"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../_components/Navbar";
import FooterNav from "../../_components/FooterNav";

const sampleEvent = {
  title: "Lagos Gallery Weekend – Lagos",
  date: "2026",
  location: "Lagos, Nigeria",
  images: [
    
  ],
  videos: [
    
   "/images/lgw/lgw1.mp4",
    "/images/lgw/lgw2.mp4",
    "/images/lgw/lgw3.mp4",
    "/images/lgw/lgw4.mp4",
    "/images/lgw/lgw5.mp4",
    "/images/lgw/lgw6.mp4",

  ],
};

export default function EventPage() {
  const event = sampleEvent;

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine images + videos
  const allMedia = [...event.images, ...event.videos];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  // Next / Previous
  const showPrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? allMedia.length - 1 : prev - 1
    );
  }, [allMedia.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === allMedia.length - 1 ? 0 : prev + 1
    );
  }, [allMedia.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, showPrev, showNext]);

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-[#B79E62] mb-3">
          {event.title}
        </h1>
        <p className="opacity-80 text-lg">
          {event.date} • {event.location}
        </p>
      </section>

      {/* Gallery Masonry */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

          {/* IMAGES */}
          {event.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img}
                alt=""
                width={600}
                height={800}
                className="w-full mb-4 object-cover"
              />
            </motion.div>
          ))}

          {/* VIDEOS */}
          {/* VIDEOS */}
{event.videos.map((vid, i) => {
  const index = event.images.length + i;

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index * 0.1,
      }}
      className="rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => openLightbox(index)}
    >
      <video
        className="w-full mb-4 rounded-xl object-cover"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src={vid} type="video/mp4" />
      </video>
    </motion.div>
  );
})}

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close on background click */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={closeLightbox}
            />

            {/* Media Viewer */}
            <motion.div
              key={currentIndex}
              className="relative z-50 max-w-5xl w-full px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* VIDEO */}
              {allMedia[currentIndex].endsWith(".mp4") ? (
                <video
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] object-contain rounded-xl"
                >
                  <source src={allMedia[currentIndex]} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={allMedia[currentIndex]}
                  alt=""
                  width={1600}
                  height={1200}
                  className="w-full max-h-[85vh] object-contain rounded-xl"
                />
              )}
            </motion.div>

            {/* NAV BUTTONS */}
            <button
              onClick={showPrev}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-5xl font-light z-[1000]"
            >
              ‹
            </button>

            <button
              onClick={showNext}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-5xl font-light z-[1000]"
            >
              ›
            </button>

            {/* CLOSE BUTTON */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-4xl z-[1000]"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <FooterNav />
    </main>
  );
}
