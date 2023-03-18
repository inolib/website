import { $, component$, useStore } from "@builder.io/qwik";

import { useLocation } from "@builder.io/qwik-city";

import { FastAccessMenu } from "../section/FastAccesMenu";

type HandleBurgerFonction = () => void;

type NavStore = {
  burger: {
    attributes: {
      hidden: boolean;
    };
  };
};

export const Navbar = component$(() => {
  const location = useLocation();

  const store = useStore<NavStore>(
    {
      burger: {
        attributes: {
          hidden: true,
        },
      },
    },
    {
      deep: true,
    }
  );

  const handleBurger$ = $<HandleBurgerFonction>(() => {
    store.burger.attributes.hidden = !store.burger.attributes.hidden;
  });

  return (
    <>
      <FastAccessMenu />
      <nav class="sticky top-0 z-50 bg-white border-b-[1px] border-slate-200">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick$={handleBurger$}
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-[#0B3168] hover:bg-[#0B3168] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="ouvrir le menu principal"
              >
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <a
                href="/"
                class="flex flex-shrink-0 items-center w-10 h-10 sm:absolute sm:-ml-[10rem]"
                {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
                aria-label="Accueil"
              >
                <img class="block h-10 w-auto lg:hidden" src="/images/logo-blue.svg" alt="Your Company" />
                <img class="hidden h-10 w-auto lg:block" src="/images/logo-blue.svg" alt="Your Company" />
                <h1 class="text-4xl font-medium text-[#0B3168] mx-4">Inolib</h1>
              </a>
              <div class="hidden sm:block">
                <div class="flex space-x-4 sm:space-x-0 sm:ml-[36rem]">
                  <a
                    href="/actualites"
                    class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white rounded-md px-3 py-2 font-medium"
                    {...(location.url.pathname === "/actualites" ? { "aria-current": "page" } : {})}
                  >
                    ACTUALITÉ
                  </a>

                  <a
                    href="/accessibilite"
                    class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white rounded-md px-3 py-2 font-medium"
                    {...(location.url.pathname === "/accessibilite" ? { "aria-current": "page" } : {})}
                  >
                    ACCESSIBILITÉ
                  </a>

                  <a
                    href="/presentation"
                    class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white rounded-md px-3 py-2  font-medium"
                    {...(location.url.pathname === "/presentation" ? { "aria-current": "page" } : {})}
                  >
                    PRÉSENTATION
                  </a>

                  <a
                    href="/services"
                    class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white rounded-md px-3 py-2 font-medium"
                    {...(location.url.pathname === "/services" ? { "aria-current": "page" } : {})}
                  >
                    SERVICES
                  </a>
                  <a
                    href="/temoignages"
                    class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white rounded-md px-3 py-2 font-medium"
                    {...(location.url.pathname === "/temoignages" ? { "aria-current": "page" } : {})}
                  >
                    TÉMOIGNAGES
                  </a>
                  <a
                    href="/contact"
                    class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white rounded-md px-3 py-2 font-medium"
                    {...(location.url.pathname === "/contact" ? { "aria-current": "page" } : {})}
                  >
                    CONTACT
                  </a>

                  <a
                    href="/connexion"
                    class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white rounded-md px-3 py-2 font-normal sm:border-[#0B3168] sm:border-[1px]"
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
        </div>

        <div {...store.burger.attributes} class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a
              href="/actualites"
              class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              {...(location.url.pathname === "/actualites" ? { "aria-current": "page" } : {})}
              aria-label="Accueil"
            >
              Actualité
            </a>

            <a
              href="/accessibilite"
              class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              {...(location.url.pathname === "/accessibilite" ? { "aria-current": "page" } : {})}
            >
              Accessibilité
            </a>

            <a
              href="/presentation"
              class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              {...(location.url.pathname === "/presentation" ? { "aria-current": "page" } : {})}
            >
              Présentation
            </a>

            <a
              href="/services"
              class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              {...(location.url.pathname === "/services" ? { "aria-current": "page" } : {})}
            >
              Services
            </a>
            <a
              href="/temoignages"
              class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              {...(location.url.pathname === "/temoignages" ? { "aria-current": "page" } : {})}
            >
              Témoignages
            </a>
            <a
              href="/contact"
              class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              {...(location.url.pathname === "/contact" ? { "aria-current": "page" } : {})}
            >
              Contact
            </a>
            <a
              href="/connexion"
              class="text-[#0B3168] hover:bg-[#0B3168] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              {...(location.url.pathname === "/connexion" ? { "aria-current": "page" } : {})}
            >
              Connexion
            </a>
          </div>
        </div>
      </nav>
    </>
  );
});
