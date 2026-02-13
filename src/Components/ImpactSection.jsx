import React, { useState, useEffect, useRef } from "react";

// Counter animation hook
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration, start]);

  return { count, ref };
};

const ImpactSection = () => {
  // Environmental metrics
  const carbonReduction = useCounter(40, 2000);
  const wasteReduction = useCounter(30, 2000);
  const waterSaved = useCounter(2.5, 2000);
  const biodiversity = useCounter(12, 2000);

  // Economic metrics
  const energyCostSavings = useCounter(25, 2000);
  const jobsCreated = useCounter(2340, 2500);
  const localProcurement = useCounter(68, 2000);
  const propertyValue = useCounter(14, 2000);

  // Social metrics
  const households = useCounter(6200, 2200);
  const trainingGraduates = useCounter(2340, 2200);
  const volunteerHours = useCounter(18500, 2500);
  const communityOrgs = useCounter(38, 2000);

  // Impact metrics with detailed source attribution
  const impactCategories = [
    {
      id: "environmental",
      title: "Environmental",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "emerald",
      metrics: [
        {
          label: "Carbon reduction",
          value: carbonReduction.count,
          unit: "%",
          suffix: "%",
          comparison: "vs. conventional baseline",
          source: "Third‑party verified, 2026",
          trend: "positive",
          detail: "42,000 tCO₂e avoided annually",
        },
        {
          label: "Waste diversion",
          value: wasteReduction.count,
          unit: "%",
          suffix: "%",
          comparison: "from landfill",
          source: "Operational data, all clusters",
          trend: "positive",
          detail: "78% diversion rate achieved in Oakwood",
        },
        {
          label: "Water savings",
          value: waterSaved.count,
          unit: "M",
          suffix: "M L/day",
          comparison: "per cluster",
          source: "Smart metering, real‑time",
          trend: "positive",
          detail: "Closed‑loop recovery systems",
        },
        {
          label: "Biodiversity corridors",
          value: biodiversity.count,
          unit: "",
          suffix: " acres",
          comparison: "restored or protected",
          source: "Ecological assessment, 2026",
          trend: "positive",
          detail: "Native species repopulation verified",
        },
      ],
    },
    {
      id: "economic",
      title: "Economic",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "emerald",
      metrics: [
        {
          label: "Energy cost savings",
          value: energyCostSavings.count,
          unit: "%",
          suffix: "%",
          comparison: "vs. traditional grid",
          source: "DOE benchmarking, 2026",
          trend: "positive",
          detail: "$4.2M cumulative savings",
        },
        {
          label: "Local jobs created",
          value: jobsCreated.count,
          unit: "",
          suffix: "",
          comparison: "permanent positions",
          source: "Workforce development tracking",
          trend: "positive",
          detail: "86% retention rate",
        },
        {
          label: "Local procurement",
          value: localProcurement.count,
          unit: "%",
          suffix: "%",
          comparison: "of supply chain",
          source: "Vendor reporting, 2026",
          trend: "positive",
          detail: "₹23.6M circulating locally",
        },
        {
          label: "Property value uplift",
          value: propertyValue.count,
          unit: "%",
          suffix: "%",
          comparison: "vs. adjacent developments",
          source: "Municipal assessment, 2026",
          trend: "positive",
          detail: "Verified by independent appraisers",
        },
      ],
    },
    {
      id: "social",
      title: "Social",
      icon: (
        <svg className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "emerald",
      metrics: [
        {
          label: "Households served",
          value: households.count,
          unit: "",
          suffix: "",
          comparison: "across 14 clusters",
          source: "Census, Q1 2026",
          trend: "positive",
          detail: "Projected 22,000 by 2030",
        },
        {
          label: "Community operators trained",
          value: trainingGraduates.count,
          unit: "",
          suffix: "",
          comparison: "certified graduates",
          source: "Training database, 2026",
          trend: "positive",
          detail: "86% placed within 90 days",
        },
        {
          label: "Volunteer hours",
          value: volunteerHours.count,
          unit: "",
          suffix: " hrs",
          comparison: "contributed",
          source: "Volunteer management system",
          trend: "positive",
          detail: "1,240 active volunteers",
        },
        {
          label: "Community partners",
          value: communityOrgs.count,
          unit: "",
          suffix: "",
          comparison: "active collaborations",
          source: "Partnership registry",
          trend: "positive",
          detail: "Including 14 municipalities",
        },
      ],
    },
  ];

  // External verification badges
  const verifications = [
    {
      name: "LEED for Cities Platinum",
      issuer: "U.S. Green Building Council",
      year: "2026",
    },
    {
      name: "Net Zero Carbon Certification",
      issuer: "International Living Future Institute",
      year: "2026",
    },
    {
      name: "B Corp Impact Assessed",
      issuer: "B Lab",
      year: "2026",
    },
    {
      name: "Gold Standard for the SDGs",
      issuer: "Gold Standard Foundation",
      year: "2026",
    },
  ];

  return (
    <section className="bg-white px-4 py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header – institutional, confident */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>Verified Impact</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-3xl font-light text-slate-900 md:text-4xl lg:text-5xl">
            Measured. Verified.
            <span className="block font-semibold text-emerald-900">Delivered.</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-emerald-400/60 md:w-24" />
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-700 md:text-lg">
            Every metric on this page is independently verified, third‑party audited, and updated quarterly.
            These are not projections. These are outcomes from active clusters.
          </p>
        </div>

        {/* Three premium impact cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {impactCategories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl md:p-8"
            >
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              {/* Card header with icon */}
              <div className="relative flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 shadow-sm">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-700">
                      Live data • Q1 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics grid – 2x2 layout */}
              <div className="relative mt-6 grid grid-cols-2 gap-5">
                {category.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-baseline gap-0.5">
                      <span
                        ref={metric.value === 40 ? carbonReduction.ref : 
                              metric.value === 30 ? wasteReduction.ref :
                              metric.value === 2.5 ? waterSaved.ref :
                              metric.value === 12 ? biodiversity.ref :
                              metric.value === 25 ? energyCostSavings.ref :
                              metric.value === 2340 ? jobsCreated.ref :
                              metric.value === 68 ? localProcurement.ref :
                              metric.value === 14 ? propertyValue.ref :
                              metric.value === 6200 ? households.ref :
                              metric.value === 2340 ? trainingGraduates.ref :
                              metric.value === 18500 ? volunteerHours.ref :
                              communityOrgs.ref}
                        className="font-mono text-3xl font-bold text-emerald-800 transition-all duration-75"
                      >
                        {typeof metric.value === "number" 
                          ? metric.value.toLocaleString() 
                          : metric.value}
                      </span>
                      <span className="font-mono text-lg font-semibold text-emerald-700">
                        {metric.unit === "M" && "M"}
                        {metric.unit === "%" && "%"}
                        {metric.unit === "K" && "K"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-slate-900">
                      {metric.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-600">
                      {metric.comparison}
                    </p>
                    
                    {/* Hover detail – premium reveal */}
                    <div className="mt-2 overflow-hidden transition-all">
                      <p className="text-[9px] font-medium text-emerald-700 opacity-0 transition-opacity group-hover:opacity-100">
                        {metric.detail}
                      </p>
                    </div>
                    
                    {/* Source line */}
                    <div className="mt-1 flex items-center gap-1">
                      <svg className="h-2.5 w-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[8px] text-slate-500">{metric.source}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verification badge */}
              <div className="relative mt-6 flex items-center gap-2 rounded-lg border border-emerald-200/50 bg-emerald-50/50 p-3">
                <svg className="h-4 w-4 flex-shrink-0 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span className="text-[9px] font-medium text-slate-800">
                  Third‑party verified • Annual audit
                </span>
              </div>

              {/* Card accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/70 to-emerald-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Cumulative impact statement – premium typography */}
        <div className="relative mt-20 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 px-6 py-10 md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-emerald-700/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-600/20 blur-3xl" />
          
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  Cumulative impact • All clusters
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-white md:text-3xl lg:text-4xl">
                14 active clusters.
                <span className="block font-semibold text-emerald-300">187 modular units. 6,200 households.</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                Since 2024, Zentra has demonstrated that net‑zero, circular communities are not a 
                future aspiration—they are a present, replicable reality. Every metric on this page 
                is independently verified and publicly disclosed.
              </p>
            </div>
            
            {/* Verification partners */}
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">Verified by</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {verifications.map((v, i) => (
                  <div key={i} className="border-l-2 border-emerald-500/50 pl-3">
                    <p className="text-xs font-semibold text-white">{v.name}</p>
                    <p className="text-[9px] text-slate-400">{v.issuer} • {v.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Methodology & data transparency */}
        <div className="mt-16 grid gap-6 border-t border-slate-200 pt-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Measurement protocol</h4>
            <p className="mt-2 text-[10px] leading-relaxed text-slate-600">
              All environmental metrics follow GHG Protocol Scope 1 & 2, with third‑party verification by Apex Cos. 
              Economic data audited by Grant Thornton. Social metrics verified through independent community surveys.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Reporting frequency</h4>
            <p className="mt-2 text-[10px] leading-relaxed text-slate-600">
              Operational metrics updated quarterly. Full public impact report published annually each February. 
              Real‑time dashboards available for partner municipalities.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Open data commitment</h4>
            <p className="mt-2 text-[10px] leading-relaxed text-slate-600">
              All non‑confidential impact data is published in machine‑readable format via the Zentra Public Data Portal. 
              API access available for researchers and partner institutions.
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-12 text-center text-[9px] text-slate-400">
          <p>Verified impact period: 2024–2026 • Next public audit: Q2 2026 • All metrics shown are from operational clusters</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;