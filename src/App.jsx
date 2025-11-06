import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-400/30 selection:text-emerald-100">
      {/* Background subtle noise + gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.10),transparent_35%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.10),transparent_35%)]" />

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-24 md:px-6">
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
