import { component$, Slot } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { BannerHome } from "~/components/header/BannerHome";
import { Button } from "~/components/ui/buttons/Button";
import { CardsRowDisplay } from "~/components/cards/CardsRowDisplay";
import { DiscoverAcessCard } from "~/components/cards/DiscoverAcessCard";
import { SplitedImage } from "~/components/cards/SplitedImage";
import { Banner2 } from "~/components/cards/Banner2";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <main class="flex justify-center flex-col">
      <BannerHome />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta, laborum inventore a maxime voluptatibus
          cum et quidem magni? Nihil, laudantium obcaecati. Minus, ullam quibusdam ? Enim quaerat rerum iure eum! Minima
          facilis earum unde repellat quo nisi.
        </p>
      </Banner2>
      <section class="mb-[10vh]">
        <span class="flex justify-start mt-20 ml-[9vw]">
          <h2 class="text-[#0B3168] font-normal text-4xl">Actualités</h2>
        </span>
        <span class="grid grid-col-2 grid-row-2- ml-[1vw] mt-14">
          <span class="col-end-1 ml-[8vw] border-slate-300 w-[40vw] border-b-[2px]">
            <img class="mb-10" src="/images/home1.png" alt="" />
            <h3 class="text-[#0B3168] font-normal text-3xl max-w-sm mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="max-w-md text-[#0B3168]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id, facilis veritatis repudiandae nobis eius
              magnam non libero a dolor recusandae obcaecati similique eligendi magni aliquid nisi illum nemo explicabo.
            </p>
            <p class="text-[#0B3168] text-[11px] pb-[5vh] mt-4">20.06.2023&ensp; |&ensp; Développement</p>
          </span>
          <span class="col-end-2 mr-[8vw]">
            <img class="mb-10" src="/images/home2.png" alt="" />
            <h3 class="text-[#0B3168] font-normal text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Accessibilité</p>
          </span>
          <span class="col-end-2 mr-[8vw] pb-4 -mt-[23vh]">
            <img class="mb-10" src="/images/home3.png" alt="" />
            <h3 class="text-[#0B3168] font-normal text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">03.02.2023&ensp; |&ensp; Accessibilité</p>
          </span>
          <a
            aria-label="lien vers pas actualité"
            class="flex justify-end mr-[8vw] -mt-[30vh] text-[#0B3168]"
            href="/actualites"
          >
            Voir toute notre actualité{" "}
            <img
              class="w-[2vw] h-[2vh] mt-[0.8vh]"
              src="/images/icon-small-arrow.svg"
              alt="lien vers page accessibilité"
            />
          </a>
        </span>
        <div class="flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
