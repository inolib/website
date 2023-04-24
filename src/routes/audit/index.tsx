import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import ArticleTemoignage1 from "~/components/articles/ArticleTemoignage1";
import ArticleTemoignage2 from "~/components/articles/ArticleTemoignage2";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Button } from "~/components/ui/buttons/Button";

export default component$(() => {
  return (
    <>
      <Banner
        content="votre tremplin vers l'inclusion digitale"
        title="Audits d'accessibilité numérique"
        imageSrc="/images/banner-accessibilite.png"
      />

      <h1 class="px-28">Audit : titre a trouver</h1>
      <section class="text-[#0B3168]" aria-label="tous les services d'audits">
        <span class="mx-5 mt-10 flex md:mx-[8rem] ">
          <ul class="mt-10 flex flex-col md:ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem] items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>Élargir</strong> votre audience en incluant tous les utilisateurs,
              </p>
            </li>
            <li class="mb-[2.5rem] flex items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>Améliorer</strong> l'expérience utilisateur pour tous,
              </p>
            </li>
            <li class="mb-[2.5rem] flex items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>Respecter</strong> les obligations en matière d'accessibilité numérique,
              </p>
            </li>
          </ul>
        </span>
        <div class="px-28">
          <p>
            ...Inolib est VOTRE partenaire ! Découvrez notre service d'audit en accessibilité numérique pour une
            approche innovante et performante.
          </p>
          <p class="text-xl">Mais qu'est-ce qu'un audit en accessibilité numérique ?</p>
          <p>
            C'est l'évaluation de vos outils digitaux (sites web, logiciels, applications mobiles, etc.) pour garantir
            leur accessibilité à tous, conformément aux normes{" "}
            <a
              href="https://design.numerique.gouv.fr/accessibilite-numerique/rgaa/"
              aria-label="référentiel RGAA du gouvernement"
              class="underline underline-offset-1 text-blue-400 visited:text-purple-500"
            >
              RGAA
            </a>
            ,{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              class="underline underline-offset-1 text-blue-400 visited:text-purple-500"
            >
              WCAG
            </a>{" "}
            <a
              href="https://accessibilite.public.lu/fr/raam1/referentiel-technique.html"
              class="underline underline-offset-1 text-blue-400 visited:text-purple-500"
            >
              et RAAM.
            </a>
          </p>
        </div>
        <h2 class="md:px-28 text-4xl md:mt-32">Nos offres d'audit irrésistibles :</h2>
        <span class="mx-5 mt-10 flex md:mx-[8rem] ">
          <ul class="mt-4 flex flex-col ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem] items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2">
                <strong>1. Audit Express :</strong> Un diagnostic précis pour identifier les faiblesses de
                l'accessibilité de vos outils digitaux et déterminer les axes d'amélioration (fonctionnels, techniques,
                graphiques et éditoriaux).
              </p>
            </li>
            <li class="mb-[2.5rem] flex items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>2. Audit Approfondi :</strong> Une analyse complète de vos supports numériques, avec un rapport
                détaillé et des recommandations sur-mesure pour être conforme aux normes d'accessibilité.
              </p>
            </li>
          </ul>
        </span>
        <p class="md:px-28 md:mb-20">
          Chaque audit inclut 3 heures de coaching en accessibilité numérique pour sensibiliser et booster vos équipes.
        </p>
        <h2 class="md:pl-28 text-4xl md:mt-32">Le processus d'audit Inolib en 4 étapes clés :</h2>
        <span q:slot="check-box" class="mx-5 mt-4 flex md:mx-[8rem] ">
          <ul class="mt-10 flex flex-col md:ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem] items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>1. Co-construction :</strong> Sélection d'un échantillon représentatif en collaboration avec
                vous.
              </p>
            </li>
            <li class="mb-[2.5rem] flex items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>2. Investigation :</strong> Audit de conformité réalisé par nos experts, grâce à une grille de
                test exclusive.
              </p>
            </li>
            <li class="mb-[2.5rem] flex items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>3. Synthèse :</strong> Rédaction d'un rapport d'audit détaillé, incluant nos recommandations
                d'accessibilité..
              </p>
            </li>
            <li class="mb-[2.5rem] flex items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>4. Partage :</strong> Restitution des résultats pour vous offrir une vision globale et répondre
                à vos interrogations.
              </p>
            </li>
          </ul>
        </span>
        <h3 class="md:px-28 md:mt-12 text-3xl">Services complémentaires pour passer à la vitesse supérieure :</h3>
        <span q:slot="check-box" class="mx-5 my-4 flex md:mx-[8rem] ">
          <ul class="mt-10 flex flex-col md:ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem] items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>1. Accompagnement :</strong> Intégration de nos conseils dans votre stratégie de développement.
              </p>
            </li>
            <li class="mb-[2.5rem] flex items-center">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                <strong>2. Coordination :</strong> Création et suivi des tickets d'anomalies dans votre outil de gestion
                de projets (Redmine, Jira, Trello, Asana, etc.) pour une conformité optimale.
              </p>
            </li>
          </ul>
        </span>
      </section>
      <section class="flex bg-gradient-to-b from-[#5A0C69] to-[#0F3069] px-28 py-4 md:mb-2 text-white">
        <div class="flex justify-between items-center w-full">
          <strong>
            <h2 class="text-4xl">Témoignages clients</h2>
          </strong>
        </div>
        <img alt="" class="hidden md:block" src="..\images\background-team-bulles.svg" />
      </section>
      <section class="text-[#0B3168]">
        <ArticleTemoignage1 />
        <ArticleTemoignage2 />
        <section class="md:px-28">
          <h3 class="text-3xl my-0 md:mb-5">Passez à l'action ! :</h3>
          <p>
            Cliquez ici pour profiter d'une première consultation offerte et discuter de vos besoins en accessibilité
            numérique avec l'un de nos experts!
          </p>
          <p>Prêt à aller plus loin ? Explorez nos services d'accompagnement et de développements sur-mesure</p>
          <p>
            Faites de <strong>l'accessibilité numérique</strong> une priorité avec Inolib.
          </p>
        </section>

        <span class="flex justify-center">
          <img class="h-[14rem] w-[14rem]" src="/images/purple-logo.png" alt="" />
        </span>
        <span class="flex justify-center"></span>
        <span class="flex justify-center">
          <Button href="/services" color="blue" label="Demander un devis" styles="mt-[2rem]" />
        </span>
      </section>
      <div class="mb-[3rem]">
        <ButtonTopPage />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "audit",
};
