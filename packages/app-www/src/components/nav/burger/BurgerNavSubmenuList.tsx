import { MenuBarSubmenuList, useMenuBarSubmenu, type MenuBarSubmenuListProps } from "~/components/headless";

export type BurgerNavSubmenuListProps = Omit<MenuBarSubmenuListProps, "aria-hidden">;

export const BurgerNavSubmenuList = ({ ...passthru }: BurgerNavSubmenuListProps) => {
  const menuBarSubmenu = useMenuBarSubmenu();

  return <MenuBarSubmenuList aria-hidden={!menuBarSubmenu.isExpanded()} {...passthru} />;
};
