"use client";

import { useCounter } from "@/hooks/useCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Students Trained", icon: "👨‍🎓" },
  { value: 50, suffix: "+", label: "Tournament Players", icon: "🏆" },
  { value: 5, suffix: "+", label: "Years Experience", icon: "📅" },
  { value: 95, suffix: "%", label: "Positive Feedback", icon: "⭐" },
];

function StatCard({
  value,
  suffix,
  label,
  icon,
  index,
  trigger,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  index: number;
  trigger: boolean;
}) {
  const { count, start, started } = useCounter({
    target: value,
    duration: 1800,
  });
  const startedRef = useRef(false);
  const startRef = useRef(start);
  startRef.current = start;

  useEffect(() => {
    if (trigger && !startedRef.current) {
      startedRef.current = true;
      startRef.current();
    }
  }, [trigger]);

  return (
    <div
      className="glass rounded-2xl border border-border/30 hover:border-accent/40 p-8 text-center shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
      data-ocid={`stats.stat.item.${index + 1}`}
    >
      <div className="text-4xl mb-3" aria-hidden="true">
        {icon}
      </div>
      <div className="font-display text-5xl md:text-6xl font-bold text-accent mb-2">
        {started ? count : 0}
        {suffix}
      </div>
      <div className="font-body text-sm text-foreground/65 dark:text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section id="stats" className="section-muted relative overflow-hidden">
      {/* Background chess pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-conic-gradient(oklch(0.65 0.15 75) 0% 25%, transparent 0% 50%)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-body uppercase tracking-widest mb-3">
            <span aria-hidden="true">♛</span> Our Impact
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Numbers That <span className="text-gradient">Speak for Us</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              index={i}
              trigger={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
