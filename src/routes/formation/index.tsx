import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Article } from "~/components/Article";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <header>
        <Banner
          content="Apprenez, innovez et façonnez un avenir digital où chacun trouve sa place."
          imageSrc="\images\formation-raw.jpg"
          imageStyle="md:w-3/5 md:max-w-xl md:mb-16"
          title="Formation - L'atelier de l'accessibilité numérique"
        />
      </header>

      <section class="text-[#0B3168] text-l">
        <p class="px-5 md:px-28 pt-10">
          <strong class="text-xl">INOLIB</strong> vous accompagne dans la création d'expériences numériques accessibles
          et conviviales pour tous, conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation,
          interactives et pratiques, sont conçues pour répondre aux besoins de tout public, tels que les managers, chefs
          de projet, développeurs, designers et webmasters.
        </p>
        <h2 class="px-5 md:px-28 mt-10 font-bold text-3xl">Nos domaines d'expertise</h2>
        <h3 class="px-5 md:px-28 mt-4">
          Nos formations couvrent les sujets clés de l'accessibilité numérique, notamment :
        </h3>
        <Article
          imgSeparator=""
          imageSrc="/images/formation-article-1.jpg"
          stylesArticleGaucheFlex="mb-8 bg-slate-100 shadow text-[#0B3168] rounded md:flex-row "
          stylesImage=" md:mr-[6rem] mt-[3rem]"
        >
          <div q:slot="check-box" class="mt-5 mx-5 flex flex-col md:ml-[5rem] md:mt-0">
            <ul class="flex flex-col md:mt-20 md:justify-around text-lg ">
              <li class="mb-[2rem] flex">
                <p class="ml-4">🔹Les fondamentaux de l'accessibilité numérique</p>
              </li>
              <li class="mb-[2rem] flex ">
                <p class="ml-4">🔹Les normes et réglementations en matière d'accessibilité numérique</p>
              </li>
              <li class="mb-[2rem] flex ">
                <p class="ml-4">🔹Les techniques pour rendre un site web accessible</p>
              </li>
              <li class="mb-[2rem] flex ">
                <p class="ml-4">🔹Les outils pour tester l'accessibilité d'un site web</p>
              </li>
              <li class="mb-[2rem] flex ">
                <p class="ml-4">🔹L'accessibilité des applications mobiles</p>
              </li>
              <li class="mb-[2rem] flex ">
                <p class="ml-4">
                  🔹L'accessibilité pour les personnes en situation de handicap visuel, auditif, moteur et cognitif
                </p>
              </li>
            </ul>
          </div>
        </Article>

        <h2 class="px-5 md:px-28 mt-10 font-bold text-3xl">Chiffres clés sur l'accessibilité numérique :</h2>
        <p class="px-5 md:px-28 mt-2">
          Entre 15 et 20% de la population mondiale est concernée par un handicap. En France, le dernier rapport du
          gouvernement publié en 2023 indique que 19% de la population est concernée. Cela inclut les handicaps visuels
          (cécité, malvoyance), moteurs (problèmes de dextérité avec une souris), auditifs (surdité, malentendance) et
          mentaux (dyslexie).
        </p>
        <h2 class="px-5 md:px-28 mt-10 font-bold text-3xl">Formations et sensibilisation adaptées à vos besoins</h2>
        <p class="px-5 md:px-28 mt-2">
          Nos formations et séances de sensibilisation sont disponibles en présentiel ou en ligne, pour répondre aux
          besoins de tous nos clients. Nous proposons également des formations sur mesure pour répondre aux besoins
          spécifiques de chaque entreprise.
        </p>
        <h2 class="px-5 md:px-28 mt-10 font-bold text-3xl">Pourquoi choisir INOLIB Formations</h2>
        <Article
          imgSeparator=""
          imageSrc="/images/formation-article-2.JPG"
          stylesArticleGaucheFlex="mb-8  bg-slate-100 text-[#0B3168] shadow rounded md:flex-row-reverse "
          stylesImage="md:ml-[5rem] md:mr-[3rem] mt-[3rem]"
        >
          <div q:slot="check-box" class="mx-5 mt-10 flex justify-around md:mx-[8rem] ">
            <ul class="mt-10 flex flex-col md:mt-0 gap-10">
              <li class="flex gap-4 items-center">
                <img class="hidden md:block" src="/images/checkservice.svg" alt="" />
                <p class="ml-4 font-normal">Des formateurs experts en accessibilité numérique</p>
              </li>
              <li class="flex gap-4 items-center">
                <img class="hidden md:block" src="/images/checkservice.svg" alt="" />
                <p class="ml-4 font-normal">Des formations et sensibilisation adaptées à tous les niveaux</p>
              </li>
              <li class="flex gap-4 items-center">
                <img class="hidden md:block" src="/images/checkservice.svg" alt="" />
                <p class="ml-4 font-normal">Des formations disponibles en présentiel ou en ligne</p>
              </li>
              <li class="flex gap-4 items-center">
                <img class="hidden md:block" src="/images/checkservice.svg" alt="" />
                <p class="ml-4 font-normal">
                  Des formations sur mesure pour répondre aux besoins spécifiques de chaque entreprise
                </p>
              </li>
              <li class="flex gap-4 items-center">
                <img class="hidden md:block" src="/images/checkservice.svg" alt="" />
                <p class="ml-4 font-normal">Des tarifs compétitifs</p>
              </li>
            </ul>
          </div>
        </Article>
      </section>

      <div class="my-10 flex w-full justify-center">
        <ButtonTopPage />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Formation | Accessibilité Numérique & Sensibilisation | Formation RGAA & WCAG",
};
