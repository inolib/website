import { forwardRef, type HTMLAttributes } from "react";

export type MenuBarSubmenuListProps = HTMLAttributes<HTMLUListElement>;

export const MenuBarSubmenuList = forwardRef<HTMLUListElement, MenuBarSubmenuListProps>(({ ...passthru }, ref) => {
  return <ul ref={ref} {...passthru} />;
});

MenuBarSubmenuList.displayName = "MenuBarSubmenuList";
