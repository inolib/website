"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { MenuBar, MenuBarList, MenuBarListItem } from "~/components/headless";
import { cn } from "~/helpers";
import { useMenu } from "~/hooks";

import { MainNavLink } from "./MainNavLink";
import { MainNavSubmenu } from "./MainNavSubmenu";

export const MainNav = () => {
  const menu = useMenu();
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <MenuBar
      aria-label="Menu principal"
      className={cn(
        "sticky top-[-0.0625rem] z-[1000] hidden items-center justify-center bg-white px-[4dvw] py-4 transition-all duration-300 lg:flex xl:px-[8dvw]",
        {
          "bg-blue-900": isHomePage,
        },
      )}
    >
      <MenuBarList
        className={cn("flex items-center gap-4 bg-white transition-all duration-300", {
          "bg-blue-900": isHomePage,
        })}
      >
        {menu.map((item, index) => (
          <MenuBarListItem key={index}>
            {item.submenu === undefined ? <MainNavLink _link={item} /> : <MainNavSubmenu _submenu={item} />}
          </MenuBarListItem>
        ))}
      </MenuBarList>
    </MenuBar>
  );
};
