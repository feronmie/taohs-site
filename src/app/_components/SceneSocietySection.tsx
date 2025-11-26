"use client";

import { useState } from "react";
import { X, Play } from "lucide-react";

export default function SceneSocietySection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="scene-society"
        className="relative w-full bg-[url('/images/GP2.png')] bg-cover bg-center bg-no-repeat text-white py-24"
        aria-labelledby="scene-banner"
      >
        <div className="relative mx-auto max-w-7xl px-6">
          <h2
            id="scene-banner"
            className="text-4xl md:text-5xl font-serif text-[#B79E62] mb-12 text-center"
          >
            Scene & Society
          </h2>

          {/* RESPONSIVE IMAGE + PLAY OVERLAY */}
          <div
  className="relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
  onClick={() => setOpen(true)}
>
  <div className="relative w-full aspect-[3/4] md:aspect-video bg-black">
    <img
      src="/images/scs.jpeg"
      alt="Scene and Society"
      className="
        absolute inset-0 w-full h-full 
        object-contain      /* mobile: no crop */
        md:object-cover     /* desktop: crop to fit cinematic */
        transition duration-300 
        group-hover:scale-105
      "
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition">
      <Play
        size={70}
        className="text-white opacity-90 drop-shadow-xl group-hover:scale-110 transition"
      />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]">
          
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
          >
            <X size={34} />
          </button>

          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/StaNi0TPxXY?autoplay=1&modestbranding=1&rel=0"
              title="Scene & Society Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
