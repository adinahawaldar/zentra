import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-white px-4 py-16 md:py-20 lg:py-24">
      {/* Official top bar – environmental green signature */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600/70 via-emerald-500 to-emerald-600/70" />

      {/* Max width container – authoritative, centered */}
      <div className="relative mx-auto max-w-7xl">
        {/* Project identification – formal agency style */}
        <div className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-emerald-800/70 md:mb-10 md:text-base">
          <span className="relative flex h-2 w-2 rounded-full bg-emerald-600"></span>
          <span>Zentra • Division of Sustainable Energy & Communities</span>
        </div>

        {/* Main two-column layout – balanced, official */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left column: core messaging – 7 cols */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-3xl font-light leading-tight text-slate-900 md:text-4xl lg:text-5xl xl:text-6xl">
              Building Self-Sustaining
              <span className="block font-semibold text-emerald-800">
                Green Communities
              </span>
            </h1>

            {/* Mission statement – formal, block-quote style, green accent */}
            <div className="mt-6 space-y-3 border-l-4 border-emerald-300 bg-slate-50/50 pl-5 md:mt-8 md:pl-6">
              <p className="text-base text-slate-800 md:text-lg">
                Zentra develops integrated municipal infrastructure for
                renewable energy, closed-loop water systems, and biodiversity
                corridors.
              </p>
              <p className="text-base text-slate-700 md:text-lg">
                Our framework delivers verified net-zero districts through
                public-private partnership and performance-based contracting.
              </p>
              <p className="text-sm font-medium italic text-emerald-800/80 md:text-base">
                — Resilient by design. Measured by impact.
              </p>
            </div>

            {/* CTA group – clean, authoritative, green primary */}
            <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
              <a
                href="#framework"
                className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 md:px-7 md:py-3.5 md:text-base"
              >
                Explore Framework
              </a>
              <a
                href="#get-involved"
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 md:px-7 md:py-3.5 md:text-base"
              >
                Get Involved
              </a>
              <a
                href="#impact"
                className="rounded-md px-6 py-3 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 md:px-7 md:py-3.5 md:text-base"
              >
                View Impact
                <span className="ml-1.5">→</span>
              </a>
            </div>

            {/* Partner accreditation – institutional trust */}
            <div className="mt-10 border-t border-slate-200 pt-6 md:mt-14 md:pt-8">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                In collaboration with
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="text-sm font-semibold text-slate-800">
                  U.S. Dept. of Energy • Office of Clean Energy
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  HUD Green & Resilient Communities
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  C40 Cities Climate Leadership
                </span>
              </div>
            </div>
          </div>

          {/* Right column: performance data + city/energy metrics – 5 cols */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              {/* Section header – official reporting style */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
                <svg
                  className="h-5 w-5 text-emerald-600"
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
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  City‑Scale Performance Standards
                </h3>
              </div>

              {/* Metrics grid – clean, legible, data-heavy */}
              <div className="mt-5 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">
                    Annual energy generation (per district)
                  </span>
                  <span className="font-mono text-lg font-medium text-slate-900">
                    18.4 GWh
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">
                    Water independence
                  </span>
                  <span className="font-mono text-lg font-medium text-slate-900">
                    96%
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">
                    Green infrastructure coverage
                  </span>
                  <span className="font-mono text-lg font-medium text-slate-900">
                    42% → 78% (2030 target)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Active municipal pilots
                  </span>
                  <span className="font-mono text-lg font-medium text-slate-900">
                    14 cities
                  </span>
                </div>
              </div>

              {/* Certification & compliance – official green badge */}
              <div className="mt-6 flex items-start gap-3 rounded-md bg-emerald-50/80 px-4 py-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-emerald-800 md:text-sm">
                    LEED for Cities Platinum • Net Zero Carbon Certification
                  </p>
                  <p className="text-xs text-emerald-700/80">
                    Verified by U.S. Green Building Council
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile metrics summary – only visible on small screens */}
        <div className="mt-10 block border-t border-slate-200 pt-8 lg:hidden">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div>
              <p className="text-xs text-slate-500">Energy per district</p>
              <p className="font-mono text-base font-semibold text-slate-900">
                18.4 GWh
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Water independence</p>
              <p className="font-mono text-base font-semibold text-slate-900">
                96%
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Green infrastructure</p>
              <p className="font-mono text-base font-semibold text-slate-900">
                78% target
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Pilot cities</p>
              <p className="font-mono text-base font-semibold text-slate-900">
                14
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator – clean, official */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
    </section>
  );
};

export default Hero;