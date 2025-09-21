'use client'
import { useState } from 'react'

export default function JoinTheList() {
  const [email, setEmail] = useState('')
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
      if (data.success) setSubmitted(true)
      else alert('Failed to subscribe: ' + (data.error || 'Unknown error'))
    } catch (err) {
      alert('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted)
    return (
      <div className="text-lg text-gilt" role="status">🎉 You're officially in circulation. Welcome to TAOHS.</div>
    )

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-3" aria-label="Join the TAOHS list">
      <input
        type="email"
        placeholder="you@taohs.club"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-white/20 bg-sable px-4 py-3 text-white placeholder-white/40 focus:outline-none"
        required
        autoComplete="email"
      />
      <button
        type="submit"
        disabled={loading}
        className="block w-full rounded-lg bg-gilt py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? 'Subscribing…' : 'Subscribe'}
      </button>
      <p className="mt-2 text-sm text-white/60">
        Prefer chat? <a href="https://wa.me/2340000000000" target="_blank" rel="noreferrer" className="underline text-gilt">Join our WhatsApp list →</a>
      </p>
    </form>
  )
}