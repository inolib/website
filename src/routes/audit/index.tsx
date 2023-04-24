import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import ArticleTemoignage1 from "~/components/articles/ArticleTemoignage1";
import ArticleTemoignage2 from "~/components/articles/ArticleTemoignage2";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <Banner
        title="Inolib : Audits d'accessibilité numérique, votre tremplin vers l'inclusion digitale"
        imageSrc="/images/banner-accessibilite.png"
      />

      <h1 class="pl-28">Audit</h1>
      <section class="text-[#0B3168]" aria-label="tous les services d'audits">
        <span q:slot="check-box" class="mx-5 mt-10 flex md:mx-[8rem] ">
          <ul class="mt-10 flex flex-col md:ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">Élargir votre audience en incluant tous les utilisateurs,</p>
            </li>
            <li class="mb-[2.5rem] flex">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">Améliorer l'expérience utilisateur pour tous,</p>
            </li>
            <li class="mb-[2.5rem] flex">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">Respecter les obligations en matière d'accessibilité numérique,</p>
            </li>
          </ul>
        </span>
        <p class="pl-28 md:mb-20">
          ...Inolib est VOTRE partenaire ! Découvrez notre service d'audit en accessibilité numérique pour une approche
          innovante et performante.
          <br />
          💡 Mais qu'est-ce qu'un audit en accessibilité numérique ?<br />
          C'est l'évaluation de vos outils digitaux (sites web, logiciels, applications mobiles, etc.) pour garantir
          leur accessibilité à tous, conformément aux normes RGAA, WCAG et RAAM.
        </p>
        <h2 class="pl-28 text-4xl md:mt-40">Nos offres d'audit irrésistibles :</h2>
        <span q:slot="check-box" class="mx-5 mt-10 flex md:mx-[8rem] ">
          <ul class="mt-4 flex flex-col ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                1. Audit Express : Un diagnostic précis pour identifier les faiblesses de l'accessibilité de vos outils
                digitaux et déterminer les axes d'amélioration (fonctionnels, techniques, graphiques et éditoriaux).
              </p>
            </li>
            <li class="mb-[2.5rem] flex">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                2. Audit Approfondi : Une analyse complète de vos supports numériques, avec un rapport détaillé et des
                recommandations sur-mesure pour être conforme aux normes d'accessibilité.
              </p>
            </li>
          </ul>
        </span>
        <p class="pl-28 md:mb-20">
          Chaque audit inclut 3 heures de coaching en accessibilité numérique pour sensibiliser et booster vos équipes.
        </p>
        <h2 class="pl-28 text-4xl md:mt-40">Le processus d'audit Inolib en 4 étapes clés :</h2>
        <span q:slot="check-box" class="mx-5 mt-4 flex md:mx-[8rem] ">
          <ul class="mt-10 flex flex-col md:ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                1. Co-construction : Sélection d'un échantillon représentatif en collaboration avec vous.
              </p>
            </li>
            <li class="mb-[2.5rem] flex">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                2. Investigation : Audit de conformité réalisé par nos experts, grâce à une grille de test exclusive.
              </p>
            </li>
            <li class="mb-[2.5rem] flex">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                3. Synthèse : Rédaction d'un rapport d'audit détaillé, incluant nos recommandations d'accessibilité..
              </p>
            </li>
            <li class="mb-[2.5rem] flex">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                4. Partage : Restitution des résultats pour vous offrir une vision globale et répondre à vos
                interrogations.
              </p>
            </li>
          </ul>
        </span>
        <h3 class="pl-28 md:mt-20 text-3xl">Services complémentaires pour passer à la vitesse supérieure :</h3>
        <span q:slot="check-box" class="mx-5 mt-4 flex md:mx-[8rem] ">
          <ul class="mt-10 flex flex-col md:ml-20">
            <li class="mb-[2.5rem] flex md:w-[40rem]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                1. Accompagnement : Intégration de nos conseils dans votre stratégie de développement.
              </p>
            </li>
            <li class="mb-[2.5rem] flex">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-2 font-normal">
                2. Coordination : Création et suivi des tickets d'anomalies dans votre outil de gestion de projets
                (Redmine, Jira, Trello, Asana, etc.) pour une conformité optimale.
              </p>
            </li>
          </ul>
        </span>
      </section>
      <section class="flex bg-gradient-to-b from-[#5A0C69] to-[#0F3069] px-28 py-4 md:py-0 text-white">
        <div class="flex justify-between items-center w-full">
          <strong>
            <h2 class="text-3xl">Témoignages clients</h2>
          </strong>
        </div>
        <img alt="" class="hidden md:block md:scale-50" src="..\images\background-team-bulles.svg" />
      </section>
      <section class="text-[#0B3168] pl-28">
        <ArticleTemoignage1 />
        <ArticleTemoignage2 />
        <h3 class="text-3xl my-5">💥 Passez à l'action :</h3>
        <p>
          Cliquez ici pour profiter d'une première consultation offerte et discuter de vos besoins en accessibilité
          numérique avec l'un de nos experts!
        </p>
        <p>Prêt à aller plus loin ? Explorez nos services d'accompagnement et de développements sur-mesure</p>
        <p>Faites de l'accessibilité numérique une priorité avec Inolib.</p>
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
