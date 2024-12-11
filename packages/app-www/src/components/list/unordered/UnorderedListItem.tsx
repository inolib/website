import type { LiHTMLAttributes } from "react";

export type UnorderedListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const UnorderedListItem = ({ ...passthru }: UnorderedListItemProps) => {
  return <li {...passthru} />;
};
