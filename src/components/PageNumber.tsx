import type { ReactNode } from "react";

type PageNumberProps = {
  n: number;
  total: number;
  label: string;
  right?: ReactNode;
};

export function PageNumber({ n, total, label, right }: PageNumberProps) {
  return (
    <div className="mono flex justify-between items-center py-4 border-t-[1.5px] border-t-ink text-ink text-[11px]">
      <span>
        {String(n).padStart(2, "0")}/{String(total).padStart(2, "0")} · {label}
      </span>
      <span className="text-mid">{right}</span>
    </div>
  );
}
