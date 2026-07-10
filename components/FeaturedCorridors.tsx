import { ArrowRight } from "lucide-react";

const SECTORS = [
  {
    tag: "YEIDA · 15C",
    name: "Sector 15C",
    focus: "Airport Influence",
    copy: "Closest residential belt to the Noida International Airport.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
  },
  {
    tag: "YEIDA · 18",
    name: "Sector 18",
    focus: "Residential Growth",
    copy: "Access roads and social infra unlocking end-user demand.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1000&q=80",
  },
  {
    tag: "YEIDA · 24A",
    name: "Sector 24A",
    focus: "Long-term Potential",
    copy: "Industrial adjacency positioning capital appreciation ahead.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function FeaturedCorridors() {
  return (
    <section id="sectors" className="py-20 lg:py-28">
      <div className="container-page">
        <p className="eyebrow">Featured Investment Corridors</p>
        <h2 className="display-h2 mt-6 max-w-4xl">
          Three sectors we actively research and advise on.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {SECTORS.map((s) => (
            <article
              key={s.name}
              className="card card-hover group overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={s.image}
                  alt={`Aerial view of ${s.name}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-navy backdrop-blur">
                  {s.tag}
                </span>
                <h3 className="absolute bottom-4 left-5 font-display text-3xl font-semibold text-white">
                  {s.name}
                </h3>
              </div>

              <div className="p-8">
                <p className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {s.focus}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {s.copy}
                </p>
                <a href="#contact" className="mt-8 link-arrow">
                  Explore
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.2}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
