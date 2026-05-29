import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { PageNumber } from "@/components/PageNumber";
import { Chip } from "@/components/Chip";
import { readSiteTarget } from "@/lib/site-target";
import {
  aboutBio,
  CURRENTLY,
  EXPERIENCE,
  EDUCATION,
  STACK,
  LANGUAGES,
} from "@/lib/data/profile";

const TILTS = [-1.5, 1, -0.5, 1.2, -0.8, 0.6, -1.2, 0.4, -0.6, 1, -1.1];

export default async function AboutPage() {
  const target = await readSiteTarget();
  const bio = aboutBio(target);

  return (
    <PageShell
      footer={<PageNumber n={3} total={4} label="ABOUT" right="RENNES · FR" />}
    >
      <section className="mt-4.5">
        <div
          className="r-split-12-10 grid grid-cols-[1.2fr_1fr] items-start"
          style={{ gap: "clamp(28px, 5vw, 72px)" }}
        >
          {/* LEFT: title + bio + currently */}
          <div>
            <h1
              className="display-xxl m-0"
              style={{ fontSize: "clamp(80px, 14vw, 200px)" }}
            >
              About
              <br />
              <span className="text-accent">(</span>
              me
              <span className="text-accent">)</span>
              <span className="text-accent-2">.</span>
            </h1>

            <div className="mt-9 max-w-135">
              <p className="serif text-2xl italic leading-[1.3] mt-0 mb-4.5 text-pretty">
                {bio.lead}
              </p>
              <p className="text-[15px] leading-[1.55] text-mid m-0 text-pretty">
                {bio.sub}
              </p>
            </div>

            {/* Currently card */}
            <div className="mt-10 inline-block -rotate-2 bg-ink text-paper py-5 px-6 border-[1.5px] border-paper shadow-[5px_5px_0_var(--ink)] max-w-95">
              <div className="mono text-mid-2 mb-2 text-[11px]">
                CURRENTLY
              </div>
              <div className="serif text-[26px] italic leading-[1.15] text-paper">
                {CURRENTLY}
              </div>
            </div>

            <div className="mono mt-7 text-mid text-[11px]">
              {LANGUAGES}
            </div>
          </div>

          {/* RIGHT: experience + education + stack */}
          <div className="r-about-right mt-20">
            <Block title="Experience">
              {EXPERIENCE.map((e, i) => (
                <div
                  key={i}
                  className="r-exp-row grid grid-cols-[70px_1fr_1fr] items-baseline gap-3.5 py-3"
                  style={{
                    borderBottom:
                      i < EXPERIENCE.length - 1 ? "1.5px solid var(--ink)" : "none",
                  }}
                >
                  <span className="mono text-mid text-xs">{e.range}</span>
                  <span className="serif italic text-xl leading-[1.3]">
                    {e.place}
                    <span className="text-mid not-italic font-mono text-[11px] ml-2">
                      {e.location}
                    </span>
                  </span>
                  <span className="r-exp-role text-[13px] text-mid">{e.role}</span>
                </div>
              ))}
            </Block>

            <Block title="Education">
              {EDUCATION.map((e, i) => (
                <div
                  key={i}
                  className="r-exp-row grid grid-cols-[70px_1fr_1fr] items-baseline gap-3.5 py-3"
                  style={{
                    borderBottom:
                      i < EDUCATION.length - 1 ? "1.5px solid var(--ink)" : "none",
                  }}
                >
                  <span className="mono text-mid text-xs">{e.year}</span>
                  <span className="serif italic text-xl leading-[1.3]">
                    {e.deg}
                    <span className="text-mid not-italic font-mono text-[11px] ml-2">
                      {e.location}
                    </span>
                  </span>
                  <span className="r-exp-role text-[13px] text-mid">{e.school}</span>
                </div>
              ))}
            </Block>

            <Block title="Stack">
              <div className="flex flex-wrap gap-2">
                {STACK.map((s, i) => (
                  <Chip
                    key={i}
                    accent={s.accent === 0 ? false : (s.accent as 1 | 2 | 3)}
                    tilt={TILTS[i % TILTS.length]}
                  >
                    {s.label}
                  </Chip>
                ))}
              </div>
            </Block>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-9">
      <h2 className="mono text-ink mt-0 mb-3 text-xs tracking-[0.1em]">
        {title.toUpperCase()}.
      </h2>
      {children}
    </div>
  );
}
