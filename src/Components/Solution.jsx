import React from "react";

const SolutionImplementation = () => {
  // Core principles of the cluster model
  const principles = [
    {
      id: "decentralized",
      title: "Decentralized units",
      description:
        "District‑scale infrastructure clusters operating independently while connected to regional grids. Each unit manages energy, water, and waste at the community level.",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      id: "community",
      title: "Community‑driven",
      description:
        "Local governance, cooperative ownership, and workforce development integrated into each cluster. Communities are active participants, not passive recipients.",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
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
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
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
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m14.25-7.5v16.5M8.25 3v1.5M12 3v1.5m-3.75 18v-6.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v6.75m-4.5 0h4.5m6-10.5h.008v.008h-.008V15.5z" />
        </svg>
      ),
    },
  ];

  // Implementation steps - condensed to 4 core phases
  const phases = [
    {
      id: 1,
      title: "Identify & Assess",
      description: "Site selection, infrastructure gap analysis, community readiness, and resource auditing.",
      status: "completed",
    },
    {
      id: 2,
      title: "Install Modular Units",
      description: "Deploy standardized energy, water, waste, and green infrastructure modules. 4–6 month installation.",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Train & Activate",
      description: "Workforce development, cooperative governance training, and local operations certification.",
      status: "pending",
    },
    {
      id: 4,
      title: "Monitor & Scale",
      description: "Real‑time performance tracking, optimization, and replication to adjacent districts.",
      status: "pending",
    },
  ];

  // Performance metrics - consolidated
  const metrics = [
    {
      category: "Active clusters",
      value: "14",
      change: "+3",
      icon: (
        <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      category: "Modular units",
      value: "187",
      change: "+42",
      icon: (
        <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      category: "Operators trained",
      value: "2,340",
      change: "+512",
      icon: (
        <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      category: "Carbon avoided",
      value: "12.4K",
      unit: "tCO₂e",
      change: "+22%",
      icon: (
        <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  // Active issues - simplified
  const activeIssues = [
    {
      cluster: "Oakwood",
      issue: "Waste diversion below target",
      priority: "medium",
      status: "in-progress",
    },
    {
      cluster: "Southgate",
      issue: "Solar output -12% below forecast",
      priority: "high",
      status: "resolved",
    },
    {
      cluster: "Northpoint",
      issue: "Water pump maintenance",
      priority: "high",
      status: "in-progress",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
      case "resolved":
        return "bg-emerald-100 text-emerald-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">High</span>;
      case "medium":
        return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">Med</span>;
      case "low":
        return <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">Low</span>;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header - clean, unified */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>Solution & Implementation</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-2xl font-light text-slate-900 md:text-3xl lg:text-4xl">
            Integrated Modular
            <span className="block font-semibold text-emerald-900">Green Cluster Model</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
            A district‑scale infrastructure system that functions like a living ecosystem—
            decentralized, circular, and governed by the communities it serves.
          </p>
        </div>

        {/* Four pillars - compact cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-emerald-300"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                {principle.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{principle.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Implementation roadmap + metrics - unified row */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Left: Roadmap - 7 cols */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Implementation roadmap
                </h3>
              </div>

              {/* Simple stepper - horizontal on desktop */}
              <div className="mt-5">
                <div className="relative hidden items-center justify-between md:flex">
                  <div className="absolute left-0 top-4 h-0.5 w-full bg-slate-200" />
                  {phases.map((phase, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white text-xs font-medium ${
                          phase.status === "completed"
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                            : phase.status === "in-progress"
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-600/20"
                            : "border-slate-300 text-slate-400"
                        }`}
                      >
                        {phase.id}
                      </div>
                      <span className="mt-2 text-xs font-medium text-slate-900">{phase.title}</span>
                      <span className={`mt-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${getStatusColor(phase.status)}`}>
                        {phase.status === "completed" ? "Done" : phase.status === "in-progress" ? "Active" : "Next"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mobile vertical */}
                <div className="space-y-3 md:hidden">
                  {phases.map((phase, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-medium ${
                          phase.status === "completed"
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                            : phase.status === "in-progress"
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-600/20"
                            : "border-slate-300 text-slate-400"
                        }`}
                      >
                        {phase.id}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-slate-900">{phase.title}</span>
                        <p className="text-[10px] text-slate-600">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active phase detail */}
                <div className="mt-4 rounded-md bg-emerald-50/80 p-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                    </span>
                    <span className="text-xs font-medium text-slate-800">Current: Phase 2 — Install Modular Units</span>
                  </div>
                  <p className="mt-1 text-[10px] text-slate-700">3 active clusters • Avg. 77% complete</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Metrics dashboard - 5 cols */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Live metrics
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                  REAL-TIME
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50">
                      {metric.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500">{metric.category}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-sm font-semibold text-slate-900">
                          {metric.value}
                        </span>
                        {metric.unit && <span className="text-[9px] text-slate-500">{metric.unit}</span>}
                      </div>
                      <span className="text-[9px] font-medium text-emerald-700">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress summary */}
              <div className="mt-4 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-slate-700">Deployment progress</span>
                  <span className="font-mono text-xs font-semibold text-emerald-800">47%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200">
                  <div className="h-1.5 w-[47%] rounded-full bg-emerald-600" />
                </div>
                <p className="mt-2 text-[9px] text-slate-500">14 clusters • 187 units • 6,200 households</p>
              </div>
            </div>
          </div>
        </div>

        {/* Circular system + Issues - unified row */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Circular resource cycle - compact */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-200/50">
                  <svg
                    className="h-3.5 w-3.5 text-emerald-800"
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
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Circular resource cycle
                </h3>
              </div>

              {/* Mini flow diagram - 5 steps */}
              <div className="flex items-center justify-between">
                {["Energy", "Use", "Waste", "Recycle", "Reuse"].map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                        <span className="text-[10px] font-mono font-semibold text-emerald-800">
                          {i + 1}
                        </span>
                      </div>
                      <span className="mt-1 text-[10px] font-medium text-slate-900">{item}</span>
                    </div>
                    {i < 4 && (
                      <svg className="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-3 text-center text-[9px] text-slate-600">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5">Closed‑loop · Zero waste</span>
              </div>
            </div>
          </div>

          {/* Active issues - compact */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-amber-700"
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
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Active issues
                  </h3>
                </div>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                  {activeIssues.filter((i) => i.status !== "resolved").length} open
                </span>
              </div>

              <div className="mt-3 space-y-2">
                {activeIssues.map((issue, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-md border border-slate-100 bg-white p-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-900">{issue.cluster}</span>
                        <span className="text-[9px] text-slate-500">{issue.issue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getPriorityBadge(issue.priority)}
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${getStatusColor(issue.status)}`}>
                        {issue.status === "in-progress" ? "Active" : issue.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 flex items-center justify-end">
                <span className="text-[9px] text-slate-500">Updated 02.11.26</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment phases - simple, no repetition */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Deployment scale</h4>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="font-mono text-sm font-semibold text-emerald-800">Phase 1</span>
                  <p className="text-xs font-medium text-slate-900">Pilot</p>
                  <p className="text-[10px] text-slate-600">50–200 units</p>
                </div>
                <div>
                  <span className="font-mono text-sm font-semibold text-emerald-800">Phase 2</span>
                  <p className="text-xs font-medium text-slate-900">Neighborhood</p>
                  <p className="text-[10px] text-slate-600">500–2,000 units</p>
                </div>
                <div>
                  <span className="font-mono text-sm font-semibold text-emerald-800">Phase 3</span>
                  <p className="text-xs font-medium text-slate-900">District</p>
                  <p className="text-[10px] text-slate-600">Multiple clusters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attribution - clean */}
        <div className="mt-10 text-center text-[9px] text-slate-400">
          <p>Standardized model • Adapts to local context • Performance‑based contracting</p>
        </div>
      </div>
    </section>
  );
};

export default SolutionImplementation;