import React from "react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center bg-white px-4 py-12 md:py-16 lg:py-0 overflow-hidden">
      {/* Official top bar – signature green */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600/70 via-emerald-500 to-emerald-600/70 z-20" /> */}

      {/* Sophisticated background: light geometric + green accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-emerald-50/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent" />
      </div>

      {/* Max width container – vertically centered */}
      <div className="relative mx-auto w-full max-w-7xl">
        {/* === COMPACT IDENTITY LOCKUP === */}
        <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-emerald-800/70 md:mb-10 md:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600/40"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
          </span>
          <span className="tracking-wider">Zentra · Sustainable Energy & Communities</span>
        </div>

        {/* === TWO-COLUMN – compact, balanced === */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT – TYPOGRAPHY (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-3xl font-light leading-[1.2] tracking-tight text-slate-900 md:text-4xl lg:text-5xl xl:text-6xl">
              Building
              <span className="relative block font-semibold text-emerald-800 mt-1 md:mt-2">
                Self-Sustaining
                {/* <span className="absolute -bottom-1.5 left-0 h-0.5 w-20 bg-emerald-400/70 md:w-24"></span> */}
              </span>
              <span className="block text-slate-800 font-light italic">
                Green Communities
              </span>
            </h1>

            {/* MISSION – compact green slash */}
            <div className="relative mt-6 pl-6 md:mt-7 md:pl-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent"></div>
              <div className="space-y-2 max-w-xl">
                <p className="text-sm text-slate-800 md:text-base leading-relaxed">
                  Zentra municipal infrastructure for renewable energy,
                  closed-loop water, and biodiversity corridors verified through
                  performance‑based public‑private partnership.
                </p>
                <p className="text-xs italic text-emerald-800/90 md:text-sm">
                  Resilient by design. Measured by impact.
                </p>
              </div>
            </div>

            {/* CTA – compact */}
            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <a
                href="#framework"
                className="group relative rounded-md bg-emerald-700 px-6 py-2.5 text-xs font-medium text-white shadow-md transition-all hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 md:px-7 md:py-3 md:text-sm overflow-hidden"
              >
                <span className="relative z-10">Report Issue</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-emerald-800 to-emerald-700 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </a>
              <a
                href="#get-involved"
                className="rounded-md border border-slate-300 bg-white/80 px-6 py-2.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-emerald-400 hover:bg-white hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 md:px-7 md:py-3 md:text-sm"
              >
                Get Involved
              </a>
              <a
                href="#impact"
                className="group flex items-center gap-1 rounded-md px-5 py-2.5 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 md:px-6 md:py-3 md:text-sm"
              >
                View Impact
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT – METRICS CARD: compact, floating (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-200/70 bg-white/90 p-5 shadow-xl backdrop-blur-sm lg:p-6">
              <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-b from-emerald-300/20 to-transparent opacity-70 blur"></div>

              {/* HEADER */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100/70">
                  <svg
                    className="h-3.5 w-3.5 text-emerald-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  City‑Scale Standards
                </h3>
              </div>

              {/* METRICS – tighter */}
              <div className="mt-4 space-y-3">
                {[
                  { label: "Annual energy (per district)", value: "18.4 GWh" },
                  { label: "Water independence", value: "96%" },
                  { label: "Green infrastructure", value: "42% → 78% (2030)" },
                  { label: "Active municipal pilots", value: "14 cities" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-xs text-slate-600">{item.label}</span>
                    <span className="font-mono text-base font-medium text-slate-900 tabular-nums">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CERTIFICATION BADGE – compact */}
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-gradient-to-r from-emerald-50/90 to-emerald-50/60 px-3 py-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200/50">
                  <svg
                    className="h-3 w-3 text-emerald-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-900">
                    LEED Platinum · Net Zero Carbon
                  </p>
                  {/* <p className="text-[11px] text-emerald-700/70">
                    Verified by USGBC
                  </p> */}
                </div>
              </div>

              <div className="absolute bottom-0 right-4 left-4 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* MOBILE METRICS – compact */}
        <div className="mt-8 block border-t border-slate-200 pt-6 lg:hidden">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Energy/district", value: "18.4 GWh" },
              { label: "Water independence", value: "96%" },
              { label: "Green infra", value: "78% target" },
              { label: "Pilot cities", value: "14" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="font-mono text-sm font-semibold text-slate-900 tabular-nums">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SEAL */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent"></div>
    </section>
  );
};

export default Hero;