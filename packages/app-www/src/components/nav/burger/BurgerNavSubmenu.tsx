"use client";

import { usePathname } from "next/navigation";

import { MenuBarSubmenu, MenuBarSubmenuButton, MenuBarSubmenuListItem } from "~/components/headless";
import { cn } from "~/helpers";
import type { MenuSubmenu } from "~/hooks";

import ChevronDownIcon from "#/images/icons/chevron-down.svg";

import { useBurgerNav } from "./BurgerNav";
import { BurgerNavSubmenuLink } from "./BurgerNavSubmenuLink";
import { BurgerNavSubmenuList } from "./BurgerNavSubmenuList";

export type BurgerNavSubmenuProps = {
  _submenu: MenuSubmenu;
};

export const BurgerNavSubmenu = ({ _submenu }: BurgerNavSubmenuProps) => {
  const burgerNav = useBurgerNav();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <MenuBarSubmenu className="flex flex-col">
      <MenuBarSubmenuButton
        className={cn(
          "flex w-full items-center justify-between gap-8 rounded-lg bg-white px-4 py-2 font-semibold text-black outline-none transition-all duration-300 hover:bg-blue-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black [&[aria-expanded=true]]:bg-blue-50",
          {
            "bg-blue-900 text-white hover:bg-white hover:text-black focus-visible:outline-white [&[aria-expanded=true]]:bg-white [&[aria-expanded=true]]:text-black":
              isHomePage,
          },
        )}
        tabIndex={burgerNav.isExpanded() ? 0 : -1}
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
            className={cn(
              "stroke-black transition-all duration-300 [[aria-expanded=true]_&]:rotate-180 [[aria-expanded=true]_&]:stroke-black",
              {
                "stroke-white [[aria-expanded=false]:hover_&]:stroke-black": isHomePage,
              },
            )}
          />
        </span>
      </MenuBarSubmenuButton>

      <div className="mt-0 grid grid-rows-[0fr] transition-all duration-300 [[data-expanded=true]_&]:mt-2 [[data-expanded=true]_&]:grid-rows-[1fr]">
        <BurgerNavSubmenuList className="top-[3.1875rem] flex flex-col gap-2 overflow-hidden rounded-xl border-x border-black bg-white px-2 transition-all duration-300 [[data-expanded=true]_&]:border-y [[data-expanded=true]_&]:py-2">
          {_submenu.submenu.map((item, index) => {
            const isCurrentPage = item.href === pathname;

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

                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    <span className="text-lg font-semibold">{item.description}</span>
                  </div>
                </BurgerNavSubmenuLink>
              </MenuBarSubmenuListItem>
            );
          })}
        </BurgerNavSubmenuList>
      </div>
    </MenuBarSubmenu>
  );
};
