import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Article } from "~/components/Article";
import { CardsActualiteGridDisplay } from "~/components/cards/CardsActualiteGridDisplay";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Filter } from "~/components/ui/composite/Filter";
import { SearchBar } from "~/components/ui/SearchBar";

export default component$(() => {
  return (
    <>
      <Banner
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna."
        imageSrc="/images/banner-actualites.png"
        title="Actualités"
      />

      <main class="md:mt-[10rem] mt-[3rem] overflow-x-hidden">
        <h2 class="text-[#0B3168] md:mx-[8rem] ml-[2rem] md:mb-[5rem] mb-[6rem] text-4xl">Les dernières actualités</h2>
        <Article
          stylesTestimony="md:w-[40rem] md:ml-[5rem] ml-[1rem]"
          stylesContent="pt-[2rem] md:w-[40rem] md:ml-[5rem]"
          imageSrc="/images/photoArticle.png"
          stylesArticleGaucheFlex="md:flex-row-reverse -mt-[5rem]"
          testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna."
          content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores."
        >
          <p q:slot="date&category" class="text-[#0B3168] text-[11px] mt-4">
            03.02.2023&ensp; |&ensp; Développement
          </p>
        </Article>

        <form class="flex md:flex-row flex-col items-center md:justify-start justify-center -mt-[5rem]">
          <SearchBar placeholder="Rechercher par mots-clés..." />
          <Filter labels={{ button: "Types", items: ["Option 1", "Option 2", "Option 3"] }} />
          <Filter labels={{ button: "Périodes", items: ["Option 1", "Option 2", "Option 3"] }} />
        </form>

        <section>
          <CardsActualiteGridDisplay />
        </section>
        <ButtonTopPage styles="pb-[2rem]" />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "actualités",
};
