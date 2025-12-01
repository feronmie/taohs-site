'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactBlock() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden w-full bg-[url('/images/GP2.png')] text-white py-20 sm:py-28">

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#B79E62]">Let’s Collaborate</p>
            <h3 className="mt-2 font-serif text-4xl">Book Us</h3>
            <p className="mt-3 text-sm sm:text-base text-white/85 font-medium leading-relaxed tracking-wide max-w-md">
              Tell us about your event, brand, or production. We’ll shape an editorial-grade treatment
              and assemble the right creative team.
            </p>

            <div className="mt-6 space-y-1 text-sm">
              <p><span className="font-medium">Email:</span> admin@theartofhighsociety.com</p>
              <p><span className="font-medium">Phone:</span> +234 812 927 9260</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">

              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
                placeholder="Name"
              />

              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
                placeholder="Email"
              />

              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
                placeholder="Project details"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"} <Send size={16} />
              </button>

              {sent && (
                <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
