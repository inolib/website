import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type SquaredIconProps = HTMLAttributes<HTMLDivElement>;

export const SquaredIcon = ({ className, ...passthru }: SquaredIconProps) => {
  return <div className={cn("flex shrink-0 grow-0 items-center justify-center rounded-lg", className)} {...passthru} />;
};
