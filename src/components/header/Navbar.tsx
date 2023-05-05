import { component$ } from "@builder.io/qwik";

import { useLocation } from "@builder.io/qwik-city";

import { FastAccessMenu } from "../section/FastAccesMenu";
import { BurgerMenu } from "./BurgerMenu";

export const Navbar = component$(() => {
  const location = useLocation();

  return (
    <>
      <FastAccessMenu />
      <nav role="menu" class="sticky top-0 z-50 border-b-[1px] border-slate-200 bg-white">
        <div class="px-2 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center justify-center">
              <a
                href="/"
                class="flex h-10 w-10 flex-shrink-0 items-center sm:absolute z-10"
                {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
                aria-label="Accueil"
              >
                <img class="block h-10 w-auto lg:hidden z-10" src="/images/logo-blue.svg" alt="Accueil" />
                <img class="hidden h-10 w-auto lg:block z-10" src="/images/logo-blue.svg" alt="Accueil" />
                <h1 class="mx-4 text-4xl font-medium text-[#0B3168] z-10">inolib</h1>
              </a>
              <div class="hidden md:block absolute top-3 right-3">
                <div class="flex sm:space-x-0">
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
                    href="/testing"
                    class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                    {...(location.url.pathname === "/testing" ? { "aria-current": "page" } : {})}
                  >
                    TESTING
                  </a>
                  <a
                    href="/acompagnement"
                    class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
                    {...(location.url.pathname === "/acompagnement" ? { "aria-current": "page" } : {})}
                  >
                    ACOMPAGNEMENT
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
                  <span>
                    <p aria-label="numéro de téléphone" class="text-[#0B3168] text-xs -mt-2 mb-3">
                      {" "}
                      Contact : 06 70 86 50 32
                    </p>
                    <a
                      href="/connexion"
                      class="rounded-md px-3 py-2 font-normal text-sm mb-2 ml-5 text-[#0B3168] hover:bg-[#0B3168] hover:text-white sm:border-[1px] sm:border-[#0B3168]"
                      {...(location.url.pathname === "/connexion" ? { "aria-current": "page" } : {})}
                    >
                      Connexion
                    </a>
                  </span>
                </div>
              </div>
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
