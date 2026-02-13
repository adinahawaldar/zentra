import React from "react";
import adina from "../assets/adina.jpeg";

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

  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
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

        {/* Vision + Mission row */}
        <div className="grid gap-5 md:grid-cols-2 mb-10">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Vision</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-800">
              A world where every community has access to resilient, self‑sustaining infrastructure that regenerates rather than depletes.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Mission</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-800">
              To deploy integrated modular green clusters at scale—demonstrating that net‑zero, equitable neighborhoods are a present possibility.
            </p>
          </div>
        </div>

        {/* === FOUNDER STORY – COMPACT, PROFESSIONAL, READABLE === */}
        <div className="mt-6 mb-12 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
          <div className="grid md:grid-cols-12">
            {/* LEFT: Portrait – clean, focused */}
            <div className="md:col-span-4 bg-gradient-to-br from-emerald-50/50 to-white p-6 md:p-8 flex flex-col items-center justify-center border-r border-slate-100">
              <div className="relative mb-4">
                <div className="absolute -inset-1 rounded-full bg-emerald-200/50 blur-sm"></div>
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white shadow-md md:h-32 md:w-32">
                  <img 
                    src={adina} 
                    alt="Adina Hawaldar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Adina Hawaldar</h3>
              <p className="text-xs text-emerald-800 font-medium">Founder & Executive Director</p>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-600">
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-medium text-emerald-800">
                  Est. 2026
                </span>
                <span> • Navi-Mumbai</span>
              </div>
            </div>

            {/* RIGHT: Narrative – concise, authoritative */}
            <div className="md:col-span-8 p-6 md:p-8">
              <div className="mb-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-50"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                </span>
                <span className="text-[9px] font-medium uppercase tracking-wider text-emerald-800/70">
                  Founder's story
                </span>
              </div>
              
              <p className="text-sm text-slate-800 leading-relaxed">
                Before Zentra, Adina spent 15 years at Arup and the World Bank, designing urban infrastructure across 
                three continents. What she observed was consistent: billions in climate finance, yet communities remained 
                recipients, not owners. The technology existed. The capital existed. The model did not.
              </p>
              
              <div className="relative mt-4 border-l-3 border-emerald-600 bg-emerald-50/80 px-4 py-3 rounded-r-md">
                <p className="text-sm italic text-slate-800">
                  "The gap between pledge and performance isn't a technology gap. It's a design gap. 
                  Zentra is what happens when you put communities in control."
                </p>
              </div>
              
              <div className="mt-4 flex items-center gap-3 text-xs">
                <span className="font-medium text-emerald-800">— Adina Hawaldar</span>
                <span className="h-3 w-px bg-slate-300"></span>
                <span className="text-slate-600">Former: Arup Resilience Lead, World Bank Urban Advisory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why this exists - brief, pointed */}
        <div className="mt-8 rounded-lg bg-emerald-50/70 p-5 border border-emerald-100">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-200/70">
              <svg className="h-4 w-4 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Why this exists</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-800">
                Because incremental reform has failed. <span className="font-medium text-emerald-800">Zentra is not another study or pledge.</span> 
                It is infrastructure that works, owned by the people it serves.
              </p>
            </div>
          </div>
        </div>

        {/* Research + founding */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span>MIT Urban Systems Lab • Stanford Sustainable Systems Lab</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-800">Founded 2024</span>
            <span className="text-slate-600">501(c)(3) fiscal sponsorship</span>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 text-center text-[10px] text-slate-500">
          <p>A public‑private initiative • Fully audited • Radical transparency</p>
        </div>
      </div>
    </section>
  );
};

export default AboutInitiative;