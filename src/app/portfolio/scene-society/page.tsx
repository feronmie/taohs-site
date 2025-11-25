"use client";


import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../_components/Navbar";
import FooterNav from "../../_components/FooterNav";

const sampleEvent = {
  title: "Scene & Society – Lagos",
  date: "2025",
  location: "Lagos,  Nigeria",
  images: [
    "/images/scene-society/1.jpg",
    "/images/scene-society/2.jpg",
    "/images/scene-society/3.jpg",
    "/images/scene-society/5.jpg",
    "/images/scene-society/6.jpg",
    "/images/scene-society/7.jpg",
    "/images/scene-society/8.jpg",
    "/images/scene-society/9.jpg",
    "/images/scene-society/10.jpg",
    "/images/scene-society/11.jpg",
    "/images/scene-society/12.jpg",
    "/images/scene-society/13.jpg",
    "/images/scene-society/14.jpg",
    "/images/scene-society/15.jpg",
    "/images/scene-society/16.jpg",
    "/images/scene-society/17.jpg",
    "/images/scene-society/18.jpg",
    "/images/scene-society/19.jpg",
    "/images/scene-society/20.jpg",
    "/images/scene-society/21.jpg",
    "/images/scene-society/22.jpg",
    "/images/scene-society/23.jpg",
    "/images/scene-society/24.jpg",
    "/images/scene-society/25.jpg",
    "/images/scene-society/26.jpg",
    "/images/scene-society/27.jpg",
    "/images/scene-society/28.jpg",
    "/images/scene-society/29.jpg",
    "/images/scene-society/30.jpg",
    "/images/scene-society/31.jpg",
    "/images/scene-society/32.jpg",
    "/images/scene-society/33.jpg",
    "/images/scene-society/34.jpg",
    "/images/scene-society/35.jpg",
    "/images/scene-society/36.jpg",
    "/images/scene-society/37.jpg",
    "/images/scene-society/38.jpg",
    "/images/scene-society/39.jpg",
    "/images/scene-society/40.jpg",
    "/images/scene-society/41.jpg",
    "/images/scene-society/42.jpg",
    "/images/scene-society/43.jpg",
    "/images/scene-society/44.jpg",
    "/images/scene-society/45.jpg",
    "/images/scene-society/46.jpg",
    "/images/scene-society/47.jpg",
    "/images/scene-society/48.jpg",
    "/images/scene-society/ss1.jpg",
    "/images/scene-society/ss2.jpg",
  ],
  videos: [
    "/images/lagos01/w9.mp4",
    "/images/lagos01/w9.mp4",
    
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
  {event.date} {" • "} {event.location}
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
