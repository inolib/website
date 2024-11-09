import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type UnorderedListProps = HTMLAttributes<HTMLUListElement>;

export const UnorderedList = ({ className, ...passthru }: UnorderedListProps) => {
  return <ul className={cn("list-outside list-disc pl-[1.125rem]", className)} {...passthru} />;
};
