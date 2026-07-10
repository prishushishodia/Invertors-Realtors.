"use client";

import { useState } from "react";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";

type Sector = {
  id: string;
  code: string;
  name: string;
  region: string;
  tenor: string;
  highlights: string[];
  // OpenStreetMap embed centered near the YEIDA / Noida International Airport area
  mapSrc: string;
};

const SECTORS: Sector[] = [
  {
    id: "15c",
    code: "15C",
    name: "Sector 15C",
    region: "YEIDA",
    tenor: "Airport-facing",
    highlights: ["Airport Influence", "Strong Investor Interest", "Infrastructure Progress"],
    mapSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=77.48%2C28.11%2C77.60%2C28.20&layer=mapnik&marker=28.155%2C77.54",
  },
  {
    id: "18",
    code: "18",
    name: "Sector 18",
    region: "YEIDA",
    tenor: "End-user demand",
    highlights: ["Interchange Access", "Institutional Zone", "Residential Growth"],
    mapSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=77.46%2C28.13%2C77.58%2C28.22&layer=mapnik&marker=28.175%2C77.52",
  },
  {
    id: "24a",
    code: "24A",
    name: "Sector 24A",
    region: "YEIDA",
    tenor: "Long-horizon",
    highlights: ["Industrial Corridor", "Logistics Advantage", "Long-Term Upside"],
    mapSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=77.50%2C28.08%2C77.62%2C28.17&layer=mapnik&marker=28.125%2C77.56",
  },
];

export default function CorridorMap() {
  const [active, setActive] = useState(0);
  const sector = SECTORS[active];

  return (
    <section id="corridor" className="py-20 lg:py-28">
      <div className="container-page">
        <p className="eyebrow">Interactive Corridor Map</p>
        <h2 className="display-h2 mt-6 max-w-3xl">
          Three sectors defining the YEIDA opportunity.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Select a marker to open its research card. Data reflects publicly
          available authority updates and our on-ground tracking.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Map */}
          <div className="relative overflow-hidden rounded-4xl border border-line bg-white p-2 shadow-card">
            <iframe
              key={sector.id}
              title={`Map of ${sector.name}`}
              src={sector.mapSrc}
              className="h-[420px] w-full rounded-[1.6rem] grayscale-[0.15] lg:h-[520px]"
              loading="lazy"
            />
            {/* Sector selector pills */}
            <div className="pointer-events-auto absolute bottom-5 left-5 flex flex-wrap gap-2">
              {SECTORS.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold shadow-float transition-all duration-200 ${
                      isActive
                        ? "bg-gold text-navy-deep ring-2 ring-gold-bright/60"
                        : "bg-white/95 text-navy hover:bg-white"
                    }`}
                  >
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2.2} />
                    Sector {s.code}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Research card */}
          <div className="relative flex flex-col overflow-hidden rounded-4xl border border-navy/10 bg-navy p-8 text-white shadow-float">
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/25 blur-2xl" />

            <div className="relative flex items-start justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-bright ring-1 ring-inset ring-white/15">
                <MapPin className="h-3.5 w-3.5" strokeWidth={2.2} />
                {sector.region}
              </span>
              <span className="font-display text-6xl font-semibold text-white">
                {sector.code}
              </span>
            </div>

            <h3 className="relative mt-8 font-display text-3xl font-semibold">
              {sector.name}
            </h3>
            <p className="relative mt-2 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold-bright">
              <TrendingUp className="h-4 w-4" strokeWidth={2} />
              {sector.tenor}
            </p>

            <ul className="relative mt-7 space-y-4">
              {sector.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[15px] text-white/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-bright" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="relative mt-auto inline-flex items-center gap-2 pt-10 text-[15px] font-semibold text-gold-bright"
            >
              Request the full research card
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
