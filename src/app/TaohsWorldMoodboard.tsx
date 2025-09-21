// src/app/_components/VisualCarousel.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

type Item = { src: string; label: string; poster?: string }

export default function VisualCarousel({ items }: { items: Item[] }) {
  const [mounted, setMounted] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement
          if (entry.isIntersecting) el.play().catch(() => null)
          else el.pause()
        })
      },
      { threshold: 0.6 }
    )
    return () => observerRef.current?.disconnect()
  }, [])

  if (!mounted) return null

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView="auto"
      spaceBetween={16}
      centeredSlides
      centeredSlidesBounds
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="rounded-xl"
    >
      {items.map((clip, i) => (
        <SwiperSlide
          key={i}
          style={{ width: '50%' }}
          className="!w-1/2"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <video
              ref={(el) => {
                if (!el) return
                el.muted = true
                ;(el as any).playsInline = true
                observerRef.current?.observe(el)
              }}
              muted
              playsInline
              loop
              preload="metadata"
              className="h-full w-full object-cover"
              aria-label={clip.label}
              poster={clip.poster}
            >
              <source src={clip.src} type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 bottom-0 bg-black/50 px-4 py-2 text-sm font-medium">
              {clip.label}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
