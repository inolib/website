import type { LiHTMLAttributes } from "react";

import { cn } from "~/helpers";

export type UnorderedListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const UnorderedListItem = ({ children, className, ...passthru }: UnorderedListItemProps) => {
  return (
    <li className={cn("relative", className)} {...passthru}>
      <span className="absolute -left-4" aria-hidden>
        •
      </span>
      {children}
    </li>
  );
};
