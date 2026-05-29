import { cache } from "react";
import { headers } from "next/headers";

export type SiteTarget = "web" | "default";

const KNOWN_TARGETS = ["web"] as const;

export const isSiteTarget = (value: string): value is SiteTarget => {
  return (KNOWN_TARGETS as readonly string[]).includes(value);
};

export const parseSiteTarget = (host: string | null | undefined): SiteTarget => {
  if (!host) return "default";
  const hostname = host.split(":")[0];
  const parts = hostname.split(".");
  if (parts.length <= 2) return "default";
  return isSiteTarget(parts[0]) ? (parts[0] as SiteTarget) : "default";
};

export const readSiteTarget = cache(async (): Promise<SiteTarget> => {
  const h = await headers();
  const fromProxy = h.get("x-site-target");
  if (fromProxy && isSiteTarget(fromProxy)) return fromProxy;
  return parseSiteTarget(h.get("host"));
});
