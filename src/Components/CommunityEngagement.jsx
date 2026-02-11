import React from "react";

const CommunityEngagement = () => {
  // Engagement programs
  const programs = [
    {
      id: "volunteer",
      title: "Volunteer Program",
      description:
        "Hands-on participation in cluster installation, community greening, and circular economy initiatives. No prior experience required—training provided.",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      metrics: [
        { label: "Active volunteers", value: "1,240" },
        { label: "Hours contributed", value: "18.5K" },
      ],
      action: {
        label: "Become Volunteer",
        href: "#volunteer",
      },
    },
    {
      id: "workshops",
      title: "Local Training Workshops",
      description:
        "Certification programs in modular infrastructure operations, smart monitoring, and cooperative governance. Pathway to permanent employment within clusters.",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      metrics: [
        { label: "Graduates", value: "2,340" },
        { label: "Placement rate", value: "86%" },
      ],
      action: {
        label: "Find Workshop",
        href: "#workshops",
      },
    },
    {
      id: "partner",
      title: "Partner With Us",
      description:
        "Strategic collaboration for municipalities, utilities, developers, and mission-aligned organizations. Joint implementation, research, or investment partnerships.",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      metrics: [
        { label: "Active partners", value: "38" },
        { label: "Municipalities", value: "14" },
      ],
      action: {
        label: "Become Partner",
        href: "#partner",
        primary: true,
      },
    },
    {
      id: "pilot",
      title: "Join Pilot Program",
      description:
        "Be among the first communities to adopt the Green Cluster Model. Priority access to implementation, technical assistance, and impact funding.",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      metrics: [
        { label: "Pilot slots", value: "8" },
        { label: "Applications", value: "23" },
      ],
      action: {
        label: "Request Implementation",
        href: "#pilot",
        primary: true,
      },
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Orientation: Green Cluster Model",
      date: "2026-03-15",
      time: "18:30",
      location: "Oakwood Community Center",
      type: "workshop",
    },
    {
      id: 2,
      title: "Partner Information Session",
      date: "2026-03-22",
      time: "10:00",
      location: "Virtual (Zoom)",
      type: "partner",
    },
    {
      id: 3,
      title: "Volunteer Training: Solar Installation",
      date: "2026-04-02",
      time: "09:00",
      location: "Riverside Cluster",
      type: "volunteer",
    },
    {
      id: 4,
      title: "Pilot Program Application Deadline",
      date: "2026-04-15",
      time: "23:59",
      location: "Online",
      type: "pilot",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "The training program gave me the skills to become a certified cluster operator. Now I'm leading my own team.",
      author: "Maria González",
      role: "Community Operator, Oakwood",
      imageInitials: "MG",
    },
    {
      id: 2,
      quote: "Partnering with Zentra allowed our city to accelerate our climate goals by nearly a decade.",
      author: "James Chen",
      role: "Sustainability Director, City of Riverside",
      imageInitials: "JC",
    },
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case "workshop":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "partner":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "volunteer":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "pilot":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header - compact */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>Community Engagement</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-2xl font-light text-slate-900 md:text-3xl lg:text-4xl">
            Participate. Partner.
            <span className="block font-semibold text-emerald-900">Lead the transition.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
            The Green Cluster Model is built for and with communities. Join a growing movement
            of residents, municipalities, and organizations creating resilient neighborhoods.
          </p>
        </div>

        {/* Four program cards - compact grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50">
                  {program.icon}
                </div>
                {program.action.primary && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-base font-semibold text-slate-900">{program.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">{program.description}</p>

              {/* Metrics */}
              <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3">
                {program.metrics.map((metric, idx) => (
                  <div key={idx} className="flex-1">
                    <p className="text-[10px] text-slate-500">{metric.label}</p>
                    <p className="font-mono text-sm font-semibold text-slate-900">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5">
                <a
                  href={program.action.href}
                  className={`inline-flex w-full items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-all ${
                    program.action.primary
                      ? "bg-emerald-700 text-white shadow-sm hover:bg-emerald-800"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {program.action.label}
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA row - prominent actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#partner"
            className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-emerald-800 hover:shadow-md md:px-8 md:py-3.5"
          >
            Become Partner
          </a>
          <a
            href="#pilot"
            className="rounded-md border-2 border-emerald-700 bg-white px-6 py-3 text-sm font-medium text-emerald-800 transition-all hover:bg-emerald-50 hover:shadow-md md:px-8 md:py-3.5"
          >
            Request Implementation
          </a>
          <a
            href="#community"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 md:px-8 md:py-3.5"
          >
            Join Community
          </a>
        </div>

        {/* Events + Testimonials grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Upcoming events - 7 cols */}
          <div className="lg:col-span-7">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Upcoming Events
                  </h3>
                </div>
                <span className="text-[10px] text-slate-500">4 events</span>
              </div>

              <div className="mt-3 space-y-2">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="grid grid-cols-12 items-center gap-2 rounded-md border border-slate-100 bg-white p-3 text-xs transition-all hover:bg-slate-50"
                  >
                    <div className="col-span-5 flex items-center gap-2 md:col-span-4">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${getEventTypeColor(
                          event.type
                        )}`}
                      >
                        {event.type === "workshop"
                          ? "Workshop"
                          : event.type === "partner"
                          ? "Partner"
                          : event.type === "volunteer"
                          ? "Volunteer"
                          : "Pilot"}
                      </span>
                      <span className="font-medium text-slate-900">{event.title}</span>
                    </div>
                    <div className="col-span-3 flex items-center gap-1 text-slate-600 md:col-span-3">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      <span className="text-[10px]">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1 text-slate-600 md:col-span-2">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[10px]">{event.time}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1 text-slate-600 md:col-span-3">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="truncate text-[10px]">{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-[10px] text-slate-600">
                  <span className="font-medium">+12</span> additional events this month
                </span>
                <a
                  href="#events"
                  className="flex items-center gap-1 text-[10px] font-medium text-emerald-700 hover:text-emerald-800"
                >
                  View calendar
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials - 5 cols */}
          <div className="lg:col-span-5">
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
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Community Voices
                </h3>
              </div>

              <div className="mt-4 space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-xs font-medium text-emerald-800">
                        {testimonial.imageInitials}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs italic text-slate-800">"{testimonial.quote}"</p>
                      <div className="mt-2">
                        <p className="text-xs font-medium text-slate-900">{testimonial.author}</p>
                        <p className="text-[10px] text-slate-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-md bg-emerald-50/80 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-200">
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
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-900">Join our community</p>
                    <p className="mt-1 text-[10px] text-slate-700">
                      Subscribe for monthly updates, event invitations, and pilot opportunities.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-1 rounded-md border border-slate-300 px-3 py-1.5 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <button className="rounded-md bg-emerald-700 px-4 py-1.5 text-xs font-medium text-white hover:bg-emerald-800">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner logos / affiliation */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="text-center text-[10px] font-medium uppercase tracking-wider text-slate-500">
            Community partners
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-xs font-semibold text-slate-800">Community Foundation</span>
            <span className="text-xs font-semibold text-slate-800">National Civic League</span>
            <span className="text-xs font-semibold text-slate-800">Urban Sustainability Directors Network</span>
            <span className="text-xs font-semibold text-slate-800">Green America</span>
            <span className="text-xs font-semibold text-slate-800">Habitat for Humanity</span>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-12 text-center text-[10px] text-slate-500">
          <p>84 active community partners • 2,340 trained residents • 1,240 volunteers</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;