import { component$ } from "@builder.io/qwik";

import { TestMenu, TestMenuButton, TestMenuItem } from "@inolib/ui";

export default component$(() => {
  return (
    <>
      <TestMenu>
        <TestMenuButton>Click me!</TestMenuButton>
        <TestMenuItem styles="text-[#0B3168] text-2xl list-none">GG</TestMenuItem>
      </TestMenu>
    </>
  );
});
