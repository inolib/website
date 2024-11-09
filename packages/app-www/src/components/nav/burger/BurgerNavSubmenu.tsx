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

import { BurgerNavSubmenuLink } from "./BurgerNavSubmenuLink";

export type BurgerNavSubmenuProps = {
  _submenu: MenuSubmenu;
};

export const BurgerNavSubmenu = ({ _submenu }: BurgerNavSubmenuProps) => {
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <MenuBarSubmenu className="flex flex-col">
      <MenuBarSubmenuButton
        className={cn(
          "flex w-full items-center justify-between gap-8 rounded-lg bg-white px-4 py-2 font-semibold text-black outline-none transition-all duration-200 ease-linear hover:bg-blue-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black [&[aria-expanded=true]]:bg-blue-50",
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

        <span>
          <ChevronDownIcon
            className={cn("stroke-black [[aria-expanded=true]_&]:rotate-180 [[aria-expanded=true]_&]:stroke-black", {
              "stroke-white transition-all duration-200 ease-linear [[aria-expanded=false]:hover_&]:stroke-black":
                isHomePage,
            })}
          />
        </span>
      </MenuBarSubmenuButton>

      <div className="invisible mt-0 h-0 overflow-hidden transition-all duration-200 ease-linear [[data-expanded=true]_&]:visible [[data-expanded=true]_&]:mt-2 [[data-expanded=true]_&]:h-[8.1875rem]">
        <MenuBarSubmenuList className="top-[3.1875rem] flex flex-col gap-2 rounded-xl border border-black bg-white p-2">
          {_submenu.submenu.map((item, index) => {
            const isCurrentPage = item.href === pathname;

            // if (index === 0) {
            //   return (
            //     <MenuBarSubmenuListItem key={index}>
            //       <BurgerNavSubmenuLink
            //         aria-current={isCurrentPage ? "page" : undefined}
            //         className={cn("flex flex-col rounded-xl p-4 hover:bg-blue-50", {
            //           "hover:bg-sand-50": isHomePage,
            //         })}
            //         href={item.href}
            //       >
            //         <span className="font-bold">{item.label}</span>
            //         <span className="text-sm">{item.description}</span>
            //       </BurgerNavSubmenuLink>
            //     </MenuBarSubmenuListItem>
            //   );
            // }

            return (
              <MenuBarSubmenuListItem key={index}>
                <BurgerNavSubmenuLink
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
                  <span>{item.label}</span>
                </BurgerNavSubmenuLink>
              </MenuBarSubmenuListItem>
            );
          })}
        </MenuBarSubmenuList>
      </div>
    </MenuBarSubmenu>
  );
};
