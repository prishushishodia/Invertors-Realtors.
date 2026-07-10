import { ArrowUpRight } from "lucide-react";

const COLUMNS = [
  {
    heading: "Explore",
    links: ["Market", "Corridor", "Why YEIDA", "Ecosystem"],
  },
  {
    heading: "Company",
    links: ["About", "Research", "FAQ", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Disclaimer"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container-page py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
          {/* CTA / brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[15px] font-semibold text-navy">
                IH
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold">
                  Investors Home
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  Realtors
                </span>
              </span>
            </div>

            <h2 className="mt-8 max-w-xl font-display text-3xl font-semibold leading-tight md:text-4xl">
              Ready to invest in the YEIDA growth corridor?
            </h2>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-[15px] font-semibold text-navy transition-opacity hover:opacity-90"
            >
              Schedule a call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[15px] text-white/80 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Investors Home Realtors. All rights reserved.</p>
          <p>YEIDA · Noida International Airport corridor</p>
        </div>
      </div>
    </footer>
  );
}
