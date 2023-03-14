import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Article } from "~/components/Article";

import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
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
        <section class="grid grid-cols-3 grid-rows-2 gap-20 mx-[10vw]">
          <article>
            <img class="h-[40vh]" src="/images/home3.png" alt="article 1" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh] text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Accessibilité</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home7.png" alt="article 2" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh]  text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur !
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Développement</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home2.png" alt="article 3" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh]  text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Accessibilité</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home6.png" alt="article 4" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh]  text-3xl max-w-sm">Lorem ipsum dolor.</h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Formation</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home5.png" alt="article 5" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh] text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Inolib</p>
          </article>
          <article class="flex flex-col justify-center items-center shadow-xl h-[40vh]">
            <img src="/images/icon-plus.png" alt="" />
            <p class="text-[#0B3168] mt-3">Charger plus d'actualités</p>
          </article>
        </section>
        <ButtonTopPage styles="pb-[2rem]" />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "actualités",
};
