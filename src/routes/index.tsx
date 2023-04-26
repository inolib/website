import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ArticlesHomeDisplay } from "~/components/articles/ArticleHomeDisplay";
import { BannerHome } from "~/components/header/BannerHome";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { CardsRowDisplay } from "~/components/cards/CardsRowDisplay";
import { SplitedImage } from "~/components/cards/SplitedImage";
import { Banner } from "~/components/header/Banner";

export default component$(() => {
  return (
    <>
      <BannerHome />
      <section class="flex flex-col justify-center overflow-x-hidden">
        <SplitedImage src="/images/decouvriraccess.png" styles="hidden md:block" />
        <Banner
          imageSrc="/images/decouvriraccess.png"
          styles="md:hidden block"
          title="Découvrir l'accessiblité"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta, laborum inventore a maxime
            voluptatibus cum et quidem magni? Nihil, laudantium obcaecati. Minus, ullam quibusdam ? Enim quaerat rerum
            iure eum! Minima facilis earum unde repellat quo nisi."
        />
        <CardsRowDisplay />
        <Banner
          q:slot="button"
          styles="md:hidden block mt-[4rem] "
          title="Témoignages"
          imageSrc="/images/temoignage-homme.png"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta, laborum inventore a maxime
            voluptatibus cum et quidem magni? Nihil, laudantium obcaecati. Minus, ullam quibusdam ? Enim quaerat rerum
            iure eum! Minima facilis earum unde repellat quo nisi."
        />

        <section class="mx-4 mb-[4.5rem]">
          <ArticlesHomeDisplay title="Actualités" />
          <div class="flex justify-center">
            <ButtonTopPage />
          </div>
        </section>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Accueil",
};
