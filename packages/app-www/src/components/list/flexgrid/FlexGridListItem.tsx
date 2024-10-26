import type { LiHTMLAttributes } from "react";

import { cn } from "~/helpers";

export type FlexGridListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const FlexGridListItem = ({ className, ...passthru }: FlexGridListItemProps) => {
  return (
    <li
      className={cn(
        "flex flex-col items-center gap-4 text-center sm:max-w-[calc(50%_-_4rem_*_1/2)] lg:max-w-[calc(33.333%_-_4rem_*_2/3)]",
        className,
      )}
      {...passthru}
    />
  );
};
