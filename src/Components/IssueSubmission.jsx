import React, { useState } from "react";

const CivicIssuePlatform = () => {
  const [activeIssues] = useState([
    {
      id: "ZTR-4012",
      cluster: "Oakwood",
      category: "Infrastructure",
      title: "Solar array output -12% below forecast",
      status: "in-progress",
      priority: "high",
      reportedBy: "Maria G.",
      date: "2026-02-08",
      assignedTo: "TechOps",
      updates: 4,
      source: "web",
      verified: true,
    },
    {
      id: "ZTR-3987",
      cluster: "Riverside",
      category: "Community",
      title: "Training workshop attendance below target",
      status: "pending",
      priority: "medium",
      reportedBy: "James C.",
      date: "2026-02-09",
      assignedTo: "Community Engagement",
      updates: 2,
      source: "mobile",
      verified: false,
    },
    {
      id: "ZTR-3952",
      cluster: "Southgate",
      category: "Waste",
      title: "Diversion rate lagging - 62% vs 78% target",
      status: "in-progress",
      priority: "high",
      reportedBy: "Elena V.",
      date: "2026-02-07",
      assignedTo: "Circular Ops",
      updates: 6,
      source: "web",
      verified: true,
    },
    {
      id: "ZTR-3921",
      cluster: "Northpoint",
      category: "Water",
      title: "Pump efficiency below threshold",
      status: "resolved",
      priority: "high",
      reportedBy: "Robert K.",
      date: "2026-02-05",
      assignedTo: "Maintenance",
      resolvedDate: "2026-02-10",
      updates: 8,
      source: "api",
      verified: true,
    },
    {
      id: "ZTR-3894",
      cluster: "Oakwood",
      category: "Community",
      title: "Volunteer coordinator needed",
      status: "pending",
      priority: "low",
      reportedBy: "Sarah L.",
      date: "2026-02-10",
      assignedTo: "Unassigned",
      updates: 1,
      source: "web",
      verified: false,
    },
    {
      id: "ZTR-3876",
      cluster: "Riverside",
      category: "Energy",
      title: "Battery storage calibration",
      status: "in-progress",
      priority: "medium",
      reportedBy: "David P.",
      date: "2026-02-06",
      assignedTo: "Energy Systems",
      updates: 5,
      source: "mobile",
      verified: true,
    },
  ]);

  const categories = [
    "Infrastructure",
    "Energy Systems",
    "Water & Sanitation",
    "Waste & Circularity",
    "Community Facilities",
    "Public Safety",
    "Training & Employment",
    "Partnership & Governance",
    "Other",
  ];

  const clusters = [
    "Oakwood",
    "Riverside",
    "Southgate",
    "Northpoint",
    "Eastside",
    "Westend",
    "Downtown",
    "Industrial Corridor",
    "Other",
  ];

  const priorities = [
    { value: "low", label: "Low", color: "bg-blue-100 text-blue-800", sla: "7 days" },
    { value: "medium", label: "Medium", color: "bg-amber-100 text-amber-800", sla: "3 days" },
    { value: "high", label: "High", color: "bg-red-100 text-red-800", sla: "24 hours" },
    { value: "critical", label: "Critical", color: "bg-red-600 text-white", sla: "4 hours" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-medium text-amber-700 ring-1 ring-amber-200">Pending review</span>;
      case "in-progress":
        return <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-700 ring-1 ring-blue-200">In progress</span>;
      case "resolved":
        return <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">Resolved</span>;
      case "closed":
        return <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600 ring-1 ring-slate-200">Closed</span>;
      default:
        return <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600 ring-1 ring-slate-200">{status}</span>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-medium text-red-700 ring-1 ring-red-200">High</span>;
      case "medium":
        return <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-medium text-amber-700 ring-1 ring-amber-200">Medium</span>;
      case "low":
        return <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-700 ring-1 ring-blue-200">Low</span>;
      case "critical":
        return <span className="rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-medium text-white ring-1 ring-red-600">Critical</span>;
      default:
        return <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600 ring-1 ring-slate-200">{priority}</span>;
    }
  };

  // Civic stats 
  const civicStats = [
    {
      label: "Open issues",
      value: activeIssues.filter((i) => i.status !== "resolved" && i.status !== "closed").length,
      trend: "-2%",
      trendLabel: "vs last week",
      priority: "3 high priority",
      color: "amber",
    },
    {
      label: "Resolved (30d)",
      value: "47",
      trend: "+12%",
      trendLabel: "vs last month",
      metric: "Avg resolution: 3.2 days",
      color: "emerald",
    },
    {
      label: "Active reporters",
      value: "86",
      subtext: "Last 30 days",
      color: "slate",
    },
    {
      label: "SLA compliance",
      value: "94%",
      subtext: "Within target timeframe",
      color: "slate",
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* === CIVIC IDENTITY HEADER === */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2.5">
              
              <h1 className="font-serif text-xl font-medium text-slate-900 md:text-2xl">
                Zentra Civic Resolution System
              </h1>
            </div>
            <p className="text-xs text-slate-600 md:text-sm">
              Public issue reporting • Real-time tracking • Transparent resolution
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 shadow-sm">
            <div className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </div>
            <span className="text-xs font-medium text-slate-800">System status: Operational</span>
            <span className="h-4 w-px bg-slate-200"></span>
            <span className="text-xs text-slate-600">Last sync: 2 min ago</span>
          </div>
        </div>

        {/* === CIVIC DASHBOARD HEADER === */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {civicStats.map((stat, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
                </span>
                {stat.trend && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
                      stat.color === "emerald"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {stat.trend}
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-2xl font-bold text-slate-900">{stat.value}</p>
              {stat.priority && (
                <div className="mt-2 flex items-center gap-2 text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                  <span className="text-slate-600">{stat.priority}</span>
                </div>
              )}
              {stat.metric && (
                <p className="mt-2 text-[10px] text-slate-600">{stat.metric}</p>
              )}
              {stat.subtext && (
                <p className="mt-2 text-[10px] text-slate-600">{stat.subtext}</p>
              )}
            </div>
          ))}
        </div>

        {/* === MAIN GRID: REPORTING + QUEUE === */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT: PUBLIC REPORTING FORM – 7 cols */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
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
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Report an issue</h3>
                    <p className="text-[10px] text-slate-600">Public submission • Tracking ID provided</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                  </span>
                  <span className="text-[9px] font-medium text-emerald-800">Avg response: 4.2h</span>
                </div>
              </div>

              <div className="mt-5">
                <form className="space-y-5">
                  {/* Row 1: Location + Category – civic format */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Cluster / Ward <span className="text-red-500">*</span>
                      </label>
                      <select className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600">
                        <option value="">Select location</option>
                        {clusters.map((cluster) => (
                          <option key={cluster} value={cluster}>
                            {cluster}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600">
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Priority + Contact – SLA visible */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Priority <span className="text-red-500">*</span>
                      </label>
                      <select className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600">
                        <option value="">Select priority (SLA)</option>
                        {priorities.map((p) => (
                          <option key={p.value} value={p.value}>
                            {p.label} – Response: {p.sla}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Your name (or "Anonymous")
                      </label>
                      <input
                        type="text"
                        placeholder="Full name or leave blank"
                        className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>
                  </div>

                  {/* Row 3: Issue Title */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700">
                      Brief description <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Broken water pump, illegal dumping, streetlight outage"
                      className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  {/* Row 4: Full Details */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700">
                      Full description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="When did you notice this? Where exactly? Is there immediate risk? Any additional context helps our team respond faster."
                      className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  {/* Row 5: Evidence + Anon toggle */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                          />
                        </svg>
                        Upload photo / document
                      </button>
                      <span className="text-[9px] text-slate-500">Max 10MB • JPG, PNG, PDF</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="civic-anon"
                        className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500"
                      />
                      <label htmlFor="civic-anon" className="text-xs text-slate-700">
                        Submit anonymously
                      </label>
                    </div>
                  </div>

                  {/* Submit + Tracking guarantee */}
                  <div className="flex items-center justify-between border-t border-slate-200 pt-5">
                    <div className="flex items-center gap-2 text-[9px] text-slate-600">
                      <svg className="h-3.5 w-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span>You will receive a tracking ID immediately</span>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-emerald-800 px-6 py-2.5 text-xs font-medium text-white shadow-sm hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
                    >
                      Submit report
                    </button>
                  </div>
                </form>
              </div>

              {/* Civic trust badge */}
              <div className="mt-5 rounded-md bg-emerald-50/80 p-3">
                <div className="flex items-start gap-2.5">
                  <svg className="h-5 w-5 flex-shrink-0 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-slate-900">Protected disclosure</p>
                    <p className="text-[9px] text-slate-700">
                      Retaliation against reporters is strictly prohibited. All submissions are logged and tamper‑evident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PUBLIC ISSUE QUEUE – 5 cols */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col gap-5">
              {/* Quick actions – civic tools */}
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
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
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Public services
                  </h4>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-400 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                    Track my report
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-400 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Public dashboard
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-400 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                      />
                    </svg>
                    Request update
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-400 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    Data export
                  </button>
                </div>
              </div>

              {/* Recent public issues – live feed */}
              <div className="flex-1 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
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
                        d="M2.25 12.76V12a9.75 9.75 0 1119.5 0v.76m-19.5 0a20.972 20.972 0 002.568 5.25m-2.568-5.25h2.25m16.5 0a20.972 20.972 0 01-2.568 5.25m2.568-5.25h-2.25M12 21a2.25 2.25 0 002.25-2.25v-.675c0-.484-.204-.942-.553-1.258m-3.394 0a1.752 1.752 0 00-.553 1.258v.675A2.25 2.25 0 0012 21z"
                      />
                    </svg>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Recent public reports
                    </h4>
                  </div>
                  <span className="text-[9px] text-slate-500">Live</span>
                </div>

                <div className="mt-3 max-h-[320px] space-y-2 overflow-y-auto">
                  {activeIssues.map((issue) => (
                    <div
                      key={issue.id}
                      className="flex items-start justify-between rounded-md border border-slate-100 bg-white p-3 transition-all hover:bg-slate-50/80"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] font-medium text-slate-500">
                            {issue.id}
                          </span>
                          <span className="h-3 w-px bg-slate-200"></span>
                          <span className="text-[9px] font-medium text-slate-700">
                            {issue.cluster}
                          </span>
                          {issue.verified && (
                            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs font-medium text-slate-900">{issue.title}</p>
                        <div className="mt-1.5 flex items-center gap-2">
                          {getPriorityBadge(issue.priority)}
                          {getStatusBadge(issue.status)}
                          <span className="text-[8px] text-slate-500">
                            {new Date(issue.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[8px] font-medium text-slate-700">
                          {issue.updates} updates
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-[9px] text-slate-600">
                    Showing 6 of 24 active reports
                  </span>
                  <button className="flex items-center gap-1 text-[9px] font-medium text-emerald-700 hover:text-emerald-800">
                    View all
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Anonymous reporting CTA – civic style */}
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/90 p-4">
                <div className="flex items-start gap-3">
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
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Anonymous reporting</h5>
                    <p className="mt-1 text-[9px] text-slate-700">
                      No name, no email, no IP logging. Your identity is never recorded.
                    </p>
                    <button className="mt-2 rounded-md bg-white px-3 py-1.5 text-[9px] font-medium text-emerald-800 shadow-sm hover:bg-emerald-50">
                      Submit anonymously →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === TRANSPARENCY COMMITMENT === */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Public Transparency Board</h4>
                <p className="mt-1 text-[10px] text-slate-700">
                  All issues and resolutions are published quarterly in open data format. 
                  Community members may request full audit logs.
                </p>
                <button className="mt-2 text-[10px] font-medium text-emerald-800 hover:text-emerald-900">
                  View public dashboard →
                </button>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Service Level Agreements</h4>
                <p className="mt-1 text-[10px] text-slate-700">
                  Critical: 4h • High: 24h • Medium: 3d • Low: 7d. Compliance tracked and published monthly.
                </p>
                <button className="mt-2 text-[10px] font-medium text-emerald-800 hover:text-emerald-900">
                  View SLA performance →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* === CIVIC FOOTER === */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[9px] text-slate-500">
            <span>Open reporting since 2024</span>
            <span className="h-3 w-px bg-slate-200"></span>
            <span>100% of issues receive tracking ID</span>
            <span className="h-3 w-px bg-slate-200"></span>
            <span>Retaliation‑free policy</span>
            <span className="h-3 w-px bg-slate-200"></span>
            <span>System status: Operational</span>
          </div>
          <p className="mt-4 text-[8px] text-slate-400">
            Zentra Civic Resolution System v2.6 • Public beta • All reports are public records unless marked confidential
          </p>
        </div>
      </div>
    </section>
  );
};

export default CivicIssuePlatform;