'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function FooterNav() {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-slate-700 backdrop-blur z-50"
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
          <Link href="https://instagram.com" target="_blank" className="text-[#B79E62] hover:text-[#BEB5A9]">
            <Instagram size={18} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-[#B79E62] hover:text-[#BEB5A9]">
            <Twitter size={18} />
          </Link>
          <Link href="mailto:hello@taohs.com" className="text-[#B79E62] hover:text-[#BEB5A9]">
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
