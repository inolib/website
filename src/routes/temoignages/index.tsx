import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import ArticleTemoignage1 from "~/components/articles/ArticleTemoignage1";
import ArticleTemoignage2 from "~/components/articles/ArticleTemoignage2";
import ArticleTemoignage3 from "~/components/articles/ArticleTemoignage3";
import { Banner } from "~/components/header/Banner";

export default component$(() => {
  return (
    <>
      <Banner
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
        imageSrc="\images\temoignage-homme-header.png"
        title="Témoignages"
      />

      <main class="text-[#0B3168]">
        <section class="" aria-label="3 témoignages">
          <ArticleTemoignage1 />

          <ArticleTemoignage2 />

          <ArticleTemoignage3 />
        </section>
        <div class="mb-10 flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "temoignages",
};
