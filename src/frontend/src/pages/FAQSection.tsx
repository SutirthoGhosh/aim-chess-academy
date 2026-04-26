"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is the minimum age to join Aim Chess Academy?",
    a: "We welcome students from age 5 onwards. Our Kids Chess Foundation Program is specifically designed for children aged 5–12, with age-appropriate teaching methods and fun activities.",
  },
  {
    q: "Do you offer online classes?",
    a: "Yes! We offer both online and offline classes. Online sessions are conducted via video call with the same quality of coaching as in-person classes. Perfect for students who cannot visit the centre.",
  },
  {
    q: "How long does it take to become tournament-ready?",
    a: "With regular practice, most dedicated students are ready for local tournaments within 6–8 months. Advanced tournament preparation is available as a dedicated batch for serious competitors.",
  },
  {
    q: "What are the fee structures?",
    a: "Our fees vary by batch type and session frequency. Please contact us via call or WhatsApp for the latest pricing. We offer flexible payment options and sibling discounts.",
  },
  {
    q: "Is there a free trial class?",
    a: "Yes! Every new student gets one free introductory class to experience our coaching style, meet the instructors, and see if it's the right fit. No commitment required.",
  },
  {
    q: "Do you provide study materials?",
    a: "Yes, we provide curated study materials including openings worksheets, tactics puzzles, endgame exercises, and access to our online resource library at no extra cost.",
  },
  {
    q: "Are the coaches FIDE rated?",
    a: "Our head coaches are experienced tournament players with formal chess training credentials. We follow AICF guidelines and our students participate in FIDE and AICF-rated events.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass rounded-xl border border-border/30 hover:border-accent/30 overflow-hidden transition-all duration-200"
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-ocid={`faq.toggle.${index + 1}`}
      >
        <span className="font-display font-semibold text-sm md:text-base text-foreground group-hover:text-accent transition-colors duration-200">
          {item.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 fadeIn">
          <p className="font-body text-sm text-foreground/65 dark:text-muted-foreground leading-relaxed border-t border-border/20 pt-4">
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="faq" className="section-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-body uppercase tracking-widest mb-3">
            <span aria-hidden="true">❓</span> FAQ
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 font-body text-foreground/65 dark:text-muted-foreground">
            Everything you need to know before enrolling at Aim Chess Academy.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-10 text-center">
          <p className="font-body text-foreground/60 dark:text-muted-foreground text-sm mb-4">
            Still have questions? We're happy to help.
          </p>
          <a
            href="tel:09903452493"
            className="inline-flex items-center gap-2 btn-gold rounded-full px-6 py-3 text-sm font-semibold shadow-glow transition-smooth hover:shadow-glow-lg"
            data-ocid="faq.call_cta"
          >
            📞 Call Us: 09903452493
          </a>
        </div>
      </div>
    </section>
  );
}
