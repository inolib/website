import { component$, Slot } from "@builder.io/qwik";

import { Contentinfo } from "~/footer/Contentinfo";
import { Navbar } from "~/header/Navbar";

export default component$(() => {
  return (
    <>
      <Navbar />

      <main>
        <Slot />
      </main>

      <Contentinfo />
    </>
  );
});
