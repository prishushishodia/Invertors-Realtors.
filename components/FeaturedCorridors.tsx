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
              className="group overflow-hidden rounded-4xl border border-line bg-white shadow-card transition-shadow hover:shadow-float"
            >
              <div className="relative h-72 overflow-hidden p-4">
                <img
                  src={s.image}
                  alt={`Aerial view of ${s.name}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="relative z-10 inline-flex rounded-full bg-white/95 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-navy backdrop-blur">
                  {s.tag}
                </span>
              </div>

              <div className="p-8">
                <h3 className="font-display text-4xl font-semibold text-navy">
                  {s.name}
                </h3>
                <p className="mt-4 text-[15px] font-semibold text-gold">
                  {s.focus}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {s.copy}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-navy"
                >
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
