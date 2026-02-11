import React from "react";

const ImplementationStrategy = () => {
  // Core implementation steps
  const steps = [
    {
      id: 1,
      title: "Identify Cluster",
      description:
        "Site selection based on density, infrastructure gap, community readiness, and municipal partnership potential.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      status: "completed",
    },
    {
      id: 2,
      title: "Assess Resources",
      description:
        "Energy potential, water availability, waste streams, and community assets. Baseline performance audit.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      status: "completed",
    },
    {
      id: 3,
      title: "Install Modular Units",
      description:
        "Deploy standardized energy, water, waste, and green infrastructure modules. 4–6 month installation window.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
      status: "in-progress",
    },
    {
      id: 4,
      title: "Train Community",
      description:
        "Workforce development, cooperative governance training, and local operations certification.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      status: "pending",
    },
    {
      id: 5,
      title: "Monitor & Optimize",
      description:
        "Real‑time performance tracking, predictive maintenance, and continuous efficiency gains.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      status: "pending",
    },
    {
      id: 6,
      title: "Scale to Adjacent Clusters",
      description:
        "Replicate model in neighboring districts. Shared infrastructure and cross‑cluster optimization.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      status: "pending",
    },
  ];

  // Reporting metrics for the dashboard
  const dashboardMetrics = [
    {
      category: "Active clusters",
      value: "14",
      change: "+3",
      period: "since Q1",
      icon: (
        <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      category: "Modular units deployed",
      value: "187",
      change: "+42",
      period: "this year",
      icon: (
        <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      category: "Community operators trained",
      value: "2,340",
      change: "+512",
      period: "2026",
      icon: (
        <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      category: "Carbon avoided",
      value: "12,450",
      unit: "tCO₂e",
      change: "+22%",
      period: "vs. baseline",
      icon: (
        <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const problemReports = [
    {
      id: "CL-4012",
      cluster: "Oakwood",
      issue: "Waste diversion rate below target",
      status: "in-progress",
      priority: "medium",
      date: "2026-02-10",
    },
    {
      id: "CL-3987",
      cluster: "Riverside",
      issue: "Community training completion delay",
      status: "pending",
      priority: "low",
      date: "2026-02-09",
    },
    {
      id: "CL-3952",
      cluster: "Southgate",
      issue: "Solar array output -12% below forecast",
      status: "resolved",
      priority: "high",
      date: "2026-02-08",
    },
    {
      id: "CL-3921",
      cluster: "Northpoint",
      issue: "Water recovery pump maintenance",
      status: "in-progress",
      priority: "high",
      date: "2026-02-07",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
      case "resolved":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">High</span>;
      case "medium":
        return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">Medium</span>;
      case "low":
        return <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">Low</span>;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white px-4 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600/40" />
            <span>Implementation Strategy</span>
            <span className="h-2 w-2 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-3xl font-light text-slate-900 md:text-4xl lg:text-5xl">
            From pilot to
            <span className="block font-semibold text-emerald-900">district‑wide network</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-700 md:text-lg">
            A replicable six‑phase deployment model. Each cluster becomes a template
            for the next—creating compounding efficiency and community capacity.
          </p>
        </div>

        {/* Horizontal stepper - desktop */}
        <div className="hidden lg:block">
          <div className="relative flex items-center justify-between">
            {/* Progress line */}
            <div className="absolute left-0 top-8 h-0.5 w-full bg-slate-200">
              <div
                className="absolute left-0 top-0 h-0.5 bg-emerald-600 transition-all"
                style={{ width: "33%" }}
              />
            </div>

            {/* Steps */}
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white transition-all ${
                    step.status === "completed"
                      ? "border-emerald-600 bg-emerald-50"
                      : step.status === "in-progress"
                      ? "border-emerald-600 ring-4 ring-emerald-600/10"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  <div
                    className={
                      step.status === "completed"
                        ? "text-emerald-700"
                        : step.status === "in-progress"
                        ? "text-emerald-700"
                        : "text-slate-400"
                    }
                  >
                    {step.icon}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="font-mono text-xs font-medium text-slate-500">
                    Step {String(step.id).padStart(2, "0")}
                  </span>
                  <h4 className="mt-1 text-base font-semibold text-slate-900">{step.title}</h4>
                  <p className="mt-2 max-w-[180px] text-xs text-slate-600">{step.description}</p>
                </div>
                <div className="mt-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(
                      step.status
                    )}`}
                  >
                    {step.status === "completed"
                      ? "Completed"
                      : step.status === "in-progress"
                      ? "In progress"
                      : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical timeline - mobile/tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-slate-200" />

            {/* Timeline items */}
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.id} className="relative flex gap-6">
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white ${
                        step.status === "completed"
                          ? "border-emerald-600 bg-emerald-50"
                          : step.status === "in-progress"
                          ? "border-emerald-600 ring-4 ring-emerald-600/10"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      <div
                        className={
                          step.status === "completed"
                            ? "text-emerald-700"
                            : step.status === "in-progress"
                            ? "text-emerald-700"
                            : "text-slate-400"
                        }
                      >
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-medium text-slate-500">
                        Step {String(step.id).padStart(2, "0")}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(
                          step.status
                        )}`}
                      >
                        {step.status === "completed"
                          ? "Completed"
                          : step.status === "in-progress"
                          ? "In progress"
                          : "Pending"}
                      </span>
                    </div>
                    <h4 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h4>
                    <p className="mt-2 text-sm text-slate-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated process flow - simple pulse animation on current step */}
        <div className="mt-16 rounded-lg bg-slate-50 p-6 md:mt-20 md:p-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </div>
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Current deployment phase
              </h4>
              <p className="mt-1 text-base font-medium text-slate-900">
                Step 03: Install Modular Units — 4 clusters active
              </p>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                  <span className="text-xs text-slate-600">Oakwood: 78% complete</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                  <span className="text-xs text-slate-600">Riverside: 62% complete</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                  <span className="text-xs text-slate-600">Southgate: 91% complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard grid - metrics + problem reporting */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {/* Performance metrics - 5 cols */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Implementation Dashboard
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  LIVE
                </span>
              </div>

              <div className="mt-5 space-y-5">
                {dashboardMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50">
                        {metric.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">{metric.category}</p>
                        {metric.unit && (
                          <p className="text-xs text-slate-500">{metric.unit}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xl font-semibold text-slate-900">
                        {metric.value}
                      </span>
                      <span className="ml-2 text-xs font-medium text-emerald-700">
                        {metric.change}
                      </span>
                      <p className="text-xs text-slate-500">{metric.period}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-md bg-emerald-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-700">Overall completion</span>
                  <span className="font-mono text-sm font-semibold text-emerald-800">47%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                  <div className="h-2 w-[47%] rounded-full bg-emerald-600" />
                </div>
                <p className="mt-2 text-xs text-slate-600">14 clusters • 187 units • 6,200 households</p>
              </div>
            </div>
          </div>

          {/* Problem reporting - 7 cols */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
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
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Active Issues & Alerts
                  </h3>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  {problemReports.filter((r) => r.status !== "resolved").length} open
                </span>
              </div>

              <div className="mt-5">
                <div className="grid grid-cols-12 gap-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  <div className="col-span-2">Cluster</div>
                  <div className="col-span-4">Issue</div>
                  <div className="col-span-2">Priority</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2">Date</div>
                </div>

                <div className="mt-3 space-y-3">
                  {problemReports.map((report) => (
                    <div
                      key={report.id}
                      className="grid grid-cols-12 items-center gap-3 rounded-md border border-slate-100 bg-white p-3 text-sm transition-all hover:bg-slate-50"
                    >
                      <div className="col-span-2">
                        <span className="font-medium text-slate-900">{report.cluster}</span>
                        <span className="ml-2 text-xs text-slate-500">{report.id}</span>
                      </div>
                      <div className="col-span-4 text-slate-800">{report.issue}</div>
                      <div className="col-span-2">{getPriorityBadge(report.priority)}</div>
                      <div className="col-span-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(
                            report.status
                          )}`}
                        >
                          {report.status === "in-progress"
                            ? "In progress"
                            : report.status === "pending"
                            ? "Pending"
                            : "Resolved"}
                        </span>
                      </div>
                      <div className="col-span-2 text-xs text-slate-600">{report.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Report new issue</span>
                </div>
                <span className="text-xs text-slate-500">Last updated: 2026-02-11 09:42</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scalability note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p>Implementation phases are standardized but adapt to local context and regulatory requirements.</p>
        </div>
      </div>
    </section>
  );
};

export default ImplementationStrategy;