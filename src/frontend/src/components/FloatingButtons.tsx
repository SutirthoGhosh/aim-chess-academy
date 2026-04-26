"use client";

import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const baseClass =
    "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-smooth hover:scale-110 active:scale-95";

  return (
    <div
      className="fixed bottom-6 right-4 md:right-6 z-40 flex flex-col gap-3 items-center"
      aria-label="Quick contact buttons"
    >
      {/* Scroll to top */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Scroll to top"
        data-ocid="floating.scroll_top_button"
        className={`${baseClass} glass border border-border/50 text-accent shadow-glow transition-all duration-300 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919903452493?text=Hi%2C%20I%20am%20interested%20in%20chess%20coaching%20at%20Aim%20Chess%20Academy."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-ocid="floating.whatsapp_button"
        className={`${baseClass} text-white shadow-whatsapp`}
        style={{ backgroundColor: "oklch(0.5 0.17 145)" }}
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      {/* Call */}
      <a
        href="tel:09903452493"
        aria-label="Call Aim Chess Academy"
        data-ocid="floating.call_button"
        className={`${baseClass} btn-gold shadow-glow-lg`}
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  );
}
