'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ARE = [
  'Pan-African in POV',
  'Scene-first, people-forward',
  'Style-led storytelling',
  'Decoders of cultural capital',
]

const NOT = ['Tabloid', 'Trend-chasers', 'Clickbait press', 'Western mimicry']

const VIBE_CODES = [
  'gilt',
  'ink',
  'porcelain',
  'blush',
  'ultra',
  'sable',
  'leaf',
  'tempo',
  'alt-cool',
]

export default function VoiceVibe() {
  const [activeTab, setActiveTab] = useState<'voice' | 'vibe'>('voice')
  const [selectedCodes, setSelectedCodes] = useState<string[]>(['gilt', 'ink'])
  const toggleCode = (c: string) =>
    setSelectedCodes((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]))

  return (
    <div className="relative">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="font-serif text-4xl text-gilt">Voice &amp; Vibe</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          How TAOHS sounds and feels — editorial confidence with club-floor energy.
        </p>
      </div>

      {/* Marquee of keywords */}
      <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <motion.div
          className="flex gap-10 whitespace-nowrap px-6 py-3 text-sm tracking-wide text-white/80"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-10">
              <span>scene</span>
              <span>society</span>
              <span>diaspora</span>
              <span>it girls</span>
              <span>new wealth</span>
              <span>alt-cool</span>
              <span>taste</span>
              <span>tempo</span>
              <span>city diaries</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="mx-auto mb-10 flex w-full max-w-2xl items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
        <button
          onClick={() => setActiveTab('voice')}
          className={`flex-1 rounded-full px-4 py-2 text-sm transition ${
            activeTab === 'voice' ? 'bg-gilt text-black' : 'text-white/80 hover:bg-white/10'
          }`}
        >
          Voice Principles
        </button>
        <button
          onClick={() => setActiveTab('vibe')}
          className={`flex-1 rounded-full px-4 py-2 text-sm transition ${
            activeTab === 'vibe' ? 'bg-gilt text-black' : 'text-white/80 hover:bg-white/10'
          }`}
        >
          Vibe Codes
        </button>
      </div>

      {/* Panes */}
      {activeTab === 'voice' ? (
        <motion.div
          key="voice"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* What We Are */}
          <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-gilt/30 bg-white/5 p-6">
            <h3 className="mb-4 border-b border-gilt pb-2 text-2xl font-semibold text-white">What We Are</h3>
            <ul className="space-y-2 text-lg text-white/85">
              {ARE.map((li) => (
                <li key={li} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gilt" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What We Are Not */}
          <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="mb-4 border-b border-white/30 pb-2 text-2xl font-semibold text-white">What We Are Not</h3>
            <ul className="space-y-2 text-lg text-white/70">
              {NOT.map((li) => (
                <li key={li} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="vibe"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4"
        >
          <div className="text-sm text-white/70">Tap to toggle codes that define TAOHS’ look/feel.</div>
          <div className="flex flex-wrap gap-2">
            {VIBE_CODES.map((v) => {
              const active = selectedCodes.includes(v)
              return (
                <button
                  key={v}
                  onClick={() => toggleCode(v)}
                  className={`rounded-full border px-3 py-1.5 text-sm transition ${
                    active ? 'border-gilt bg-gilt text-black' : 'border-white/20 bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  {v}
                </button>
              )
            })}
          </div>

          {/* Preview tile reacts to selected codes (simple tint + copy) */}
          <motion.div className="mt-6 grid gap-6 md:grid-cols-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="aspect-video w-full bg-gradient-to-br from-gilt/30 via-ultra/20 to-sable/40" />
              <div className="p-4 text-sm text-white/80">Palette leans {selectedCodes.join(', ')}.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm uppercase tracking-wide text-white/60">Tone sample</div>
              <p className="mt-2 text-lg leading-relaxed text-white/85">
                The room tilts when she walks in. Names hush. Cameras don’t. We log the moment — and what it moves next.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
