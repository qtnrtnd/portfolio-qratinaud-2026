import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageShell } from "@/components/PageShell";
import { readSiteTarget } from "@/lib/site-target";
import {
  getAllProjects,
  getProject,
  projects as ALL_PROJECTS,
  type FullProject,
} from "@/lib/data/projects";

export async function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const target = await readSiteTarget();
  const project = getProject(slug, target);
  if (!project) return { title: "Not found - made by quent.in" };
  const summary = project.introduction[0]?.slice(0, 160);
  return {
    title: `${project.title} (${project.year}) - made by quent.in`,
    description: summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const target = await readSiteTarget();
  const project = getProject(slug, target);
  if (!project) notFound();

  const list = getAllProjects(target);
  const idx = list.findIndex((p) => p.slug === project.slug);
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];
  const positionLabel = `${String(idx + 1).padStart(2, "0")}/${String(list.length).padStart(2, "0")}`;

  return (
    <PageShell
      footer={
        <div className="mono flex justify-between py-4 border-t-[1.5px] border-t-ink text-[11px]">
          <Link href={`/work/${prev.slug}`} className="no-underline text-ink">
            ◂ {prev.title.toUpperCase()}
          </Link>
          <span className="text-mid">{positionLabel} · CASE STUDY</span>
          <Link href={`/work/${next.slug}`} className="no-underline text-ink">
            {next.title.toUpperCase()} ▸
          </Link>
        </div>
      }
    >
      <section className="mt-4.5">
        {/* Title block with slab */}
        <div className="relative inline-block mt-2">
          <span
            aria-hidden="true"
            className="absolute -left-2 top-[20%] h-[70%] -rotate-3 bg-accent z-0 pointer-events-none"
            style={{ width: "calc(100% + 38px)" }}
          />
          <h1
            className="display-xxl relative z-1 m-0 px-2 text-ink"
            style={{ fontSize: "clamp(80px, 14vw, 200px)" }}
          >
            {project.title}.
          </h1>
        </div>

        {/* Metadata row */}
        <div className="mono r-cs-meta relative z-2 flex gap-7 flex-wrap text-mid text-[11px] mt-6 mb-8">
          <span>
            <span className="text-ink">YEAR</span> · {project.year}
          </span>
          <span>
            <span className="text-ink">TAGS</span> · {project.tags.join(" / ")}
          </span>
          {project.link && (
            <span>
              <span className="text-ink">LIVE</span> ·{" "}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-3"
              >
                {hostFromUrl(project.link)}
              </a>
            </span>
          )}
          {project.desktopOnly && (
            <span>
              <span className="text-ink">NOTE</span> · DESKTOP ONLY
            </span>
          )}
        </div>

        {/* Hero media */}
        <div className="mb-12 border-[1.5px] border-ink shadow-[5px_5px_0_var(--ink)] overflow-hidden bg-paper">
          <Image
            src={project.thumbnail}
            alt={`${project.title} - cover`}
            placeholder="blur"
            sizes="(max-width: 760px) 100vw, (max-width: 1320px) 90vw, 1200px"
            className="w-full h-auto block"
            priority
          />
        </div>

        <CaseStudyBody project={project} />
      </section>
    </PageShell>
  );
}

function hostFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function CaseStudyBody({ project }: { project: FullProject }) {
  return (
    <>
      {/* Row 1 - Introduction + Ownership */}
      <div
        className="r-split grid grid-cols-2 mb-14"
        style={{ gap: "clamp(28px, 5vw, 72px)" }}
      >
        <Section title="Introduction">
          {project.introduction.map((t, i) => (
            <p
              key={i}
              className="serif text-[22px] leading-[1.3] mt-0 mb-3.5 italic text-pretty"
            >
              {t}
            </p>
          ))}
        </Section>

        <Section title="Ownership" align="right" accentColor="var(--accent-1)">
          <ol className="m-0 p-0 list-none">
            {project.ownership.map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-[32px_1fr] gap-3 pb-3.5 mb-3.5 border-b border-dashed border-b-mid-2 text-left"
              >
                <span className="mono text-accent-2">0{i + 1}</span>
                <span className="leading-[1.45] text-[15px]">{t}</span>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      {/* Row 2 - Architecture stack card */}
      <div
        className="r-cs-stack grid grid-cols-[1fr_1.4fr] mb-14 items-start"
        style={{ gap: "clamp(20px, 4vw, 56px)" }}
      >
        <div className="bg-ink text-paper py-5.5 px-6 -rotate-[1.2deg] border-[1.5px] border-paper shadow-[5px_5px_0_var(--ink)]">
          <div className="mono text-paper mb-3.5 text-[11px]">
            STACK · UNDER THE HOOD
          </div>
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="flex justify-between py-2 font-mono text-[13px]"
              style={{
                borderBottom: "1px solid color-mix(in srgb, var(--paper) 18%, transparent)",
              }}
            >
              <span>{tag}</span>
              <span className="text-mid-2">·</span>
            </div>
          ))}
        </div>

        <Section title="Architecture">
          {project.architecture.map((t, i) => (
            <p
              key={i}
              className="text-[15px] leading-[1.55] mt-0 mb-3.5 text-ink text-pretty"
            >
              {t}
            </p>
          ))}
        </Section>
      </div>

      {/* Row 3 - Challenges */}
      <Section title="Challenges" accent>
        <ol className="m-0 p-0 list-none max-w-190">
          {project.challenges.map((t, i) => {
            const colors = ["var(--accent-1)", "var(--accent-2)", "var(--accent-3)"];
            const last = i === project.challenges.length - 1;
            return (
              <li
                key={i}
                className={`serif italic text-[26px] leading-[1.25] py-5 text-pretty ${
                  last ? "" : "border-b-[1.5px] border-b-ink"
                }`}
              >
                <span className="mr-3.5" style={{ color: colors[i % 3] }}>
                  0{i + 1}
                </span>
                {t}
              </li>
            );
          })}
        </ol>
      </Section>
    </>
  );
}

function Section({
  title,
  children,
  align = "left",
  accent = false,
  accentColor,
}: {
  title: string;
  children: ReactNode;
  align?: "left" | "right";
  accent?: boolean;
  accentColor?: string;
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <h2
        className="mono mt-0 mb-4.5 text-xs tracking-[0.1em]"
        style={{ color: accent ? "var(--ink)" : accentColor || "var(--accent-1)" }}
      >
        {title.toUpperCase()}
        {accent && <span className="text-accent-3"> ⟵</span>}
      </h2>
      {children}
    </div>
  );
}
