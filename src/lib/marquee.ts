import type { FullProject } from "@/lib/data/projects";

export const homeMarquee = [
  "MADE BY QUENT.IN",
  "FULLSTACK",
  "OPEN TO WORK",
  "CREATIVE TOOLS",
  "MADE BY QUENT.IN",
  "RENNES · FR",
  "AVAILABLE NOW",
  "BUILT IN SVELTE / NEXT / NUXT",
  "MADE BY QUENT.IN",
  "FULLSTACK",
  "OPEN TO WORK",
];

export const workMarquee = [
  "WORK",
  "SELECTED PROJECTS",
  "MADE BY QUENT.IN",
  "RENNES · FR",
  "OPEN TO WORK",
  "WORK",
  "SELECTED PROJECTS",
] as const;

export const aboutMarquee = [
  "ABOUT",
  "RENNES",
  "OPEN TO WORK",
  "FULLSTACK",
  "ABOUT",
  "BUT MMI",
  "CREATIVE / TECHNICAL",
  "MADE BY QUENT.IN",
];

export const contactMarquee = [
  "GET IN TOUCH",
  "OPEN TO WORK",
  "FREELANCE OR FULL-TIME",
  "EMAIL - CONTACT@MADEBYQUENT.IN",
  "RENNES · FR",
];

export const caseStudyMarquee = (p: FullProject) => [
  p.title.toUpperCase(),
  String(p.year),
  "CASE STUDY",
  ...p.tags.map((t) => t.toUpperCase()),
  p.title.toUpperCase(),
  String(p.year),
  "CASE STUDY",
];
