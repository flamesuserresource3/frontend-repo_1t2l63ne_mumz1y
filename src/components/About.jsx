export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">About</h2>
          <p className="mt-4 text-zinc-300">
            I’m a full‑stack developer focused on building polished, performant products. I care about clarity, accessibility, and maintainability. My toolkit spans modern front‑end frameworks and robust back‑end services.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300 sm:grid-cols-3">
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">React</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">TypeScript</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Tailwind</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">FastAPI</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Node</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">MongoDB</li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(129,140,248,0.12),transparent_45%)]" />
          <div className="relative z-10">
            <p className="text-sm text-zinc-400">
              Preferred stack
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/90">
              <div className="rounded-lg border border-white/10 bg-zinc-950 p-3">React + Vite</div>
              <div className="rounded-lg border border-white/10 bg-zinc-950 p-3">Tailwind CSS</div>
              <div className="rounded-lg border border-white/10 bg-zinc-950 p-3">FastAPI</div>
              <div className="rounded-lg border border-white/10 bg-zinc-950 p-3">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
