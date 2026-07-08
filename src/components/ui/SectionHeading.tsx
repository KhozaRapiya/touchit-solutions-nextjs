import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  tag: string;
  title: ReactNode;
  subtitle?: string;
}

export function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-[720px] text-center">
      <span className="sec-tag">{tag}</span>
      <h2 className="mt-3.5 mb-4 text-[clamp(2rem,3.6vw,2.9rem)]">{title}</h2>
      {subtitle ? <p className="text-[1.06rem] text-muted">{subtitle}</p> : null}
    </Reveal>
  );
}
