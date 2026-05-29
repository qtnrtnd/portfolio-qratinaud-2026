import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageNumber } from "@/components/PageNumber";

export default function NotFound() {
  return (
    <PageShell
      footer={<PageNumber n={0} total={4} label="404" right="LOST" />}
    >
      <div className="pt-20">
        <h1
          className="display-xxl"
          style={{ fontSize: "clamp(80px, 16vw, 240px)" }}
        >
          404<span className="text-accent">.</span>
        </h1>
        <p className="serif text-[28px] italic">
          Nothing here. <Link href="/work">Try /work →</Link>
        </p>
      </div>
    </PageShell>
  );
}
