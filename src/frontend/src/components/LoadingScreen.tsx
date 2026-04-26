"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-live="polite"
      aria-label="Loading Aim Chess Academy"
    >
      {/* Background chess pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
        {Array.from({ length: 64 }, (_, idx) => {
          const col = idx % 8;
          const row = Math.floor(idx / 8);
          const cellId = `r${row}c${col}`;
          return (
            <span
              key={cellId}
              className="absolute text-4xl text-accent"
              style={{
                left: `${col * 12.5}%`,
                top: `${row * 12.5}%`,
                opacity: (col + row) % 2 === 0 ? 0.3 : 0,
              }}
            >
              ■
            </span>
          );
        })}
      </div>

      {/* King piece */}
      <div className="relative flex flex-col items-center gap-6">
        <div
          className="text-8xl md:text-9xl select-none"
          style={{
            animation: "goldPulse 1.2s ease-in-out infinite",
            filter: "drop-shadow(0 0 32px oklch(0.65 0.15 75 / 0.8))",
          }}
          aria-hidden="true"
        >
          ♛
        </div>

        {/* Brand name */}
        <div className="text-center fadeInUp">
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Aim Chess <span className="text-gradient">Academy</span>
          </h1>
          <p className="mt-2 text-sm font-body text-muted-foreground tracking-widest uppercase">
            Where Strategy Meets Success
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 mt-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes goldPulse {
          0%, 100% { 
            transform: scale(1) translateY(0px);
            filter: drop-shadow(0 0 24px oklch(0.65 0.15 75 / 0.6));
          }
          50% { 
            transform: scale(1.08) translateY(-6px);
            filter: drop-shadow(0 0 48px oklch(0.65 0.15 75 / 0.9));
          }
        }
      `}</style>
    </div>
  );
}
