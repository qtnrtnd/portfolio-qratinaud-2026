import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { MarqueeMount } from "@/components/MarqueeMount";
import { readSiteTarget } from "@/lib/site-target";
import { BRAND, heroDescription, tagline } from "@/lib/data/profile";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://madebyquent.in";

export async function generateMetadata(): Promise<Metadata> {
  const target = await readSiteTarget();
  const title = `${BRAND} - ${tagline(target)}`;
  const description = heroDescription(target);
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: BRAND,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const target = await readSiteTarget();
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <MarqueeMount target={target} />
        {children}
        <AnimatedCursor />
      </body>
    </html>
  );
}
