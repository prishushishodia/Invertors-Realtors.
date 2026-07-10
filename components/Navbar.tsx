"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="hidden bg-navy-deep text-white/90 sm:block">
        <div className="container-page flex h-9 items-center justify-center gap-2 text-[12px] font-medium tracking-wide">
          <Sparkles className="h-3.5 w-3.5 text-gold-bright" strokeWidth={2} />
          <span>
            YEIDA RPS-10 · 973 residential plots near Noida International Airport —
            <span className="text-gold-bright"> draw window now open</span>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-line/70 bg-paper/85 backdrop-blur-xl"
            : "border-transparent bg-paper/40 backdrop-blur-md"
        }`}
      >
        <nav className="container-page flex h-20 items-center justify-between">
          {/* Brand */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-[15px] font-semibold text-white shadow-card ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:-rotate-3">
              <span className="font-display">IH</span>
              <span className="absolute inset-0 rounded-2xl ring-1 ring-gold/30" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-navy">
                Investors Home
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Realtors
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative text-[15px] font-medium text-ink/75 transition-colors hover:text-navy"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-navy px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(10,22,38,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-deep sm:inline-flex"
            >
              Schedule call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white text-navy lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-line bg-paper/95 backdrop-blur-xl lg:hidden">
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
    </div>
  );
}
