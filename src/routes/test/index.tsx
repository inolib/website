import { component$ } from "@builder.io/qwik";

import { Menu, MenuButton, MenuItemLink, MenuItems } from "@inolib/ui";
import { Select, SelectButton, SelectOption, SelectOptions } from "@inolib/ui";

const people = [
  { id: 1, name: "Matthieu M", available: true },
  { id: 2, name: "Quentin F", available: true },
];

const page = [
  { id: 1, name: "Actualité", href: "/actualites" },
  { id: 2, name: "Accessibilite", href: "/accessibilite" },
  { id: 3, name: "Présentation", href: "/presentation" },
  { id: 4, name: "Services", href: "/services" },
  { id: 5, name: "Témoignages", href: "/temoignages" },
  { id: 6, name: "Contact", href: "/contact" },
  { id: 7, name: "Connexion", href: "/profile" },
];

export default component$(() => {
  return (
    <div>
      <Select name="foo">
        <SelectButton>Click me! (1)</SelectButton>
        <SelectOptions>
          {people.map((person) => (
            <SelectOption disabled={!person.available} key={person.id} value={person}>
              {person.name}
            </SelectOption>
          ))}
        </SelectOptions>
      </Select>

      <Select name="bar" multiple={true}>
        <SelectButton>Click me! (2)</SelectButton>
        <SelectOptions>
          {people.map((person) => (
            <SelectOption disabled={!person.available} key={person.id} value={person}>
              {person.name}
            </SelectOption>
          ))}
        </SelectOptions>
      </Select>
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
              styles="rounded-md px-3 py-2 text-base font-medium text-[#0B3168] hover:bg-[#0B3168] hover:text-white"
            >
              {page.name}
            </MenuItemLink>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
});
