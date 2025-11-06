import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-emerald-400 to-cyan-400" />
          <span className="text-sm font-medium tracking-wide text-zinc-200 group-hover:text-white">Dev Portfolio</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-sm text-zinc-300 hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-zinc-300 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white">Contact</a>
          <div className="ml-2 flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 transition hover:text-white">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 transition hover:text-white">
              <Linkedin size={18} />
            </a>
            <a aria-label="Email" href="#contact" className="text-zinc-400 transition hover:text-white">
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
