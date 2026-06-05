"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  value: number;
  durationMs?: number;
  className?: string;
};

export function AnimatedCounter({ value, durationMs = 1600, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: durationMs / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-IN")}
    </span>
  );
}
