import type { LiHTMLAttributes } from "react";

import { cn } from "~/helpers";

export type OrderedListItemProps = {
  _order: number;
} & LiHTMLAttributes<HTMLLIElement>;

export const OrderedListItem = ({ _order, children, className, ...passthru }: OrderedListItemProps) => {
  return (
    <li className={cn("relative", className)} {...passthru}>
      <span className="absolute -left-4">{_order}.</span>
      {children}
    </li>
  );
};
