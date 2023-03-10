import { component$, Slot } from "@builder.io/qwik";

import { Contentinfo } from "~/components/footer/Contentinfo";
import { Navbar } from "~/components/header/Navbar";

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
