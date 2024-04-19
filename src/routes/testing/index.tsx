import { Slot, component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Banner } from "~/components/header/Banner";
import { Article } from "~/components/Article";
import { Button } from "~/components/ui/buttons/Button";

export default component$(() => {
  return (
    <>
      <Banner
        content="Visez l'excellence, subjuguez l'expérience, pour un numérique responsable et inclusif."
        imageStyle="md:w-3/5 md:max-w-xl md:mb-16"
        imageSrc="\images\testing-raw.jpg"
        title="Testing"
      />

      <section class="text-[#0B3168]">
        <Article
          imgSeparator=""
          stylesImage="shadow "
          stylesArticleGaucheFlex=" text-[#0B3168] rounded md:flex-row "
          imageSrc="/images/testing-article-1.jpeg"
          title=" Plongez au cœur de l'univers INOLIB :"
        >
          <div q:slot="check-box" class="mt-5 md:mx-5 flex flex-col md:ml-[5rem] md:mt-0 gap-6">
            <p class="md:ml-4 ml-2 text-lg leading-7">
              Chez INOLIB, tout tourne autour de vous, car notre passion est de rendre vos produits digitaux
              performants, <span class="font-bold">accessibles</span> et attrayants pour tous les utilisateurs.
              L'excellence et l'expérience sont les maîtres-mots pour créer un numérique responsable et inclusif.
            </p>

            <p class="md:ml-4 ml-2 text-lg leading-7">
              L'offre d'Inolib se distingue par sa complémentarité entre audit d'accessibilité et tests utilisateurs.
              L'audit d'accessibilité permet de se conformer au <span class="font-bold">référentiel RGAA</span>, tandis
              que les tests utilisateurs plongent au cœur des besoins et attentes des utilisateurs, en les mettant en
              situation réelle et en observant leurs réactions, performances et interactions dans un contexte prédéfini.
            </p>
          </div>
        </Article>
        <Article
          imgSeparator=""
          stylesImage="shadow "
          stylesArticleGaucheFlex="text-[#0B3168] rounded md:flex-row-reverse "
          imageSrc="/images/testing-article-2.jpeg"
          title=""
        >
          <div q:slot="check-box" class="mt-5 md:mx-5 flex flex-col md:ml-[5rem] md:mt-0">
            <p class="md:ml-4 ml-2 text-lg leading-7">
              Notre approche flexible nous permet de personnaliser nos tests en fonction de vos besoins. Nous pouvons
              cibler un groupe d'utilisateurs spécifique, comme les personnes en situation de handicap, ou un
              échantillon plus large avec des critères variés, tels que l'âge et la profession. L'offre d'INOLIB se
              distingue par sa complémentarité entre audit d'accessibilité et tests utilisateurs. L'audit
              d'accessibilité permet de se conformer au <strong>référentiel RGAA</strong>, tandis que les tests
              utilisateurs plongent au cœur des besoins et attentes des utilisateurs, en les mettant en situation réelle
              et en observant leurs réactions, performances et interactions dans un contexte prédéfini.
            </p>
          </div>
        </Article>

        <Article
          imgSeparator=""
          stylesImage="shadow md:ml-6"
          title="Notre gamme de tests prends en compte des aspects suivants :"
          content=""
          imageSrc="/images/testing-article-3.JPG"
          stylesArticleGaucheFlex="md:flex-row "
        >
          <div q:slot="check-box" class=" md:mx-5 flex flex-col md:ml-[5rem] md:mt-0">
            <ul class="flex flex-col md:justify-around">
              <li class="mb-[2.5rem] flex items-center">
                <p class="md:ml-4 ml-2 text-lg">
                  🔹Tests de régression : Vérification de l'absence d'impact négatif des nouvelles fonctionnalités sur
                  les fonctionnalités existantes.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="md:ml-4 ml-2 text-lg">
                  🔹Tests d'utilisabilité : Évaluation de la facilité d'utilisation de votre système ou application web
                  pour réaliser une tâche..
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="md:ml-4 ml-2 text-lg">
                  🔹Tests fonctionnels : Contrôle des fonctions de votre application à travers des basés sur les
                  exigences fonctionnelles.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="md:ml-4 ml-2 text-lg">
                  🔹Tests unitaires : Vérification du bon fonctionnement de chaque unité logicielle (le plus petit
                  composant testable d'une application).
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="md:ml-4 ml-2 text-lg">
                  🔹Tests d'intégration : Validation de la bonne interaction entre les composants ou fonctions de votre
                  logiciel.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="md:ml-4 ml-2 text-lg">
                  🔹Tests de réception : Contrôle global du système pour s'assurer qu'il fonctionne comme prévu.
                </p>
              </li>
              <li class="mb-[1rem] flex items-center">
                <p class="md:ml-4 ml-2 text-lg">
                  🔹Tests de performance : Évaluation de la réactivité et de la stabilité de votre application sous une
                  charge de travail spécifique.
                </p>
              </li>
            </ul>
          </div>
        </Article>

        <Article
          imgSeparator=""
          title="Nos méthodes :"
          stylesContent=" md:ml-[5rem] text-lg"
          stylesArticleGaucheFlex="md:flex-row-reverse md:justify-end leading-7"
          stylesArticleGauchePadding="md:pl-10 "
          content=""
          imageSrc="/images/testing-article-4.jpg"
          stylesImgArticle="md:pr-10"
        >
          <div q:slot="check-box" class="flex flex-col gap-6">
            <p>INOLIB s'articule autour de quatre étapes clés :</p>

            <ol class="flex flex-col md:justify-around gap-10">
              <li>
                1. Accueil et sélection des participants : Présentation des objectifs, consignes, profils des candidats
                et validation de leur maîtrise des aides techniques.
              </li>
              <li>
                2. Mise en situation : Tests basés sur des scénarios prédéfinis pour évaluer l'expérience d'usage de
                l'application ou du site.
              </li>
              <li>
                3. Retours d'expérience : Recueil des impressions des utilisateurs, identification des difficultés
                rencontrées, suggestions d'amélioration et évaluation des qualités ergonomiques.
              </li>
              <li>
                4. Synthèse et recommandations : Analyse des résultats pour proposer des axes d'amélioration en matière
                d'accessibilité et d'ergonomie.
              </li>
            </ol>
          </div>
        </Article>

        <section>
          <p class="text-lg leading-7 mx-[1rem] my-10 md:mx-[15rem] md:my-[2rem]">
            Notre objectif est d'améliorer l'expérience utilisateur, assurer la compatibilité multiplateforme, réduire
            les coûts de maintenance et optimiser la performance. Nous travaillons en étroite collaboration avec vous
            pour définir une stratégie de test adaptée à vos besoins, incluant un plan de test et une analyse de
            l'accessibilité numérique. Nous avons une approche inclusive qui prend en compte les besoins de tous les
            utilisateurs, y compris ceux en situation de handicap.
          </p>

          <p class="text-lg leading-7 mx-[1rem] my-10 md:mx-[15rem] md:my-[2rem]">
            Nous sommes engagés dans la création d'un numérique responsable et inclusif, et nous voulons faire la
            différence.
          </p>
        </section>

        <div class="flex justify-center mb-2 md:mb-0">
          <Button
            href="/contact"
            color="blue"
            label="Demander un devis"
            styles="mt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300"
          />
        </div>

        <div class="my-10 flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Testing | INOLIB ",
};
