export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Let’s build something great</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Open to freelance, consulting, and full‑time roles. Send a quick note and I’ll reply within 24 hours.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <a
              href="mailto:hello@devfolio.example"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500/90 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-emerald-400"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Your Name — Crafted with care.</p>
    </section>
  );
}
