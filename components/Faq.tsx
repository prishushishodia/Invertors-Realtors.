"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What is YEIDA?",
    a: "YEIDA — the Yamuna Expressway Industrial Development Authority — governs planned development along the Yamuna Expressway, including the region around the Noida International Airport at Jewar.",
  },
  {
    q: "How does allotment work?",
    a: "Plots are allotted through authority schemes and draws such as RPS-10. Eligibility, plot sizes and pricing are notified per scheme; we help you track upcoming schemes and prepare your application.",
  },
  {
    q: "Is resale available?",
    a: "Yes. Resale is possible subject to authority transfer rules and applicable lock-in periods. We manage the documentation and support transparent price discovery.",
  },
  {
    q: "Can NRIs invest?",
    a: "NRIs can invest in eligible YEIDA schemes in line with FEMA guidelines. We guide you through documentation, remittance and compliance requirements end to end.",
  },
  {
    q: "How do I verify plots?",
    a: "Every plot is cross-checked against authority notifications, approved layout plans and allotment records before we advise on any purchase.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow">Answers</p>
            <h2 className="display-h2 mt-6">Frequently asked questions.</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
              Still weighing a decision? Reach out and we’ll walk you through the
              specifics of your sector and scheme.
            </p>
            <a href="#contact" className="btn-primary mt-8">
              Talk to an advisor
            </a>
          </div>

          <div className="lg:pt-2">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={`mb-3 overflow-hidden rounded-3xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-gold/40 bg-white shadow-card"
                      : "border-line bg-white/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl font-medium text-navy">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-gold text-navy-deep"
                          : "bg-sand text-navy"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
