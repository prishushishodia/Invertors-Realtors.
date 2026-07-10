import { ArrowUpRight, Youtube, MessageCircle, Phone } from "lucide-react";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Market", href: "#market" },
      { label: "Corridor", href: "#corridor" },
      { label: "Why YEIDA", href: "#why-yeida" },
      { label: "Ecosystem", href: "#ecosystem" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Market Watch", href: "#market-watch" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-page relative py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
          {/* CTA / brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white font-display text-[15px] font-semibold text-navy">
                IH
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold">
                  Investors Home
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-bright">
                  Realtors
                </span>
              </span>
            </div>

            <h2 className="mt-8 max-w-xl font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              Ready to invest in the{" "}
              <span className="text-gold-gradient">YEIDA growth corridor?</span>
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold">
                Schedule a call
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <a
                href="https://www.youtube.com/@deepeshchoudhary0908"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-white/40"
              >
                <Youtube className="h-5 w-5 text-red-500" fill="currentColor" strokeWidth={0} />
                Watch on YouTube
              </a>
            </div>

            {/* contact chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[13px] font-medium text-white/80 ring-1 ring-inset ring-white/10">
                <Phone className="h-4 w-4 text-gold-bright" strokeWidth={2} />
                By appointment
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[13px] font-medium text-white/80 ring-1 ring-inset ring-white/10">
                <MessageCircle className="h-4 w-4 text-gold-bright" strokeWidth={2} />
                WhatsApp advisory
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-bright/80">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[15px] text-white/75 transition-colors hover:text-white"
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

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Investors Home Realtors. All rights reserved.</p>
          <p>YEIDA · Noida International Airport corridor</p>
        </div>
      </div>
    </footer>
  );
}
