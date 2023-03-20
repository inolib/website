import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ArticlesHomeDisplay } from "~/components/articles/ArticleHomeDisplay";
import { BannerHome } from "~/components/header/BannerHome";
import { Banner2 } from "~/components/header/Banner2";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { CardsRowDisplay } from "~/components/cards/CardsRowDisplay";
import { SplitedImage } from "~/components/cards/SplitedImage";
import { Banner } from "~/components/header/Banner";

export default component$(() => {
  return (
    <>
      <BannerHome />
      <main class="flex flex-col justify-center overflow-x-hidden">
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
        <Banner2
          src="/images/temoignage-homme.png"
          styles="justify-center hidden md:block md:justify-start -mt-[30rem] md:mt-[0rem] md:mr-[0rem] "
          title="Témoignages"
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat rerum iure eum! Minima facilis
              earum unde repellat quo nisi."
        >
          <p q:slot="content" class="mt-[9rem] max-w-xl text-[#0F3069]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta, laborum inventore a maxime
            voluptatibus cum et quidem magni? Nihil, laudantium obcaecati. Minus, ullam quibusdam ? Enim quaerat rerum
            iure eum! Minima facilis earum unde repellat quo nisi.
          </p>
        </Banner2>
        <section class="mb-[4.5rem] mx-4">
          <ArticlesHomeDisplay title="Actualités" />
          <div class="flex justify-center">
            <ButtonTopPage />
          </div>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Acceuil",
};
