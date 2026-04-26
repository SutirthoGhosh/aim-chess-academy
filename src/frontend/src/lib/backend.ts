// Backend integration placeholder
// This file provides type-safe backend access utilities
// The actual actor is provided by @caffeineai/core-infrastructure

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  timestamp: number;
}

// Utility to format phone for WhatsApp
export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const encoded = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${cleaned}${encoded ? `?text=${encoded}` : ""}`;
}

// Utility for Google Maps directions
export function getMapsDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export const ACADEMY_INFO = {
  name: "Aim Chess Academy",
  phone: "09903452493",
  whatsapp: "919903452493",
  address: "Surendranath Colony, Chakravartipara, Barasat, Kolkata, West Bengal 700126",
  mapQuery: "Aim Chess Academy Barasat Kolkata",
  tagline: "Where Strategy Meets Success",
  email: "aimchessacademy@gmail.com",
} as const;
