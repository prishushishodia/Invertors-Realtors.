import {
  Plane,
  Route,
  TrainFront,
  Clapperboard,
  Warehouse,
  Building2,
  LineChart,
} from "lucide-react";

const CATALYSTS = [
  { icon: Plane, label: "Airport" },
  { icon: Route, label: "Expressway" },
  { icon: TrainFront, label: "Metro" },
  { icon: Clapperboard, label: "Film City" },
  { icon: Warehouse, label: "Industrial Parks" },
  { icon: Building2, label: "Residential Growth" },
  { icon: LineChart, label: "Investment Upside" },
];

export default function WhyYeida() {
  return (
    <section
      id="why-yeida"
      className="relative overflow-hidden bg-sky py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-page">
        <p className="eyebrow">Why YEIDA</p>
        <h2 className="display-h2 mt-6 max-w-3xl">
          A rare compounding of infrastructure, industry and access.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Every catalyst arriving in the YEIDA region reinforces the next. The
          result is a corridor moving from land to livelihoods in real time.
        </p>

        {/* Catalyst timeline */}
        <div className="relative mt-20">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-navy/10 via-navy/25 to-navy/10 lg:block" />

          <ul className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 lg:flex lg:justify-between">
            {CATALYSTS.map((c, i) => (
              <li
                key={c.label}
                className="group relative flex flex-col items-center text-center lg:w-32"
              >
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy shadow-card ring-1 ring-line transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-navy group-hover:text-gold-bright group-hover:shadow-float">
                  <c.icon className="h-6 w-6" strokeWidth={1.8} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy-deep shadow-sm">
                    {i + 1}
                  </span>
                </span>
                <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-navy">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
