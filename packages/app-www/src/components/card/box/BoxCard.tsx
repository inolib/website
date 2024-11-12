import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type BoxCardProps = HTMLAttributes<HTMLDivElement>;

export const BoxCard = ({ className, ...passthru }: BoxCardProps) => {
  return <div className={cn("flex gap-8 rounded-3xl bg-blue-50 px-8 py-4", className)} {...passthru} />;
};
