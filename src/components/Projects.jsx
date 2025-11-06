export default function Projects() {
  const items = [
    {
      title: 'Realtime Collaboration Suite',
      stack: ['React', 'FastAPI', 'WebSockets', 'MongoDB'],
      description: 'Live collaborative editor with presence, comments, and versioning. Built with scalable APIs and optimistic UI.',
      link: '#'
    },
    {
      title: 'E‑commerce Platform',
      stack: ['Vite', 'FastAPI', 'Stripe', 'MongoDB'],
      description: 'Headless storefront with secure checkout, inventory, and analytics. Designed for performance and DX.',
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      stack: ['React', 'D3', 'FastAPI', 'Docker'],
      description: 'Interactive charts, granular filters, and scheduled reports. Production‑grade with CI/CD.',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Selected Work</h2>
        <a href="#contact" className="text-sm text-emerald-400 hover:text-emerald-300">Start a project →</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="mb-4 h-36 w-full rounded-lg bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 ring-1 ring-white/10" />
            <h3 className="text-lg font-medium text-white group-hover:text-zinc-100">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-zinc-300 ring-1 ring-white/10">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
