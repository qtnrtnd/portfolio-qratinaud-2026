"use client";

import { usePathname } from "next/navigation";
import { Marquee } from "./Marquee";
import {
  homeMarquee,
  workMarquee,
  aboutMarquee,
  contactMarquee,
  caseStudyMarquee,
} from "@/lib/marquee";
import { getProject } from "@/lib/data/projects";
import type { SiteTarget } from "@/lib/site-target";

export function MarqueeMount({ target }: { target: SiteTarget }) {
  const pathname = usePathname();
  const items = resolveItems(pathname, target);
  return <Marquee items={items} />;
}

function resolveItems(pathname: string, target: SiteTarget): readonly string[] {
  if (pathname === "/about") return aboutMarquee;
  if (pathname === "/contact") return contactMarquee;
  if (pathname === "/work") return workMarquee;
  if (pathname.startsWith("/work/")) {
    const slug = pathname.slice("/work/".length);
    const project = getProject(slug, target);
    return project ? caseStudyMarquee(project) : homeMarquee;
  }
  return homeMarquee;
}
