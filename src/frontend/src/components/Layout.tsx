"use client";

import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Why Us", href: "#why-us" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setMenuOpen(false);
  };

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-border/40 shadow-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
            data-ocid="header.logo"
          >
            <span
              className="text-3xl float-animation text-accent"
              aria-hidden="true"
            >
              ♛
            </span>
            <div className="text-left">
              <span className="font-display font-bold text-lg tracking-tight leading-none block text-foreground group-hover:text-accent transition-colors duration-200">
                Aim Chess
              </span>
              <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">
                Academy
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-body text-muted-foreground hover:text-accent transition-colors duration-200 relative group"
                data-ocid={`header.nav.${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              aria-label={
                mounted
                  ? `Switch to ${isDark ? "light" : "dark"} mode`
                  : "Toggle theme"
              }
              data-ocid="header.theme_toggle"
            >
              <span
                className="relative w-4 h-4 flex items-center justify-center transition-all duration-300"
                aria-hidden="true"
              >
                {/* Sun icon — shown in dark mode to switch to light */}
                <Sun
                  className={`absolute w-4 h-4 transition-all duration-300 ${
                    mounted && isDark
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                />
                {/* Moon icon — shown in light mode to switch to dark */}
                <Moon
                  className={`absolute w-4 h-4 transition-all duration-300 ${
                    mounted && !isDark
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-90 scale-50"
                  }`}
                />
              </span>
            </button>

            <Button
              className="hidden md:flex btn-gold rounded-full px-5 text-sm shadow-glow"
              onClick={() => scrollTo("#contact")}
              data-ocid="header.enroll_button"
            >
              Enroll Now
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-accent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="header.mobile_menu_button"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass border-t border-border/30 px-4 py-4 fadeIn">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2.5 text-sm font-body text-muted-foreground hover:text-accent hover:bg-muted/20 rounded-lg transition-all duration-200"
                  data-ocid={`mobile.nav.${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-2 btn-gold rounded-full shadow-glow"
                onClick={() => {
                  scrollTo("#contact");
                  setMenuOpen(false);
                }}
                data-ocid="mobile.enroll_button"
              >
                Enroll Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
