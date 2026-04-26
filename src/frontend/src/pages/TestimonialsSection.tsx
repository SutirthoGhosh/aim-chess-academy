"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent",
    avatar: "PS",
    quote:
      "My child's concentration improved a lot after joining Aim Chess Academy. The coaches are patient and really understand how to teach kids.",
    rating: 5,
  },
  {
    name: "Rahul Dey",
    role: "Student",
    avatar: "RD",
    quote:
      "Best chess academy in Barasat. The structured approach and quality coaching helped me win my first district tournament.",
    rating: 5,
  },
  {
    name: "Susmita Ghosh",
    role: "Parent",
    avatar: "SG",
    quote:
      "Professional coaching with great results. My son went from a complete beginner to playing inter-school competitions in 6 months.",
    rating: 5,
  },
  {
    name: "Arjun Mukherjee",
    role: "Advanced Student",
    avatar: "AM",
    quote:
      "Highly recommended for serious learners. The tournament preparation program is exceptional — my ELO rating has improved dramatically.",
    rating: 5,
  },
  {
    name: "Dipika Roy",
    role: "Parent",
    avatar: "DR",
    quote:
      "Wonderful environment for kids. My daughter looks forward to every class. The academy truly builds discipline and strategic thinking.",
    rating: 5,
  },
  {
    name: "Souvik Bose",
    role: "Student",
    avatar: "SB",
    quote:
      "The 1-on-1 coaching sessions are incredible. My coach analyzes every game deeply and helps me understand my weaknesses clearly.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  const stars = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {stars.map((n) => (
        <span
          key={`star-${n}`}
          className="text-accent text-base"
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl border border-border/30 hover:border-accent/30 p-6 shadow-elevated transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-ocid={`testimonials.testimonial.item.${index + 1}`}
    >
      {/* Quote mark */}
      <div
        className="text-4xl text-accent/40 font-display leading-none mb-3"
        aria-hidden="true"
      >
        "
      </div>
      <p className="font-body text-sm text-foreground/70 dark:text-muted-foreground leading-relaxed mb-5 italic">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-border/20">
        <Avatar className="w-10 h-10 border border-accent/30">
          <AvatarFallback className="bg-accent/20 text-accent text-xs font-display font-bold">
            {testimonial.avatar}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <div className="font-display text-sm font-semibold text-foreground truncate">
            {testimonial.name}
          </div>
          <div className="text-xs text-foreground/55 dark:text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
        <div className="ml-auto">
          <StarRating count={testimonial.rating} />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="section-dark">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-body uppercase tracking-widest mb-3">
            <span aria-hidden="true">★</span> Testimonials
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto font-body text-foreground/65 dark:text-muted-foreground">
            Real stories from students and parents who have experienced the Aim
            Chess Academy difference.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
