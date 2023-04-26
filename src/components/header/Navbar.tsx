import { component$ } from "@builder.io/qwik";

import { useLocation } from "@builder.io/qwik-city";

import { FastAccessMenu } from "../section/FastAccesMenu";
import { BurgerMenu } from "./BurgerMenu";

export const Navbar = component$(() => {
  const location = useLocation();

  return (
    <>
      <nav role="menu" class="sticky top-0 z-50 border-b-[1px] border-slate-200 bg-white flex justify-start w-full">
        <a
          href="/"
          class="flex justify-start items-center"
          {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
          aria-label="Accueil"
        >
          <img class="block h-10 w-auto lg:hidden z-10" src="/images/logo-blue.svg" alt="Accueil" />
          <img class="hidden h-20 w-auto lg:block z-10" src="/images/logo-blue.svg" alt="Accueil" />
          <h1 class="mx-4 text-6xl font-medium text-[#0B3168] z-10">inolib</h1>
        </a>
        <div class="flex flex-col w-full pl-10">
          <FastAccessMenu />
          <div class="hidden md:block">
            <div class="flex justify-around border-t-2">
              <a
                href="/audit"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                {...(location.url.pathname === "/audit" ? { "aria-current": "page" } : {})}
              >
                AUDIT
              </a>

              <a
                href="/"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
              >
                DEVELOPPEMENT
              </a>

              <a
                href="/"
                class="rounded-md  px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
              >
                FORMATION
              </a>

              <a
                href="/"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
              >
                MARKETING DIGITAL
              </a>
              <a
                href="/temoignages"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                {...(location.url.pathname === "/presentation" ? { "aria-current": "page" } : {})}
              >
                PRÉSENTATION
              </a>
              <a
                href="/actualite"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                {...(location.url.pathname === "/actualites" ? { "aria-current": "page" } : {})}
              >
                ACTUALITÉS
              </a>
              <a
                href="/contact"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                {...(location.url.pathname === "/contact" ? { "aria-current": "page" } : {})}
              >
                CONTACT
              </a>
              <a
                href="/connexion"
                class="rounded-md px-3 py-2 font-normal text-[#0B3168] hover:bg-[#0B3168] hover:text-white sm:border-[1px] sm:border-[#0B3168]"
                {...(location.url.pathname === "/connexion" ? { "aria-current": "page" } : {})}
              >
                Connexion
              </a>
            </div>
          </div>
          <div class="sm:hidden absolute top-0 right-0" id="mobile-menu">
            <BurgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
});
