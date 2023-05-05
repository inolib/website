import { component$ } from "@builder.io/qwik";
import { Menu, MenuButton, MenuItemLink, MenuItems } from "~/ui/Menu";

const page = [
  { id: 1, name: "Audit", href: "/audit" },
  { id: 2, name: "Développement", href: "/developpement" },
  { id: 3, name: "Testing", href: "/testing" },
  { id: 4, name: "Formation", href: "/formation" },
  { id: 5, name: "Marketing Digital", href: "/marketing" },
  { id: 6, name: "Présentation", href: "/presentation" },
  { id: 7, name: "Actualité", href: "/actualite" },
  { id: 8, name: "Contact", href: "/conatct" },
  { id: 9, name: "Connexion", href: "/connexion" },
];

export const BurgerMenu = component$(() => {
  return (
    <div class="w-full">
      <Menu styles="md:hidden w-full flex flex-col items-end bg-white relative">
        <MenuButton styles="rounded-md p-2 m-2 text-[#0B3168] hover:bg-[#0B3168] hover:text-white focus:outline-none focus:bg-[#0B3168] focus:text-white focus:ring-2 focus:ring-inset focus:ring-white">
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </MenuButton>

        <MenuItems styles="space-y-1 px-2 pt-2 pb-3 items-start w-full">
          {page.map((page) => (
            <MenuItemLink
              href={page.href}
              key={page.id}
              styles="rounded-md px-3 py-2 text-base font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white w-screen"
            >
              {page.name}
            </MenuItemLink>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
});
