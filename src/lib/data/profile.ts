import type { SiteTarget } from "@/lib/site-target";

export const BRAND = "made by quent.in";
export const FULL_NAME = "Quentin Ratinaud";
export const LOCATION = "Rennes · FR";
export const EMAIL = "contact@madebyquent.in";
export const GITHUB = { handle: "qtnrtnd", url: "https://github.com/qtnrtnd" };
export const LINKEDIN = {
  handle: "quentin-ratinaud",
  url: "https://www.linkedin.com/in/quentin-ratinaud/",
};

export const tagline = (target: SiteTarget): string =>
  target === "web" ? "polyvalent webmaster" : "creative developer";

export const heroDescription = (target: SiteTarget): string =>
  target === "web"
    ? "Polyvalent webmaster with two years of experience in digital marketing agencies - web integration, SEO, and CMS."
    : "Creative full-stack developer blending art, code, and performance to craft immersive, experimental web experiences.";

export const BIO_LEAD =
  "Fullstack developer at the crossroads of technique and creativity - I build high-impact, performant websites and innovative web applications.";

export const BIO_SUB =
  "Two years of agency experience building internal tools and client websites; now an independent developer based in Rennes, looking for new opportunities while building inspiring side projects and developing websites for independent professionals.";

export const HERO = {
  default: {
    topRow: "FULLSTACK · CREATIVE DEVELOPER",
    line1: "fullstack",
    line2: "creative",
    line3: "dev",
    bioStart:
      "Quentin Ratinaud - building creative tools, websites that have impact, and the occasional ",
    bioAccent: "serious product.",
  },
  web: {
    topRow: "POLYVALENT WEBMASTER · WEB INTEGRATION",
    line1: "polyvalent",
    line2: "webmaster",
    line3: "dev",
    bioStart:
      "Quentin Ratinaud - integrating, maintaining, and shipping websites for independent professionals and ",
    bioAccent: "small businesses.",
  },
} as const;

export const aboutBio = (target: SiteTarget) =>
  target === "web"
    ? {
        lead: "Polyvalent webmaster - two years of digital marketing agency experience in web integration, SEO, and CMS work.",
        sub: "Now an independent developer based in Rennes, building and maintaining websites for independent professionals and small businesses, with a focus on reliable delivery and clean integration.",
      }
    : { lead: BIO_LEAD, sub: BIO_SUB };

export const CURRENTLY = "building an online music composition game !";

export const EXPERIENCE = [
  {
    range: "25→",
    place: "Indépendant",
    location: "Rennes",
    role: "Fullstack Developer",
  },
  {
    range: "22-24",
    place: "Optic Performance",
    location: "Vannes",
    role: "Fullstack Developer",
  },
] as const;

export const EDUCATION = [
  {
    year: "2024",
    deg: "BUT MMI",
    location: "Lannion",
    school: "Université de Rennes 1",
  },
] as const;

export const STACK = [
  { label: "SvelteKit", accent: 3 as const },
  { label: "Vue/Nuxt", accent: 0 as const },
  { label: "TypeScript", accent: 0 as const },
  { label: "Tailwind", accent: 2 as const },
  { label: "GSAP", accent: 0 as const },
  { label: "Symfony", accent: 3 as const },
  { label: "API REST", accent: 0 as const },
  { label: "SQL", accent: 0 as const },
  { label: "Strapi", accent: 1 as const },
  { label: "Directus", accent: 0 as const },
  { label: "Docker", accent: 0 as const },
];

export const LANGUAGES = "EN B2 · ES A2 · FR NATIVE";
