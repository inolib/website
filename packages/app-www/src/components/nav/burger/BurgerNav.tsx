"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type RefObject,
} from "react";

import { MenuBar, MenuBarListItem } from "~/components/headless";
import { cn } from "~/helpers";
import { useMenu } from "~/hooks";

import MenuIcon from "#/images/icons/menu-01.svg";
import XCloseIcon from "#/images/icons/x-close.svg";

import { BurgerNavButton } from "./BurgerNavButton";
import { BurgerNavHome } from "./BurgerNavHome";
import { BurgerNavLink } from "./BurgerNavLink";
import { BurgerNavList } from "./BurgerNavList";
import { BurgerNavSubmenu } from "./BurgerNavSubmenu";

export type BurgerNavObject = {
  close: () => void;
  getButtonRef: () => RefObject<HTMLButtonElement>;
  isExpanded: () => boolean;
  open: () => void;
  setButtonRef: (ref: RefObject<HTMLButtonElement>) => void;
};

const BurgerNavContext = createContext<BurgerNavObject | undefined>(undefined);

export const useBurgerNav = () => {
  const burgerNav = useContext(BurgerNavContext);

  if (burgerNav === undefined) {
    throw new Error("Context not found");
  }

  return burgerNav;
};

export const BurgerNav = () => {
  const menu = useMenu();
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  const [buttonRef, setButtonRef] = useState<RefObject<HTMLButtonElement>>({ current: null });
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const burgerNav: BurgerNavObject = useMemo(
    () => ({
      close: () => {
        setIsExpanded(false);
      },
      getButtonRef: () => buttonRef,
      isExpanded: () => isExpanded,
      open: () => {
        setIsExpanded(true);
      },
      setButtonRef: (ref) => {
        setButtonRef(ref);
      },
    }),
    [buttonRef, isExpanded],
  );

  const handleBlurCapture: FocusEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (
        event.relatedTarget !== null &&
        event.relatedTarget !== globalThis.document.body &&
        !(ref.current?.contains(event.relatedTarget) ?? true)
      ) {
        burgerNav.close();
      }
    },
    [burgerNav],
  );

  const handleKeyDownCapture: KeyboardEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (event.key === "Escape" && (event.target as Element).closest("[data-expanded=true]") === null) {
        event.stopPropagation();

        burgerNav.close();
        burgerNav.getButtonRef().current?.focus();
      }
    },
    [burgerNav],
  );

  return (
    <BurgerNavContext.Provider value={burgerNav}>
      <MenuBar
        aria-label="Menu principal"
        className={cn(
          "relative z-10 flex flex-col gap-4 px-[4dvw] py-4 text-2xl transition-all duration-200 ease-linear lg:hidden",
          {
            "bg-blue-900": isHomePage,
          },
        )}
        onBlurCapture={handleBlurCapture}
        onKeyDownCapture={handleKeyDownCapture}
        ref={ref}
      >
        <div className="flex justify-between gap-8">
          <BurgerNavHome />

          {burgerNav.isExpanded() ? (
            <BurgerNavButton aria-label="Fermer le menu">
              <span>Fermer</span>
              <XCloseIcon
                className={cn("stroke-black transition-all duration-200 ease-linear", {
                  "stroke-white [:hover>&]:stroke-black": isHomePage,
                })}
              />
            </BurgerNavButton>
          ) : (
            <BurgerNavButton aria-label="Ouvrir le menu">
              <span>Menu</span>
              <MenuIcon
                className={cn("stroke-black transition-all duration-200 ease-linear", {
                  "stroke-white [:hover>&]:stroke-black": isHomePage,
                })}
              />
            </BurgerNavButton>
          )}
        </div>

        <div
          className={cn(
            "absolute left-0 top-[5.25rem] flex grid w-full grid-rows-[0fr] justify-center bg-white px-[4dvw] transition-all duration-200 ease-linear",
            {
              "grid-rows-[1fr] pb-24": burgerNav.isExpanded(),
              "bg-blue-900": isHomePage,
            },
          )}
        >
          <BurgerNavList
            className={cn(
              "flex w-full max-w-[30rem] flex-col gap-2 overflow-hidden transition-all duration-200 ease-linear",
              {
                "p-2": burgerNav.isExpanded(),
              },
            )}
          >
            {menu.map((item, index) => (
              <MenuBarListItem key={index}>
                {item.submenu === undefined ? <BurgerNavLink _link={item} /> : <BurgerNavSubmenu _submenu={item} />}
              </MenuBarListItem>
            ))}
          </BurgerNavList>
        </div>
      </MenuBar>
    </BurgerNavContext.Provider>
  );
};
