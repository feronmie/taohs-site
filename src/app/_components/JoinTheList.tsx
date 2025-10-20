'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function JoinTheList() {
  const [email, setEmail] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
        // Give the confirmation message a moment to show before refreshing
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        alert('Failed to subscribe: ' + (data.error || 'Unknown error'))
      }
    } catch (err) {
      alert('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted)
    return (
      <div
        className="text-center text-lg font-serif text-[#B79E62]"
        role="status"
      >
        🎉 You’re officially on the waiting list. Welcome to TAOHS.
      </div>
    )

  return (
    <div className="text-center mx-auto max-w-xl space-y-6">
      {/* Headline */}
      <div>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#B79E62]">
          Join the Waiting List
        </h2>
        <p className="mt-3 text-white/70 text-base sm:text-lg">
          Be first to access exclusive drops, stories, and the next chapter of
          TAOHS.
        </p>
      </div>

      {/* CTA or Form */}
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button
              onClick={() => setShowForm(true)}
              className="inline-block rounded-lg bg-[#B79E62] px-8 py-3 text-black font-semibold transition hover:opacity-90"
            >
              Join the Waiting List
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
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
          </motion.form>
        )}
      </AnimatePresence>

      {/* WhatsApp link */}
      {showForm && (
        <p className="text-sm text-white/60 mt-2">
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
      )}
    </div>
  )
}
