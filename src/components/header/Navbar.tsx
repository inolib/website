import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  const location = useLocation();

  return (
    <>
      {/* <nav>
        <a href="#contenu">Aller au contenu principal</a>
      </nav> */}

      <nav class="shadow-3xl font-semibold flex py-3 bg-white justify-between mx-3">

        <div class="">
          <a
            className="flex text-3xl text-[#0B3168] items-center flex-row"
            href="/"
            {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
            aria-label="Accueil"
          >
            <img className="w-10 h-10 mx-2" alt="" src="/images/logo-blue.svg" /> inolib
          </a>
        </div>
        <div class="items-center hidden space-x-8 md:flex">
          <ul className="flex ml-[35vw]">
            <li>
              <a
                className="hover:bg-[#0B3168] font-normal hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-l"

                href="/actualites"
                {...(location.url.pathname === "/actualites" ? { "aria-current": "page" } : {})}
              >
                ACTUALITÉ
              </a>
            </li>
            <li>
              <a

                className="hover:bg-[#0B3168] font-normal hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-l"

                href="/accessibilite"
                {...(location.url.pathname === "/accessibilite" ? { "aria-current": "page" } : {})}
              >
                ACCESSIBILITÉ
              </a>
            </li>
            <li>
              <a

                className="hover:bg-[#0B3168] font-normal hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-l"

                href="/presentation"
                {...(location.url.pathname === "/presentation" ? { "aria-current": "page" } : {})}
              >
                PRÉSENTATION
              </a>
            </li>
            <li>
              <a

                className="hover:bg-[#0B3168] font-normal hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-l"

                href="/services"
                {...(location.url.pathname === "/services" ? { "aria-current": "page" } : {})}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a

                className="hover:bg-[#0B3168] font-normal hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-l"

                href="/temoignages"
                {...(location.url.pathname === "/temoignages" ? { "aria-current": "page" } : {})}
              >
                TÉMOIGNAGES
              </a>
            </li>
            <li>
              <a

                className="hover:bg-[#0B3168] font-normal hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-l"

                href="/contact"
                {...(location.url.pathname === "/contact" ? { "aria-current": "page" } : {})}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center space-x-2">

          <button class="border-[#0B3168] border-[1px] hover:bg-[#0B3168] hover:text-white px-4 py-1 font-light text-[#0B3168] text-lg bg-white rounded-md">

            Connexion
          </button>
        </div>
      </nav>
    </>
  );
});
