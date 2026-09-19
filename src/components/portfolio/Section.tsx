import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return <div className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}><p className="section-eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}
export function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return <section id={id} className={cn("section-shell reveal", className)}><div className="content-shell">{children}</div></section>;
}
