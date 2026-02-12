import React from "react";

const AboutInitiative = () => {
  // Core values
  const coreValues = [
    {
      id: "integrity",
      title: "Integrity",
      description:
        "We operate with full transparency, third‑party verification, and binding accountability to communities and partners.",
      icon: (
        <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      id: "decentralization",
      title: "Decentralization",
      description:
        "Infrastructure should be community‑owned, district‑scaled, and resilient—not centralized and brittle.",
      icon: (
        <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      id: "circularity",
      title: "Circularity",
      description:
        "Waste is a design flaw. We engineer systems where materials, water, and energy remain in continuous use.",
      icon: (
        <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      ),
    },
    {
      id: "equity",
      title: "Equity",
      description:
        "Sustainability cannot be achieved without justice. Benefits must flow to underserved communities first.",
      icon: (
        <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  // Timeline milestones
  const milestones = [
    {
      year: "2024",
      title: "Inception",
      description: "Zentra founded to address the gap between climate commitments and on‑ground implementation.",
    },
    {
      year: "2025",
      title: "First Pilot",
      description: "Oakwood cluster launched—14 modular units, 200 households, 78% waste diversion achieved.",
    },
    {
      year: "2026",
      title: "Scale Phase",
      description: "14 active clusters, 187 units deployed, partnership with U.S. Department of Energy.",
    },
    {
      year: "2030",
      title: "Target",
      description: "50 clusters, 50,000 jobs, 100% circularity in pilot communities.",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header - clean, minimal */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>About the initiative</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-2xl font-light text-slate-900 md:text-3xl lg:text-4xl">
            A response to
            <span className="block font-semibold text-emerald-900">infrastructure failure</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-emerald-400/60 md:w-20" />
        </div>

        {/* Vision + Mission row - compact, clean cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-emerald-300">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-4 w-4 text-emerald-700"
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
              <h3 className="text-base font-semibold text-slate-900">Vision</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-800">
              A world where every community—regardless of income or geography—has access to
              resilient, self‑sustaining infrastructure that regenerates rather than depletes.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span>Decentralized. Circular. Community‑owned.</span>
            </div>
          </div>

          {/* Mission */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-emerald-300">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-4 w-4 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Mission</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-800">
              To deploy integrated modular green clusters at scale—demonstrating that
              net‑zero, equitable neighborhoods are not a future aspiration but a present
              possibility.
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs">
              <span className="font-mono font-medium text-emerald-700">14 active clusters</span>
              <span className="h-3 w-px bg-slate-300" />
              <span className="font-mono font-medium text-emerald-700">2030: 50-cluster target</span>
            </div>
          </div>
        </div>

        {/* Founder narrative - clean, compact, green accent */}
        <div className="mt-10 rounded-lg border-l-4 border-emerald-600 bg-slate-50 p-5">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center gap-3 sm:w-1/4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200/80">
                <span className="font-serif text-sm font-semibold text-emerald-900">AH</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Adina Hawaldar</h4>
                <p className="text-xs text-slate-600">Founder & Executive Director</p>
              </div>
            </div>
            <div className="sm:w-3/4">
              <p className="text-xs italic leading-relaxed text-slate-800 md:text-sm">
                "I started Zentra because I kept seeing the same thing over and over:
                ambitious climate pledges, billions in funding—and yet nothing fundamental
                changed. The technology exists. The financing exists. What's missing is a model that
                connects them—and puts communities in control. That's what we're building."
              </p>
              <div className="mt-2 flex items-center gap-3 text-xs text-slate-600">
                <span>— Adina Hawaldar</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Est. 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core values - compact grid */}
        {/* <div className="mt-12">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100">
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Core values
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-emerald-300"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50">
                  {value.icon}
                </div>
                <h4 className="mt-3 text-sm font-semibold text-slate-900">{value.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Timeline - clean, compact */}
        {/* <div className="mt-12 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <svg
              className="h-4 w-4 text-emerald-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Our trajectory
            </h3>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-semibold text-emerald-800">
                    {milestone.year}
                  </span>
                  {index < milestones.length - 1 && (
                    <svg
                      className="hidden h-3 w-3 text-slate-400 md:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  )}
                </div>
                <h4 className="mt-1 text-xs font-semibold text-slate-900">{milestone.title}</h4>
                <p className="mt-0.5 text-xs text-slate-700">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Why this exists - clean accent */}
        <div className="mt-10 rounded-lg bg-emerald-50/70 p-5">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-200/70">
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
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Why this exists
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-800 md:text-sm">
                Because for decades, we've watched energy bleed into empty air. Water run 
                wasted. Communities wait for solutions that never arrive. <span className="font-medium text-emerald-800">Zentra is not another 
                study, another pledge, another report.</span> It is the thing itself—infrastructure 
                that works, owned by the people it serves.
              </p>
            </div>
          </div>
        </div>

        {/* Research + founding - minimal */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span>MIT Urban Systems Lab, Stanford Sustainable Systems Lab</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-800">
              Founded 2026
            </span>
            <span className="text-slate-600">501(c)(3) fiscal sponsorship</span>
          </div>
        </div>

        {/* Attribution - subtle */}
        <div className="mt-8 text-center text-[10px] text-slate-500">
          <p>A public‑private initiative • Fully audited • Radical transparency</p>
        </div>
      </div>
    </section>
  );
};

export default AboutInitiative;