import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aim Chess Academy | Master Chess in Barasat, Kolkata",
  description:
    "Aim Chess Academy offers expert chess coaching for kids, beginners, and competitive players in Barasat, Kolkata. Build strategy, focus, and tournament-winning mindset.",
  openGraph: {
    title: "Aim Chess Academy | Master Chess in Barasat, Kolkata",
    description:
      "Learn strategy, openings, tactics, endgames, and tournament mindset through expert chess coaching. Enroll today at Aim Chess Academy, Barasat.",
    type: "website",
    images: [{ url: "/assets/generated/hero-chess.dim_1400x700.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aim Chess Academy | Master Chess in Barasat, Kolkata",
    description:
      "Expert chess coaching for kids, beginners, and competitive players in Barasat, Kolkata.",
  },
  other: {
    "theme-color": "#0a0a0f",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* Structured data injected via metadata.other — see metadata export above */}
      </head>
      <body
        className={`${fraunces.variable} ${figtree.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="aim-chess-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
