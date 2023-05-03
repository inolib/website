import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import ArticleTemoignage1 from "~/components/articles/ArticleTemoignage1";
import ArticleTemoignage2 from "~/components/articles/ArticleTemoignage2";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Button } from "~/components/ui/buttons/Button";
import { Article } from "~/components/Article";

export default component$(() => {
  return (
    <>
      <Banner
        content="votre tremplin vers l'inclusion digitale"
        title="Audits d'accessibilité numérique"
        imageSrc="/images/banner-accessibilite.png"
      />

      <h1 class="mt-[10rem] ml-[5rem] text-3xl text-[#0B3168]">
        Bienvenue chez votre partenaire en <strong>accessibilité</strong> !
      </h1>
      <section class="text-[#0B3168]" aria-label="tous les services d'audits">
        <Article
          imageSrc="/images/actualitehome1.png"
          stylesArticleGaucheFlex="mb-8  bg-slate-100 shadow text-[#0B3168] rounded md:flex-row "
          stylesImage=" md:mr-[6rem] mt-[3rem]"
        >
          <span q:slot="check-box" class="mt-5 mx-5 flex flex-col md:ml-[5rem] md:mt-0">
            <ul class="flex flex-col md:mt-20 md:justify-around ">
              <li class="mb-[2.5rem] flex items-center">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 text-lg">
                  <strong class="text-xl">Élargir</strong> votre audience en incluant tous les utilisateurs,
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 text-lg">
                  <strong class="text-xl">Améliorer</strong> l'expérience utilisateur pour tous,
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4">
                  <strong class="text-xl">Respecter</strong> les obligations en matière d'accessibilité numérique,
                </p>
              </li>
            </ul>
          </span>
        </Article>
        <div class="mx-5 md:px-28 mb-8">
          <p class="mb-2  text-2xl md:mb-6">
            <strong>Inolib</strong> est là pour vous accompagner !
          </p>
          <p class="text-xl mb-2 md:mb-0">Audit d'accessibilité numérique : de quoi s'agit-il ?</p>
          <p class="text-lg">
            Un audit en accessibilité numérique évalue vos outils digitaux (sites web, logiciels, applications mobiles,
            documents, etc.) afin de garantir leur niveau d'accessibilité. Nos audits suivent les référentiels
            techniques{" "}
            <a
              href="https://design.numerique.gouv.fr/accessibilite-numerique/rgaa/"
              aria-label="référentiel RGAA du gouvernement"
              class="underline underline-offset-1 text-blue-400 visited:text-purple-500"
            >
              RGAA
            </a>{" "}
            4.1.1 (référentiel pour l'amélioration de l'accessibilité), les normes internationales{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              class="underline underline-offset-1 text-blue-400 visited:text-purple-500"
              aria-label="référentiel WCAG"
            >
              WCAG
            </a>{" "}
            2.1 (Web Content Accessibility Guidelines) éditées par le W3C. Pour les applications mobiles, nous nous
            appuyons sur le référentiel{" "}
            <a
              href="https://accessibilite.public.lu/fr/raam1/referentiel-technique.html"
              class="underline underline-offset-1 text-blue-400 visited:text-purple-500"
              aria-label="référentiel RAAM"
            >
              et RAAM.
            </a>{" "}
            1 et la norme européenne EN 301-549. Nos offres d'audit sont disponibles en français et en anglais. ,{" "}
          </p>
        </div>
        <h2 class="mx-5 md:px-28 text-4xl md:mt-32">Nous proposons trois offres d'audit :</h2>
        <Article
          imageSrc="/images/conseilservice.png"
          stylesArticleGaucheFlex="mb-8  bg-slate-100 text-[#0B3168] shadow rounded md:flex-row-reverse "
          stylesImage="ml-[5rem] mr-[3rem] mt-[3rem]"
        >
          <span q:slot="check-box" class="mx-5 mt-10 flex justify-around md:mx-[8rem] ">
            <ul class="mt-10 flex flex-col md:mt-0">
              <li class="mb-[2.5rem] flex md:w-[40rem]">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">
                  <strong class="text-xl">1. Audit Express</strong> : Diagnostic précis pour cibler les points faibles
                  de l'accessibilité de vos outils digitaux et définir les pistes d'amélioration. Grille d'audit et
                  déclaration d'accessibilité incluses..
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">
                  <strong class="text-xl">2. Audit Approfondi</strong> : Une analyse complète de vos supports
                  numériques, avec un rapport détaillé incluant des recommandations (fonctionnelles, techniques,
                  graphiques et éditoriales), accompagné d'une déclaration légale d'accessibilité.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">
                  <strong class="text-xl">3. Audit de Contrôle</strong> : Suite à l'audit initial et aux corrections
                  apportées, l'audit de contrôle intervient pour valider la conformité aux normes d'accessibilité et
                  actualiser la déclaration légale.
                </p>
              </li>
            </ul>
          </span>
        </Article>
        <p class="mb-8 mx-5 md:px-28 md:mb-20 text-xl">
          <strong>Bonus</strong> ! Chez Inolib, chaque audit comprend trois heures de coaching en accessibilité
          numérique pour sensibiliser et booster vos équipes.
        </p>
        <h2 class="mx-5 md:px-28 text-4xl md:mt-32">Le processus d'audit Inolib en 4 étapes clés :</h2>

        <Article
          imageSrc="/images/actualitehome1.png"
          stylesArticleGaucheFlex="mb-8  bg-slate-100 text-[#0B3168] shadow rounded md:flex-row "
          stylesImage="ml-[5rem] mr-[3rem] mt-[3rem]"
        >
          <span q:slot="check-box" class="mx-5 mt-16 flex flex-col md:mx-0 md:mt-[3rem] md:flex-row-reverse">
            <ul class="flex flex-col md:pl-10">
              <li class="mb-[2.5rem] flex items-center">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 text-lg">
                  <strong class="text-xl">1. Co-construction</strong> : Sélection d'un échantillon représentatif en
                  collaboration avec vous.
                </p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 text-lg">
                  <strong class="text-xl">2. Investigation</strong> : Audit de conformité réalisé par nos experts, grâce
                  à une grille de test spécifique.
                </p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4">
                  <strong class="text-xl">3. Synthèse</strong> : Rédaction d'un rapport d'audit détaillé, incluant nos
                  recommandations d'accessibilité.
                </p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4">
                  <strong class="text-xl">4. Échange</strong> : Restitution des résultats pour vous offrir une vue
                  d'ensemble et répondre à vos questions.
                </p>
              </li>
            </ul>
          </span>
        </Article>
        <h3 class="mx-5 md:px-28 md:mt-12 text-3xl">Services complémentaires pour propulser votre projet :</h3>

        <Article
          imageSrc="/images/conseilservice.png"
          stylesArticleGaucheFlex="mb-8  bg-slate-100 text-[#0B3168] shadow rounded md:flex-row-reverse "
          stylesImage="ml-[5rem] mr-[3rem] mt-[3rem]"
        >
          <span q:slot="check-box" class="mx-5 mt-10 flex justify-around md:mx-[8rem] ">
            <ul class="mt-10 flex flex-col">
              <li class="mb-[2.5rem] flex md:w-[40rem]">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">
                  <strong class="text-xl">1. Accompagnement</strong> : Intégration de nos conseils dans votre stratégie
                  de développement et la mise en œuvre des corrections.
                </p>
              </li>
              <li class="mb-[2.5rem] flex">
                <div class={"hidden md:flex"}>
                  <img src="/images/checkservice.svg" alt="" />
                </div>
                <p class="ml-4 font-normal">
                  <strong class="text-xl">2. Coordination</strong> : Création et suivi des tickets d'anomalies dans
                  votre outil de gestion de projets (Redmine, Jira, Trello, Asana, etc.) pour une conformité optimale.
                </p>
              </li>
            </ul>
          </span>
        </Article>
      </section>
      <section class="flex bg-gradient-to-b from-[#5A0C69] to-[#0F3069] px-5 md:px-28 py-4 md:mb-2 text-white text-center md:text-left">
        <div class="flex justify-between items-center w-full">
          <strong>
            <h2 class="text-4xl">Témoignages clients</h2>
          </strong>
        </div>
        <img alt="" class="hidden md:block" src="..\images\background-team-bulles.svg" />
      </section>
      <section class="text-[#0B3168] mt-10 md:mt-0">
        <ArticleTemoignage1 />
        <ArticleTemoignage2 />
        <section class="mx-5 md:px-28">
          <h3 class="text-3xl mb-5">Passez à l'action ! :</h3>
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
        <span class="flex justify-center mb-2 md:mb-0">
          <Button href="/services" color="blue" label="Demander un devis" styles="mt-[2rem]" />
        </span>
      </section>
      <div class="my-10 flex w-full justify-center">
        <ButtonTopPage />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "audit",
};
