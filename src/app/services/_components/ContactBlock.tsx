// FILE: src/app/services/_components/ContactBlock.tsx
'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function ContactBlock() {
  return (
    <section 
    
    id="contact"
    className="relative isolate overflow-hidden w-full text-white py-20 sm:py-28"
  >
    {/* Moving background */}
    <motion.div
      aria-hidden
      className="absolute inset-0 -z-20"
      initial={{ scale: 1.05, x: 0 }}
      animate={{ scale: 1.15, x: 120 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
      style={{
        backgroundImage: "url('/images/gp3.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        willChange: 'transform',
      }}
    />
  
    {/* Dark brand tint above bg, still behind content */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Left copy */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#B79E62]">Let’s Collaborate</p>
            <h3 className="mt-2 font-serif text-4xl">Book Us</h3>
            <p className="mt-3 text-zinc-600">
              Tell us about your event, brand, or production. We’ll shape an editorial-grade treatment
              and assemble the right creative team.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <p><span className="font-medium">Email:</span> info@theartofhighsociety.com</p>
              <p><span className="font-medium">Phone:</span> +234 812 927 9260</p>
            </div>
          </div>

          {/* Form */}
          <form className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <input
                className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
                placeholder="Name"
              />
              <input
                className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
                placeholder="Email"
              />
              <textarea
                rows={5}
                className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
                placeholder="Project details"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800"
              >
                Send <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
