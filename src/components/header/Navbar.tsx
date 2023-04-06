import { component$ } from "@builder.io/qwik";

import { useLocation } from "@builder.io/qwik-city";

import { FastAccessMenu } from "../section/FastAccesMenu";
import { BurgerMenu } from "./BurgerMenu";

export const Navbar = component$(() => {
  const location = useLocation();

  return (
    <>
      <FastAccessMenu />
      <nav class="sticky top-0 z-50 border-b-[1px] border-slate-200 bg-white">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden"></div>
            <div class="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <a
                href="/"
                class="flex h-10 w-10 flex-shrink-0 items-center sm:absolute sm:-ml-[10rem] z-10"
                {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
                aria-label="Accueil"
              >
                <img class="block h-10 w-auto lg:hidden z-10" src="/images/logo-blue.svg" alt="Accueil" />
                <img class="hidden h-10 w-auto lg:block z-10" src="/images/logo-blue.svg" alt="Accueil" />
                <h1 class="mx-4 text-4xl font-medium text-[#0B3168] z-10">inolib</h1>
              </a>
              <div class="hidden sm:block">
                <div class="flex space-x-4 sm:ml-[36rem] sm:space-x-0">
                  <a
                    href="/actualites"
                    class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                    {...(location.url.pathname === "/actualites" ? { "aria-current": "page" } : {})}
                  >
                    ACTUALITÉ
                  </a>

                  <a
                    href="/accessibilite"
                    class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                    {...(location.url.pathname === "/accessibilite" ? { "aria-current": "page" } : {})}
                  >
                    ACCESSIBILITÉ
                  </a>

                  <a
                    href="/presentation"
                    class="rounded-md  px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                    {...(location.url.pathname === "/presentation" ? { "aria-current": "page" } : {})}
                  >
                    PRÉSENTATION
                  </a>

                  <a
                    href="/services"
                    class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                    {...(location.url.pathname === "/services" ? { "aria-current": "page" } : {})}
                  >
                    SERVICES
                  </a>
                  <a
                    href="/temoignages"
                    class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                    {...(location.url.pathname === "/temoignages" ? { "aria-current": "page" } : {})}
                  >
                    TÉMOIGNAGES
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
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3"></div>
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
