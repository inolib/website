import { component$ } from "@builder.io/qwik";

import { MenuButton, MenuItem, MenuItemList, Select, SelectButton, SelectOption, SelectOptionList } from "@inolib/ui";

const people = [
  { id: 1, name: "Matthieu MEIGNAN", available: true },
  { id: 2, name: "Quentin FERRARI", available: false },
  { id: 3, name: "Matthieu GEORGE", available: true },
];

const item = [
  { id: 1, name: "Accessibilite", available: true },
  { id: 2, name: "Témoignage", available: false },
  { id: 3, name: "Contact", available: true },
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
        <MenuButton>click me</MenuButton>
        <MenuItem>
          <MenuItemList></MenuItemList>
        </MenuItem>
      </Menu>
    </>
  );
});
