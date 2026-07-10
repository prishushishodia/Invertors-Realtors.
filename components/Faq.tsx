"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What is YEIDA?",
    a: "YEIDA — the Yamuna Expressway Industrial Development Authority — governs planned development along the Yamuna Expressway, including the region around the Noida International Airport at Jewar.",
  },
  {
    q: "How does allotment work?",
    a: "Plots are allotted through authority schemes and draws. Eligibility, plot sizes and pricing are notified per scheme; we help you track upcoming schemes and prepare your application.",
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
    <section id="faq" className="bg-paper py-20 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Answers</p>
            <h2 className="display-h2 mt-6">Frequently asked questions.</h2>
          </div>

          <div className="lg:pt-2">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl font-medium text-navy">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-[15px] leading-relaxed text-muted">
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
