import React, { useState } from "react";

const IssueSubmission = () => {
  // Mock data for active issues
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
    },
  ]);

  // Categories for issue reporting
  const categories = [
    "Infrastructure",
    "Energy",
    "Water",
    "Waste",
    "Community",
    "Training",
    "Partnership",
    "Other",
  ];

  // Clusters for selection
  const clusters = [
    "Oakwood",
    "Riverside",
    "Southgate",
    "Northpoint",
    "Eastside",
    "Westend",
    "Downtown",
    "Other",
  ];

  // Priority levels
  const priorities = [
    { value: "low", label: "Low", color: "bg-blue-100 text-blue-800" },
    { value: "medium", label: "Medium", color: "bg-amber-100 text-amber-800" },
    { value: "high", label: "High", color: "bg-red-100 text-red-800" },
    { value: "critical", label: "Critical", color: "bg-red-600 text-white" },
  ];

  // Status badges
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-medium text-amber-800">Pending</span>;
      case "in-progress":
        return <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-medium text-blue-800">In Progress</span>;
      case "resolved":
        return <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-medium text-emerald-800">Resolved</span>;
      case "closed":
        return <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-800">Closed</span>;
      default:
        return <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-800">{status}</span>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <span className="rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-medium text-red-800">High</span>;
      case "medium":
        return <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-medium text-amber-800">Medium</span>;
      case "low":
        return <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-medium text-blue-800">Low</span>;
      case "critical":
        return <span className="rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-medium text-white">Critical</span>;
      default:
        return <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-800">{priority}</span>;
    }
  };

  return (
    <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>Issue Reporting & Resolution</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-2xl font-light text-slate-900 md:text-3xl lg:text-4xl">
            See something. Report something.
            <span className="block font-semibold text-emerald-900">We act on it.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
            Transparency is not optional. Every issue—technical, operational, or community—is logged,
            tracked, and resolved with clear accountability. No black boxes. No bureaucracy.
          </p>
        </div>

        {/* Main grid: Submission form + Stats */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Issue submission form - 7 cols */}
          <div className="lg:col-span-7">
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
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Submit a New Issue
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold text-emerald-800">
                  Average response: 4.2h
                </span>
              </div>

              <div className="mt-5">
                <form className="space-y-5">
                  {/* Row 1: Cluster + Category */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Cluster <span className="text-red-500">*</span>
                      </label>
                      <select className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="">Select cluster</option>
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
                      <select className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Priority + Reported By */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Priority <span className="text-red-500">*</span>
                      </label>
                      <select className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="">Select priority</option>
                        {priorities.map((p) => (
                          <option key={p.value} value={p.value}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Row 3: Issue Title */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700">
                      Issue Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brief, descriptive summary"
                      className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Row 4: Detailed Description */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700">
                      Detailed Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What did you observe? When? Where? Any relevant context or suggested resolution?"
                      className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Row 5: Attachments + Anonymous toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                          />
                        </svg>
                        Attach files
                      </button>
                      <span className="text-[10px] text-slate-500">Max 10MB • Images, PDFs, logs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="anonymous"
                        className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500"
                      />
                      <label htmlFor="anonymous" className="text-xs text-slate-700">
                        Submit anonymously
                      </label>
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-5">
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 bg-white px-5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-emerald-700 px-5 py-2 text-xs font-medium text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                    >
                      Submit Issue
                    </button>
                  </div>
                </form>
              </div>

              {/* Trust indicator */}
              <div className="mt-5 flex items-center gap-3 rounded-md bg-emerald-50/80 p-3 text-[10px]">
                <svg className="h-4 w-4 flex-shrink-0 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span className="text-slate-800">
                  <span className="font-medium">Verified reporter protocol:</span> All submissions receive a tracking ID and status updates. Retaliation is strictly prohibited.
                </span>
              </div>
            </div>
          </div>

          {/* Stats & Quick actions - 5 cols */}
          <div className="lg:col-span-5">
            <div className="grid h-full grid-cols-1 gap-6">
              {/* Metrics cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Open issues</span>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-800">
                      -2% vs last week
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-2xl font-bold text-slate-900">
                    {activeIssues.filter((i) => i.status !== "resolved" && i.status !== "closed").length}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span className="text-slate-600">3 high priority</span>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Resolved (30d)</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
                      +12% vs last month
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-2xl font-bold text-slate-900">47</p>
                  <div className="mt-3 flex items-center gap-2 text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-slate-600">Avg resolution: 3.2 days</span>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                    <span className="text-xs font-medium text-slate-800">Reporters</span>
                  </div>
                  <p className="mt-1 font-mono text-xl font-bold text-slate-900">86</p>
                  <p className="text-[10px] text-slate-600">Last 30 days</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                    <span className="text-xs font-medium text-slate-800">Resolution SLA</span>
                  </div>
                  <p className="mt-1 font-mono text-xl font-bold text-slate-900">94%</p>
                  <p className="text-[10px] text-slate-600">Within target timeframe</p>
                </div>
              </div>

              {/* Quick actions */}
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Quick Actions</h4>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-300 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                    My reports
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-300 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                    Track issue
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-300 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                      />
                    </svg>
                    Escalate
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 transition-all hover:border-emerald-300 hover:bg-emerald-50/50">
                    <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    Refresh
                  </button>
                </div>
              </div>

              {/* Report anon CTA */}
              <div className="rounded-lg bg-emerald-50/80 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-200/70">
                    <svg className="h-4 w-4 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Report anonymously</h5>
                    <p className="mt-1 text-[10px] text-slate-700">
                      No name required. No email required. Your identity is never recorded.
                    </p>
                    <button className="mt-2 rounded-md bg-white px-3 py-1.5 text-[10px] font-medium text-emerald-800 shadow-sm hover:bg-emerald-50">
                      Anonymous reporting portal →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active issues table - detailed view */}
        <div className="mt-12">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
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
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Active Issues & Updates
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500">Last updated: 2026-02-11 14:22</span>
                <select className="rounded-md border border-slate-300 bg-white px-2 py-1.5 text-[10px] text-slate-700 focus:border-emerald-500 focus:outline-none">
                  <option>All clusters</option>
                  {clusters.slice(0, 6).map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Table header */}
            <div className="mt-4 grid grid-cols-12 gap-2 px-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">
              <div className="col-span-1">ID</div>
              <div className="col-span-1">Cluster</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-3">Issue</div>
              <div className="col-span-1">Priority</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Reported</div>
              <div className="col-span-1">Assigned</div>
              <div className="col-span-1">Updates</div>
            </div>

            {/* Table rows */}
            <div className="mt-2 space-y-1">
              {activeIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="grid grid-cols-12 items-center gap-2 rounded-md px-2 py-2.5 text-xs transition-all hover:bg-slate-50"
                >
                  <div className="col-span-1 font-mono text-[10px] font-medium text-slate-700">
                    {issue.id}
                  </div>
                  <div className="col-span-1 text-xs font-medium text-slate-900">{issue.cluster}</div>
                  <div className="col-span-2 text-[10px] text-slate-700">{issue.category}</div>
                  <div className="col-span-3 text-xs text-slate-800">{issue.title}</div>
                  <div className="col-span-1">{getPriorityBadge(issue.priority)}</div>
                  <div className="col-span-1">{getStatusBadge(issue.status)}</div>
                  <div className="col-span-1 text-[10px] text-slate-600">
                    {new Date(issue.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </div>
                  <div className="col-span-1 text-[10px] text-slate-600">{issue.assignedTo}</div>
                  <div className="col-span-1">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                      {issue.updates}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination / View all */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-[10px] text-slate-600">
                Showing 6 of 24 active issues
              </span>
              <button className="flex items-center gap-1 text-[10px] font-medium text-emerald-700 hover:text-emerald-800">
                View all issues
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Issue lifecycle & transparency commitment */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Issue Resolution Protocol
                </h4>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-1 text-center text-[10px]">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xs font-bold text-emerald-800">1</span>
                  </div>
                  <span className="mt-2 font-medium text-slate-800">Reported</span>
                  <span className="text-slate-500">Acknowledged within 2h</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                    <span className="text-xs font-bold text-amber-800">2</span>
                  </div>
                  <span className="mt-2 font-medium text-slate-800">Triage</span>
                  <span className="text-slate-500">Priority assigned</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-xs font-bold text-blue-800">3</span>
                  </div>
                  <span className="mt-2 font-medium text-slate-800">Assigned</span>
                  <span className="text-slate-500">Owner identified</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-xs font-bold text-purple-800">4</span>
                  </div>
                  <span className="mt-2 font-medium text-slate-800">Resolution</span>
                  <span className="text-slate-500">Action taken</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xs font-bold text-emerald-800">5</span>
                  </div>
                  <span className="mt-2 font-medium text-slate-800">Closed</span>
                  <span className="text-slate-500">Verified & documented</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
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
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Public Transparency Board</h4>
                  <p className="mt-1 text-[10px] text-slate-700">
                    All issues and resolutions are published quarterly in machine‑readable format.
                    Community members may request full audit logs.
                  </p>
                  <button className="mt-2 text-[10px] font-medium text-emerald-700 hover:text-emerald-800">
                    View public dashboard →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-12 text-center text-[10px] text-slate-500">
          <p>Open reporting since 2024 • 100% of issues receive tracking ID • Retaliation‑free policy</p>
        </div>
      </div>
    </section>
  );
};

export default IssueSubmission;