import { MenuBarSubmenuList, useMenuBarSubmenu, type MenuBarSubmenuListProps } from "~/components/headless";

export type MainNavSubmenuListProps = Omit<MenuBarSubmenuListProps, "aria-hidden">;

export const MainNavSubmenuList = ({ ...passthru }: MainNavSubmenuListProps) => {
  const menuBarSubmenu = useMenuBarSubmenu();

  return <MenuBarSubmenuList aria-hidden={!menuBarSubmenu.isExpanded()} {...passthru} />;
};
