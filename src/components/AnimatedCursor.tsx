"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    dot.style.left = window.innerWidth / 2 + "px";
    dot.style.top = window.innerHeight / 2 + "px";

    const move = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    const over = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.("a, button, .tilt-card, [data-cursor-hover]")) {
        dot.classList.add("is-hovering");
      } else {
        dot.classList.remove("is-hovering");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
