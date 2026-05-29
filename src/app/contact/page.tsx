import { PageShell } from "@/components/PageShell";
import { PageNumber } from "@/components/PageNumber";
import { ContactForm } from "@/components/ContactForm";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/data/profile";

const LINKS = [
  { label: "Email", val: EMAIL, href: `mailto:${EMAIL}` },
  { label: "GitHub", val: `@${GITHUB.handle}`, href: GITHUB.url },
  { label: "LinkedIn", val: `/in/${LINKEDIN.handle}`, href: LINKEDIN.url },
];

export default function ContactPage() {
  return (
    <PageShell
      footer={<PageNumber n={4} total={4} label="NOTES" right={<span>↪ {EMAIL.toUpperCase()}</span>} />}
    >
      <section className="mt-4.5">
        <div className="relative inline-block mb-9">
          <span
            aria-hidden="true"
            className="absolute -left-3 top-[30%] w-[60%] h-[55%] bg-accent-1 -rotate-2 z-0"
          />
          <h1
            className="display-xxl relative z-1 m-0 px-2"
            style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
          >
            Say hi<span className="text-accent-2">.</span>
          </h1>
        </div>

        <div
          className="r-split grid grid-cols-2 items-start"
          style={{ gap: "clamp(28px, 5vw, 72px)" }}
        >
          {/* Direct contacts */}
          <div>
            <h2 className="mono text-ink text-xs mb-4.5">DIRECT.</h2>
            <ul className="list-none p-0 m-0">
              {LINKS.map((l, i) => (
                <li
                  key={i}
                  className="py-3.5 border-b-[1.5px] border-b-ink flex justify-between items-baseline gap-4.5"
                >
                  <span className="mono text-mid w-22.5">
                    {l.label.toUpperCase()}
                  </span>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="serif r-contact-link flex-1 text-right text-[28px] italic underline decoration-[1.5px] underline-offset-4 text-ink"
                  >
                    {l.val}
                  </a>
                </li>
              ))}
            </ul>

            <p className="serif mt-8 italic text-xl leading-[1.35] text-mid max-w-120 text-pretty">
              Currently <span className="text-accent-3">open to work.</span> Freelance,
              full-time, or a strange little side project - all welcome.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
