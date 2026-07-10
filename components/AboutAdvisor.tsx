import { CalendarDays, MessageCircle, Youtube, BadgeCheck } from "lucide-react";

const CREDS = [
  "YEIDA & Yamuna Expressway specialist",
  "Authority-verified plot advisory",
  "Weekly ground reporting on YouTube",
];

const MINI_STATS = [
  { value: "12+", label: "Years advising" },
  { value: "500+", label: "Investors guided" },
  { value: "100%", label: "Verified listings" },
];

export default function AboutAdvisor() {
  return (
    <section id="about" className="bg-sky py-24 lg:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Portrait */}
        <div className="relative order-last lg:order-first">
          <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-gradient-to-tr from-gold/25 via-transparent to-navy/10 blur-2xl" />
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-5xl border border-white/60 shadow-float ring-1 ring-navy/5">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
              alt="Deepesh Choudhary, property consultant"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
              <div>
                <p className="font-display text-lg font-semibold text-navy">
                  Deepesh Choudhary
                </p>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                  Property Consultant
                </p>
              </div>
              <BadgeCheck className="h-6 w-6 text-gold" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="eyebrow">About the Advisor</p>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] text-navy lg:text-6xl">
            Guidance you can build a decade on.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Deepesh Choudhary helps investors navigate the YEIDA real estate
            market with transparent, research-driven guidance — from scheme
            selection to allotment and resale.
          </p>

          <ul className="mt-8 space-y-3">
            {CREDS.map((c) => (
              <li key={c} className="flex items-center gap-3 text-[15px] text-ink">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <BadgeCheck className="h-4 w-4 text-gold" strokeWidth={2.2} />
                </span>
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-navy px-7 py-4 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(10,22,38,0.2)] transition-transform hover:-translate-y-0.5"
            >
              <CalendarDays className="h-5 w-5" strokeWidth={2} />
              Schedule Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-7 py-4 text-[15px] font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 text-emerald-600" strokeWidth={2} />
              WhatsApp
            </a>
            <a
              href="https://www.youtube.com/@deepeshchoudhary0908"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-7 py-4 text-[15px] font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              <Youtube className="h-5 w-5 text-red-500" fill="currentColor" strokeWidth={0} />
              YouTube
            </a>
          </div>

          {/* mini stats */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            {MINI_STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-navy">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
