import React from "react";
import { ArrowRight, ShieldCheck, Activity, Zap, Landmark, Globe, Menu, Search } from "lucide-react";

const CivicHero = () => {
  return (
    <section className="relative flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900">
      
      

      
      {/* 3. MAIN HERO CONTENT */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:py-0">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* LEFT: STATEMENT OF PURPOSE */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-1 mb-5 border border-emerald-100">
                <div className="h-1 w-1 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[9px] font-semibold uppercase tracking-widest text-emerald-800">
                  2026 Sustainability Mandate Active
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight">
               Building Resilience. <br />
                <span className="font-medium text-emerald-800">Elevating Standards of</span> <br />
                Living.
              </h1>

              <p className="mt-6 max-w-xl text-sm md:text-base text-slate-600 leading-relaxed">
                Zentra Systems provides the regulatory and technical framework for modern municipal 
                utilities. We ensure public infrastructure meets the highest standards of 
                renewable output, water security, and ecological integrity.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="bg-emerald-900 text-white text-[10px] font-semibold px-8 py-4 uppercase tracking-[0.15em] hover:bg-slate-900 transition-all shadow-md">
                  Report Infrastructure Issue
                </button>
                <button className="flex items-center gap-3 bg-white border border-slate-300 px-8 py-4 text-[10px] font-semibold text-slate-700 hover:bg-slate-50 transition-all uppercase tracking-[0.15em]">
                  View Public Charters
                </button>
              </div>
            </div>

            {/* RIGHT: ACCOUNTABILITY METRICS */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 p-1 shadow-xl">
                <div className="border border-slate-100 p-5 md:p-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <Activity size={14} className="text-emerald-700" />
                      <h3 className="text-[10px] font-semibold uppercase tracking-widest">Real-Time Impact Registry</h3>
                    </div>
                    <span className="text-[8px] text-slate-400 bg-slate-50 px-2 py-0.5">LIVE_DATA_FEED</span>
                  </div>

                  <div className="space-y-5">
                    {[
                      { label: "Aggregate Energy Offset", value: "842.12 MW", change: "+12%" },
                      { label: "Public Water Purity Index", value: "99.98%", change: "Stable" },
                      { label: "Active Reforestation Area", value: "14,200 Ha", change: "+4.2%" },
                      { label: "Chartered Municipalities", value: "48 Districts", change: "Verified" },
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[9px] font-medium text-slate-500 uppercase tracking-wider">{item.label}</span>
                          <span className="text-base font-light text-slate-900 tabular-nums tracking-tight">{item.value}</span>
                        </div>
                        <div className="flex justify-end">
                          <span className="text-[8px] font-semibold text-emerald-600 uppercase tracking-tight">{item.change}</span>
                        </div>
                        {idx !== 3 && <div className="mt-2 h-px w-full bg-slate-100" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-slate-900 p-4 text-white flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-widest opacity-80">Download Report</p>
                      <p className="text-[8px] opacity-60">Q1 2026 Fiscal & Impact Analysis</p>
                    </div>
                    <ArrowRight size={16} className="text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. NEWS TICKER FOOTER - HIGHLIGHTED GREEN BACKGROUND */}
      <div className="w-full bg-emerald-900 py-3 overflow-hidden border-t border-emerald-800 shadow-[0_-4px_20px_rgba(6,78,59,0.1)]">
        <div className="flex items-center whitespace-nowrap px-6">
          
          
          <div className="relative overflow-hidden">
            <div className="inline-flex gap-16 text-[9px] font-bold text-emerald-50 uppercase tracking-[0.1em] animate-marquee">
              <span>• New project approval: District 09 Solar Expansion</span>
              <span>• Public hearing scheduled for March 12th: Water Equity Act</span>
              <span>• Annual Resilience Summit registration now open for municipal leads</span>
              <span>• Global ISO-14001 certification renewed for all 2026 pilots</span>
              {/* Duplicate for seamless looping */}
              <span>• New project approval: District 09 Solar Expansion</span>
              <span>• Public hearing scheduled for March 12th: Water Equity Act</span>
              <span>• Annual Resilience Summit registration now open for municipal leads</span>
              <span>• Global ISO-14001 certification renewed for all 2026 pilots</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
};

export default CivicHero;