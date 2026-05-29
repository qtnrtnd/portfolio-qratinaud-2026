import type { ReactNode } from "react";
import { Nav } from "./Nav";

type PageShellProps = {
  footer?: ReactNode;
  children: ReactNode;
};

export function PageShell({ footer, children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="sticky top-0 z-50 flex justify-end pt-4.5 pointer-events-none"
        style={{ paddingInline: "clamp(20px, 4vw, 56px)" }}
      >
        <div className="pointer-events-auto">
          <Nav />
        </div>
      </div>

      <main
        className="page-stagger flex-1 w-full max-w-330 mx-auto"
        style={{
          padding: "clamp(20px, 4vw, 56px)",
          paddingTop: "clamp(8px, 2vw, 24px)",
        }}
      >
        {children}
      </main>

      <div
        className="w-full max-w-330 mx-auto pb-4.5"
        style={{ paddingInline: "clamp(20px, 4vw, 56px)" }}
      >
        {footer}
      </div>
    </div>
  );
}
