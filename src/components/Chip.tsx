import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  accent?: false | 1 | 2 | 3;
  tilt?: number;
};

export function Chip({ children, accent = false, tilt = 0 }: ChipProps) {
  const cls = "chip" + (accent ? " is-a" + accent : "");
  return (
    <span className={cls} style={{ transform: `rotate(${tilt}deg)` }}>
      {children}
    </span>
  );
}
