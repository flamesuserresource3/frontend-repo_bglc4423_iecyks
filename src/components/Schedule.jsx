import React from 'react';

const classes = [
  { day: 'Mon', time: '06:00', title: 'Powerlifting Foundations', type: 'Strength' },
  { day: 'Mon', time: '18:00', title: 'HIIT Inferno', type: 'Conditioning' },
  { day: 'Tue', time: '07:00', title: 'Mobility Flow', type: 'Mobility' },
  { day: 'Tue', time: '19:00', title: 'Glutes & Core', type: 'Hypertrophy' },
  { day: 'Wed', time: '06:30', title: 'Olympic Lifts', type: 'Strength' },
  { day: 'Thu', time: '18:30', title: 'Engine Builder', type: 'Conditioning' },
  { day: 'Fri', time: '07:30', title: 'Full-Body Pump', type: 'Hypertrophy' },
  { day: 'Sat', time: '10:00', title: 'Athletic Conditioning', type: 'Conditioning' },
  { day: 'Sun', time: '09:00', title: 'Recovery Mobility', type: 'Mobility' },
];

const types = ['All', 'Strength', 'Conditioning', 'Hypertrophy', 'Mobility'];

export default function Schedule() {
  const [filterDay, setFilterDay] = React.useState('All');
  const [filterType, setFilterType] = React.useState('All');

  const filtered = classes.filter((c) =>
    (filterDay === 'All' || c.day === filterDay) && (filterType === 'All' || c.type === filterType)
  );

  return (
    <section id="schedule" className="relative mx-auto mt-10 max-w-7xl px-4 md:px-6">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Interactive Class Schedule</h2>
          <p className="mt-1 text-sm text-zinc-400">Filter by day and category. Smooth transitions and neon highlights.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <select value={filterDay} onChange={(e) => setFilterDay(e.target.value)} className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white shadow-inner backdrop-blur">
            {['All','Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <div className="flex gap-2">
            {types.map((t) => (
              <button key={t} onClick={() => setFilterType(t)} className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                filterType === t
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white shadow-[0_0_30px_-12px_#22d3ee]'
                  : 'border border-white/10 bg-white/5 text-zinc-300'
              }`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/30 p-5 shadow-xl transition hover:from-cyan-500/10 hover:to-fuchsia-500/10">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-fuchsia-500/10" />
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200">{c.day}</span>
              <span className="text-sm text-zinc-300">{c.time}</span>
            </div>
            <div className="mt-4 text-lg font-semibold">{c.title}</div>
            <div className="text-xs text-zinc-400">{c.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
