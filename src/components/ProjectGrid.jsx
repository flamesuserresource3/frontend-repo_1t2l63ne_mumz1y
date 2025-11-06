export default function ProjectGrid() {
  const projects = [
    {
      title: 'Realtime Collaboration Suite',
      description: 'WebSockets, CRDTs, OT. React + FastAPI + Postgres. Scalable microservices.',
      tags: ['React', 'FastAPI', 'WebSockets'],
      href: '#',
      accent: 'from-emerald-400/20 to-cyan-400/20',
      ring: 'ring-emerald-300/30',
    },
    {
      title: 'E‑commerce Platform',
      description: 'Headless commerce with Stripe, search, analytics, and admin dashboard.',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      href: '#',
      accent: 'from-indigo-400/20 to-fuchsia-400/20',
      ring: 'ring-indigo-300/30',
    },
    {
      title: 'AI‑powered Content Tools',
      description: 'Serverless functions, vector search, and streaming UX for content ops.',
      tags: ['OpenAI', 'Pinecone', 'Edge'],
      href: '#',
      accent: 'from-rose-400/20 to-amber-400/20',
      ring: 'ring-rose-300/30',
    },
    {
      title: 'SaaS Starter Kit',
      description: 'Auth, billing, settings, and team collaboration with clean architecture.',
      tags: ['React', 'tRPC', 'Prisma'],
      href: '#',
      accent: 'from-teal-400/20 to-lime-400/20',
      ring: 'ring-teal-300/30',
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Selected Work</h2>
          <p className="mt-2 text-sm text-zinc-400">A few projects that highlight my focus on performance and precision.</p>
        </div>
        <a href="#contact" className="hidden rounded-lg bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15 md:block">Start a project</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 ${p.ring}`}
          >
            <div className={`pointer-events-none absolute -inset-0.5 bg-gradient-to-tr ${p.accent} opacity-0 blur-lg transition group-hover:opacity-100`} />
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
