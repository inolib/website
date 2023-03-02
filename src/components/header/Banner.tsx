import { component$ } from "@builder.io/qwik";

import { Navbar } from "~/header/Navbar";

export const Banner = component$(() => {
  return (
    <header>
      <Navbar />

      <section>
        <h1>
          <img alt="INOLIB" src="/images/logo-white.svg" />
          <span>Human Noble Technology</span>
        </h1>

        <a href="/presentation">Découvrir</a>
      </section>
    </header>
  );
});
