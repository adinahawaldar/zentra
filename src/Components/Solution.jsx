import React from "react";

const SolutionSection = () => {
  // Core principles of the cluster model
  const principles = [
    {
      id: "decentralized",
      title: "Decentralized units",
      description:
        "District‑scale infrastructure clusters operating independently while connected to regional grids. Each unit manages energy, water, and waste at the community level.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      id: "community",
      title: "Community‑driven operations",
      description:
        "Local governance, cooperative ownership, and workforce development integrated into each cluster. Communities are active participants, not passive recipients.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      id: "circular",
      title: "Circular resource cycle",
      description:
        "Materials, water, and nutrients remain in continuous use. Waste from one process becomes input for another—eliminating landfill disposal.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      ),
    },
    {
      id: "scalable",
      title: "Scalable implementation",
      description:
        "Standardized modules deploy in phases—from single neighborhood to entire district. Proven model adapts to urban density, suburban fabric, and new development.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m14.25-7.5v16.5M8.25 3v1.5M12 3v1.5m-3.75 18v-6.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v6.75m-4.5 0h4.5m6-10.5h.008v.008h-.008V15.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white px-4 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header – clean, authoritative */}
        <div className="mb-16 text-center md:mb-20 lg:mb-24">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600/40"></span>
            <span>Our Solution</span>
            <span className="h-2 w-2 rounded-full bg-emerald-600/40"></span>
          </div>
          <h2 className="font-serif text-3xl font-light text-slate-900 md:text-4xl lg:text-5xl">
            Integrated Modular
            <span className="block font-semibold text-emerald-900">Green Cluster Model</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-700 md:text-lg">
            A district‑scale infrastructure system that functions like a living ecosystem—
            decentralized, circular, and governed by the communities it serves.
          </p>
        </div>

        {/* Four pillars – clean card grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                {principle.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* System diagram – circular resource flow */}
        <div className="mt-20 rounded-xl bg-slate-50 p-8 md:mt-24 md:p-12 lg:mt-28">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200/50">
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
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Circular Resource Cycle
            </h3>
          </div>

          {/* Simple, clean diagram – Energy → Use → Waste → Recycle → Reuse */}
          <div className="flex flex-col items-center justify-center">
            {/* Desktop diagram – horizontal flow */}
            <div className="hidden w-full items-center justify-between lg:flex">
              {/* Energy */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-8 w-8 text-emerald-700"
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
                <span className="mt-3 font-mono text-sm font-medium text-emerald-800">01</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Energy</span>
                <span className="mt-0.5 text-xs text-slate-600">Solar / wind / storage</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <svg
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>

              {/* Use */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-8 w-8 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m-3 0h3M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <span className="mt-3 font-mono text-sm font-medium text-blue-800">02</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Use</span>
                <span className="mt-0.5 text-xs text-slate-600">Buildings / mobility / industry</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <svg
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>

              {/* Waste */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <svg
                    className="h-8 w-8 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </div>
                <span className="mt-3 font-mono text-sm font-medium text-amber-800">03</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Waste</span>
                <span className="mt-0.5 text-xs text-slate-600">Organic / material / water</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <svg
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>

              {/* Recycle */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-8 w-8 text-emerald-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                </div>
                <span className="mt-3 font-mono text-sm font-medium text-emerald-800">04</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Recycle</span>
                <span className="mt-0.5 text-xs text-slate-600">Processing / recovery</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <svg
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>

              {/* Reuse */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-8 w-8 text-emerald-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                    />
                  </svg>
                </div>
                <span className="mt-3 font-mono text-sm font-medium text-emerald-800">05</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Reuse</span>
                <span className="mt-0.5 text-xs text-slate-600">Input for new cycles</span>
              </div>
            </div>

            {/* Mobile diagram – vertical flow */}
            <div className="flex w-full flex-col items-center space-y-6 lg:hidden">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="mt-2 font-mono text-xs font-medium text-emerald-800">01</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Energy</span>
                <span className="text-xs text-slate-600">Solar / wind / storage</span>
              </div>
              <svg className="h-6 w-6 rotate-90 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m-3 0h3M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <span className="mt-2 font-mono text-xs font-medium text-blue-800">02</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Use</span>
                <span className="text-xs text-slate-600">Buildings / mobility / industry</span>
              </div>
              <svg className="h-6 w-6 rotate-90 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <svg className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <span className="mt-2 font-mono text-xs font-medium text-amber-800">03</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Waste</span>
                <span className="text-xs text-slate-600">Organic / material / water</span>
              </div>
              <svg className="h-6 w-6 rotate-90 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <span className="mt-2 font-mono text-xs font-medium text-emerald-800">04</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Recycle</span>
                <span className="text-xs text-slate-600">Processing / recovery</span>
              </div>
              <svg className="h-6 w-6 rotate-90 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <span className="mt-2 font-mono text-xs font-medium text-emerald-800">05</span>
                <span className="mt-1 text-base font-semibold text-slate-900">Reuse</span>
                <span className="text-xs text-slate-600">Input for new cycles</span>
              </div>
            </div>

            {/* Cycle annotation */}
            <div className="mt-10 flex items-center justify-center gap-2 rounded-full bg-emerald-100 px-5 py-2.5">
              <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
              <span className="text-sm font-medium text-emerald-900">Closed‑loop system · Zero waste design</span>
            </div>
          </div>
        </div>

        {/* Scalability summary */}
        <div className="mt-16 grid gap-6 rounded-lg border border-slate-200 bg-white p-8 md:grid-cols-3 md:p-10">
          <div className="col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Deployment phases</h4>
          </div>
          <div className="col-span-2">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="font-mono text-lg font-semibold text-emerald-800">Phase 1</div>
                <p className="mt-1 text-sm font-medium text-slate-900">Pilot cluster</p>
                <p className="mt-1 text-xs text-slate-600">50–200 housing units + community facilities</p>
              </div>
              <div>
                <div className="font-mono text-lg font-semibold text-emerald-800">Phase 2</div>
                <p className="mt-1 text-sm font-medium text-slate-900">Neighborhood scale</p>
                <p className="mt-1 text-xs text-slate-600">500–2,000 units + commercial integration</p>
              </div>
              <div>
                <div className="font-mono text-lg font-semibold text-emerald-800">Phase 3</div>
                <p className="mt-1 text-sm font-medium text-slate-900">District network</p>
                <p className="mt-1 text-xs text-slate-600">Multiple clusters, city‑wide interconnection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;