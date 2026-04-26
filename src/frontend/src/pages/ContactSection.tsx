"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ACADEMY_INFO, formatWhatsAppLink } from "@/lib/backend";
import { CheckCircle, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    const msg = `Hi, I'm ${form.name} (📞 ${form.phone}). ${form.message || "I'm interested in chess coaching at Aim Chess Academy."}`;
    window.open(formatWhatsAppLink(ACADEMY_INFO.whatsapp, msg), "_blank");
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section id="contact" className="section-dark">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-body uppercase tracking-widest mb-3">
            <span aria-hidden="true">📬</span> Contact Us
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Start Your <span className="text-gradient">Chess Journey</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto font-body text-foreground/65 dark:text-muted-foreground">
            Ready to enroll or have questions? Reach out — we respond within
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact channels */}
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <a
              href={`tel:${ACADEMY_INFO.phone}`}
              className="flex items-center gap-4 glass glass-hover rounded-2xl p-5 border border-border/30 hover:border-accent/40 group"
              data-ocid="contact.phone_link"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-300">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-foreground">
                  Call Us
                </div>
                <div className="font-body text-sm text-foreground/65 dark:text-muted-foreground">
                  {ACADEMY_INFO.phone}
                </div>
                <div className="text-xs text-accent mt-0.5">
                  Available 9 AM – 8 PM
                </div>
              </div>
            </a>

            <a
              href={formatWhatsAppLink(
                ACADEMY_INFO.whatsapp,
                "Hi, I am interested in chess coaching at Aim Chess Academy.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass glass-hover rounded-2xl p-5 border border-border/30 hover:border-green-500/40 group"
              data-ocid="contact.whatsapp_link"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 bg-green-500/15 border border-green-500/30">
                <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-foreground">
                  WhatsApp
                </div>
                <div className="font-body text-sm text-foreground/65 dark:text-muted-foreground">
                  +91 {ACADEMY_INFO.whatsapp.replace(/^91/, "")}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-0.5">
                  Chat with us instantly
                </div>
              </div>
            </a>

            {/* Chess promo card */}
            <div className="glass rounded-2xl border border-accent/25 p-5 relative overflow-hidden">
              <div
                className="absolute right-4 top-4 text-6xl opacity-10 text-accent select-none"
                aria-hidden="true"
              >
                ♛
              </div>
              <div className="font-display font-bold text-foreground mb-1">
                🎓 Free Trial Class
              </div>
              <p className="text-sm font-body text-foreground/65 dark:text-muted-foreground leading-relaxed">
                New students get a free introductory class to experience our
                teaching style before committing.
              </p>
              <Button
                className="mt-3 btn-gold rounded-xl text-sm w-full shadow-glow"
                onClick={() => {
                  const el = document.querySelector("#contact form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="contact.free_trial_button"
              >
                Book Free Trial
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`glass rounded-2xl border border-border/30 p-6 shadow-elevated transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            data-ocid="contact.form_card"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center gap-4 fadeInUp">
                <CheckCircle className="w-16 h-16 text-accent" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-sm font-body text-foreground/65 dark:text-muted-foreground">
                  We've opened WhatsApp with your message. We'll get back to you
                  shortly.
                </p>
                <Button
                  variant="outline"
                  className="rounded-xl border-border/50 hover:border-accent/40 hover:text-accent mt-2"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", message: "" });
                  }}
                  data-ocid="contact.send_another_button"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs font-body text-foreground/55 dark:text-muted-foreground">
                    We'll reply on WhatsApp within hours.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-body text-foreground"
                  >
                    Your Name *
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Rahul Kumar"
                    value={form.name}
                    onChange={handleChange("name")}
                    required
                    className="bg-input border-border/50 focus:border-accent/60 rounded-xl"
                    data-ocid="contact.name_input"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-body text-foreground"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    required
                    className="bg-input border-border/50 focus:border-accent/60 rounded-xl"
                    data-ocid="contact.phone_input"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-body text-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us your interest — e.g. beginner batch for my child..."
                    value={form.message}
                    onChange={handleChange("message")}
                    rows={3}
                    className="bg-input border-border/50 focus:border-accent/60 rounded-xl resize-none"
                    data-ocid="contact.message_textarea"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting || !form.name || !form.phone}
                  className="w-full btn-gold rounded-xl shadow-glow font-semibold"
                  data-ocid="contact.submit_button"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
