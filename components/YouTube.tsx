import { Play, Youtube } from "lucide-react";

const VIDEOS = [
  {
    title: "Jewar Airport impact on YEIDA plot prices",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sector-by-sector: where smart money is moving",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ground report: Noida International Airport",
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
          </div>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-navy shadow-card transition-shadow hover:shadow-float"
          >
            <Youtube className="h-5 w-5 text-red-600" fill="currentColor" strokeWidth={0} />
            Subscribe
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <a key={v.title} href="#" className="group block">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={v.image}
                  alt=""
                  className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-float transition-transform group-hover:scale-105">
                    <Play className="ml-0.5 h-6 w-6 text-navy" fill="currentColor" strokeWidth={0} />
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
