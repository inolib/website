import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  const location = useLocation();

  return (
    <>
      <nav class="flex py-5 bg-white justify-between mx-3">
        <div class="">
          <a
            className="flex text-3xl items-center flex-row"
            href="/"
            {...(location.url.pathname === "/" ? { "aria-current": "page" } : {})}
            aria-label="Accueil"
          >
            <img className="w-16 h-16 mx-2" alt="" src="/images/logo-blue.svg" /> Inolib
          </a>
        </div>
        <div class="items-center hidden space-x-8 md:flex">
          <ul className="flex ml-[35vw]">
            <li>
              <a
                className="hover:bg-[#0B3168] hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-xl"
                href="/actualites"
                {...(location.url.pathname === "/actualites" ? { "aria-current": "page" } : {})}
              >
                Actualité
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0B3168] hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-xl"
                href="/accessibilite"
                {...(location.url.pathname === "/accessibilite" ? { "aria-current": "page" } : {})}
              >
                Accessibilité
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0B3168] hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-xl"
                href="/presentation"
                {...(location.url.pathname === "/presentation" ? { "aria-current": "page" } : {})}
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0B3168] hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-xl"
                href="/services"
                {...(location.url.pathname === "/services" ? { "aria-current": "page" } : {})}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0B3168] hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-xl"
                href="/temoignages"
                {...(location.url.pathname === "/temoignages" ? { "aria-current": "page" } : {})}
              >
                Témoignes
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0B3168] hover:text-white hover:rounded-md px-[0.6vw] py-[0.3vw] text-[#0B3168] text-xl"
                href="/contact"
                {...(location.url.pathname === "/contact" ? { "aria-current": "page" } : {})}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center space-x-2">
          <button class="border-[#0B3168] border-[1px] hover:bg-[#0B3168] hover:text-white px-4 py-2 text-[#0B3168] text-xl bg-white rounded-md">
            Connexion
          </button>
        </div>
      </nav>
      {/* <nav>
        <a href="#contenu">Aller au contenu principal</a>
      </nav> */}
    </>
  );
});
