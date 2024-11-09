import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type OrderedListProps = HTMLAttributes<HTMLOListElement>;

export const OrderedList = ({ className, ...passthru }: OrderedListProps) => {
  return <ol className={cn("list-outside list-decimal pl-[1.125rem]", className)} {...passthru} />;
};
