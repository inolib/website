"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

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

  return (
    <MenuBarSubmenu className="relative">
      <MenuBarSubmenuButton
        className={cn(
          "flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-black outline-none transition-all duration-500 hover:bg-blue-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black [&[aria-expanded=true]]:bg-blue-50",
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
            "stroke-black transition-all duration-500 [[aria-expanded=true]>&]:rotate-180 [[aria-expanded=true]>&]:stroke-black",
            {
              "stroke-white [:hover>&]:stroke-black": isHomePage,
            },
          )}
        />
      </MenuBarSubmenuButton>

      <div className="invisible absolute top-[3.1875rem] h-0 overflow-hidden transition-all duration-500 [[data-expanded=true]_&]:visible [[data-expanded=true]_&]:h-[8.1875rem]">
        <MenuBarSubmenuList className="flex w-max flex-col gap-2 rounded-xl border border-black bg-white p-2">
          {_submenu.submenu.map((item, index) => {
            const isCurrentPage = item.href === pathname;

            // if (index === 0) {
            //   return (
            //     <MenuBarSubmenuListItem key={index}>
            //       <MainNavSubmenuLink
            //         aria-current={isCurrentPage ? "page" : undefined}
            //         className={cn("flex flex-col rounded-xl p-4 hover:bg-blue-50", {
            //           "hover:bg-sand-50": isHomePage,
            //         })}
            //         href={item.href}
            //       >
            //         <span className="font-bold">{item.label}</span>
            //         <span className="text-sm">{item.description}</span>
            //       </MainNavSubmenuLink>
            //     </MenuBarSubmenuListItem>
            //   );
            // }

            return (
              <MenuBarSubmenuListItem key={index}>
                <MainNavSubmenuLink
                  _color="white"
                  _shape="button"
                  aria-current={isCurrentPage ? "page" : undefined}
                  className={cn("w-full justify-start focus-visible:outline-black", {
                    "font-extrabold underline": isCurrentPage,
                    "hover:bg-sand-50": isHomePage,
                  })}
                  href={item.href}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </MainNavSubmenuLink>
              </MenuBarSubmenuListItem>
            );
          })}
        </MenuBarSubmenuList>
      </div>
    </MenuBarSubmenu>
  );
};
