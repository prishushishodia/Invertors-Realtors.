import { ArrowUpRight } from "lucide-react";

const ARTICLES = [
  {
    category: "Authority Update",
    title: "YEIDA notifies revised layouts across Sector 18 sub-pockets.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Infrastructure",
    title: "Interchange work between Zewar and Jewar progressing to phase 2.",
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "New Scheme",
    title: "Residential scheme draw dates and eligibility for FY26 announced.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Market Trend",
    title: "Resale premiums firming across airport-facing residential belts.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Connectivity",
    title: "Expressway access roads shorten drive times to key sectors.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Airport",
    title: "Terminal fit-out advances as commercial operations date nears.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function MarketWatch() {
  return (
    <section id="market-watch" className="py-20 lg:py-28">
      <div className="container-page">
        <p className="eyebrow">Market Watch</p>
        <h2 className="display-h2 mt-6 max-w-3xl">
          Curated intelligence, published continuously.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="group overflow-hidden rounded-4xl border border-line bg-white shadow-card transition-shadow hover:shadow-float"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={a.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-sky px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                    {a.category}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted transition-colors group-hover:text-navy"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-6 font-display text-[22px] font-medium leading-snug text-navy">
                  {a.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
