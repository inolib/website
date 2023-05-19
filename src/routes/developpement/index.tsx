import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Banner } from "~/components/header/Banner";
import { NewArticle } from "~/components/articles/NewArticle";
import { Button } from "~/components/ui/buttons/Button";

export default component$(() => {
  return (
    <>
  <header>
      <Banner
        content=" Vous cherchez une agence de développement web et mobile qui allie expertise, passion et engagement ? Découvrez Inolib Tech, votre partenaire agile pour des solutions digitales accessibles et performantes."
        imageSrc="\images\dev-raw.jpg"
        imageStyle="md:w-3/5 md:max-w-2xl"
        title="Développement"
      />
    </header>
      <h2 class="md:mt-[11.5rem] mt-8 ml-8 md:ml-[5rem] mb-10 text-3xl text-[#0B3168]">Développement</h2>

      <p class="text-lg md:mx-[8rem] mb-10 text-[#0B3168]">
        Chez Inolib, nous mettons tout notre cœur dans votre projet. Nous sommes convaincus que chaque projet mérite une
        expertise pointue et les dernières technologies en la matière. C'est pourquoi notre équipe d'experts est animée
        par une passion inébranlable pour leur métier, maîtrisant les frameworks les plus performants et modernes, ainsi
        que les Systèmes de Gestion de Contenu (SGC ou CMS en anglais).
      </p>
      <section class="text-[#0B3168]">
        <div class=" bg-slate-100 shadow rounded md:flex-row py-8">
          <ul class="md:grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-8 md:mt-20 md:mx-[8rem]">
            <li class="col-span-1 md:col-span-2 md:col-start-1 md:row-start-1">
              <p class="ml-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl">Chez Inolib,</strong> nous mettons en œuvre notre savoir-faire en développement
                web et mobile pour vous offrir des solutions sur mesure, centrées sur l'accessibilité et la qualité
                logicielle. Nous intégrons l'intelligence artificielle et les dernières technologies pour vous assurer
                une expérience utilisateur optimale, répondant aux besoins de vos clients et utilisateurs
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-1 md:row-start-2">
              <p class="ml-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl">Notre équipe d'experts</strong> Notre équipe d'experts vous accompagne tout au
                long de la vie de votre projet, de la conception à la mise en production et au déploiement. Nous prenons
                en charge l'identité visuelle, la conception UI/UX et la création de maquettes pour vos applications web
                et mobiles. Nous travaillons en mode agile pour vous offrir un développement flexible et respectueux de
                l'environnement (Green IT).
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-2 md:row-start-2">
              <p class="ml-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl">Nous réalisons des MVP</strong> Nous réalisons des MVP, des prototypes de sites
                web et d'applications mobiles adaptés à tous les secteurs : e-commerce, vitrines et autres. Nous
                respectons les règles Opquast et appliquons les processus de gestion ISO 9001 pour garantir la qualité
                de nos réalisations.
              </p>
            </li>
          </ul>
        </div>

        <NewArticle
          title="Ensemble, faisons de l'accessibilité numérique une réalité pour votre entreprise:"
          content="Nous réalisons des MVP, des prototypes de sites web et d'applications mobiles adaptés à tous les secteurs : e-commerce, vitrines et autres. Nous respectons les règles Opquast et appliquons les processus de gestion ISO 9001 pour garantir la qualité de nos réalisations. Vous avez un projet ambitieux ? N'attendez plus et contactez-nous dès aujourd'hui pour une première consultation gratuite ! Discutons ensemble de vos objectifs et découvrez comment Inolib peut vous aider à réussir dans le monde numérique."
          imageSrc="/images/dev-1-raw.jpg"
          style="md:mx-[8rem] md:py-8"
          styleArticle="flex flex-col md:pt-6 md:flex-row md:-py-[-10rem]"
          styleImage="shadow md:scale-100 h-auto max-w-full"
          styleTitle="md:mb-[3rem] md:mt-8 mx-5 my-7 text-3xl md:mb-[1rem] font-semibold"
          styleContent=" leading-20 md:text-base mt-[2rem] mr-[5rem]"
        ></NewArticle>
        <p class={`mx-5 md:mx-[20rem] leading-7`}>
          🔍 Pour aller encore plus loin, explorez nos services de <strong>formation</strong>, d'audit, de conseil et
          d'accompagnement personnalisé en matière d'accessibilité numérique. Ensemble, rendons vos outils numériques
          accessibles à tous !
        </p>
        <span class="flex justify-center mt-8 mb-2 md:mb-0">
          <Button
            href="/contact"
            color="blue"
            label="Demander un devis"
            styles="mt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300"
          />
        </span>

        <div class="my-10 flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Développement : Agence Agile de Développement Web & Mobile Accessibles",
};
