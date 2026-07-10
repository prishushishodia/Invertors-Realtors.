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
  { icon: LineChart, label: "Investment Opportunity" },
];

export default function WhyYeida() {
  return (
    <section id="why-yeida" className="bg-sky py-20 lg:py-28">
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
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-navy/15 lg:block" />

          <ul className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 lg:flex lg:justify-between">
            {CATALYSTS.map((c) => (
              <li
                key={c.label}
                className="relative flex flex-col items-center text-center lg:w-32"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy shadow-card">
                  <c.icon className="h-6 w-6" strokeWidth={1.8} />
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
