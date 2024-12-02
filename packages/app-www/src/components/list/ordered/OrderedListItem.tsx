import type { LiHTMLAttributes } from "react";

export type OrderedListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const OrderedListItem = ({ ...passthru }: OrderedListItemProps) => {
  return <li {...passthru} />;
};
