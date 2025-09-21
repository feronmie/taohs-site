'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (res.ok) {
        setSubmitted(true)
        setEmail('')
        setMessage('')
      } else {
        alert('Submission failed.')
      }
    } catch (error) {
      alert('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-white">
      <motion.h2
        className="text-4xl font-serif text-gold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let’s Connect
      </motion.h2>
      <p className="text-white/70 text-center mb-10">
        Have a project or idea? Reach out to collaborate with TAOHS Studio.
      </p>
      {!submitted ? (
        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:outline-none"
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gold text-black font-semibold hover:opacity-90 transition"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </motion.form>
      ) : (
        <motion.div
          className="text-center text-gold text-xl mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Thank you — we’ll be in touch shortly.
        </motion.div>
      )}
    </section>
  )
}
