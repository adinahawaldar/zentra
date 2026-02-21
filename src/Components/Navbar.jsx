import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Navigation links
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Implementation", href: "#implementation" },
    { label: "Community", href: "#community" },
    { label: "About", href: "#about" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (

    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">

      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            {/* <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 md:h-9 md:w-9"> */}
              {/* <svg
                className="h-4 w-4 text-emerald-700 md:h-5 md:w-5"
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
              </svg> */}
            {/* </div> */}
            <div>
              <span className="font-serif text-base font-semibold text-gray-900 md:text-lg">
                Zentra
              </span>
              <span className="ml-2 hidden rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800 md:inline-block">
                Est. 2026
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      activeLink === link.href
                        ? "text-emerald-800"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                    {activeLink === link.href && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-emerald-600 rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#partner"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-50 md:text-sm"
            >
              Partner
            </a>
            <a
              href="#IssueSubmission"
              className="rounded-md bg-emerald-700 px-4 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-emerald-800 md:text-sm"
            >
              Report Issue
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 lg:hidden"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } transition-all duration-200 ease-in-out`}
        >
          <div className="space-y-1 border-t border-gray-200 py-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                  activeLink === link.href
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-6">
              <a
                href="#partner"
                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
              >
                Become Partner
              </a>
              <a
                href="#pilot"
                className="flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-800"
              >
                Request Implementation
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;