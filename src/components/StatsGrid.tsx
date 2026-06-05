"use client";

import { motion } from "framer-motion";
import { nationalStats } from "@/lib/stats";
import { AnimatedCounter } from "./AnimatedCounter";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {nationalStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:ring-gold hover:-translate-y-1"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="font-display text-4xl font-semibold text-gradient-gold sm:text-5xl">
            {stat.display ? (
              stat.display
            ) : (
              <>
                {stat.prefix}
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </>
            )}
          </div>
          <div className="mt-3 text-sm font-medium text-cream">{stat.label}</div>
          <div className="mt-1 text-xs leading-relaxed text-cream-faint">
            {stat.caption}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
