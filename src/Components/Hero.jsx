import React from "react";
import { ArrowRight, ShieldCheck, Activity, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center bg-[#FCFDFC] px-6 py-12 md:py-20 lg:py-0 overflow-hidden font-sans">
      
      {/* Structural Accents - Minimal lines only, no heavy backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />
        <div className="absolute right-[5%] top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        
        {/* === COMPACT IDENTITY === */}
        <div className="mb-10 flex items-center gap-4">
          <div className="flex items-center justify-center bg-emerald-900 text-white p-1.5 rounded-sm">
            <ShieldCheck size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900">Zentra Systems</span>
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Institutional Framework · 2026</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
              Building <br />
              <span className="text-emerald-700">Self-Sustaining</span> <br />
              <span className="text-slate-400 font-light italic lowercase">Green Communities</span>
            </h1>

            <div className="relative mt-8 pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-emerald-600/20"></div>
              <div className="space-y-4 max-w-lg">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Deploying standardized municipal infrastructure for renewable energy, 
                  closed-loop water recovery, and biodiversity corridors—engineered for 
                  high-density urban resilience.
                </p>
                <div className="flex items-center gap-2 text-emerald-800">
                  <Activity size={14} className="animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                    Operational Status: Verified Optimal
                  </span>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="bg-emerald-900 text-white text-[11px] font-bold px-8 py-4 uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-sm">
                Report Issue
              </button>
              <button className="flex items-center gap-2 border border-slate-200 bg-white px-8 py-4 text-[11px] font-bold text-slate-700 hover:border-emerald-600 hover:text-emerald-800 transition-all">
                Get Involved
              </button>
              <button className="group flex items-center gap-2 px-4 py-2 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 transition-all">
                View Impact <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: METRICS CARD (Sharpened Blueprint Style) */}
          <div className="lg:col-span-5">
            <div className="relative border border-slate-200 bg-white p-6 md:p-8 shadow-[15px_15px_0px_0px_rgba(241,245,249,1)]">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2 text-emerald-900">
                  <Zap size={16} />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">City-Scale Standards</h3>
                </div>
                <span className="text-[9px] font-mono text-slate-300">REF_ID: ZN-442</span>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Annual District Energy", value: "18.4 GWh" },
                  { label: "Water Reclamation", value: "96.2%" },
                  { label: "Canopy Density", value: "42% → 78%" },
                  { label: "Municipal Pilots", value: "14 Cities" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-end justify-between border-b border-slate-50 pb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.label}</span>
                    <span className="font-mono text-sm font-bold text-slate-900 tabular-nums">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CERTIFICATION */}
              <div className="mt-8 flex items-center gap-4 bg-emerald-50/50 p-4 rounded-sm border border-emerald-100">
                <div className="p-2 bg-white border border-emerald-100">
                  <ShieldCheck size={18} className="text-emerald-700" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-950 uppercase tracking-widest">LEED Platinum Certified</p>
                  <p className="text-[9px] text-emerald-700/60 font-mono italic">Net Zero Carbon Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100"></div>
    </section>
  );
};

export default Hero;