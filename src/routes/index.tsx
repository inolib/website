import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { BannerHome } from "~/components/header/BannerHome";
import { CardsRowDisplay } from "~/components/cards/CardsRowDisplay";
import { SplitedImage } from "~/components/cards/SplitedImage";
import { Banner2 } from "~/components/cards/Banner2";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { ArticlesGridDisplay } from "~/components/cards/ArticlesGridDisplay";

export default component$(() => {
  return (
    <>
      <BannerHome />
      <main class="flex justify-center flex-col">
        <SplitedImage src="/images/decouvriraccess.png" />
        <CardsRowDisplay />
        <Banner2
          styles="ml-[6rem]"
          src="/images/temoignage-homme.png"
          title="Témoignages"
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat rerum iure eum! Minima facilis
              earum unde repellat quo nisi."
        >
          <p q:slot="content" class="mt-[20vh] max-w-xl text-[#0F3069]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta, laborum inventore a maxime
            voluptatibus cum et quidem magni? Nihil, laudantium obcaecati. Minus, ullam quibusdam ? Enim quaerat rerum
            iure eum! Minima facilis earum unde repellat quo nisi.
          </p>
        </Banner2>
        <section class="mb-[10vh]">
          <ArticlesGridDisplay title="Actulités" />
          <div class="flex w-full justify-center">
            <ButtonTopPage />
          </div>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
