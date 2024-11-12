import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type SquaredIconProps = HTMLAttributes<HTMLDivElement>;

export const SquaredIcon = ({ className, ...passthru }: SquaredIconProps) => {
  return <div className={cn("flex items-center justify-center rounded-lg", className)} {...passthru} />;
};
