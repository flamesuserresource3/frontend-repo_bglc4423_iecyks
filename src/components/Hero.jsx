import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-28 md:grid-cols-2 md:px-6 lg:py-36">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Premium Coaching • Open 7 Days
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Forge Your Best Self
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-400 bg-clip-text text-transparent">In A Neon-Forged Arena</span>
          </h1>
          <p className="mt-4 max-w-xl text-zinc-300">
            Elite training, cutting-edge equipment, and a community that fuels growth. Train smart with science-backed programs and coaches.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#schedule" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_-12px_#22d3ee] transition hover:shadow-[0_0_50px_-8px_#a21caf]">
              Start Your Trial
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur-md">
              <Play className="h-4 w-4" />
              Watch Tour
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center text-zinc-300">
            {[
              { value: '2.5k+', label: 'Active Members' },
              { value: '120+', label: 'Weekly Classes' },
              { value: '98%', label: 'Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-black/40 p-4 shadow-inner backdrop-blur">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div id="programs" className="relative">
          <div className="pointer-events-none absolute -inset-20 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-3">
              {['Strength','Conditioning','Hypertrophy','Mobility'].map((t) => (
                <div key={t} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/20 p-4 text-center transition hover:from-cyan-500/10 hover:to-fuchsia-500/10">
                  <div className="text-sm font-medium text-white">{t}</div>
                  <div className="mt-2 text-xs text-zinc-400">Pro-designed paths</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0b0b0f]" />
    </section>
  );
}
