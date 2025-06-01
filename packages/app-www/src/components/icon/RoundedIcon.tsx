import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type RoundedIconProps = HTMLAttributes<HTMLDivElement>;

export const RoundedIcon = ({ className, ...passthru }: RoundedIconProps) => {
  return (
    <div
      className={cn("flex shrink-0 grow-0 items-center justify-center rounded-full", className)}
      {...passthru}
      aria-hidden
    />
  );
};
