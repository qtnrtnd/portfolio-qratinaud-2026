"use client";

import { useLayoutEffect, useRef, useState } from "react";

const SPEED_PX_PER_SEC = 50;

type MarqueeProps = {
  items: readonly string[];
};

export function Marquee({ items }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const trackKey = items.join("|");

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const half = track.scrollWidth / 2;
      if (half > 0) setDuration(half / SPEED_PX_PER_SEC);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [trackKey]);

  const pair = [...items, ...items];
  const dotColors = ["var(--accent-1)", "var(--accent-2)", "var(--accent-3)"];

  return (
    <div
      role="marquee"
      className="relative flex items-center h-10 overflow-hidden bg-ink text-paper border-b-[1.5px] border-b-ink"
    >
      <div
        key={trackKey}
        ref={trackRef}
        className="marquee-track"
        style={{
          animationDuration: duration ? `${duration}s` : undefined,
        }}
      >
        {pair.map((it, i) => (
          <span
            key={`${i}-${it}`}
            className="mono inline-flex items-center gap-6 text-xs font-medium text-paper"
          >
            {it}
            <span
              className="marquee-dot"
              aria-hidden="true"
              style={{ background: dotColors[i % 3] }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
