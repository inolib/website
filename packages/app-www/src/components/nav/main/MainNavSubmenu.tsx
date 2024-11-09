"use client";

import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import {
  MenuBarSubmenu,
  MenuBarSubmenuButton,
  MenuBarSubmenuList,
  MenuBarSubmenuListItem,
} from "~/components/headless";
import { cn } from "~/helpers";
import type { MenuSubmenu } from "~/hooks";

import ChevronDownIcon from "#/images/icons/chevron-down.svg";

import { MainNavSubmenuLink } from "./MainNavSubmenuLink";

export type MainNavSubmenuProps = {
  _submenu: MenuSubmenu;
};

export const MainNavSubmenu = ({ _submenu }: MainNavSubmenuProps) => {
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsExpanded(true);
  }, []);

  return (
    <MenuBarSubmenu _onClose={handleClose} _onOpen={handleOpen} className="relative">
      <MenuBarSubmenuButton
        className={cn(
          "flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-black outline-none transition-all duration-200 ease-linear hover:bg-blue-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black [&[aria-expanded=true]]:bg-blue-50",
          {
            "bg-blue-900 text-white hover:bg-white hover:text-black focus-visible:outline-white [&[aria-expanded=true]]:bg-white [&[aria-expanded=true]]:text-black":
              isHomePage,
          },
        )}
      >
        <span
          className={cn({
            "font-extrabold underline": pathname.startsWith(_submenu.segment),
          })}
        >
          {_submenu.label}
        </span>

        <ChevronDownIcon
          className={cn(
            "stroke-black transition-all duration-200 ease-linear [[aria-expanded=true]>&]:rotate-180 [[aria-expanded=true]>&]:stroke-black",
            {
              "stroke-white [:hover>&]:stroke-black": isHomePage,
            },
          )}
        />
      </MenuBarSubmenuButton>

      <div className="absolute top-[3.1875rem] grid grid-rows-[0fr] transition-all duration-200 ease-linear [[data-expanded=true]_&]:grid-rows-[1fr]">
        <MenuBarSubmenuList
          aria-hidden={!isExpanded}
          className="flex w-max flex-col gap-2 overflow-hidden rounded-xl border-black bg-white transition-all duration-200 ease-linear [[data-expanded=true]_&]:border [[data-expanded=true]_&]:p-2"
        >
          {_submenu.submenu.map((item, index) => {
            const isCurrentPage = item.href === pathname;

            return (
              <MenuBarSubmenuListItem key={index}>
                <MainNavSubmenuLink
                  _color="white"
                  _shape="button"
                  aria-current={isCurrentPage ? "page" : undefined}
                  className={cn("w-full justify-start text-left focus-visible:outline-black", {
                    "font-extrabold underline": isCurrentPage,
                    "hover:bg-sand-50": isHomePage,
                  })}
                  href={item.href}
                  tabIndex={isExpanded ? 0 : -1}
                >
                  {item.icon}

                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    <span className="text-sm font-semibold">{item.description}</span>
                  </div>
                </MainNavSubmenuLink>
              </MenuBarSubmenuListItem>
            );
          })}
        </MenuBarSubmenuList>
      </div>
    </MenuBarSubmenu>
  );
};
