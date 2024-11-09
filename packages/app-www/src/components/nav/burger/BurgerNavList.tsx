import { MenuBarList, type MenuBarListProps } from "~/components/headless";

import { useBurgerNav } from "./BurgerNav";

export type BurgerNavListProps = Omit<MenuBarListProps, "aria-hidden">;

export const BurgerNavList = ({ ...passthru }: BurgerNavListProps) => {
  const burgerNav = useBurgerNav();

  return <MenuBarList aria-hidden={!burgerNav.isExpanded()} {...passthru} />;
};
