import {
  Plane,
  Clapperboard,
  Server,
  TrainFront,
  Route,
  Package,
  Stethoscope,
  Cpu,
} from "lucide-react";

// Nodes positioned on a ring around a glowing centre (percent coordinates).
const NODES = [
  { icon: Plane, label: "Airport", x: 50, y: 12 },
  { icon: Clapperboard, label: "Film City", x: 78, y: 24 },
  { icon: Server, label: "Data Centre", x: 88, y: 52 },
  { icon: TrainFront, label: "Metro", x: 76, y: 80 },
  { icon: Route, label: "Expressway", x: 40, y: 84 },
  { icon: Package, label: "Logistics Park", x: 18, y: 74 },
  { icon: Stethoscope, label: "Medical Device Park", x: 12, y: 46 },
  { icon: Cpu, label: "Electronics Mfg.", x: 24, y: 22 },
];

const CENTER = { x: 50, y: 52 };

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-navy-soft/40 blur-3xl" />

      <div className="container-page relative">
        <p className="eyebrow !text-gold before:!bg-gold">
          Infrastructure Ecosystem
        </p>
        <h2 className="display-h2 mt-6 max-w-3xl !text-white">
          A connected system, not a single project.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          YEIDA is being built as an interlinked economic zone — every node
          feeds demand for the next.
        </p>

        {/* Network graph */}
        <div className="relative mx-auto mt-14 h-[520px] w-full max-w-4xl md:h-[620px]">
          {/* connecting lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {NODES.map((n) => (
              <line
                key={`c-${n.label}`}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke="#d3ac66"
                strokeWidth={0.18}
                strokeOpacity={0.4}
              />
            ))}
            {NODES.map((n, i) => {
              const next = NODES[(i + 1) % NODES.length];
              return (
                <line
                  key={`r-${n.label}`}
                  x1={n.x}
                  y1={n.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="#d3ac66"
                  strokeWidth={0.12}
                  strokeOpacity={0.22}
                />
              );
            })}
          </svg>

          {/* glowing centre */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
          >
            <div className="relative flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gold/25 blur-xl" />
              <div className="absolute inset-5 rounded-full bg-gold/40 blur-md" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold text-[10px] font-bold uppercase tracking-tight text-navy-deep shadow-[0_0_30px_rgba(211,172,102,0.8)]">
                YEIDA
              </div>
            </div>
          </div>

          {/* nodes */}
          {NODES.map((n) => (
            <div
              key={n.label}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gold-bright backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:shadow-gold">
                <n.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <span className="whitespace-nowrap text-[13px] font-medium text-white/85">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
