import { component$, Slot } from "@builder.io/qwik";

import { Contentinfo } from "c/footer/Contentinfo";
import { Navbar } from "c/header/Navbar";

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
