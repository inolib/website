import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { BannerHome } from "~/components/header/BannerHome";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { CardsRowDisplay } from "~/components/cards/CardsRowDisplay";
import { SplitedImage } from "~/components/cards/SplitedImage";
// import { Banner } from "~/components/header/Banner";

export default component$(() => {
  return (
    <>
      <header id="header">
        <BannerHome />
      </header>

      <section class="flex flex-col justify-center overflow-x-hidden">
        <SplitedImage src="/images/accueil-raw.jpg" styles="hidden md:block md:w-fit md:scale-90" />

        <CardsRowDisplay />

        <p class="mt-4 mx-5 md:ml-[5rem] text-[#0B3168] mb-8">
          <a class="underline underline-offset-1 text-blue-600 visited:text-purple-700" href="/contact">
            Contactez-nous
          </a>{" "}
          pour la réalisation de votre devis personnalisé.
        </p>

        <section class="mx-4 mb-[4.5rem]">
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
