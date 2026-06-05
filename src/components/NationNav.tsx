"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Seal } from "./Seal";

const links = [
  { href: "/citizens", label: "Citizens" },
  { href: "/ministries", label: "Ministries" },
  { href: "/announcements", label: "Announcements" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/constitution", label: "Constitution" },
];

export function NationNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          className="nav-float mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 transition-all duration-500 mx-3 sm:mx-auto"
        >
          <Link href="/" className="group flex items-center gap-3">
            <Seal size={38} className="transition-transform duration-700 group-hover:rotate-[20deg]" />
            <div className="leading-tight">
              <div className="font-display text-[15px] font-semibold text-cream">
                Republic of Tippa
              </div>
              <div className="text-[9px] uppercase tracking-civic text-gold/70">
                Est. 2026
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? "text-cream" : "text-cream-dim hover:text-cream"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 -z-10 rounded-lg border border-gold/20 bg-gold/5" />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/citizens"
              className="hidden rounded-lg border border-gold/30 bg-gold/5 px-3.5 py-2 text-sm font-medium text-gold transition-all hover:bg-gold/15 hover:ring-gold sm:inline-block"
            >
              Apply for Citizenship
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream/10 text-cream md:hidden"
            >
              <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div className="nav-float mx-3 mt-2 flex flex-col gap-1 p-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-cream-dim hover:bg-cream/5 hover:text-cream"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/citizens"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg border border-gold/30 bg-gold/5 px-3 py-2.5 text-center text-sm font-medium text-gold"
            >
              Apply for Citizenship
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
