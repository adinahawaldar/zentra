import React from "react";

const ProblemStatement = () => {
  // Core statistics – clean, authoritative
  const environmentStats = [
    {
      id: "waste",
      metric: "2.1B",
      unit: "tonnes",
      label: "Annual municipal waste",
      context: "Only 13% is diverted from landfills",
      impact: "+70% by 2050",
    },
    {
      id: "emissions",
      metric: "36.8",
      unit: "Gt CO₂",
      label: "Global energy emissions",
      context: "Buildings & districts account for 39%",
      impact: "2.1°C warming",
    },
  ];

  const economyStats = [
    {
      id: "inefficiency",
      metric: "$4.5T",
      unit: "annual",
      label: "Resource inefficiency cost",
      context: "Lost materials, energy, water",
      impact: "15% of global GDP at risk",
    },
    {
      id: "infrastructure",
      metric: "47%",
      unit: "of cities",
      label: "Lack decentralized infrastructure",
      context: "No district-scale renewable or circular systems",
      impact: "$2.1T investment gap",
    },
  ];

  const societyStats = [
    {
      id: "jobs",
      metric: "24M",
      unit: "jobs",
      label: "Green jobs gap",
      context: "Unmet potential in low-income communities",
      impact: "3.2x multiplier effect",
    },
    {
      id: "access",
      metric: "1.8B",
      unit: "people",
      label: "Lack sustainable infrastructure access",
      context: "Informal settlements, underserved districts",
      impact: "SDG 7 & 11 off-track",
    },
  ];

  const rootCauses = [
    "Urban waste crisis",
    "Rising carbon emissions",
    "Resource inefficiency",
    "Local unemployment",
    "No decentralized systems",
  ];

  return (
    <section className="bg-white px-4 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header – clean, centered, professional */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600/40"></span>
            <span>Infrastructure Deficit Assessment</span>
            <span className="h-2 w-2 rounded-full bg-emerald-600/40"></span>
          </div>
          <h2 className="font-serif text-3xl font-light text-slate-900 md:text-4xl lg:text-5xl">
            The problem with
            <span className="block font-semibold text-emerald-900">business as usual</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-700 md:text-lg">
            Current urban development models operate in silos—treating energy, water,
            waste, and social infrastructure as independent systems. The result is
            compounding liability across every dimension.
          </p>
        </div>

        {/* Root causes – clean, visual grid */}
        <div className="mb-20 grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-4">
          {rootCauses.map((cause, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50/30 md:px-6 md:py-3 md:text-base"
            >
              <span className="text-emerald-700">→</span>
              <span className="font-medium text-slate-800">{cause}</span>
            </div>
          ))}
        </div>

        {/* Three-pillar statistics – clean card grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Environment pillar */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                <svg
                  className="h-5 w-5 text-emerald-700"
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
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Environment
                </h3>
                <p className="text-xs text-slate-500">Climate + ecological systems</p>
              </div>
            </div>
            <div className="space-y-5">
              {environmentStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl font-bold text-slate-900 md:text-4xl">
                      {stat.metric}
                    </span>
                    <span className="text-sm font-medium text-slate-600">{stat.unit}</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-800">{stat.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.context}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-800">
                      Impact
                    </span>
                    <span className="text-slate-700">{stat.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Economy pillar */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-5 w-5 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Economy
                </h3>
                <p className="text-xs text-slate-500">Capital + resource productivity</p>
              </div>
            </div>
            <div className="space-y-5">
              {economyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl font-bold text-slate-900 md:text-4xl">
                      {stat.metric}
                    </span>
                    <span className="text-sm font-medium text-slate-600">{stat.unit}</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-800">{stat.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.context}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs">
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800">
                      Risk
                    </span>
                    <span className="text-slate-700">{stat.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Society pillar */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                <svg
                  className="h-5 w-5 text-amber-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Society
                </h3>
                <p className="text-xs text-slate-500">Equity + workforce + access</p>
              </div>
            </div>
            <div className="space-y-5">
              {societyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl font-bold text-slate-900 md:text-4xl">
                      {stat.metric}
                    </span>
                    <span className="text-sm font-medium text-slate-600">{stat.unit}</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-800">{stat.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.context}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs">
                    <span className="rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-800">
                      Gap
                    </span>
                    <span className="text-slate-700">{stat.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Systemic conclusion – clean, integrated */}
        <div className="mt-20 rounded-lg bg-slate-50 p-8 md:mt-24 md:p-10">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-200/50">
                  <svg
                    className="h-4 w-4 text-emerald-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Systemic failure
                </h4>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-base font-medium text-slate-800 md:text-lg">
                Energy, water, waste, and social infrastructure are planned and funded
                independently—preventing economies of scale and locking in carbon-intensive
                pathways for decades.
              </p>
              <p className="mt-4 text-sm text-slate-700">
                The absence of integrated, district‑scale sustainability frameworks means
                that cities remain dependent on centralized systems that are neither
                resilient nor equitable. Investment continues to flow into incremental
                efficiency rather than systemic transformation.
              </p>
              <div className="mt-6 text-xs text-slate-500">
                <span className="font-medium">Sources:</span> UNEP, IEA, World Bank, IPCC AR6
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;