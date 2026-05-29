import { ImageResponse } from "next/og";
import { readSiteTarget } from "@/lib/site-target";
import { BRAND, tagline } from "@/lib/data/profile";

export const alt = "made by quent.in";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (see globals.css): paper = dark bg, ink = light text.
const PAPER = "#1f1f1d";
const INK = "#f0ece2";
const ACCENT = "#e8623d";

export default async function OpengraphImage() {
  const target = await readSiteTarget();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          color: INK,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.18em",
            color: ACCENT,
            textTransform: "uppercase",
          }}
        >
          {tagline(target)}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {BRAND}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#a8a39a",
          }}
        >
          <span>Quentin Ratinaud</span>
          <span>Rennes · FR</span>
        </div>
      </div>
    ),
    size,
  );
}
