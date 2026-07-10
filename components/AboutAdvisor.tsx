import { CalendarDays, MessageCircle } from "lucide-react";

export default function AboutAdvisor() {
  return (
    <section id="about" className="bg-sky py-24 lg:py-32">
      <div className="container-page">
        <p className="eyebrow">About the Advisor</p>
        <h2 className="mt-6 font-display text-6xl font-semibold text-navy lg:text-7xl">
          Deepesh Choudhary
        </h2>
        <p className="mt-4 text-lg font-semibold uppercase tracking-[0.14em] text-gold">
          Property Consultant
        </p>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Helping investors navigate the YEIDA real estate market with
          transparent guidance and research-driven insights.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-navy px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <CalendarDays className="h-5 w-5" strokeWidth={2} />
            Schedule Consultation
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-7 py-4 text-[15px] font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
