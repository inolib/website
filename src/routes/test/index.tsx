import { component$ } from "@builder.io/qwik";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemList,
  Select,
  SelectButton,
  SelectOption,
  SelectOptionList,
} from "@inolib/ui";

const people = [
  { id: 1, name: "Matthieu MEIGNAN", available: true },
  { id: 2, name: "Quentin FERRARI", available: false },
  { id: 3, name: "Matthieu GEORGE", available: true },
];

const page = [
  { id: 1, type: "Actualité", available: true, value: "/actualites" },
  { id: 2, type: "Accessibilite", available: true, value: "/accessibilite" },
  { id: 3, type: "Présentation", available: true, value: "/presentation" },
  { id: 4, type: "Services", available: true, value: "/services" },
  { id: 5, type: "Témoignages", available: true, value: "/temoignages" },
  { id: 6, type: "Contact", available: true, value: "/contact" },
  { id: 7, type: "Connexion", available: true, value: "/profile" },
];

export default component$(() => {
  return (
    <>
      <Select name="foo">
        <SelectButton>Click me! (1)</SelectButton>
        <SelectOptionList>
          {people.map((person) => (
            <SelectOption disabled={!person.available} key={person.id} value={person}>
              {person.name}
            </SelectOption>
          ))}
        </SelectOptionList>
      </Select>

      <Select name="bar" multiple={true}>
        <SelectButton>Click me! (2)</SelectButton>
        <SelectOptionList>
          {people.map((person) => (
            <SelectOption disabled={!person.available} key={person.id} value={person}>
              {person.name}
            </SelectOption>
          ))}
        </SelectOptionList>
      </Select>
      <Menu>
        <MenuButton>click me (3)</MenuButton>

        <MenuItemList>
          {page.map((page) => (
            <MenuItem disabled={!page.available} key={page.id} link={page.value}>
              {page.type}
            </MenuItem>
          ))}
        </MenuItemList>
      </Menu>
    </>
  );
});
