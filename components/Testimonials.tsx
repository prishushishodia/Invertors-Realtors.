import { Quote } from "lucide-react";

const VOICES = [
  {
    quote: "Clear, research-first advice. It changed how I think about YEIDA.",
    author: "Investor · Delhi",
  },
  {
    quote: "Every recommendation is grounded in authority updates — no hype.",
    author: "NRI Investor · Dubai",
  },
  {
    quote: "The resale process was structured and transparent from day one.",
    author: "Investor · Noida",
  },
];

export default function Testimonials() {
  return (
    <section id="voices" className="py-20 lg:py-28">
      <div className="container-page">
        <p className="eyebrow">Voices</p>
        <h2 className="display-h2 mt-6">What investors say.</h2>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {VOICES.map((v) => (
            <figure
              key={v.author}
              className="rounded-4xl border border-line bg-white p-9 shadow-card"
            >
              <Quote className="h-7 w-7 text-gold" fill="currentColor" strokeWidth={0} />
              <blockquote className="mt-6 font-display text-xl font-medium leading-snug text-navy">
                {v.quote}
              </blockquote>
              <figcaption className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
                {v.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
