import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import ArticlePresentation1 from "~/components/articles/ArticlePresentation1";
import ArticlePresentation2 from "~/components/articles/ArticlePresentation2";
import { PresentationCard } from "~/components/cards/PresentationCard";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] p-4 text-white md:relative md:mb-28 md:flex md:h-[60vh] md:items-center md:px-28"
        role="banner"
        id="header"
      >
        <img class="z-10 md:mt-48" src="../images\home5.png" />
        <div class="md:pl-14">
          <h1 class="m-5 text-3xl font-bold md:text-4xl">Qui sommes-nous ?</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
      <main class="text-[#0B3168]">
        <ArticlePresentation1 />

        <ArticlePresentation2 />

        <section class="flex bg-gradient-to-b from-[#5A0C69] to-[#0F3069] px-4 py-8 text-white md:px-36">
          <div class="flex flex-col justify-center md:pr-16">
            <strong>
              <h2 class="mb-2 text-3xl md:mb-8">Notre équipe</h2>
            </strong>
            <strong>
              <p class="my-6 text-2xl md:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Aliquam totam neque ullam dolore.
              </p>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </p>
          </div>
          <img class="hidden md:block" src="..\images\background-team-bulles.svg" />
        </section>
        <section>
          <ul class="pt-20 md:flex md:flex-wrap md:px-28" aria-label="liste des employés d'Inolib">
            <PresentationCard
              name="Djebrine Aloui"
              position="CEO & Fondateur"
              imageSrc="\images\presentation-image-profil.png"
            />
            <PresentationCard
              name="Djebrine Aloui"
              position="CEO & Fondateur"
              imageSrc="\images\presentation-image-profil.png"
            />
            <PresentationCard
              name="Djebrine Aloui"
              position="CEO & Fondateur"
              imageSrc="\images\presentation-image-profil.png"
            />
            <PresentationCard
              name="Djebrine Aloui"
              position="CEO & Fondateur"
              imageSrc="\images\presentation-image-profil.png"
            />
            <PresentationCard
              name="Djebrine Aloui"
              position="CEO & Fondateur"
              imageSrc="\images\presentation-image-profil.png"
            />
            <PresentationCard
              name="Djebrine Aloui"
              position="CEO & Fondateur"
              imageSrc="\images\presentation-image-profil.png"
            />
          </ul>
        </section>
        <div class="my-10 flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Presentation",
};
