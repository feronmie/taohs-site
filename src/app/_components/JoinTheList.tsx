'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function JoinTheList() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setTimeout(() => window.location.reload(), 2000)
      } else alert('Failed to subscribe: ' + (data.error || 'Unknown error'))
    } catch {
      alert('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="text-center mx-auto max-w-xl space-y-6">
      {/* Headline */}
      <div>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#B79E62]">
          Join the Waiting List
        </h2>
        <p className="mt-3 text-white/70 text-base sm:text-lg">
          Be first to access exclusive drops, stories, and the next chapter of TAOHS.
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => setOpen(true)}
        className="inline-block rounded-lg bg-[#B79E62] px-8 py-3 text-black font-semibold transition hover:opacity-90"
      >
        Join the Waiting List
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-md rounded-2xl bg-black/80 border border-[#B79E62]/30 shadow-2xl p-6 backdrop-blur-lg">
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-[#B79E62] hover:text-[#FFD479] transition"
                >
                  <X size={20} />
                </button>

                {/* Form Content */}
                {!submitted ? (
                  <>
                    <h3 className="font-serif text-2xl text-[#B79E62] mb-3">
                      Join the Waiting List
                    </h3>
                    <p className="text-white/70 text-sm mb-6">
                      Get early access to our editorial projects, drops, and features.
                    </p>

                    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="you@taohs.club"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none"
                        required
                        autoComplete="email"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="rounded-lg bg-[#B79E62] px-5 py-3 font-semibold text-black text-sm transition hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
                      >
                        {loading ? 'Joining…' : 'Confirm'}
                      </button>
                    </form>

                    <p className="text-sm text-white/60 mt-3">
                      Prefer chat?{' '}
                      <a
                        href="https://wa.me/2340000000000"
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-[#B79E62]"
                      >
                        Join our WhatsApp list →
                      </a>
                    </p>
                  </>
                ) : (
                  <div className="text-center text-[#B79E62] font-serif text-lg">
                    🎉 You’re officially on the waiting list. <br /> Welcome to TAOHS.
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
