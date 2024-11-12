"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { MenuBarSubmenu, MenuBarSubmenuButton, MenuBarSubmenuListItem } from "~/components/headless";
import { cn } from "~/helpers";
import type { MenuSubmenu } from "~/hooks";

import ChevronDownIcon from "#/images/icons/chevron-down.svg";

import { MainNavSubmenuLink } from "./MainNavSubmenuLink";
import { MainNavSubmenuList } from "./MainNavSubmenuList";

export type MainNavSubmenuProps = {
  _submenu: MenuSubmenu;
};

export const MainNavSubmenu = ({ _submenu }: MainNavSubmenuProps) => {
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <MenuBarSubmenu className="relative">
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
        <MainNavSubmenuList className="flex w-max flex-col gap-2 overflow-hidden rounded-xl border-x border-black bg-white px-2 transition-all duration-200 ease-linear [[data-expanded=true]_&]:border-y [[data-expanded=true]_&]:py-2">
          {_submenu.submenu.map((item, index) => {
            const isCurrentPage = item.href === pathname;

            return (
              <MenuBarSubmenuListItem key={index}>
                <MainNavSubmenuLink
                  _color="white"
                  _shape="button"
                  aria-current={isCurrentPage ? "page" : undefined}
                  className={cn("w-full justify-start gap-4 text-left focus-visible:outline-black", {
                    "font-extrabold underline": isCurrentPage,
                    "hover:bg-sand-50": isHomePage,
                  })}
                  href={item.href}
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
        </MainNavSubmenuList>
      </div>
    </MenuBarSubmenu>
  );
};
