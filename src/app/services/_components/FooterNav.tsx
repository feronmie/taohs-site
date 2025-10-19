'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Music as TikTok } from 'lucide-react'
import TikTokIcon from './TikTokIcon'
const quickLinks = [
  { label: 'About', href: './about' },
  { label: 'Privacy', href: '../privacy-policy' },
  { label: 'Terms', href: '../Terms-of-service' },
]

export default function FooterNav() {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 bg-[#003829] border-t border-slate-700 backdrop-blur z-40"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3 text-sm text-slate-300">
        {/* Quick links */}
        <div className="flex gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#B79E62] hover:text-[#BEB5A9] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

     {/* Socials */}
<div className="flex gap-4">
  <Link
    href="https://www.instagram.com/theartofhighsociety/"
    target="_blank"
    className="text-[#B79E62] hover:text-[#BEB5A9] transition"
  >
    <Instagram size={18} />
  </Link>
  <Link
    href="https://www.youtube.com/@theartofhighsociety"
    target="_blank"
    className="text-[#B79E62] hover:text-[#BEB5A9] transition"
  >
    <Youtube size={18} />
  </Link>
  <Link
    href="https://www.tiktok.com/@taohs_"
    target="_blank"
    className="text-[#B79E62] hover:text-[#BEB5A9] transition"
  >
    <TikTokIcon size={18} />
  </Link>
</div>
      </div>
    </motion.footer>
  )
}
