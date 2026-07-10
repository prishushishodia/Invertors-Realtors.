import {
  ArrowRight,
  Plane,
  FileCheck2,
  Building2,
  LineChart,
  Compass,
} from "lucide-react";

const UPDATES = [
  {
    category: "Airport",
    icon: Plane,
    title: "Noida International Airport is live — commercial flights now operating.",
    meta: "Operational",
  },
  {
    category: "Scheme",
    icon: FileCheck2,
    title: "YEIDA RPS-10 opens 973 residential plots across three airport-side sectors.",
    meta: "973 plots",
  },
  {
    category: "Infrastructure",
    icon: Building2,
    title: "Interchange and access roads at Sector 18 progressing on schedule.",
    meta: "On track",
  },
  {
    category: "Investor Activity",
    icon: LineChart,
    title: "Resale enquiries rising as buyers reposition ahead of possession.",
    meta: "Rising",
  },
  {
    category: "Policy",
    icon: Compass,
    title: "Authority notification refines eligibility for upcoming plot allocations.",
    meta: "Updated",
  },
];

export default function MarketSnapshot() {
  return (
    <section id="market" className="py-20 lg:py-28">
      <div className="container-page">
        <p className="eyebrow">Market Snapshot</p>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="display-h2">
              A live read on the corridor that will define the next decade.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              We track authority notifications, on-ground infrastructure and
              investor sentiment — distilled into a weekly research view.
            </p>
          </div>
          <a href="#market-watch" className="group link-arrow shrink-0">
            All updates
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.2}
            />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {UPDATES.map((item) => (
            <article
              key={item.category}
              className="card card-hover group flex flex-col justify-between p-8"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-bright">
                    <item.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
                    {item.meta}
                  </span>
                </div>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.category}
                </p>
                <h3 className="mt-3 font-display text-[26px] font-medium leading-snug text-navy">
                  {item.title}
                </h3>
              </div>
              <a href="#market-watch" className="mt-10 link-arrow">
                Read more
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.2}
                />
              </a>
            </article>
          ))}

          {/* Highlight tile */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-4xl bg-navy p-8 text-white shadow-float">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/25 blur-2xl" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                Indicative pricing
              </p>
              <h3 className="mt-4 font-display text-5xl font-semibold">
                ₹35,000
                <span className="text-2xl font-medium text-white/70"> / sq.m</span>
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                RPS-10 base rate — a 162 sq.m plot lands near ₹56.7 L. We model
                your all-in cost and upside before you apply.
              </p>
            </div>
            <a
              href="#contact"
              className="relative mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-gold-bright"
            >
              Get a plot analysis
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
