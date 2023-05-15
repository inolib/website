import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <Banner
        content="Rester à la pointe de l'accessibilité numérique et du digital"
        imageSrc="/images/banner-actualites.png"
        title="Actualités Inolib"
      />
      <section class="mt-[3rem] overflow-x-hidden md:mt-[10rem] text-[#0B3168] mx-5 md:mx-[8rem] md:text-l">
        <p>
          Découvrez les dernières tendances, <strong>innovations</strong> et actualités en{" "}
          <strong>accessibilité numérique</strong> et solutions digitales avec Inolib. Nos articles couvrent l'audit, le
          conseil, la formation, le développement web et mobile, et le marketing digital. Restez informé et à jour sur
          les enjeux et évolutions du secteur.
        </p>

        <h2 class=" text-3xl md:text-4xl text-[#0B3168] md:mb-[5rem] mt-8 md:mt-10 font-bold">
          Les dernières actualités en accessibilité numérique
        </h2>

        <span q:slot="check-box" class="md:mt-10 flex justify-around">
          <ul class="mt-10 flex flex-col md:mt-0">
            <li class="mb-[2.5rem] flex ">
              <p class="ml-4">
                1. <strong>Nouvelle régulation européenne</strong> sur l'accessibilité numérique : Inolib vous guide à
                travers les mises à jour de la régulation européenne et leurs impacts sur votre entreprise. Mettez-vous
                en conformité avec notre aide.
              </p>
            </li>
            <li class="mb-[2.5rem] flex ">
              <p class="ml-4">
                2. <strong>Technologies émergentes</strong> en accessibilité numérique : Explorez les innovations
                technologiques qui révolutionnent l'accès au web pour les personnes en situation de handicap. Saisissez
                les opportunités offertes par ces avancées.
              </p>
            </li>
            <li class="mb-[2.5rem] flex ">
              <p class="ml-4">
                3. <strong>Bonnes pratiques</strong> pour un site web accessible : Apprenez les astuces et conseils pour
                concevoir et optimiser l'accessibilité de votre site web. Inolib partage ses connaissances pour votre
                succès.
              </p>
            </li>
            <li class="mb-[2.5rem] flex ">
              <p class="ml-4">
                4. <strong>L'impact</strong> de l'accessibilité numérique sur le <strong>SEO</strong> : Découvrez
                comment un site accessible peut améliorer votre positionnement sur les moteurs de recherche et attirer
                plus de visiteurs. Inolib révèle les secrets d'un SEO optimisé.
              </p>
            </li>
            <li class="mb-[2.5rem] flex ">
              <p class="ml-4">
                5. <strong>Événements incontournables</strong> de l'accessibilité numérique : Ne manquez pas les
                conférences, ateliers et salons dédiés à l'accessibilité numérique en France et à l'international.
                Restez informé sur les événements à venir et rencontrez les acteurs du secteur.
              </p>
            </li>
            <li class="mb-[2.5rem] flex ">
              <p class="ml-4">
                6. <strong>Tendances et innovations digitales</strong> : Suivez les nouveautés du secteur digital et
                explorez les solutions émergentes pour renforcer la compétitivité de votre entreprise. Découvrez comment
                les solutions digitales émergentes peuvent impacter votre entreprise et vous aider à rester compétitif
                sur le marché.
              </p>
            </li>
          </ul>
        </span>

        <h3 class="text-2xl font-bold mt-2">Inolib, votre partenaire pour un avenir numérique accessible à tous</h3>
        <p class="mt-4">
          Nous nous engageons à vous fournir les informations les plus récentes et pertinentes en matière
          d'accessibilité numérique et digitale.
        </p>
        <p class="mt-4">
          Soyez informé en avant-première des dernières tendances digitales et des bonnes pratiques en matière
          d'accessibilité numérique. Inscrivez-vous dès maintenant à notre newsletter et bénéficiez d'offres exclusives,
          de conseils pratiques et d'astuces pour améliorer l'accessibilité de votre site web ou de votre application
          mobile.
        </p>
        <p class="mt-4">Besoin d'aide pour vos projets d'accessibilité numérique ?</p>
        <p class="mt-4">
          <a href="/contact" class="underline underline-offset-1 text-blue-500 visited:text-purple-600">
            Contactez-nous
          </a>{" "}
          pour en savoir plus sur nos services et comment nous pouvons vous aider à atteindre vos objectifs en matière
          d'accessibilité numérique. Profitez de notre première consultation offerte.
        </p>
        <p class="mb-4"></p>
      </section>
      <ButtonTopPage />
    </>
  );
});

export const head: DocumentHead = {
  title: "Actualités Inolib | Accessibilité Numérique et Solutions Digitales Tendances",
};
