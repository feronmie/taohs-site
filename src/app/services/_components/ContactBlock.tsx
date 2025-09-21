// FILE: src/app/services/_components/ContactBlock.tsx
'use client'

import { Send } from 'lucide-react'

export default function ContactBlock() {
  return (
    <section id="contact" className="bg-[#003829] py-20 sm:py-28 text-white">
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
