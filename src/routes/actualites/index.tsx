import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Article } from "~/components/Article";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { CardsActualiteGridDisplay } from "~/components/cards/CardsActualiteGridDisplay";
import { DropDownMenu } from "~/components/ui/buttons/DropDownMenu";
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

      <main class="mt-[10rem]">
        <h2 class="text-[#0B3168] mx-[8vw] mb-[10vh] text-4xl">Les dernières actualités</h2>
        <Article
          stylesTestimony="w-[40rem] ml-[5rem]"
          stylesContent="pt-[2rem] w-[40rem] ml-[5rem]"
          imageSrc="/images/photoArticle.png"
          stylesArticleGaucheFlex="flex-row-reverse -mt-[5rem]"
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
        <form class="flex items-center -mt-[5rem]">
          <SearchBar placeholder="Rechercher par mots-clés..." />
          <DropDownMenu label="Types" />
          <DropDownMenu label="Périodes" />
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
