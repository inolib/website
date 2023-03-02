import { component$, Slot } from "@builder.io/qwik";

import { Banner } from "../components/header/Banner";
import { Contentinfo } from "../components/footer/Contentinfo";

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
