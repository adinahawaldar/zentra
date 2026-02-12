import React from "react";

const TechnologyFramework = () => {
  // Core technology pillars
  const techPillars = [
    {
      id: "iot",
      title: "Smart Monitoring Systems",
      description:
        "Real‑time sensor networks across energy, water, waste, and environmental quality. Sub‑minute telemetry with edge processing for fault detection and predictive maintenance.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      capabilities: ["Sub‑minute telemetry", "Edge processing", "Fault detection", "Predictive maintenance"],
    },
    {
      id: "iot-tracking",
      title: "IoT‑Based Asset Tracking",
      description:
        "LoRaWAN and 5G‑ready infrastructure for tracking modular units, resource flows, and community equipment. Geolocated performance data across all clusters.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      capabilities: ["LoRaWAN / 5G ready", "Geolocated telemetry", "Asset lifecycle", "Cross‑cluster visibility"],
    },
    {
      id: "ai",
      title: "AI Optimization Engine",
      description:
        "Machine learning models for load forecasting, waste diversion optimization, and water recycling efficiency. Continuously retrained on cluster performance data.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      capabilities: ["Load forecasting", "Waste diversion AI", "Water efficiency", "Continuous retraining"],
    },
    {
      id: "data-metrics",
      title: "Data‑Driven Sustainability Metrics",
      description:
        "Verified carbon accounting, water circularity index, and social equity indicators. Aligned with LEED, GRESB, and SDG reporting frameworks.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
      capabilities: ["Carbon accounting", "Water circularity", "Social equity", "ESG reporting"],
    },
    {
      id: "dashboard",
      title: "Unified Dashboard Integration",
      description:
        "Single pane of glass for municipal administrators, community operators, and investors. Role‑based views with real‑time alerts and predictive analytics.",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      capabilities: ["Role‑based views", "Real‑time alerts", "Predictive analytics", "Multi‑tenant"],
    },
  ];

  // Architecture diagram layers
  const architectureLayers = [
    {
      layer: "Frontend",
      title: "Presentation Layer",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-700",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      components: ["Municipal dashboards", "Community portals", "Mobile field apps", "Public transparency views"],
    },
    {
      layer: "Monitoring",
      title: "Monitoring & Telemetry",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-700",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      components: ["IoT sensor network", "Sub‑minute telemetry", "Edge processing", "Fault detection"],
    },
    {
      layer: "Analytics",
      title: "Analytics & Optimization",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-700",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      components: ["AI optimization", "Load forecasting", "Waste diversion", "Predictive maintenance"],
    },
    {
      layer: "Community Ops",
      title: "Community Operations",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-700",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      components: ["Cooperative governance", "Workforce tools", "Maintenance requests", "Community dashboards"],
    },
  ];

  // Data flow connections
  const dataFlows = [
    { from: "Monitoring", to: "Analytics", label: "Telemetry stream" },
    { from: "Analytics", to: "Frontend", label: "Optimization insights" },
    { from: "Frontend", to: "Community Ops", label: "Alerts & actions" },
    { from: "Community Ops", to: "Monitoring", label: "Manual overrides" },
  ];

  // Key metrics dashboard preview
  const dashboardMetrics = [
    { label: "Active sensors", value: "1,247", change: "+124", period: "this month" },
    { label: "AI optimizations", value: "8.2M", unit: "actions", change: "+18%", period: "efficiency gain" },
    { label: "Data points/sec", value: "14.7K", change: "+22%", period: "vs. Q1" },
    { label: "Clusters online", value: "14", change: "100%", period: "uptime" },
  ];

  return (
    <section className="bg-white px-4 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center md:mb-20 lg:mb-24">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600/40" />
            <span>Technology & Framework</span>
            <span className="h-2 w-2 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-3xl font-light text-slate-900 md:text-4xl lg:text-5xl">
            Intelligence infrastructure for
            <span className="block font-semibold text-emerald-900">resilient communities</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-700 md:text-lg">
            An integrated technology stack that connects physical infrastructure with
            real‑time analytics, community operations, and verified sustainability reporting.
          </p>
        </div>

        {/* Technology pillars - 5 card grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {techPillars.map((pillar, index) => (
            <div
              key={index}
              className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {pillar.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture diagram - custom 4-layer flow */}
        <div className="mt-20 rounded-xl bg-slate-50 p-8 md:mt-24 md:p-12">
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
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              System Architecture
            </h3>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              Frontend • Monitoring • Analytics • Community Ops
            </span>
          </div>

          {/* Desktop architecture diagram - horizontal flow */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between">
              {/* Connection lines */}
              <svg className="absolute left-0 top-16 h-32 w-full" preserveAspectRatio="none">
                {/* Monitoring → Analytics */}
                <line
                  x1="25%"
                  y1="70"
                  x2="42%"
                  y2="70"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                {/* Analytics → Frontend */}
                <line
                  x1="58%"
                  y1="70"
                  x2="75%"
                  y2="70"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                {/* Frontend → Community Ops */}
                <line
                  x1="91%"
                  y1="70"
                  x2="108%"
                  y2="70"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                {/* Community Ops → Monitoring (feedback loop) */}
                <path
                  d="M 108% 70 L 115% 70 L 115% 130 L 5% 130 L 5% 70 L 9% 70"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  fill="none"
                />
              </svg>

              {/* Layer nodes */}
              {architectureLayers.map((layer, index) => (
                <div key={layer.layer} className="relative z-10 w-1/4 px-2">
                  <div
                    className={`rounded-lg border-2 ${layer.color} bg-white p-5 shadow-sm transition-all hover:shadow-md`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-md ${layer.color}`}>
                        <span className={layer.iconColor}>{layer.icon}</span>
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          {layer.layer}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900">{layer.title}</h4>
                      </div>
                    </div>
                    <div className="mt-4 space-y-1.5">
                      {layer.components.map((comp, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs">
                          <span className="h-1 w-1 rounded-full bg-slate-400" />
                          <span className="text-slate-700">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow label - positioned below */}
                  {index < architectureLayers.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 w-32 -translate-x-1/2 text-center">
                      <span className="whitespace-nowrap text-xs font-medium text-slate-500">
                        {dataFlows[index]?.label}
                      </span>
                    </div>
                  )}
                  {index === architectureLayers.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 w-40 -translate-x-1/2 text-center">
                      <span className="whitespace-nowrap text-xs font-medium text-slate-500">
                        Feedback loop
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/tablet architecture diagram - vertical stack */}
          <div className="lg:hidden">
            <div className="relative flex flex-col space-y-6">
              {/* Vertical connection line */}
              <div className="absolute left-8 top-12 h-[calc(100%-3rem)] w-0.5 bg-slate-300" />

              {architectureLayers.map((layer, index) => (
                <div key={layer.layer} className="relative flex gap-4">
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${layer.color} bg-white`}>
                      <span className={layer.iconColor}>{layer.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`rounded-lg border ${layer.color} bg-white p-5 shadow-sm`}>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          {layer.layer}
                        </span>
                        <span className="text-sm font-semibold text-slate-900">{layer.title}</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {layer.components.map((comp, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs">
                            <span className="h-1 w-1 rounded-full bg-slate-400" />
                            <span className="text-slate-700">{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {index < architectureLayers.length - 1 && (
                      <div className="ml-4 mt-2 flex items-center gap-2 text-xs text-slate-500">
                        <svg className="h-4 w-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <span>{dataFlows[index]?.label}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture legend */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500/70" />
              <span className="text-slate-700">Presentation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <span className="text-slate-700">Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-purple-500/70" />
              <span className="text-slate-700">Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-500/70" />
              <span className="text-slate-700">Community Ops</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 border-0 border-b border-dashed border-slate-400" />
              <span className="text-slate-700">Data flow</span>
            </div>
          </div>
        </div>

        {/* Dashboard integration preview */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {/* Dashboard preview - 7 cols */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
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
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Unified Dashboard Interface
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  Role‑based access
                </span>
              </div>

              {/* Dashboard mockup */}
              <div className="mt-5">
                {/* Metrics row */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {dashboardMetrics.map((metric, idx) => (
                    <div key={idx} className="rounded-md bg-slate-50 p-3">
                      <p className="text-xs text-slate-600">{metric.label}</p>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="font-mono text-lg font-semibold text-slate-900">
                          {metric.value}
                        </span>
                        {metric.unit && (
                          <span className="text-xs text-slate-500">{metric.unit}</span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1">
                        <span className="text-xs font-medium text-emerald-700">
                          {metric.change}
                        </span>
                        <span className="text-xs text-slate-500">{metric.period}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder - simple visualization */}
                <div className="mt-6 rounded-md bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-700">Cluster performance • Last 30 days</span>
                    <span className="text-xs text-slate-500">Energy · Water · Waste</span>
                  </div>
                  <div className="mt-4 flex h-24 items-end gap-2">
                    <div className="flex h-16 w-full flex-col justify-end">
                      <div className="h-12 w-full rounded-t bg-emerald-600/80" style={{ height: "64px" }} />
                      <span className="mt-1 text-center text-xs text-slate-600">Wk1</span>
                    </div>
                    <div className="flex h-16 w-full flex-col justify-end">
                      <div className="h-14 w-full rounded-t bg-emerald-600" style={{ height: "72px" }} />
                      <span className="mt-1 text-center text-xs text-slate-600">Wk2</span>
                    </div>
                    <div className="flex h-16 w-full flex-col justify-end">
                      <div className="h-16 w-full rounded-t bg-emerald-600" style={{ height: "80px" }} />
                      <span className="mt-1 text-center text-xs text-slate-600">Wk3</span>
                    </div>
                    <div className="flex h-16 w-full flex-col justify-end">
                      <div className="h-10 w-full rounded-t bg-emerald-600/90" style={{ height: "56px" }} />
                      <span className="mt-1 text-center text-xs text-slate-600">Wk4</span>
                    </div>
                  </div>
                </div>

                {/* Role tabs */}
                <div className="mt-6 flex gap-2 border-t border-slate-100 pt-4">
                  <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-800">
                    Municipal Admin
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                    Community Operator
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                    Investor
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                    Public
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Data flow & integration - 5 cols */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
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
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Integration Capabilities
                </h3>
              </div>

              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-blue-100">
                    <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Municipal GIS Integration</p>
                    <p className="text-xs text-slate-600">Real‑time overlay with city planning systems, zoning, and infrastructure maps.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-purple-100">
                    <svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">SCADA & Building Management</p>
                    <p className="text-xs text-slate-600">Bidirectional communication with existing utility and facility control systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-amber-100">
                    <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">ESG & Compliance Reporting</p>
                    <p className="text-xs text-slate-600">Automated LEED, GRESB, and SDG reporting with verified audit trails.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-emerald-100">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Public API & Data Marketplace</p>
                    <p className="text-xs text-slate-600">Secure, granular data access for researchers, partners, and third‑party innovation.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-md bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-700">System status</span>
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium text-emerald-800">Operational</span>
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-600">API availability</span>
                  <span className="font-mono font-medium text-slate-900">99.97%</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs">
                  <span className="text-slate-600">Data latency</span>
                  <span className="font-mono font-medium text-slate-900">&lt;250ms</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs">
                  <span className="text-slate-600">Secure endpoints</span>
                  <span className="font-mono font-medium text-slate-900">24</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & certifications */}
        {/* <div className="mt-16 rounded-lg border border-slate-200 bg-white p-6 md:mt-20 md:p-8">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-3">
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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Certified compliance
                </h4>
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-800">
                  ISO 37122 (Sustainable Cities)
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-800">
                  LEED for Cities Platinum
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-800">
                  GRESB Infrastructure
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-800">
                  SOC 2 Type II
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-800">
                  GDPR / CCPA
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-800">
                  NIST Cybersecurity
                </span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Attribution */}
        {/* <div className="mt-12 text-center text-xs text-slate-500">
          <p>Technology stack validated by U.S. Department of Energy • Smart Grid Integration Program</p>
        </div> */}
      </div>
    </section>
  );
};

export default TechnologyFramework;