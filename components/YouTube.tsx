import { Play, Youtube } from "lucide-react";

const CHANNEL = "https://www.youtube.com/@deepeshchoudhary0908";

const VIDEOS = [
  {
    title: "Jewar Airport impact on YEIDA plot prices",
    tag: "Ground Report",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sector-by-sector: where smart money is moving",
    tag: "Analysis",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ground report: Noida International Airport",
    tag: "Site Visit",
    image:
      "https://images.unsplash.com/photo-1610642372651-fe6e7bc209bb?auto=format&fit=crop&w=900&q=80",
  },
];

export default function YouTube() {
  return (
    <section id="youtube" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">On YouTube</p>
            <h2 className="display-h2 mt-6 max-w-2xl">
              Ground reports &amp; market updates, weekly.
            </h2>
            <p className="mt-4 text-[15px] font-medium text-muted">
              @deepeshchoudhary0908 · YEIDA &amp; Noida Airport property
            </p>
          </div>
          <a
            href={CHANNEL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[15px] font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            <Youtube className="h-5 w-5 text-red-500" fill="currentColor" strokeWidth={0} />
            Subscribe
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <a
              key={v.title}
              href={CHANNEL}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl border border-line shadow-card">
                <img
                  src={v.image}
                  alt=""
                  className="aspect-video h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy backdrop-blur">
                  {v.tag}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-float transition-transform duration-300 group-hover:scale-110">
                    <Play
                      className="ml-0.5 h-6 w-6 text-navy"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </span>
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-medium text-navy">
                  {v.title}
                </h3>
                <span className="shrink-0 text-[15px] font-semibold text-gold">
                  Watch
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
