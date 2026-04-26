"use client";

import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ACADEMY_INFO, getMapsDirectionsUrl } from "@/lib/backend";
import { MapPin, Navigation, Phone } from "lucide-react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4!2d88.4800!3d22.7200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEyLjAiTiA4OMKwMjgnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin";

export default function LocationSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="location" className="section-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-body uppercase tracking-widest mb-3">
            <span aria-hidden="true">📍</span> Location
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Visit <span className="text-gradient">Our Academy</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto font-body text-foreground/65 dark:text-muted-foreground">
            Conveniently located in Barasat, Kolkata. Come visit us or get in
            touch to schedule a trial class.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Location card */}
          <div
            className={`glass rounded-2xl border border-border/30 overflow-hidden shadow-elevated transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Map embed */}
            <div className="relative h-64 w-full overflow-hidden bg-muted/20">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aim Chess Academy location on map"
                className="absolute inset-0"
              />
            </div>

            {/* Location info */}
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">
                    {ACADEMY_INFO.name}
                  </div>
                  <div className="font-body text-sm text-foreground/65 dark:text-muted-foreground leading-relaxed mt-0.5">
                    {ACADEMY_INFO.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a
                  href={`tel:${ACADEMY_INFO.phone}`}
                  className="font-body text-sm text-foreground hover:text-accent transition-colors duration-200"
                  data-ocid="location.phone_link"
                >
                  {ACADEMY_INFO.phone}
                </a>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  className="flex-1 btn-gold rounded-xl text-sm shadow-glow"
                  onClick={() =>
                    window.open(
                      getMapsDirectionsUrl(ACADEMY_INFO.address),
                      "_blank",
                    )
                  }
                  data-ocid="location.directions_button"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl text-sm border-border/50 hover:border-accent/40 hover:text-accent"
                  asChild
                >
                  <a
                    href={`tel:${ACADEMY_INFO.phone}`}
                    data-ocid="location.call_button"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Hours & info card */}
          <div
            className={`glass rounded-2xl border border-border/30 p-6 shadow-elevated transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            data-ocid="location.info_card"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-5">
              Academy Hours
            </h3>
            <div className="space-y-3">
              {[
                { day: "Monday – Friday", time: "4:00 PM – 8:00 PM" },
                { day: "Saturday", time: "9:00 AM – 7:00 PM" },
                { day: "Sunday", time: "9:00 AM – 5:00 PM" },
              ].map(({ day, time }) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-2.5 border-b border-border/20 last:border-0"
                >
                  <span className="font-body text-sm text-foreground/65 dark:text-muted-foreground">
                    {day}
                  </span>
                  <span className="font-display text-sm font-semibold text-accent">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/30">
              <div className="font-display text-sm font-bold text-accent mb-1">
                🎯 Free Trial Class Available
              </div>
              <p className="text-xs font-body text-foreground/65 dark:text-muted-foreground">
                New students can join a free trial class before enrolling. Call
                or WhatsApp to book your spot.
              </p>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-primary/20 border border-primary/30">
              <div className="font-display text-sm font-bold text-foreground mb-1">
                🏆 FIDE & State Affiliation
              </div>
              <p className="text-xs font-body text-foreground/65 dark:text-muted-foreground">
                Our students participate in AICF-rated tournaments and West
                Bengal state-level championships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
