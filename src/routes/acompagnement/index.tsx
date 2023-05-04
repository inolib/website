import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Banner } from "~/components/header/Banner";
import { Article } from "~/components/Article";
import { Button } from "~/components/ui/buttons/Button";

export default component$(() => {
  return (
    <>
      <Banner
        content="  Vous rencontrez des défis en matière d'accessibilité numérique et souhaitez transformer ces enjeux en opportunités pour votre organisation ? Vous êtes au bon endroit ! Chez Inolib, nous mettons l'accent sur VOS besoins et VOS objectifs pour vous offrir un accompagnement personnalisé et dynamique."
        imageSrc="\images\temoignage-homme-header.png"
        title="Acompagnement"
      />

      <section class="text-[#0B3168]">
        <Article
          stylesTitle="md:mb-[2rem]"
          stylesImage=" md:mr-[4rem] shadow mt-[8rem]"
          stylesArticleGaucheFlex="mb-8 shadow bg-slate-100 text-[#0B3168] rounded md:flex-row "
          imageSrc="/images/photoArticle.png"
          title="Notre stratégie centrée sur vous :"
        >
          <span q:slot="check-box" class="flex flex-col md:ml-[5rem] md:mt-0">
            <ul class="flex flex-col md:mt-20 md:justify-around ">
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  1️⃣ Écoute et compréhension de vos besoins : Nous commençons par évaluer l'accessibilité de vos
                  supports numériques pour identifier vos points forts et axes d'amélioration.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  2️⃣ Élaboration d'une stratégie d'accessibilité sur mesure : En adéquation avec vos objectifs, vos
                  ressources internes, votre budget et les contraintes réglementaires, nous développons ensemble un plan
                  d'action personnalisé.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  3️⃣ Formation et sensibilisation de vos équipes : Nous offrons des sessions de formation sur les bonnes
                  pratiques et outils d'accessibilité numérique pour que vos équipes soient impliquées et autonomes.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  4️⃣ Mise en conformité et suivi des progrès : Nous vous accompagnons dans la mise en œuvre des
                  recommandations, assurons un suivi régulier et garantissons que votre site web ou application respecte
                  les normes d'accessibilité en vigueur.
                </p>
              </li>
              <li class="flex items-center">
                <p class="ml-4">
                  5️⃣ Support continu pour une accessibilité numérique durable : Nos experts restent à votre disposition
                  pour vous assister et vous conseiller dans le maintien d'une accessibilité numérique optimale et
                  durable.
                </p>
              </li>
            </ul>
          </span>
        </Article>

        <Article
          stylesTitle="md:mb-[2rem]"
          stylesImage=" ml-[4rem] shadow mt-[8rem]"
          stylesArticleGaucheFlex="mb-8 -py-[-10rem] shadow bg-slate-100 text-[#0B3168] rounded md:flex-row-reverse "
          imageSrc="/images/home4.png"
          title="Nos services adaptés à votre réalité :"
        >
          <span q:slot="check-box" class="mt-5 flex flex-col md:ml-[5rem] md:mt-0">
            <ul class="flex flex-col md:mt-20 md:justify-around ">
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  🔹 Accompagnement stratégique : Sensibilisation aux enjeux de l'accessibilité, définition de votre
                  politique d'accessibilité et analyse des cahiers des charges pour évaluer la prise en compte des
                  critères de l'accessibilité.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  🔹 Accompagnement en mode projet : Clarification des besoins, détermination du périmètre de
                  l'accompagnement, aide à la rédaction des spécifications techniques et sélection des technologies
                  adaptées.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  🔹 Audit et recommandations : Audit des storyboards, maquettes graphiques (UI/UX), gabarits statiques
                  (HTML, CSS, Javascript), support technique, rédaction de la déclaration d'accessibilité et conseils
                  pour la rédaction du schéma pluriannuel d'accessibilité obligatoire.
                </p>
              </li>
              <li class="mb-[2.5rem] flex items-center">
                <p class="ml-4">
                  🔹 Suivi et maintien de l'accessibilité : Contrôles réguliers, corrections techniques, graphiques et
                  éditoriales en collaboration avec vos équipes techniques.
                </p>
              </li>
              <li class="flex items-center">
                <p class="ml-4">
                  🔹 Formules d'accompagnement : Forfait temps pour les modifications nécessaires ou accompagnement au
                  temps passé pour plus de flexibilité et d'adaptabilité dans votre projet d'accessibilité.
                </p>
              </li>
            </ul>
          </span>
        </Article>
        <Article
          stylesContent="leading-7  mt-[2rem] mr-[5rem]"
          stylesImage="shadow"
          stylesTitle="md:mb-[5rem]"
          title="Passez à l'action et boostez votre accessibilité numérique :"
          content="Cliquez ici pour profiter d'une première consultation offerte et discuter de vos besoins en accessibilité numérique avec l'un de nos experts (hyperlien page contact). Ne manquez pas cette occasion de vous démarquer sur le marché et d'élargir votre audience.
          Ensemble, nous transformerons vos défis en matière d'accessibilité numérique en opportunités de croissance et de développement pour votre organisation. Contactez-nous dès aujourd'hui (hyperlien page de contact) et découvrez comment Inolib peut vous aider à atteindre vos objectifs stratégiques et renforcer votre gestion de projet en matière d'accessibilité "
          imageSrc="/images/homme-fauteuil.png"
          typoImgQuote="bold"
          stylesArticleGaucheFlex="md:flex-row md:-py-[-10rem]"
        ></Article>
        <p class={`mx-[20rem] leading-7`}>
          🔍 Prêt à aller plus loin ? Explorez nos services d'audit en <strong>accessibilité</strong> numérique et nos
          solutions de développement pour sites web, applications mobiles et logiciels sur-mesure (hyperliens vers les
          pages correspondantes) pour maximiser votre impact et votre performance en ligne. Faites de l'accessibilité
          numérique une priorité et un atout pour votre entreprise avec Inolib.
        </p>
        <span class="flex justify-center mt-8 mb-2 md:mb-0">
          <Button
            href="/services"
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
  title: "Acompagnement",
};
