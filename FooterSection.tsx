"use client";

import { ACADEMY_INFO } from "@/lib/backend";
import { ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function FooterSection() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "aimchessacademy"
  );

  return (
    <footer className="bg-card border-t border-border/30" id="footer">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl text-accent" aria-hidden="true">
                ♛
              </span>
              <div>
                <div className="font-display text-lg font-bold text-foreground">
                  Aim Chess Academy
                </div>
                <div className="text-xs text-foreground/55 dark:text-muted-foreground tracking-widest uppercase">
                  {ACADEMY_INFO.tagline}
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-foreground/65 dark:text-muted-foreground leading-relaxed max-w-xs">
              Premium chess coaching for students of all ages and skill levels
              in Barasat, Kolkata. Building champions one move at a time.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${ACADEMY_INFO.phone}`} className="glass rounded-lg px-4 py-2 text-xs font-body text-accent border border-accent/30 hover:border-accent/60 transition-smooth"
                data-ocid="footer.phone_link"
              >
                📞 {ACADEMY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-foreground/65 dark:text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group"
                    data-ocid={`footer.nav.${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & contact */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-widest">
              Find Us
            </h3>
            <address className="not-italic space-y-3">
              <div className="font-body text-sm text-foreground/65 dark:text-muted-foreground leading-relaxed">
                <div className="text-foreground font-semibold mb-1">
                  Aim Chess Academy
                </div>
                {ACADEMY_INFO.address}
              </div>
              <a
                href={`tel:${ACADEMY_INFO.phone}`}
                className="font-body text-sm text-accent hover:text-accent/80 transition-colors duration-200 block"
                data-ocid="footer.phone_address_link"
              >
                📞 {ACADEMY_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-200 flex items-center gap-1.5"
                data-ocid="footer.whatsapp_link"
              >
                💬 WhatsApp Us
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-foreground/50 dark:text-muted-foreground text-center sm:text-left">
            © {year} {ACADEMY_INFO.name}. All rights reserved. · {ACADEMY_INFO.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}