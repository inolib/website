"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { cn } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import inolibBlueLogo from "#/images/logos/inolib/inolib-blue.svg?url";
import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";

export const Banner = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <header>
      <Section
        className={cn(
          "flex items-center justify-between gap-8 bg-blue-50 transition-all duration-300 first-of-type:py-4",
          {
            "bg-blue-950": isHomePage,
          },
        )}
      >
        <Link
          _color={isHomePage ? "blue-950" : "blue-50"}
          _shape="button"
          className={cn("focus-visible:outline-black", { "hover:bg-blue-900 focus-visible:outline-white": isHomePage })}
          href="#main"
        >
          <span>Accéder au contenu</span>
          <ArrowNarrowDownIcon
            className={cn("shrink-0 stroke-blue-900 transition-all duration-300", {
              "stroke-sand-50": isHomePage,
            })}
            aria-hidden
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
          <Image alt="Accueil" className="h-[1.6875rem] w-auto" src={isHomePage ? inolibYellowLogo : inolibBlueLogo} />
        </Link>

        <Link _color={isHomePage ? "yellow-500" : "blue-900"} _shape="button" href="/contact">
          Demander un devis
        </Link>
      </Section>
    </header>
  );
};
