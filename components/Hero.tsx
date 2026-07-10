import {
  ArrowRight,
  Play,
  Plane,
  Clapperboard,
  Stethoscope,
  Cpu,
  Route,
} from "lucide-react";

const STATS = [
  { value: "12+", label: "Years advising" },
  { value: "500+", label: "Investors guided" },
  { value: "3", label: "Priority sectors tracked" },
];

const MARKERS = [
  { icon: Plane, label: "Airport City", className: "left-4 top-10 sm:left-6 sm:top-14" },
  { icon: Clapperboard, label: "Film City", className: "right-3 top-28 sm:right-4 sm:top-36" },
  { icon: Stethoscope, label: "Medical Device Park", className: "left-2 top-1/2 sm:left-0" },
  { icon: Cpu, label: "Electronics Manufacturing", className: "bottom-28 right-2 sm:right-4" },
  { icon: Route, label: "Yamuna Expressway", className: "bottom-4 left-8 sm:left-16" },
];

function Marker({
  icon: Icon,
  label,
  className,
}: {
  icon: typeof Plane;
  label: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-10 flex items-center gap-2.5 rounded-full bg-white/95 py-2 pl-2 pr-4 shadow-float backdrop-blur ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <span className="whitespace-nowrap text-[13px] font-semibold text-navy">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid grid-cols-1 items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Left column */}
        <div>
          <p className="eyebrow">YEIDA · Noida International Airport</p>

          <h1 className="display-h1 mt-7">
            Invest where India&apos;s next growth{" "}
            <span className="relative inline-block">
              corridor begins.
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-gold/70" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Helping investors make informed property decisions in the YEIDA
            region with verified insights, resale opportunities and market
            guidance.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#market" className="btn-primary">
              Explore Opportunities
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
            <a href="#market" className="btn-ghost">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Play className="h-3 w-3 fill-gold" strokeWidth={0} />
              </span>
              Watch Market Updates
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 border-t border-line pt-8">
            <dl className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-4xl font-semibold text-navy">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Right column — image with floating markers */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl shadow-card">
            {/* Replace this image with the real airport render asset */}
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
              alt="Aerial view of the Noida International Airport development corridor"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-white/10" />
          </div>

          {MARKERS.map((m) => (
            <Marker key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
