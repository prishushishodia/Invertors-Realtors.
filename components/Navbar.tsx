"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Market", href: "#market" },
  { label: "Corridor", href: "#corridor" },
  { label: "Why YEIDA", href: "#why-yeida" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <nav className="container-page flex h-20 items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-[15px] font-semibold text-white">
            IH
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy">
              Investors Home
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Realtors
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-ink/80 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-navy px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-navy-deep sm:inline-flex"
          >
            Schedule call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink/80 hover:bg-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-[15px] font-semibold text-white"
              >
                Schedule call
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
