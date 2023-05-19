import { component$ } from "@builder.io/qwik";

import { useLocation } from "@builder.io/qwik-city";

import { FastAccessMenu } from "../section/FastAccesMenu";
import { BurgerMenu } from "./BurgerMenu";

export const Navbar = component$(() => {
  const location = useLocation();

  return (
    <>
      <nav role="menu" class="sticky top-0 z-50 border-b-[1px] border-slate-200 bg-white flex justify-start w-full">
        <FastAccessMenu />
        <a
          href="/"
          class="flex justify-start items-center"
          {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
          aria-label="Accueil"
        />
        <div>
          <img class="block h-16 w-auto lg:hidden z-10" src="/images/logoinolibvf.png" alt="Inolib" />
          <img class="hidden h-32 w-auto my-[-2rem] lg:block z-10 p-4" src="/images/logoinolibvf.png" alt="Inolib" />
        </div>
        <div class="flex flex-col w-full pl-10">
          <div class="flex justify-end items-center mr-4 sr-only md:whitespace-nowrap md:not-sr-only">
            <p class="text-[#0B3168] text-xs mr-2 py-2"> contact@inolib.com</p>
            <p class="text-[#0B3168] text-xs mr-2 py-2"> / </p>
            <p class="text-[#0B3168] text-xs mr-2 py-2"> 06 47 21 86 69</p>
          </div>
          <div class="hidden md:block">
            <div class="flex justify-around items-center border-t-2">
              <a
                href="/"
                class=" rounded-md px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14 transition ease-in delay-75"
                {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
              >
                ACCUEIL
              </a>

              <a
                href="/audit"
                class=" rounded-md px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14 transition ease-in delay-75"
                {...(location.url.pathname === "/audit" ? { "aria-current": "page" } : {})}
              >
                AUDIT
              </a>

              <a
                href="/developpement"
                class="rounded-md px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14 transition ease-in delay-75"
                {...(location.url.pathname === "/developpement" ? { "aria-current": "page" } : {})}
              >
                DEVELOPPEMENT
              </a>

              <a
                href="/testing"
                class="rounded-md  px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14 transition ease-in delay-75"
                {...(location.url.pathname === "/testing" ? { "aria-current": "page" } : {})}
              >
                TESTING
              </a>

              <a
                href="/formation"
                class="rounded-md px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white transition ease-in delay-75"
                {...(location.url.pathname === "/formation" ? { "aria-current": "page" } : {})}
              >
                FORMATION
              </a>
              <a
                href="/acompagnement"
                class="rounded-md px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14 transition ease-in delay-75"
                {...(location.url.pathname === "/acompagnement" ? { "aria-current": "page" } : {})}
              >
                ACOMPAGNEMENT
              </a>
              <a
                href="/recrutement"
                class="rounded-md px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white md:max-h-14 transition ease-in delay-75"
                {...(location.url.pathname === "/recrutement" ? { "aria-current": "page" } : {})}
              >
                RECRUTEMENT
              </a>
              <a
                href="/contact"
                class="rounded-md px-3 p-1 font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white transition ease-in delay-75"
                {...(location.url.pathname === "/contact" ? { "aria-current": "page" } : {})}
              >
                CONTACT
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
