import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Article } from "~/components/Article";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <Banner
        content="Apprenez, innovez et façonnez un avenir digital où chacun trouve sa place."
        imageSrc="\images\contact-banner.png"
        title="Formation - L'atelier de l'accessibilité numérique"
      />
      <section class="text-[#0B3168]">
        <p class="px-28">
          Inolib vous accompagne dans la création d'expériences numériques accessibles et conviviales pour tous,
          conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation, interactives et
          pratiques, sont conçues pour répondre aux besoins de tout public, tels que les managers, chefs de projet,
          développeurs, designers et webmasters.
        </p>
        <h2 class="px-28">Nos domaines d'expertise</h2>
        <h3 class="px-28">Nos formations couvrent les sujets clés de l'accessibilité numérique, notamment :</h3>
        <Article
          imageSrc="/images/actualitehome1.png"
          stylesArticleGaucheFlex="mb-8  bg-slate-100 shadow text-[#0B3168] rounded md:flex-row "
          stylesImage=" md:mr-[6rem] mt-[3rem]"
        >
          <span q:slot="check-box" class="mt-5 mx-5 flex flex-col md:ml-[5rem] md:mt-0">
            <ul class="flex flex-col md:mt-20 md:justify-around ">
              <li class="mb-[2.5rem] flex">
                <p class="ml-4 text-lg">● Les fondamentaux de l'accessibilité numérique</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <p class="ml-4 text-lg">● Les normes et réglementations en matière d'accessibilité numérique</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <p class="ml-4">● Les techniques pour rendre un site web accessible</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <p class="ml-4">● Les outils pour tester l'accessibilité d'un site web</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <p class="ml-4">● L'accessibilité des applications mobiles</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <p class="ml-4">
                  ● L'accessibilité pour les personnes en situation de handicap visuel, auditif, moteur et cognitif
                </p>
              </li>
            </ul>
          </span>
        </Article>
        <h2>Chiffres clés sur l'accessibilité numérique</h2>
        <p>
          Entre 15 et 20% de la population mondiale est concernée par un handicap. En France, le dernier rapport du
          gouvernement publié en 2023 indique que 19% de la population est concernée. Cela inclut les handicaps visuels
          (cécité, malvoyance), moteurs (problèmes de dextérité avec une souris), auditifs (surdité, malentendance) et
          mentaux (dyslexie).
        </p>
        <h2>Formations et sensibilisation adaptées à vos besoins</h2>
        <p>
          Nos formations et séances de sensibilisation sont disponibles en présentiel ou en ligne, pour répondre aux
          besoins de tous nos clients. Nous proposons également des formations sur mesure pour répondre aux besoins
          spécifiques de chaque entreprise.
        </p>
        <h2>Pourquoi choisir Inolib Formations</h2>
        <Article
          imageSrc="/images/conseilservice.png"
          stylesArticleGaucheFlex="mb-8  bg-slate-100 text-[#0B3168] shadow rounded md:flex-row-reverse "
          stylesImage="ml-[5rem] mr-[3rem] mt-[3rem]"
        >
          <span q:slot="check-box" class="mx-5 mt-10 flex justify-around md:mx-[8rem] ">
            <ul class="mt-10 flex flex-col md:mt-0">
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img class="mr-[2.5rem]" src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">Des formateurs experts en accessibilité numérique</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img class="mr-[2.5rem]" src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">Des formations et sensibilisation adaptées à tous les niveaux</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img class="mr-[2.5rem]" src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">Des formations disponibles en présentiel ou en ligne</p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img class="mr-[2.5rem]" src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">
                  Des formations sur mesure pour répondre aux besoins spécifiques de chaque entreprise
                </p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img class="mr-[2.5rem]" src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">Des tarifs compétitifs</p>
              </li>
            </ul>
          </span>
        </Article>
        <h2>Contactez-nous dès aujourd'hui</h2>
        <p>
          Discutez de vos besoins en matière de formation et sensibilisation à l'accessibilité numérique avec l'un de
          nos experts. Profitez d'une{" "}
          <a href="/contact" class="underline underline-offset-1 text-blue-500 visited:text-purple-600">
            première consultation offerte
          </a>{" "}
          et laissez- nous vous aider à vous mettre en conformité avec les normes RGAA et WCAG.
        </p>
        <p>
          Ensemble, faisons de léaccessibilité numérique une priorité et un atout pour votre entreprise avec Inolib
          Formations.
        </p>
        <p>
          Prêt à aller plus loin ? Explorez nos services{" "}
          <a href="/audit" class="underline underline-offset-1 text-blue-500 visited:text-purple-600">
            d'audit
          </a>{" "}
          en accessibilité numérique et nos solutions de{" "}
          <a href="/developpement" class="underline underline-offset-1 text-blue-500 visited:text-purple-600">
            {" "}
            développement{" "}
          </a>{" "}
          pour sites web, applications mobiles et logiciels sur-mesure (hyperliens vers les pages correspondantes).
          Faites de l'accessibilité numérique une priorité et un atout pour votre entreprise avec Inolib.
        </p>
      </section>
      <div class="my-10 flex w-full justify-center">
        <ButtonTopPage />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Inolib Formation | Accessibilité Numérique &amp; Sensibilisation | Formation RGAA & WCAG",
};
