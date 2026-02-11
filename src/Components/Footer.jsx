import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation groups
  const navGroups = [
    {
      title: "Initiative",
      links: [
        { label: "Vision & Mission", href: "#about" },
        { label: "Our Model", href: "#solution" },
        { label: "Implementation", href: "#implementation" },
        { label: "Impact Metrics", href: "#impact" },
        { label: "Technology", href: "#technology" },
      ],
    },
    {
      title: "Engage",
      links: [
        { label: "Volunteer Program", href: "#volunteer" },
        { label: "Training Workshops", href: "#workshops" },
        { label: "Partner With Us", href: "#partner" },
        { label: "Pilot Program", href: "#pilot" },
        { label: "Report an Issue", href: "#issue" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Annual Reports", href: "#reports" },
        { label: "Technical Documentation", href: "#docs" },
        { label: "Performance Dashboard", href: "#dashboard" },
        { label: "Research Library", href: "#research" },
        { label: "Press Kit", href: "#press" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Use", href: "#terms" },
        { label: "Accessibility", href: "#accessibility" },
        { label: "Whistleblower Policy", href: "#whistleblower" },
        { label: "Data Governance", href: "#data" },
      ],
    },
  ];

  // Partner / accreditation logos (text-based for clean presentation)
  const partners = [
    "U.S. Dept. of Energy",
    "HUD",
    "C40 Cities",
    "USGBC",
    "Rockefeller Foundation",
    "MIT Urban Systems Lab",
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-4 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Main footer grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand & mission - 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-900">
                <svg
                  className="h-4 w-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <span className="font-serif text-lg font-semibold text-white">Zentra</span>
              <span className="rounded-full bg-emerald-900 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                Est. 2024
              </span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-gray-400">
              Building self-sustaining green communities through decentralized,
              circular, and community‑owned infrastructure. A public‑private
              initiative verified by third‑party audit.
            </p>

            {/* Founder signature */}
            <div className="mt-5 flex items-center gap-2 text-xs">
              <span className="font-medium text-gray-400">Founded by</span>
              <span className="font-serif text-sm font-semibold text-emerald-400">
                Adina Hawaldar
              </span>
            </div>

            {/* Social / contact links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-emerald-400"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.57 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span>hello@zentra.org</span>
              </a>
              <span className="h-3 w-px bg-gray-800" />
              <a
                href="#press"
                className="flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-emerald-400"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span>zentra.org/press</span>
              </a>
            </div>

            {/* Data privacy certification */}
            <div className="mt-5 flex items-center gap-2 rounded-md bg-gray-900 p-2.5 text-[10px]">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <span className="text-gray-400">
                <span className="font-medium text-white">SOC 2 Type II • GDPR compliant</span> • 
                Verified by third‑party audit
              </span>
            </div>
          </div>

          {/* Navigation groups - 8 cols */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:col-span-8">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-500 transition-colors hover:text-emerald-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partner / accreditation strip */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
            Institutional partners & collaborators
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-xs font-medium text-gray-400 transition-colors hover:text-emerald-400"
              >
                {partner}
              </span>
            ))}
            <span className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-[10px] font-medium text-gray-400">
              +28 implementation partners
            </span>
          </div>
        </div>

        {/* Bottom bar - copyright, legal, transparency */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-[10px] md:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-gray-500">
              © {currentYear} Zentra Initiative. All rights reserved.
            </span>
            <span className="h-3 w-px bg-gray-800" />
            <span className="text-gray-500">501(c)(3) fiscal sponsorship</span>
            <span className="h-3 w-px bg-gray-800" />
            <span className="text-gray-500">EIN: 88-1234567</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#privacy" className="text-gray-500 hover:text-emerald-400">
              Privacy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-emerald-400">
              Terms
            </a>
            <a href="#accessibility" className="text-gray-500 hover:text-emerald-400">
              Accessibility
            </a>
            <a
              href="#transparency"
              className="flex items-center gap-1 font-medium text-emerald-400 hover:text-emerald-300"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              Transparency report
            </a>
          </div>
        </div>

        {/* Open data / public domain commitment */}
        <div className="mt-6 flex items-center justify-center gap-2 rounded-md bg-gray-900 p-3 text-[10px] text-gray-400 md:justify-start">
          <svg className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <span>
            <span className="font-medium text-white">Open data commitment:</span> All non‑sensitive performance metrics, issue resolution logs, and sustainability indicators are published quarterly in machine‑readable format.
          </span>
          <a href="#open-data" className="ml-1 font-medium text-emerald-400 hover:text-emerald-300">
            Access repository →
          </a>
        </div>

        {/* Version / build */}
        <div className="mt-5 flex justify-end">
          <span className="font-mono text-[8px] text-gray-600">v2.4.1 • 2026.02 • 14 active clusters</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;