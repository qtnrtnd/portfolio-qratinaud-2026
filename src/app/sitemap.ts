import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://madebyquent.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now },
    { url: `${SITE}/work`, lastModified: now },
    { url: `${SITE}/about`, lastModified: now },
    { url: `${SITE}/contact`, lastModified: now },
    ...projects.map((p) => ({
      url: `${SITE}/work/${p.slug}`,
      lastModified: now,
    })),
  ];
}
