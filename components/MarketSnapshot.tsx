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
    title: "Runway 1 nearing operational readiness with trial flights logged.",
  },
  {
    category: "Draw Updates",
    icon: FileCheck2,
    title: "YEIDA residential draw sees strong subscription across sectors.",
  },
  {
    category: "Infrastructure",
    icon: Building2,
    title: "Interchange and access roads at Sector 18 progressing on schedule.",
  },
  {
    category: "Investor Activity",
    icon: LineChart,
    title: "Resale enquiries rising as buyers reposition ahead of possession.",
  },
  {
    category: "Policy",
    icon: Compass,
    title: "Authority notification refines eligibility for upcoming plot allocations.",
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
          <a
            href="#market"
            className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-navy"
          >
            All updates
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {UPDATES.map((item) => (
            <article
              key={item.category}
              className="group flex flex-col justify-between rounded-4xl border border-line bg-white p-8 shadow-card transition-shadow hover:shadow-float"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
                    <item.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-16 font-display text-[26px] font-medium leading-snug text-navy">
                  {item.title}
                </h3>
              </div>
              <a
                href="#market"
                className="mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-navy"
              >
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
