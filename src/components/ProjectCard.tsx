import Link from "next/link";
import type { FullProject } from "@/lib/data/projects";

const OFFSETS = [0, 80, 24, 120, 48, 100, 8, 64];

type Props = {
  p: FullProject;
  idx: number;
};

export function ProjectCard({ p, idx }: Props) {
  const offset = OFFSETS[idx % OFFSETS.length];
  return (
    <Link
      href={`/work/${p.slug}`}
      className="tilt-card no-underline text-ink flex flex-nowrap items-center gap-4.5 py-3.5 px-4.5 max-w-180"
      style={{ marginLeft: offset }}
    >
      <span className="mono w-7 text-mid">
        {String(idx + 1).padStart(2, "0")}
      </span>
      <span className="flex flex-wrap items-center gap-x-4.5 gap-y-1 grow">
        <span className="serif text-4xl italic leading-[1.3] shrink">
          {p.title}
        </span>
        <span className="mono text-mid text-[11px]">
          {p.tags[0]?.toUpperCase() ?? "-"}
        </span>
        <span className="mono text-mid text-[11px]">
          &apos;{String(p.year).slice(2)}
        </span>
      </span>
      <span className="text-[22px] leading-none shrink-0">→</span>
    </Link>
  );
}
