import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import ArticleTemoignage1 from "~/components/articles/ArticleTemoignage1";
import ArticleTemoignage2 from "~/components/articles/ArticleTemoignage2";
import ArticleTemoignage3 from "~/components/articles/ArticleTemoignage3";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
        id="header"
      >
        <img class="md:mt-48 z-10" src="..\images\temoignage-homme-header.png" />
        <div class="md:pl-14">
          <h1 class="font-bold p-5 text-3xl md:text-4xl">Témoignages</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
      <main class="text-[#0B3168]">
        <section class="" aria-label="3 témoignages">
          <ArticleTemoignage1 />

          <ArticleTemoignage2 />

          <ArticleTemoignage3 />
        </section>
        <div class="flex w-full justify-center my-10">
          <ButtonTopPage />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "temoignages",
};
