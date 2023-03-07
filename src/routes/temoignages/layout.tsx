import { component$, Slot } from "@builder.io/qwik";

import { Banner } from "~/header/Banner";
import { Contentinfo } from "~/footer/Contentinfo";

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>

      <Contentinfo />
    </>
  );
});
