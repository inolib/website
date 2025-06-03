import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type BoxCardIconProps = HTMLAttributes<HTMLDivElement>;

export const BoxCardIcon = ({ className, ...passthru }: BoxCardIconProps) => {
  return <div className={cn("flex items-center justify-center", className)} {...passthru} aria-hidden />;
};
