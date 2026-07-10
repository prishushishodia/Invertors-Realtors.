import {
  ArrowRight,
  Play,
  Plane,
  Clapperboard,
  Stethoscope,
  Cpu,
  Route,
  ShieldCheck,
} from "lucide-react";

const STATS = [
  { value: "12+", label: "Years on the corridor" },
  { value: "500+", label: "Investors guided" },
  { value: "158%", label: "Price growth ’20–’25" },
];

const MARKERS = [
  {
    icon: Plane,
    label: "Airport City",
    className: "left-3 top-8 sm:left-5 sm:top-12",
    delay: "0s",
  },
  {
    icon: Clapperboard,
    label: "Film City",
    className: "right-2 top-24 sm:right-3 sm:top-32",
    delay: "1.2s",
  },
  {
    icon: Stethoscope,
    label: "Medical Device Park",
    className: "left-1 top-1/2 sm:-left-2",
    delay: "2.1s",
  },
  {
    icon: Cpu,
    label: "Electronics Mfg.",
    className: "bottom-24 right-1 sm:right-3",
    delay: "0.6s",
  },
  {
    icon: Route,
    label: "Yamuna Expressway",
    className: "bottom-3 left-6 sm:left-12",
    delay: "1.8s",
  },
];

function Marker({
  icon: Icon,
  label,
  className,
  delay,
}: {
  icon: typeof Plane;
  label: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute z-10 flex animate-float items-center gap-2.5 rounded-full border border-white/60 bg-white/95 py-2 pl-2 pr-4 shadow-float backdrop-blur ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold-bright">
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
      <div className="container-page grid grid-cols-1 items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Left column */}
        <div>
          <p className="eyebrow">YEIDA · Noida International Airport</p>

          <h1 className="display-h1 mt-7">
            Invest where India’s next{" "}
            <span className="relative inline-block">
              <span className="text-gold-gradient">growth corridor</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8 C 50 2, 150 2, 198 7"
                  stroke="#b1873f"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
            </span>{" "}
            takes off.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            The Noida International Airport is live. We help investors make
            informed decisions across the YEIDA region — verified insights,
            allotment guidance and transparent resale support.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#market" className="btn-primary">
              Explore Opportunities
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
            <a href="#youtube" className="btn-ghost">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Play className="h-3 w-3 fill-gold" strokeWidth={0} />
              </span>
              Watch Market Updates
            </a>
          </div>

          {/* Trust row */}
          <p className="mt-7 flex items-center gap-2 text-[13px] font-medium text-muted">
            <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={2} />
            Every plot cross-checked against authority notifications.
          </p>

          {/* Stats */}
          <div className="mt-10 border-t border-line pt-8">
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
          {/* soft gold halo behind the frame */}
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-gold/20 via-transparent to-navy/10 blur-2xl" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-5xl border border-white/60 shadow-float ring-1 ring-navy/5">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
              alt="Aerial view of the Noida International Airport development corridor"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-white/10" />

            {/* live status badge */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-navy-deep/85 py-1.5 pl-2.5 pr-3.5 text-[12px] font-semibold text-white backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Airport operational
            </div>
          </div>

          {MARKERS.map((m) => (
            <Marker key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
