import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  asDiv?: boolean;
};

export const Section = ({ className, asDiv = false, ...passthru }: SectionProps) => {
  const Tag = asDiv ? "div" : "section";
  return <Tag className={cn("px-[4dvw] py-24 first-of-type:pt-4 xl:px-[8dvw]", className)} {...passthru} />;
};
