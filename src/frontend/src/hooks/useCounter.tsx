"use client";

import { useEffect, useRef, useState } from "react";

interface CounterOptions {
  target: number;
  duration?: number;
  easing?: "linear" | "easeOut";
  startOnMount?: boolean;
}

export function useCounter({
  target,
  duration = 2000,
  easing = "easeOut",
  startOnMount = false,
}: CounterOptions) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startOnMount);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let easedProgress: number;
      if (easing === "easeOut") {
        easedProgress = 1 - (1 - progress) ** 3;
      } else {
        easedProgress = progress;
      }

      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);
    };
  }, [started, target, duration, easing]);

  const start = () => setStarted(true);
  const reset = () => {
    setCount(0);
    setStarted(false);
  };

  return { count, start, reset, started };
}
