'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function JoinTheList() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  // Popups
  const [showWinnerPopup, setShowWinnerPopup] = useState(false)
  const [showNormalPopup, setShowNormalPopup] = useState(false)
  const [showAlreadyWonPopup, setShowAlreadyWonPopup] = useState(false)
  const [showGiveawayEnded, setShowGiveawayEnded] = useState(false)

  // Will store "50% OFF", "40% OFF", "30% OFF"
  const [discount, setDiscount] = useState<string | null>(null)

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

      if (!data.success) {
        alert('Failed to subscribe: ' + (data.error || 'Unknown error'))
        return
      }

      // 🧪 TEST MODE (remove before launch)
      if (email.includes("testwin")) {
        setDiscount("50% OFF")
        setOpen(false)
        setShowWinnerPopup(true)
        return
      }
      if (email.includes("testloss")) {
        setOpen(false)
        setShowNormalPopup(true)
        return
      }
      // END TEST MODE

      // ✴️ Giveaway ended (after Day 3)
      if (data.giveawayEnded) {
        setOpen(false)
        setShowGiveawayEnded(true)
        return
      }

      // ⚠️ User already won before (any day)
      if (data.alreadyWon) {
        setOpen(false)
        setShowAlreadyWonPopup(true)
        return
      }

      // 🟢 Winner today
      if (data.won && data.discount) {
        setDiscount(data.discount)
        setOpen(false)
        setShowWinnerPopup(true)
        return
      }

      // 🔵 Normal success
      setOpen(false)
      setShowNormalPopup(true)

    } catch {
      alert('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="join" className="text-center mx-auto max-w-xl space-y-6">

      {/* Headline */}
      <div>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#B79E62]">
          Join the Waiting List
        </h2>
        <p className="mt-3 text-white/70 text-base sm:text-lg">
          Be first to access exclusive drops, stories, and the next chapter of TAOHS.
        </p>
      </div>

      {/* CTA */}
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
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative w-full max-w-md rounded-2xl bg-black/80 border border-[#B79E62]/30 shadow-2xl p-6 backdrop-blur-lg">

                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-[#B79E62]"
                >
                  <X size={20} />
                </button>

                {/* Form */}
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
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-lg bg-[#B79E62] px-5 py-3 font-semibold text-black text-sm disabled:opacity-60"
                    >
                      {loading ? 'Joining…' : 'Confirm'}
                    </button>
                  </form>
                </>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🟢 WINNER POPUP */}
      {showWinnerPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white text-black rounded-xl p-10 max-w-sm text-center shadow-xl">
            <h2 className="text-3xl font-serif mb-3">🎉 You Won!</h2>
            <p className="text-lg">You unlocked an exclusive TAOHS launch reward.</p>

            <p className="mt-6 text-xl font-bold text-[#B79E62]">
              {discount ?? "YOUR DISCOUNT"}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-black text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ⚠️ Already Won Popup */}
      {showAlreadyWonPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white text-black rounded-xl p-8 text-center shadow-xl">
            <h2 className="text-xl font-bold mb-2">Reward Already Claimed</h2>
            <p className="text-gray-700">
              You have already won a TAOHS giveaway reward.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-black text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🟣 Giveaway Ended Popup */}
      {showGiveawayEnded && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white text-black rounded-xl p-8 text-center shadow-xl">
            <h2 className="text-xl font-bold mb-2">Giveaway Ended</h2>
            <p className="text-gray-700">
              The TAOHS launch giveaway has ended — but more is coming soon.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-black text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* NORMAL SUCCESS */}
      {showNormalPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white text-black rounded-xl p-8 max-w-sm text-center shadow-xl">
            <h2 className="text-xl font-semibold">You're on the list!</h2>
            <p className="mt-2 text-gray-700">
              Thank you for joining TAOHS — stay tuned.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-black text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
