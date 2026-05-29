import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;

// Wire Cloudflare bindings (KV, R2, etc.) into `getCloudflareContext()` during `next dev`.
// Safe to call at module top - no-ops outside dev.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
