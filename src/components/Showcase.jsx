import React from 'react';
import { Star } from 'lucide-react';

function Transformations() {
  const items = [
    { before: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1470&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1546484959-f9a53db89f9b?q=80&w=1470&auto=format&fit=crop', name: 'Ava', result: '-18kg • 6 months' },
    { before: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=1470&auto=format&fit=crop', name: 'Liam', result: '+7kg muscle' },
    { before: 'https://images.unsplash.com/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476e?q=80&w=1470&auto=format&fit=crop', name: 'Noah', result: 'Body recomposition' },
  ];

  return (
    <div id="gallery" className="mt-20">
      <h3 className="text-xl font-semibold md:text-2xl">Transformation Gallery</h3>
      <p className="mt-1 text-sm text-zinc-400">Before/after cards with hover reveal.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={item.before} alt="before" className="h-64 w-full object-cover opacity-100 transition duration-500 group-hover:opacity-0" />
            <img src={item.after} alt="after" className="absolute inset-0 h-64 w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-4">
              <div className="inline-flex rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur">{item.name} • {item.result}</div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Facilities() {
  const images = [
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517638851339-4aa32003c11a?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554298060-9f9576a8f3e0?q=80&w=1470&auto=format&fit=crop',
  ];
  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold md:text-2xl">Facilities</h3>
      <p className="mt-1 text-sm text-zinc-400">Premium equipment, turf tracks, recovery zones.</p>
      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, i) => (
          <div key={i} className="mb-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={src} alt="facility" className="w-full object-cover transition hover:scale-[1.03]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const reviews = [
    { name: 'Sophia', text: 'Insane vibe, top-notch coaches. The neon nights are a whole mood!', rating: 5 },
    { name: 'Ethan', text: 'Put on muscle while fixing my mobility. Programs actually work.', rating: 5 },
    { name: 'Mia', text: 'Clean, premium, and friendly. The schedule makes it easy to stay consistent.', rating: 5 },
  ];

  return (
    <div id="testimonials" className="mt-16">
      <h3 className="text-xl font-semibold md:text-2xl">Member Reviews</h3>
      <p className="mt-1 text-sm text-zinc-400">Real members, real results.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/30 p-5">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-fuchsia-500/10 blur-2xl" />
            <div className="mb-3 flex items-center gap-1">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-zinc-200">“{r.text}”</p>
            <div className="mt-3 text-xs text-zinc-400">— {r.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 md:px-6">
      <Transformations />
      <Facilities />
      <Testimonials />
    </section>
  );
}
