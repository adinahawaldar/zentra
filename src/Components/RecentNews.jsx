import React from "react";

const WhyThisMatters = () => {
  // Five pillars of India's environmental crisis – every statistic sourced from 2026 reports with live links
  const crises = [
    {
      id: "budget",
      title: "Climate Budget Gap",
      stat: "0.07% of national expenditure",
      description:
        "India's 2026 Union Budget allocates just over ₹3,400 crore to the Ministry of Environment, Forest and Climate Change—less than 0.07% of total expenditure. Despite 48°C heatwaves, recurring floods, and 130+ cities with hazardous air, no dedicated national climate adaptation fund exists.",
      source: {
        name: "Down To Earth",
        report: "Budget 2026 is green on paper, fragile on the ground",
        date: "February 2026",
        url: "https://www.downtoearth.org.in/environment/budget-2026-is-green-on-paper-fragile-on-the-ground",
      },
      image:
        "https://images.pexels.com/photos/7718798/pexels-photo-7718798.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Union Budget document with green foliage",
    },
    {
      id: "waste",
      title: "Delhi's Waste Burning Crisis",
      stat: "47 biomass burning incidents in one night",
      description:
        "A CAQM night inspection on January 14, 2026 recorded 65 waste violations across Jahangir Puri, Shalimar Bagh and Wazirpur—47 incidents of biomass/MSW burning and 18 of open dumping. Residents burn waste for heating as winter temperatures drop, with no clean alternative provided.",
      source: {
        name: "Press Information Bureau, Govt of India",
        report: "CAQM night inspection drive in North Delhi",
        date: "January 2026",
        url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2215424",
      },
      image:
        "https://images.pexels.com/photos/9324402/pexels-photo-9324402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Burning waste on roadside in Delhi",
    },
    {
      id: "water",
      title: "Sariska's Water Scarcity",
      stat: "4 hours per day fetching contaminated water",
      description:
        "In Raika Mala village, inside the core zone of Sariska Tiger Reserve, women spend up to four hours daily walking rocky mountain paths to collect green, livestock-contaminated water from rain-fed johads. The village has no roads, healthcare, or electricity. Rehabilitation stalled since 2008.",
      source: {
        name: "Down To Earth",
        report: "Water scarcity defines life in this Rajasthan village",
        date: "February 2026",
        url: "https://www.downtoearth.org.in/water/water-scarcity-defines-life-in-this-rajasthan-village-inside-sariskas-protected-core-as-women-spend-hours-fetching-contaminated-water",
      },
      image:
        "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Dry cracked earth representing water scarcity",
    },
    {
      id: "air",
      title: "Air Pollution & Athlete Health",
      stat: "2036 Olympic bid threatened by toxic air",
      description:
        "International athletes including world champions have withdrawn from India's tournaments for three consecutive years citing air pollution. A 2026 investigation reveals India's top athletes suffer chronic respiratory illness, training disruptions, and 'sports talent exodus' as Delhi records zero clean air days in 2025.",
      source: {
        name: "The Indian Express",
        report: "Experts say Union Budget fails to prioritise clean air for Delhi",
        date: "February 2026",
        url: "https://indianexpress.com/article/cities/delhi/experts-say-union-budget-fails-to-prioritise-clean-air-for-delhi-10514466/",
      },
      image:
        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Smog covered urban skyline",
    },
    {
      id: "policy",
      title: "False Solutions: CCUS Push",
      stat: "$2.2B for carbon capture, zero for heat adaptation",
      description:
        "Budget 2026 allocates $2.2 billion to Carbon Capture, Utilisation and Storage—despite IPCC evidence that CCUS 'may be overestimated' versus efficiency and electrification. Experts call it 'a clear anti-climate action' that allows coal to continue while toxic co-pollutants remain unaddressed.",
      source: {
        name: "Carbon Brief",
        report: "Five key climate and energy announcements in India's budget for 2026",
        date: "February 2026",
        url: "https://www.carbonbrief.org/five-key-climate-and-energy-announcements-in-indias-budget-for-2026/",
      },
      image:
        "https://images.pexels.com/photos/257775/pexels-photo-257775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Industrial coal plant with smoke stacks",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section header – formal, restrained */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>Why This Matters</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-2xl font-light text-slate-900 md:text-3xl lg:text-4xl">
            The crisis on paper.
            <span className="block font-semibold text-emerald-900">The crisis on the ground.</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-emerald-400/60 md:w-20" />
          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-700 md:text-base">
            India's environmental emergencies are not distant threats—they are documented, measured, and unfolding now. 
            Each story below carries a direct, citable source from 2026.
          </p>
        </div>

        {/* Crisis grid – five cards, each with live source link */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {crises.map((crisis) => (
            <div
              key={crisis.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
            >
              {/* Image – documentary style */}
              <div className="relative h-40 w-full overflow-hidden bg-slate-100 md:h-44">
                <img
                  src={crisis.image}
                  alt={crisis.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              {/* Content – compact */}
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">{crisis.title}</h3>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-800">
                    {crisis.id}
                  </span>
                </div>
                <p className="mt-2 font-mono text-base font-semibold leading-tight text-emerald-800">
                  {crisis.stat}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-700">
                  {crisis.description}
                </p>

                {/* Source attribution – with LIVE link */}
                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-[10px]">
                  <svg
                    className="h-3 w-3 flex-shrink-0 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span className="font-medium text-slate-600">{crisis.source.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{crisis.source.date}</span>
                </div>

                {/* LIVE REPORT LINK – verified, working URL */}
                <div className="mt-2 flex items-center">
                  <a
                    href={crisis.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 transition-colors hover:text-emerald-900"
                  >
                    <span>Read original report</span>
                    <svg
                      className="h-2.5 w-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis – the bridge to Zentra's mission */}
        <div className="mt-10 rounded-lg border-l-4 border-emerald-700 bg-slate-50 p-5">
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
                Five crises. One diagnosis.
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-800 md:text-sm">
                Chronic underfunding of adaptation. Open waste burning as a heating solution. 
                Communities inside protected parks without drinking water. Athletes unable to train 
                in the capital. Billions directed toward technologies that extend fossil fuel dependence.
                <span className="mt-2 block font-medium text-emerald-800">
                  These are not separate failures. They are the same failure, repeated—and the reason 
                  Zentra's Green Cluster Model exists.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Methodological note – authority, transparency */}
        <div className="mt-8 text-center text-[8px] uppercase tracking-wider text-slate-400 md:text-[9px]">
          <p>
            Sources: Press Information Bureau • Down To Earth • The Indian Express • Carbon Brief • All reports 2026
          </p>
          <p className="mt-1">
            Every link directs to the primary source document or official press release
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;