"use client";

import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, Phone } from "lucide-react";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Floating chess pieces decoration
const FLOATING_PIECES = [
  { piece: "♔", style: "top-[15%] left-[8%] text-5xl opacity-10", delay: "0s" },
  {
    piece: "♕",
    style: "top-[25%] right-[6%] text-6xl opacity-10",
    delay: "0.5s",
  },
  {
    piece: "♖",
    style: "bottom-[30%] left-[5%] text-4xl opacity-[0.08]",
    delay: "1s",
  },
  {
    piece: "♗",
    style: "bottom-[20%] right-[10%] text-5xl opacity-10",
    delay: "1.5s",
  },
  {
    piece: "♘",
    style: "top-[45%] left-[15%] text-3xl opacity-[0.08]",
    delay: "0.8s",
  },
  {
    piece: "♙",
    style: "top-[55%] right-[18%] text-3xl opacity-[0.08]",
    delay: "1.2s",
  },
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-chess.dim_1400x700.jpg')",
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Decorative floating chess pieces */}
      {FLOATING_PIECES.map(({ piece, style, delay }) => (
        <span
          key={piece + style}
          className={`absolute select-none pointer-events-none text-accent float-animation font-display ${style}`}
          style={{ animationDelay: delay }}
          aria-hidden="true"
        >
          {piece}
        </span>
      ))}

      {/* Chess board pattern accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-conic-gradient(oklch(0.65 0.15 75) 0% 25%, transparent 0% 50%)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Hero content */}
      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass border border-accent/30 rounded-full px-4 py-1.5 mb-6 text-xs font-body text-accent tracking-widest uppercase shadow-glow">
          <span aria-hidden="true">♛</span>
          <span>Barasat · Kolkata · West Bengal</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight text-foreground mb-6">
          Master the Game with <br className="hidden sm:block" />
          <span className="text-gradient">Aim Chess Academy</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto font-body text-xl md:text-2xl text-foreground/80 dark:text-muted-foreground leading-relaxed mb-10">
          Learn strategy, openings, tactics, endgames, focus, and tournament
          mindset through expert chess coaching.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="btn-gold rounded-full px-8 py-6 text-base shadow-glow-lg font-semibold min-w-[180px]"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.enroll_button"
          >
            Enroll Now
          </Button>
          <a
            href="tel:09903452493"
            className="inline-flex items-center gap-2 glass glass-hover border border-accent/30 rounded-full px-8 py-3.5 text-base font-semibold text-foreground hover:text-accent transition-smooth min-w-[180px] justify-center"
            data-ocid="hero.call_button"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { label: "Students Trained", value: "200+" },
            { label: "Tournament Players", value: "50+" },
            { label: "Years Experience", value: "5+" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl font-bold text-accent">
                {value}
              </div>
              <div className="text-xs font-body text-foreground/60 dark:text-muted-foreground mt-0.5 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("#why-us")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors duration-200 animate-bounce"
        aria-label="Scroll to next section"
        data-ocid="hero.scroll_down_button"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
