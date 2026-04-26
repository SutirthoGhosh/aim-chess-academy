"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Brain,
  GraduationCap,
  Heart,
  Laptop,
  Trophy,
  Users,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Coaching",
    desc: "Learn from experienced coaches with deep chess knowledge and tournament pedigree.",
  },
  {
    icon: Users,
    title: "Beginner to Advanced",
    desc: "Structured curriculum for all levels — from first moves to complex endgame mastery.",
  },
  {
    icon: Trophy,
    title: "Tournament Preparation",
    desc: "Dedicated tournament coaching, game analysis, and competitive mindset training.",
  },
  {
    icon: Brain,
    title: "Boost IQ, Focus & Discipline",
    desc: "Chess builds concentration, logical thinking, and emotional resilience in every student.",
  },
  {
    icon: Laptop,
    title: "Online + Offline Classes",
    desc: "Flexible learning modes — attend at our centre in Barasat or join live online sessions.",
  },
  {
    icon: Heart,
    title: "Friendly Environment",
    desc: "A warm, encouraging atmosphere where every student feels supported and motivated.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof GraduationCap;
  title: string;
  desc: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`glass glass-hover rounded-2xl p-6 border border-border/30 hover:border-accent/40 shadow-elevated group transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-ocid={`why-us.feature.item.${index + 1}`}
    >
      <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors duration-300">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="font-display font-bold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="font-body text-sm text-foreground/65 dark:text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="why-us" className="section-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-body uppercase tracking-widest mb-3">
            <span aria-hidden="true">♟</span> Why Choose Us
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            The <span className="text-gradient">Aim Chess</span> Advantage
          </h2>
          <p className="mt-4 max-w-xl mx-auto font-body text-foreground/65 dark:text-muted-foreground text-base">
            We don't just teach chess — we build champions, critical thinkers,
            and confident individuals.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
