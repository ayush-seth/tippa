import type { Metadata } from "next";
import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { NationNav } from "@/components/NationNav";
import { NationFooter } from "@/components/NationFooter";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "The Republic of Tippa — The Operating System For Friendship",
    template: "%s · Republic of Tippa",
  },
  description:
    "A sovereign digital nation dedicated to preserving friendships, parties, memories, scandals, achievements, annual traditions, and administrative chaos.",
  metadataBase: new URL("https://tippa.in"),
  openGraph: {
    title: "The Republic of Tippa",
    description: "The Operating System For Friendship. Established 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NationNav />
        <main className="flex-1">{children}</main>
        <NationFooter />
        <div className="crt-overlay" aria-hidden />
      </body>
    </html>
  );
}
