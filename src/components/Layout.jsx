import React from 'react';
import { Menu, Dumbbell, Phone, Mail, MapPin, Star } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById('nav');
      if (!header) return;
      if (window.scrollY > 10) header.classList.add('backdrop-blur-md/0', 'bg-black/40');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = 'text-sm md:text-base text-zinc-200 hover:text-white transition-colors';

  return (
    <header id="nav" className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/20 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 ring-1 ring-white/10">
              <Dumbbell className="h-5 w-5 text-white" />
              <div className="absolute -inset-1 -z-0 rounded-lg bg-cyan-500/20 blur-xl" />
            </div>
            <span className="font-semibold tracking-wide">Mustangs Fitness</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#programs" className={navLink}>Programs</a>
            <a href="#schedule" className={navLink}>Schedule</a>
            <a href="#gallery" className={navLink}>Gallery</a>
            <a href="#testimonials" className={navLink}>Reviews</a>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_30px_-10px_#22d3ee] hover:shadow-[0_0_40px_-8px_#a21caf] transition-shadow">Join Now</a>
          </nav>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-xl border border-white/10 bg-black/50 p-3">
              {['Programs','Schedule','Gallery','Reviews'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="rounded-lg px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 hover:text-white">{item}</a>
              ))}
              <a href="#contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-center text-sm font-medium">Join Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-white/5 bg-black/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 ring-1 ring-white/10">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Mustangs Fitness</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-400">Premium training facility focused on strength, conditioning, and real transformations. Open 6am – 11pm daily.</p>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="grid gap-3 text-sm">
            <div className="flex items-center gap-3 text-zinc-300"><Phone className="h-4 w-4" /> +1 (555) 123-4567</div>
            <div className="flex items-center gap-3 text-zinc-300"><Mail className="h-4 w-4" /> info@mustangsfitness.com</div>
            <div className="flex items-center gap-3 text-zinc-300"><MapPin className="h-4 w-4" /> 123 Power Lane, Iron City</div>
          </div>
          <div className="grid gap-3 text-sm">
            <a href="#programs" className="text-zinc-300 hover:text-white">Programs</a>
            <a href="#schedule" className="text-zinc-300 hover:text-white">Schedule</a>
            <a href="#gallery" className="text-zinc-300 hover:text-white">Gallery</a>
            <a href="#testimonials" className="text-zinc-300 hover:text-white">Reviews</a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Mustangs Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.15),transparent_70%)]" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
