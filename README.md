# The Republic of Tippa

> The Operating System For Friendship · Established 2026

A premium launch-day teaser site for a fictional sovereign digital nation — built to feel like a real civic operating system. Dark mode, charcoal + burgundy + gold, glassmorphism, animated national statistics, and a great deal of lore.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals, counters, and motion
- TypeScript

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing — hero, animated national statistics, founding story, previews, CTA |
| `/citizens` | Citizen directory with status, aliases, and ministry |
| `/citizens/[slug]` | Full state record for each of the 12 citizens |
| `/ministries` | The 7 governing ministries and their initiatives |
| `/announcements` | Official proclamations styled as classified state memos |
| `/ecosystem` | Teaser cards for the upcoming national product suite |
| `/constitution` | Preamble + 30 constitutional articles |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Content

All worldbuilding lives in `src/lib/` (`citizens.ts`, `ministries.ts`, `announcements.ts`, `ecosystem.ts`, `constitution.ts`, `stats.ts`). Citizen portraits use placeholder photos from `i.pravatar.cc`.

> Friendship Is Infrastructure. Preserving History Since Last Weekend.
