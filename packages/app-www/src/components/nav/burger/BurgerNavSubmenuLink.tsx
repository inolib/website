import { useCallback, useId, type MouseEventHandler } from "react";

import { useMenuBar, useMenuBarSubmenu } from "~/components/headless";
import { Link, type LinkProps } from "~/components/link";

import { useBurgerNav } from "./BurgerNav";

export type BurgerNavSubmenuLinkProps = LinkProps;

export const BurgerNavSubmenuLink = ({ children, ...passthru }: BurgerNavSubmenuLinkProps) => {
  const burgerNav = useBurgerNav();
  const id = useId();
  const menuBar = useMenuBar();
  const menuBarSubmenu = useMenuBarSubmenu();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    burgerNav.close();
    menuBar.closeSubmenus();
  }, [burgerNav, menuBar]);

  return (
    <Link data-id={id} onClick={handleClick} tabIndex={menuBarSubmenu.isExpanded() ? 0 : -1} {...passthru}>
      {children}
    </Link>
  );
};
