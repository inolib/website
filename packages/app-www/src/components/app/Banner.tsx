"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { Link } from "~/components/link";
import { BurgerNav, MainNav } from "~/components/nav";
import { Section } from "~/components/section";
import { cn } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import inolibBlueLogo from "#/images/logos/inolib/inolib-blue.svg?url";
import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";

export const Banner = () => {
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <header role="banner">
      <Section
        className={cn("flex h-[5.25rem] items-center justify-between gap-8 bg-blue-50 first-of-type:py-4", {
          "bg-blue-950": isHomePage,
        })}
      >
        <Link
          _color={isHomePage ? "blue-950" : "blue-50"}
          _shape="button"
          className={cn("focus-visible:outline-black", { "hover:bg-blue-900 focus-visible:outline-white": isHomePage })}
          href="#main"
        >
          <span>Accéder au contenu</span>
          <ArrowNarrowDownIcon
            className={cn("shrink-0 stroke-blue-900", {
              "stroke-sand-50": isHomePage,
            })}
          />
        </Link>

        <Link
          _color="transparent"
          _shape="button"
          aria-current={isHomePage ? "page" : undefined}
          className={cn("relative left-[-1.073rem] hidden focus-visible:outline-black lg:flex", {
            "focus-visible:outline-white": isHomePage,
          })}
          href="/"
          title="Accueil"
        >
          <Image alt="Accueil" className="h-9 w-fit" src={isHomePage ? inolibYellowLogo : inolibBlueLogo} />
        </Link>

        <Link _color={isHomePage ? "yellow-500" : "blue-900"} _shape="button" href="/contact">
          Demander un devis
        </Link>
      </Section>

      <Section
        className={cn("hidden h-[5.25rem] items-center justify-center py-4 lg:flex", {
          "bg-blue-900": isHomePage,
        })}
      >
        <MainNav />
      </Section>

      <BurgerNav />
    </header>
  );
};
