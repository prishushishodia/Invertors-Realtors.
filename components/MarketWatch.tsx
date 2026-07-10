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
    title: "RPS-10 residential draw dates and eligibility confirmed for FY26.",
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
    title: "Terminal fit-out advances as commercial operations scale up.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function MarketWatch() {
  return (
    <section id="market-watch" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Market Watch</p>
            <h2 className="display-h2 mt-6 max-w-3xl">
              Curated intelligence, published continuously.
            </h2>
          </div>
          <a href="#youtube" className="group link-arrow shrink-0">
            View the archive
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.2}
            />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <article
              key={a.title}
              className={`card card-hover group overflow-hidden ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "h-72" : "h-56"}`}>
                <img
                  src={a.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="tag">{a.category}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand text-muted transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-bright">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
                <h3
                  className={`mt-6 font-display font-medium leading-snug text-navy ${
                    i === 0 ? "text-[28px]" : "text-[22px]"
                  }`}
                >
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
