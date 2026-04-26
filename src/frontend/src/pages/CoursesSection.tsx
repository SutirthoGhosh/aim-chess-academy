"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const courses = [
  {
    icon: "♙",
    title: "Beginner Batch",
    badge: "Most Popular",
    badgeVariant: "default" as const,
    duration: "3 months",
    sessions: "3x / week",
    desc: "Perfect for absolute beginners. Learn piece movements, basic tactics, simple openings and fundamental endgames.",
    highlights: [
      "Board setup & piece moves",
      "Basic tactics & patterns",
      "Simple openings",
      "Puzzle training",
    ],
  },
  {
    icon: "♗",
    title: "Intermediate Batch",
    badge: "Skill Builder",
    badgeVariant: "secondary" as const,
    duration: "4 months",
    sessions: "3x / week",
    desc: "For players who know the basics. Deepen your positional understanding, opening theory, and tactical vision.",
    highlights: [
      "Opening repertoire",
      "Positional play",
      "Tactical combinations",
      "Game analysis",
    ],
  },
  {
    icon: "♕",
    title: "Advanced Tournament Batch",
    badge: "Elite",
    badgeVariant: "default" as const,
    duration: "6 months",
    sessions: "5x / week",
    desc: "Intensive training for competitive players targeting rated tournaments and championships.",
    highlights: [
      "Deep opening prep",
      "Complex endgames",
      "Tournament psychology",
      "Grandmaster games study",
    ],
  },
  {
    icon: "♔",
    title: "Kids Chess Foundation",
    badge: "Ages 5–12",
    badgeVariant: "secondary" as const,
    duration: "Ongoing",
    sessions: "2x / week",
    desc: "Fun, age-appropriate chess education that builds focus, memory, and problem-solving skills in young learners.",
    highlights: [
      "Fun learning games",
      "Memory & focus exercises",
      "Mini tournaments",
      "Parent progress updates",
    ],
  },
  {
    icon: "♞",
    title: "Personal 1-on-1 Coaching",
    badge: "Premium",
    badgeVariant: "outline" as const,
    duration: "Flexible",
    sessions: "By appointment",
    desc: "Dedicated one-on-one sessions tailored entirely to your goals, skill level, and tournament schedule.",
    highlights: [
      "Personalized curriculum",
      "Flexible scheduling",
      "Video analysis sessions",
      "Direct coach access",
    ],
  },
];

function CourseCard({
  course,
  index,
}: {
  course: (typeof courses)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl border border-border/30 hover:border-accent/40 overflow-hidden shadow-elevated group transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-ocid={`courses.course.item.${index + 1}`}
    >
      {/* Card header */}
      <div className="p-6 pb-4 border-b border-border/20">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className="text-4xl text-accent float-animation"
            style={{ animationDelay: `${index * 0.3}s` }}
            aria-hidden="true"
          >
            {course.icon}
          </span>
          <Badge
            variant={course.badgeVariant}
            className={
              course.badgeVariant === "default"
                ? "bg-accent/20 text-accent border-accent/40 text-xs"
                : "text-xs"
            }
          >
            {course.badge}
          </Badge>
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-1">
          {course.title}
        </h3>
        <div className="flex gap-3 text-xs text-foreground/60 dark:text-muted-foreground font-body">
          <span>📅 {course.duration}</span>
          <span>·</span>
          <span>🕐 {course.sessions}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 pt-4">
        <p className="text-sm font-body text-foreground/65 dark:text-muted-foreground leading-relaxed mb-4">
          {course.desc}
        </p>
        <ul className="space-y-1.5 mb-5">
          {course.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-sm font-body text-foreground/65 dark:text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <Button
          className="w-full btn-gold rounded-xl text-sm shadow-glow"
          onClick={() => {
            const el = document.querySelector("#contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          data-ocid={`courses.enroll_button.${index + 1}`}
        >
          Enroll in This Course
        </Button>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="courses" className="section-dark">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-body uppercase tracking-widest mb-3">
            <span aria-hidden="true">♜</span> Courses Offered
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Find Your <span className="text-gradient">Perfect Program</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto font-body text-foreground/65 dark:text-muted-foreground">
            Every batch is crafted by expert coaches to maximize your progress
            at every level.
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
