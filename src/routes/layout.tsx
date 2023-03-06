import { component$, Slot } from "@builder.io/qwik";

import { Banner } from "~/header/Banner";
import { Contentinfo } from "~/footer/Contentinfo";
import { Navbar } from "~/header/Navbar";

export default component$(() => {
  return (
    <>
      <Banner />
      <main>
        <Slot />
      </main>

      <Contentinfo />
    </>
  );
});
