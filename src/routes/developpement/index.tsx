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
          content=" Vous cherchez une agence de développement web et mobile qui allie expertise, passion et engagement ? Découvrez INOLIB Tech, votre partenaire agile pour des solutions digitales accessibles et performantes."
          imageSrc="/images/dev-raw.jpg"
          imageStyle="md:w-3/5 md:max-w-2xl"
          title="Développement"
        />
      </header>

      <section class="text-[#0B3168]">
        <div class="bg-slate-100 shadow rounded md:flex-row py-8">
          <ul class="mx-5 md:grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-8 md:mt-20 md:mx-[8rem]">
            <li class="col-span-1 md:col-span-2 md:col-start-1 md:row-start-1">
              <p class=" text-lg mb-5 md:mb-0">
                <span class="font-bold">Chez INOLIB</span>, nous mettons en œuvre notre savoir-faire en développement
                web et mobile pour vous offrir des solutions sur mesure, centrées sur l'accessibilité et la qualité
                logicielle. Nous intégrons l'intelligence artificielle et les dernières technologies pour vous assurer
                une expérience utilisateur optimale, répondant aux besoins de vos clients et utilisateurs. Nous
                utilisons les frameworks les plus performants et modernes, ainsi que les Systèmes de Gestion de Contenu
                (SGC ou CMS en anglais).
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-1 md:row-start-2">
              <p class=" text-lg mb-5 md:mb-0">
                <span class="font-bold">Notre équipe d'experts</span> vous accompagne tout au long de la vie de votre
                projet, de la conception à la mise en production et au déploiement. Nous prenons en charge l'identité
                visuelle, la conception UI/UX et la création de maquettes pour vos applications web et mobiles. Nous
                travaillons en mode agile pour vous offrir un développement flexible et respectueux de l'environnement
                (Green IT).
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-2 md:row-start-2">
              <p class="md:ml-4 text-lg md:mx-0 mb-5 md:mb-0">
                <span class="font-bold">Nous réalisons des MVP</span>, des prototypes de sites web et d'applications
                mobiles adaptés à tous les secteurs : e-commerce, vitrines et autres. Nous respectons les règles Opquast
                et appliquons les processus de gestion ISO 9001 pour garantir la qualité de nos réalisations.
              </p>
            </li>
          </ul>
        </div>

        <div class="flex justify-center mt-8 mb-2 md:mb-0">
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
  title: "Développement: INOLIB Agence Agile de Développement Web & Mobile Accessibles",
};
