import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"> 
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/30 to-zinc-950/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Available for freelance & remote roles
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Full‑Stack Developer crafting
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent"> modern, minimal experiences</span>
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-300">
            I build performant web apps with elegant UX. Clean architecture, robust APIs, and delightful interactions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-emerald-500/90 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-emerald-400"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
