"use client";

import { usePathname } from "next/navigation";
import { useCallback, type MouseEventHandler } from "react";

import { useMenuBar } from "~/components/headless";
import { Link } from "~/components/link";
import { cn } from "~/helpers";
import type { MenuLink } from "~/hooks";

import { useBurgerNav } from "./BurgerNav";

export type BurgerNavLinkProps = {
  _link: MenuLink;
};

export const BurgerNavLink = ({ _link }: BurgerNavLinkProps) => {
  const burgerNav = useBurgerNav();
  const menuBar = useMenuBar();
  const pathname = usePathname();

  const isCurrentPage = _link.href === pathname;
  const isHomePage = pathname === "/";

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    burgerNav.close();
    menuBar.closeSubmenus();
  }, [burgerNav, menuBar]);

  return (
    <Link
      _color={isHomePage ? "blue-900" : "white"}
      _shape="button"
      aria-current={isCurrentPage ? "page" : undefined}
      className={cn("w-full justify-start focus-visible:outline-black", {
        "font-extrabold underline": isCurrentPage,
        "hover:bg-white hover:text-black focus-visible:outline-white": isHomePage,
      })}
      href={_link.href}
      onClick={handleClick}
      tabIndex={burgerNav.isExpanded() ? 0 : -1}
    >
      {_link.label}
    </Link>
  );
};
