import React, { useState, useEffect } from "react";

const ExpectedImpact = () => {
  // Animated counter hook
  const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      let startTime = null;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, start]);

    return count;
  };

  // Impact metrics data
  const environmentalMetrics = [
    {
      id: "carbon",
      title: "Reduced Carbon Emissions",
      value: 68,
      unit: "%",
      target: "70% by 2030",
      current: 42,
      baseline: "2024 baseline",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "waste",
      title: "Waste Reduction",
      value: 82,
      unit: "%",
      target: "Zero waste by 2035",
      current: 47,
      baseline: "landfill diversion",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      id: "water",
      title: "Water Conservation",
      value: 64,
      unit: "%",
      target: "75% circularity by 2030",
      current: 38,
      baseline: "reduction vs. baseline",
      icon: (
        <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
  ];

  const economicMetrics = [
    {
      id: "jobs",
      title: "Green Job Creation",
      value: 12400,
      unit: "jobs",
      target: "50,000 by 2035",
      current: 12400,
      baseline: "direct & indirect",
      prefix: "",
      icon: (
        <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      id: "energy-cost",
      title: "Energy Cost Reduction",
      value: 47,
      unit: "%",
      target: "55% by 2030",
      current: 28,
      baseline: "household savings",
      icon: (
        <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "resource",
      title: "Resource Efficiency",
      value: 156,
      unit: "M",
      suffix: "$",
      target: "$250M annual savings",
      current: 156,
      baseline: "material cost avoided",
      prefix: "$",
      icon: (
        <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15" />
        </svg>
      ),
    },
  ];

  const socialMetrics = [
    {
      id: "empowerment",
      title: "Community Empowerment",
      value: 84,
      unit: "%",
      target: "100% cooperative ownership",
      current: 52,
      baseline: "residents engaged",
      icon: (
        <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "skills",
      title: "Skill Development",
      value: 2340,
      unit: "residents",
      target: "10,000 certified by 2030",
      current: 2340,
      baseline: "trained operators",
      icon: (
        <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      id: "inclusive",
      title: "Inclusive Growth",
      value: 62,
      unit: "%",
      target: "75% by 2030",
      current: 38,
      baseline: "low-income participation",
      icon: (
        <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l1.912 2.256L16.5 9.75l-1.456 2.394L16.5 14.25l-2.588-.75L12 15.75l-1.912-2.25L7.5 14.25l1.456-2.106L7.5 9.75l2.588.75L12 7.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
  ];

  // Counter components with animations
  const Counter = ({ value, suffix = "", prefix = "" }) => {
    const count = useCounter(value);
    return (
      <span className="font-mono text-2xl font-bold text-slate-900 md:text-3xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  // Sustainability score meter component - compact
  const SustainabilityMeter = () => {
    const score = 68;
    const animatedScore = useCounter(score);

    return (
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Sustainability Score
            </h4>
          </div>
          <span className="font-mono text-xl font-bold text-emerald-800">{animatedScore}</span>
        </div>

        {/* Meter visualization - compact */}
        <div className="mt-3">
          <div className="relative h-2 w-full rounded-full bg-slate-200">
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700"
              style={{ width: `${animatedScore}%` }}
            />
            <div
              className="absolute top-1/2 h-4 w-0.5 -translate-y-1/2 bg-white ring-1 ring-emerald-700"
              style={{ left: `${animatedScore}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="text-slate-700">Current: {animatedScore}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span className="text-slate-700">Target: 85</span>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1 text-center text-xs">
          <div className="rounded bg-slate-50 p-1.5">
            <span className="font-medium text-slate-800">Env</span>
            <p className="font-mono text-sm font-semibold text-emerald-700">72</p>
          </div>
          <div className="rounded bg-slate-50 p-1.5">
            <span className="font-medium text-slate-800">Econ</span>
            <p className="font-mono text-sm font-semibold text-blue-700">64</p>
          </div>
          <div className="rounded bg-slate-50 p-1.5">
            <span className="font-medium text-slate-800">Soc</span>
            <p className="font-mono text-sm font-semibold text-amber-700">58</p>
          </div>
        </div>
      </div>
    );
  };

  // Impact graph visualization - compact
  const ImpactGraph = () => {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Impact Trajectory
            </h4>
          </div>
          <span className="text-[10px] text-slate-500">2024–2030</span>
        </div>

        {/* Compact bar chart */}
        <div className="mt-4">
          <div className="flex items-end justify-between gap-1">
            <div className="flex w-full flex-col items-center">
              <div className="relative flex h-20 w-full items-end justify-center">
                <div className="absolute bottom-0 left-1/2 h-8 w-4 -translate-x-1/2 bg-slate-200" />
                <div
                  className="absolute bottom-0 left-1/2 w-4 -translate-x-1/2 bg-emerald-600/80"
                  style={{ height: "24px" }}
                />
              </div>
              <span className="mt-1 text-[10px] font-medium text-slate-700">'24</span>
              <span className="text-[10px] text-slate-500">42%</span>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="relative flex h-20 w-full items-end justify-center">
                <div className="absolute bottom-0 left-1/2 h-8 w-4 -translate-x-1/2 bg-slate-200" />
                <div
                  className="absolute bottom-0 left-1/2 w-4 -translate-x-1/2 bg-emerald-600"
                  style={{ height: "36px" }}
                />
              </div>
              <span className="mt-1 text-[10px] font-medium text-slate-700">'26</span>
              <span className="text-[10px] text-slate-500">58%</span>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="relative flex h-20 w-full items-end justify-center">
                <div className="absolute bottom-0 left-1/2 h-8 w-4 -translate-x-1/2 bg-slate-200" />
                <div
                  className="absolute bottom-0 left-1/2 w-4 -translate-x-1/2 bg-emerald-600"
                  style={{ height: "48px" }}
                />
              </div>
              <span className="mt-1 text-[10px] font-medium text-slate-700">'28</span>
              <span className="text-[10px] text-slate-500">74%</span>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="relative flex h-20 w-full items-end justify-center">
                <div className="absolute bottom-0 left-1/2 h-8 w-4 -translate-x-1/2 bg-slate-200" />
                <div
                  className="absolute bottom-0 left-1/2 w-4 -translate-x-1/2 bg-emerald-700"
                  style={{ height: "56px" }}
                />
              </div>
              <span className="mt-1 text-[10px] font-medium text-slate-700">'30</span>
              <span className="text-[10px] text-slate-500">85%</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 border-t border-slate-100 pt-3 text-[10px]">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="text-slate-700">Carbon</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-slate-700">Cost</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
              <span className="text-slate-700">Community</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header - compact */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700/70 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
            <span>Expected Impact</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600/40" />
          </div>
          <h2 className="font-serif text-2xl font-light text-slate-900 md:text-3xl lg:text-4xl">
            Measurable outcomes,
            <span className="block font-semibold text-emerald-900">verifiable results</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
            Compounding returns across environmental, economic, and social dimensions—with clear metrics and auditable targets.
          </p>
        </div>

        {/* Three-column impact grid - compact cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Environmental Column */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100">
                <svg className="h-4 w-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Environmental</h3>
                <p className="text-xs text-slate-600">Climate • Resources</p>
              </div>
            </div>

            <div className="space-y-4">
              {environmentalMetrics.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50">
                        {metric.icon}
                      </div>
                      <h4 className="text-xs font-semibold text-slate-800">{metric.title}</h4>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Counter value={metric.value} suffix={metric.unit} />
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[10px] font-medium text-emerald-800">Target: {metric.target}</span>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-[10px] text-slate-600">{metric.baseline}</span>
                    </div>
                    {/* Progress bar - compact */}
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-600">Current</span>
                        <span className="font-medium text-slate-800">{metric.current}%</span>
                      </div>
                      <div className="mt-1 h-1 w-full rounded-full bg-slate-200">
                        <div
                          className="h-1 rounded-full bg-emerald-600"
                          style={{ width: `${(metric.current / (metric.value || 100)) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Economic Column */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100">
                <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Economic</h3>
                <p className="text-xs text-slate-600">Jobs • Savings</p>
              </div>
            </div>

            <div className="space-y-4">
              {economicMetrics.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50">
                        {metric.icon}
                      </div>
                      <h4 className="text-xs font-semibold text-slate-800">{metric.title}</h4>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Counter value={metric.value} suffix={metric.unit} prefix={metric.prefix || ""} />
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[10px] font-medium text-blue-800">Target: {metric.target}</span>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-[10px] text-slate-600">{metric.baseline}</span>
                    </div>
                    {metric.unit === "%" && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-slate-600">Current</span>
                          <span className="font-medium text-slate-800">{metric.current}%</span>
                        </div>
                        <div className="mt-1 h-1 w-full rounded-full bg-slate-200">
                          <div
                            className="h-1 rounded-full bg-blue-600"
                            style={{ width: `${(metric.current / (metric.value || 100)) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Column */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-100">
                <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Social</h3>
                <p className="text-xs text-slate-600">Empowerment • Skills</p>
              </div>
            </div>

            <div className="space-y-4">
              {socialMetrics.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-50">
                        {metric.icon}
                      </div>
                      <h4 className="text-xs font-semibold text-slate-800">{metric.title}</h4>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Counter value={metric.value} suffix={metric.unit} />
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[10px] font-medium text-amber-800">Target: {metric.target}</span>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-[10px] text-slate-600">{metric.baseline}</span>
                    </div>
                    {metric.unit === "%" && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-slate-600">Current</span>
                          <span className="font-medium text-slate-800">{metric.current}%</span>
                        </div>
                        <div className="mt-1 h-1 w-full rounded-full bg-slate-200">
                          <div
                            className="h-1 rounded-full bg-amber-600"
                            style={{ width: `${(metric.current / (metric.value || 100)) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability Score Meter + Impact Graph - compact row */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <SustainabilityMeter />
          <ImpactGraph />
        </div>

        {/* Cumulative impact summary - compact */}
        <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-200/50">
                  <svg className="h-4 w-4 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-slate-900">Cumulative impact (2026–2030)</h4>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                  <p className="text-[10px] text-slate-600">Carbon avoided</p>
                  <p className="font-mono text-lg font-bold text-slate-900">1.24M</p>
                  <p className="text-[10px] text-slate-500">tCO₂e</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-600">Economic savings</p>
                  <p className="font-mono text-lg font-bold text-slate-900">$187M</p>
                  <p className="text-[10px] text-slate-500">cumulative</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-600">Jobs created</p>
                  <p className="font-mono text-lg font-bold text-slate-900">12.4K</p>
                  <p className="text-[10px] text-slate-500">direct + indirect</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-600">Households served</p>
                  <p className="font-mono text-lg font-bold text-slate-900">62K</p>
                  <p className="text-[10px] text-slate-500">across 14 clusters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attribution - compact */}
        <div className="mt-8 text-center text-[10px] text-slate-500">
          <p>Verified by third-party audit • UN SDG 7, 11, 13 • 2026–2030 projections</p>
        </div>
      </div>
    </section>
  );
};

export default ExpectedImpact;