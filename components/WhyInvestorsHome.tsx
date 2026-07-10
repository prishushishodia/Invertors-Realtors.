import {
  ShieldCheck,
  LineChart,
  RefreshCw,
  FileCheck,
  Compass,
  Building2,
} from "lucide-react";

const FEATURES = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Verified Guidance",
    copy: "Every recommendation is checked against authority notifications.",
  },
  {
    num: "02",
    icon: LineChart,
    title: "Market Research",
    copy: "Weekly research on prices, subscription and infrastructure.",
  },
  {
    num: "03",
    icon: RefreshCw,
    title: "Resale Assistance",
    copy: "Structured resale process with transparent price discovery.",
  },
  {
    num: "04",
    icon: FileCheck,
    title: "Documentation Support",
    copy: "End-to-end paperwork guidance for allotment and resale.",
  },
  {
    num: "05",
    icon: Compass,
    title: "YEIDA Expertise",
    copy: "Deep specialisation across the Yamuna Expressway corridor.",
  },
  {
    num: "06",
    icon: Building2,
    title: "Long-term Planning",
    copy: "Horizon-based portfolio construction, not one-off deals.",
  },
];

export default function WhyInvestorsHome() {
  return (
    <section id="why-us" className="py-20 lg:py-28">
      <div className="container-page">
        <p className="eyebrow">Why Investors Home</p>
        <h2 className="display-h2 mt-6 max-w-3xl">
          An advisory practice built for the long horizon.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.num}
              className="rounded-4xl border border-line bg-white p-8 shadow-card"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold shadow-card">
                  <f.icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <span className="font-display text-5xl font-semibold text-line">
                  {f.num}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold text-navy">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {f.copy}
              </p>
              <div className="mt-8 h-0.5 w-10 rounded-full bg-gold" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
