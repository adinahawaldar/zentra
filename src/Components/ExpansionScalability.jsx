import React, { useState } from "react";

const ExpansionScalability = () => {
  // Growth phases – from pilot to nationwide network
  const growthPhases = [
    {
      year: "2024–2025",
      phase: "Pilot & Validation",
      clusters: 1,
      units: 14,
      households: 200,
      status: "completed",
      description: "Oakwood cluster established. Proven model performance, third‑party verified.",
    },
    {
      year: "2026–2027",
      phase: "Regional Expansion",
      clusters: 14,
      units: 187,
      households: 6200,
      status: "active",
      description: "14 active clusters across 3 states. Municipal partnerships established.",
    },
    {
      year: "2028–2029",
      phase: "Statewide Network",
      clusters: 32,
      units: 450,
      households: 18000,
      status: "planned",
      description: "Full coverage in partner states. Interconnected resource sharing.",
    },
    {
      year: "2030–2032",
      phase: "National Scale",
      clusters: 75,
      units: 1250,
      households: 52000,
      status: "target",
      description: "Nationwide presence. Policy integration with central & state governments.",
    },
  ];

  // Replicable modules – the building blocks of scale
  const modules = [
    {
      id: "energy",
      title: "Energy Module",
      capacity: "1.2–2.4 MW",
      footprint: "0.5 acre",
      deployment: "3–4 months",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "water",
      title: "Water Module",
      capacity: "2.5M L/day",
      footprint: "0.3 acre",
      deployment: "2–3 months",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
      ),
    },
    {
      id: "waste",
      title: "Waste Module",
      capacity: "85–92% diversion",
      footprint: "0.4 acre",
      deployment: "3–5 months",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      id: "green",
      title: "Green Infrastructure",
      capacity: "12 acres",
      footprint: "1.2 acres",
      deployment: "4–6 months",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>Expansion & Scalability</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-2xl font-light text-slate-900 md:text-3xl lg:text-4xl">
            From one cluster to
            <span className="block font-semibold text-emerald-900">nationwide network</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-emerald-400/60 md:w-24" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-700 md:text-base">
            Designed for replication. Optimized for scale. Ready for national deployment.
          </p>
        </div>

        {/* === MAP LEFT + 2x2 GROWTH CARDS RIGHT – PERFECT BALANCE === */}
        <div className="grid gap-6 lg:grid-cols-12 mb-20">
          {/* LEFT: Map – compact, clean, authoritative */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 rounded-xl border border-slate-200 bg-white p-4 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-4 w-4 text-emerald-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">National Presence</h3>
                    <p className="text-[9px] text-slate-600">4 active states • 8 planned</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                    <span className="text-[8px] text-slate-600">Active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                    <span className="text-[8px] text-slate-600">Planned</span>
                  </div>
                </div>
              </div>

              {/* Map – clean, readable, properly sized */}
              <div className="relative mt-3 aspect-[1.1/1] w-full">
                <svg className="h-full w-full" viewBox="0 0 550 450" fill="none">
                  {/* Base outline – India */}
                  <path
                    d="M275,70 L370,130 L410,190 L390,250 L430,290 L390,340 L330,370 L250,380 L170,360 L110,310 L90,260 L110,200 L150,160 L210,110 L275,70 Z"
                    stroke="#cbd5e1"
                    strokeWidth="0.8"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  
                  {/* Active clusters */}
                  <circle cx="325" cy="320" r="5" fill="#047857" className="animate-pulse" />
                  <text x="345" y="310" fontSize="8" fill="#0f172a" fontWeight="500">Karnataka (6)</text>
                  <circle cx="295" cy="240" r="4" fill="#047857" />
                  <text x="315" y="225" fontSize="8" fill="#0f172a" fontWeight="500">Maharashtra (4)</text>
                  <circle cx="365" cy="360" r="4" fill="#047857" />
                  <text x="385" y="345" fontSize="8" fill="#0f172a" fontWeight="500">Tamil Nadu (3)</text>
                  <circle cx="345" cy="280" r="3" fill="#047857" />
                  <text x="365" y="265" fontSize="8" fill="#0f172a" fontWeight="500">Telangana (1)</text>
                  
                  {/* Planned */}
                  <circle cx="160" cy="140" r="3" fill="#94a3b8" />
                  <text x="135" y="125" fontSize="8" fill="#0f172a" fontWeight="500">Gujarat</text>
                  <circle cx="395" cy="150" r="3" fill="#94a3b8" />
                  <text x="415" y="135" fontSize="8" fill="#0f172a" fontWeight="500">Uttar Pradesh</text>
                  
                  {/* Negotiating */}
                  <circle cx="230" cy="200" r="3" fill="#f59e0b" />
                  <text x="195" y="185" fontSize="8" fill="#0f172a" fontWeight="500">Madhya Pradesh</text>
                  <circle cx="180" cy="250" r="3" fill="#f59e0b" />
                  <text x="150" y="235" fontSize="8" fill="#0f172a" fontWeight="500">Rajasthan</text>
                </svg>

                {/* Map legend */}
                <div className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-3 py-1.5 backdrop-blur-sm shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">14</span>
                    <span className="text-[7px] text-slate-600">active</span>
                    <span className="h-3 w-px bg-slate-200"></span>
                    <span className="text-xs font-bold text-amber-600">4</span>
                    <span className="text-[7px] text-slate-600">negotiating</span>
                  </div>
                </div>
              </div>
              
              {/* Compact stats footer */}
              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[9px]">
                <div>
                  <span className="font-semibold text-slate-900">14 clusters</span>
                  <span className="ml-1 text-slate-600">active</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">6,200</span>
                  <span className="ml-1 text-slate-600">households</span>
                </div>
                <div>
                  <span className="font-semibold text-emerald-700">4 states</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 2x2 Growth Cards – perfectly sized, premium */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-5 w-5 text-emerald-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-slate-700">
                Growth trajectory
              </h3>
            </div>

            {/* 2x2 Grid – perfect balance */}
            <div className="grid grid-cols-2 gap-5">
              {growthPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        phase.status === "completed"
                          ? "border-emerald-600 bg-emerald-50"
                          : phase.status === "active"
                          ? "border-emerald-600 bg-emerald-50 ring-4 ring-emerald-600/20"
                          : phase.status === "planned"
                          ? "border-amber-400 bg-amber-50/30"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${
                          phase.status === "completed" || phase.status === "active"
                            ? "text-emerald-800"
                            : "text-slate-500"
                        }`}
                      >
                        {idx + 1}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-500">
                      {phase.year}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-slate-900">{phase.phase}</h4>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Clusters</span>
                      <span className="font-mono text-lg font-semibold text-slate-900">
                        {phase.clusters}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Households</span>
                      <span className="font-mono text-lg font-semibold text-slate-900">
                        {phase.households.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-[10px] font-medium ${
                        phase.status === "completed"
                          ? "bg-emerald-100 text-emerald-800"
                          : phase.status === "active"
                          ? "bg-blue-100 text-blue-800"
                          : phase.status === "planned"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {phase.status === "completed"
                        ? "Completed"
                        : phase.status === "active"
                        ? "Active"
                        : phase.status === "planned"
                        ? "Planned"
                        : "2030 Target"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === REPLICABLE MODULES – 4 premium cards === */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
              <svg
                className="h-5 w-5 text-emerald-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-700">
              Replicable modular units
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50">
                  {module.icon}
                </div>
                <h4 className="mt-5 text-lg font-bold text-slate-900">{module.title}</h4>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600">Capacity</span>
                    <span className="font-mono text-base font-semibold text-emerald-800">
                      {module.capacity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600">Footprint</span>
                    <span className="font-mono text-base font-semibold text-slate-900">
                      {module.footprint}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Deployment</span>
                    <span className="font-mono text-base font-semibold text-slate-900">
                      {module.deployment}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 rounded-lg bg-emerald-50/80 px-3 py-2.5">
                  <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                  <span className="text-xs font-medium text-emerald-800">
                    Replicable • 4–6 month cycle
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === MOVEMENT STATEMENT – premium, balanced === */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 p-8 shadow-xl md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  From pilot to platform
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
                This is not a pilot program.
                <span className="block font-semibold text-emerald-300">This is an infrastructure platform.</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                Every module is standardized. Every cluster becomes a template for the next.
                From 200 households to 50,000. From local pilot to national infrastructure.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <div>
                  <span className="text-2xl font-mono font-bold text-white">14</span>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-300">Active clusters</p>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <span className="text-2xl font-mono font-bold text-white">4</span>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-300">Partner states</p>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <span className="text-2xl font-mono font-bold text-white">75</span>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-300">2032 target</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
              <svg className="h-8 w-8 text-emerald-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h4 className="text-lg font-bold text-white">Partner with us</h4>
              <p className="mt-2 text-sm text-slate-300">
                State governments, municipal corporations—accepting partnership applications for 2027–2028 expansion.
              </p>
              <button className="mt-5 w-full rounded-md bg-white px-4 py-3 text-sm font-semibold text-emerald-900 shadow-md hover:bg-emerald-50 transition-colors">
                Initiate partnership inquiry →
              </button>
            </div>
          </div>
        </div>

        {/* Scalability principles footer */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-5 w-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900">Standardized</span>
              <p className="text-xs text-slate-600">Identical, documented, deployable</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-5 w-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900">Documented</span>
              <p className="text-xs text-slate-600">Full technical specifications</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-5 w-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900">Replicable</span>
              <p className="text-xs text-slate-600">14 successful replications</p>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-12 text-center text-[9px] text-slate-400">
          <p>Expansion roadmap • 2024–2032 • Subject to partnership agreements and funding allocations</p>
        </div>
      </div>
    </section>
  );
};

export default ExpansionScalability;