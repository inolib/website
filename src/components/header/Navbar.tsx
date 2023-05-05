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
          <div class="flex justify-between items-center mr-4 sr-only md:whitespace-nowrap md:not-sr-only">
            <FastAccessMenu />
            <a href="tel:+33670865032" class="text-[#0B3168] mr-4">
              {" "}
              Contact : 06 70 86 50 32
            </a>
          </div>
          <div class="hidden md:block">
            <div class="flex justify-around items-center border-t-2">
              <a
                href="/audit"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14"
                {...(location.url.pathname === "/audit" ? { "aria-current": "page" } : {})}
              >
                AUDIT
              </a>

              <a
                href="/"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14"
                {...(location.url.pathname === "/developpement" ? { "aria-current": "page" } : {})}
              >
                DEVELOPPEMENT
              </a>

              <a
                href="/testing"
                class="rounded-md  px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14"
                {...(location.url.pathname === "/testing" ? { "aria-current": "page" } : {})}
              >
                TESTING
              </a>

              <a
                href="/"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white "
                {...(location.url.pathname === "/formation" ? { "aria-current": "page" } : {})}
              >
                FORMATION
              </a>
              <a
                href="/marketing"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14"
                {...(location.url.pathname === "/mmarketing" ? { "aria-current": "page" } : {})}
              >
                MARKETING DIGITAL
              </a>
              <a
                href="/actualite"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14"
                {...(location.url.pathname === "/presentation" ? { "aria-current": "page" } : {})}
              >
                PRÉSENTATION
              </a>
              <a
                href="/contact"
                class="rounded-md px-3 py-2 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14"
                {...(location.url.pathname === "/actualite" ? { "aria-current": "page" } : {})}
              >
                ACTUALITÉ
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
                class="rounded-md px-3 py-2 font-normal text-sm  md:ml-5 md:my-2 text-[#0B3168] hover:bg-[#0B3168] hover:text-white sm:border-[1px] sm:border-[#0B3168]"
                {...(location.url.pathname === "/connexion" ? { "aria-current": "page" } : {})}
              >
                Connexion
              </a>
            </div>
          </div>
          <div class="md:hidden absolute top-0 right-0" id="mobile-menu">
            <BurgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
});
