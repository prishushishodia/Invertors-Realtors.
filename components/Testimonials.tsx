import { Quote, Star } from "lucide-react";

const VOICES = [
  {
    quote: "Clear, research-first advice. It changed how I think about YEIDA.",
    author: "Investor",
    location: "Delhi",
  },
  {
    quote: "Every recommendation is grounded in authority updates — no hype.",
    author: "NRI Investor",
    location: "Dubai",
  },
  {
    quote: "The resale process was structured and transparent from day one.",
    author: "Investor",
    location: "Noida",
  },
];

export default function Testimonials() {
  return (
    <section id="voices" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Voices</p>
            <h2 className="display-h2 mt-6">What investors say.</h2>
          </div>
          <div className="flex items-center gap-2 text-navy">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-gold"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="text-[14px] font-semibold">Trusted by 500+ investors</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {VOICES.map((v) => (
            <figure
              key={v.location}
              className="group relative flex flex-col overflow-hidden rounded-4xl border border-line bg-white p-9 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 font-display text-[9rem] leading-none text-gold/10">
                ”
              </div>
              <Quote className="h-7 w-7 text-gold" fill="currentColor" strokeWidth={0} />
              <blockquote className="relative mt-6 flex-1 font-display text-xl font-medium leading-snug text-navy">
                {v.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-gold-bright">
                  {v.author.charAt(0)}
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-navy">
                    {v.author}
                  </span>
                  <span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {v.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
