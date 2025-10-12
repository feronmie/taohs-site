'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top sticky header */}
      <header className="sticky top-0 z-[90] border-b border-white/10 bg-[#003829] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo (stays visible) */}
          <Link href="/" aria-label="TAOHS home" className="shrink-0">
            <Image
              src="/taohscolored.svg"
              alt="TAOHS logo"
              width={120}
              height={120}
              priority
              sizes="120px"
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-[#B79E62] hover:text-white transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Overlay + Right panel (outside header so it can cover the page) */}
      <div
        className={`fixed inset-0 z-[120] transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop – click to close */}
        <button
          aria-label="Close menu (backdrop)"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Slide-in panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-xs bg-[#003829] border-l border-white/10
                      transform transition-transform duration-300
                      ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Panel top bar: title + close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span className="font-serif text-lg text-[#B79E62]">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white hover:text-[#B79E62] transition"
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav links (right-aligned, scrollable if needed) */}
          <nav className="h-[calc(100%-64px)] overflow-y-auto px-10 py-10">
            <ul className="flex flex-col items-end gap-5 text-lg font-serif">
              {[
               
                { label: 'IT Girl', href: '/#taohs-ITG' },
                { label: 'Diaspora Diaries', href: '/#society-list' },
                { label: 'Scene & Society', href: '/#scene-society' },
                { label: 'Services', href: '/services' },
                { label: 'Join', href: '/#join' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[#B79E62] hover:text-white tracking-wide transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  )
}
