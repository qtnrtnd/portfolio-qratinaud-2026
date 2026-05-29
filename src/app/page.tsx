import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { PageNumber } from "@/components/PageNumber";
import { Chip } from "@/components/Chip";
import { readSiteTarget } from "@/lib/site-target";
import { HERO, LOCATION, EMAIL } from "@/lib/data/profile";
import pp from "@/assets/quentin-ratinaud.png";

export default async function Home() {
  const target = await readSiteTarget();
  const hero = HERO[target];

  return (
    <PageShell
      footer={<PageNumber n={1} total={4} label="INDEX" right={<span>{LOCATION}</span>} />}
    >
      <section className="mt-4.5">
        {/* Top row: tagline + status */}
        <div className="mono flex justify-between text-mid mb-7 text-[11px]">
          <span>{hero.topRow}</span>
          <span>↳ EST. 2022</span>
        </div>

        {/* XXL display name - three lines with slab on middle */}
        <div className="r-hero-title-wrap relative">
          <h1
            className="display-xxl m-0"
            style={{ fontSize: "clamp(64px, 16vw, 240px)" }}
          >
            <div className="relative inline-block">
              <span className="relative z-1">{hero.line1}</span>
            </div>
            <div className="relative text-accent-1 pl-[8%]">
              <span className="relative z-1">{hero.line2}</span>
              <span className="squiggle is-a2 absolute left-[8%] -bottom-1 w-[62%] z-0" />
            </div>
            <div>
              <span className="relative z-1">
                {hero.line3}<span className="text-accent-3">—</span>
              </span>
            </div>
          </h1>

          {/* OPEN TO WORK slab */}
          <div
            className="r-now-booking absolute right-[2%] -rotate-3 bg-accent text-ink pt-4.5 px-7 pb-4 border-[1.5px] border-ink shadow-[4px_4px_0_var(--ink)] z-3"
            style={{ top: "calc(clamp(64px, 16vw, 240px) * 0.18)" }}
          >
            <div className="mono text-[11px] mb-1.5">OPEN TO</div>
            <div className="serif text-[28px] italic text-ink">Work</div>
          </div>
        </div>

        {/* Mid row - bio + tagline + CTAs */}
        <div
          className="r-split-14-10 r-home-mid grid grid-cols-[1.4fr_1fr] items-end"
          style={{ gap: "clamp(16px, 4vw, 56px)" }}
        >
          <div className="min-w-0">
            <p
              className="serif leading-[1.15] m-0 max-w-140 text-pretty"
              style={{ fontSize: "clamp(22px, 2.6vw, 34px)" }}
            >
              {hero.bioStart}
              <span className="text-accent-2">{hero.bioAccent}</span>
            </p>

            <div className="flex gap-2.5 flex-wrap mt-7">
              <Chip tilt={-1.2}>SVELTE</Chip>
              <Chip accent={1} tilt={0.8}>NEXT</Chip>
              <Chip tilt={-0.4}>NUXT</Chip>
              <Chip accent={3} tilt={1.1}>TS</Chip>
              <Chip tilt={-0.8}>SYMFONY</Chip>
              <Chip accent={2} tilt={0.6}>GSAP</Chip>
              <Chip tilt={-1.4}>TAILWIND</Chip>
            </div>

            <div className="mt-9 flex gap-3.5 items-center flex-wrap">
              <Link
                href="/work"
                className="mono inline-flex items-center gap-2.5 pt-3 px-4.5 pb-2.75 bg-ink text-paper border-[1.5px] border-paper shadow-[3px_3px_0_var(--ink)] no-underline text-xs transition-transform duration-150"
              >
                ↓ SEE THE WORK
              </Link>
              <a
                href={`mailto:${EMAIL}`}
                className="mono pt-3 px-4.5 pb-2.75 border-[1.5px] border-ink bg-paper no-underline text-xs shadow-[3px_3px_0_var(--ink)]"
              >
                {EMAIL.toUpperCase()} →
              </a>
            </div>
          </div>

          {/* Right column - portrait */}
          <div className="rotate-2 shadow-[5px_6px_0_var(--ink)] justify-self-end w-1/2 md:w-full max-w-100 min-w-0">
            <Image
              src={pp}
              alt="Quentin Ratinaud"
              placeholder="blur"
              sizes="(max-width: 760px) 100vw, 400px"
              quality={0.5}
              className="w-full block"
              priority
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
