import { PageShell } from "@/components/PageShell";
import { PageNumber } from "@/components/PageNumber";
import { ProjectCard } from "@/components/ProjectCard";
import { readSiteTarget } from "@/lib/site-target";
import { getAllProjects } from "@/lib/data/projects";
import { LOCATION } from "@/lib/data/profile";

export default async function WorkIndex() {
  const target = await readSiteTarget();
  const list = getAllProjects(target);

  return (
    <PageShell
      footer={<PageNumber n={2} total={4} label="WORK" right={<span>{LOCATION}</span>} />}
    >
      <section className="mt-4.5">
        <div className="flex items-end gap-6 flex-wrap mb-9">
          <h1
            className="display-xxl m-0"
            style={{ fontSize: "clamp(80px, 14vw, 200px)" }}
          >
            <span className="relative inline-block px-2">
              <span
                aria-hidden="true"
                className="absolute -left-2 top-[20%] h-[70%] rotate-3 bg-accent z-0 pointer-events-none"
                style={{ width: "75%" }}
              />
              <span className="relative">work</span>
            </span>
            <span className="text-accent-2">/</span>
          </h1>
        </div>

        <div className="flex flex-col gap-3.5 max-w-220">
          {list.map((p, i) => (
            <ProjectCard key={p.slug} p={p} idx={i} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
