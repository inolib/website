import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Banner } from "~/components/header/Banner";
import { NewArticle } from "~/components/articles/NewArticle";
import { Button } from "~/components/ui/buttons/Button";

export default component$(() => {
  return (
    <>
      <Banner
        content="  Vous rencontrez des défis en matière d'accessibilité numérique et souhaitez transformer ces enjeux en opportunités pour votre organisation ? Vous êtes au bon endroit ! Chez INOLIB, nous mettons l'accent sur VOS besoins et VOS objectifs pour vous offrir un accompagnement personnalisé et dynamique."
        imageSrc="/images/accompagnement-banner.JPG"
        imageStyle="md:w-3/5 md:max-w-xl"
        title="Accompagnement"
      />

      <section class="text-[#0B3168]  md:mx-[8rem] md:py-8">
        <NewArticle
          imageSrc=""
          title="Notre stratégie centrée sur vous:"
          styleTitle="mx-5 my-7 text-3xl md:mb-[1rem] md:mb-[2rem] font-semibold md:m-0"
        >
          <div
            q:slot="slot1"
            class="md:grid grid-cols-3 grid-rows-3 gap-y-5 gap-x-9 bg-slate-100 md:p-12 md:text-lg mb-6"
          >
            <img
              src="/images/dev.jpg"
              alt=""
              class="col-start-2 row-start-1 row-span-2 col-span-2 scale-75 rounded-lg"
            />
            <p class="col-start-1 row-start-1">
              🔹Écoute et compréhension de vos besoins : Nous commençons par évaluer l'accessibilité de vos supports
              numériques pour identifier vos points forts et axes d'amélioration.
            </p>
            <p class="col-start-1 row-start-2">
              🔹 Élaboration d'une stratégie d'accessibilité sur mesure : En adéquation avec vos objectifs, vos
              ressources internes, votre budget et les contraintes réglementaires, nous développons ensemble un plan
              d'action personnalisé.
            </p>
            <p class="col-start-1 row-start-3">
              🔹 Formation et sensibilisation de vos équipes : Nous offrons des sessions de formation sur les bonnes
              pratiques et outils d'accessibilité numérique pour que vos équipes soient impliquées et autonomes.
            </p>
            <p class="col-start-2 row-start-3">
              🔹 Mise en conformité et suivi des progrès : Nous vous accompagnons dans la mise en œuvre des
              recommandations, assurons un suivi régulier et garantissons que votre site web ou application respecte les
              normes d'accessibilité en vigueur.
            </p>
            <p class="col-start-3 row-start-3">
              🔹 Support continu pour une accessibilité numérique durable : Nos experts restent à votre disposition pour
              vous assister et vous conseiller dans le maintien d'une accessibilité numérique optimale et durable.
            </p>
          </div>
        </NewArticle>

        <NewArticle
          imageSrc=""
          title="Nos services adaptés à votre réalité :"
          styleTitle="mx-5 my-7 text-3xl md:mb-[1rem] md:mb-[2rem] font-semibold md:m-0"
        >
          <div
            q:slot="slot1"
            class="md:grid grid-cols-3 grid-rows-3 gap-y-5 gap-x-9 bg-slate-100 md:p-12 md:text-lg mb-6"
          >
            <img
              src="/images/dev-1.jpg"
              alt=""
              class="col-start-1 row-start-1 row-span-2 col-span-2 md:scale-75 md:rounded-lg"
            />
            <p class="col-start-3 row-start-1">
              🔹 Accompagnement stratégique : Sensibilisation aux enjeux de l'accessibilité, définition de votre
              politique d'accessibilité et analyse des cahiers des charges pour évaluer la prise en compte des critères
              de l'accessibilité.
            </p>
            <p class="col-start-3 row-start-2">
              🔹 Accompagnement en mode projet : Clarification des besoins, détermination du périmètre de
              l'accompagnement, aide à la rédaction des spécifications techniques et sélection des technologies
              adaptées.
            </p>
            <p class="col-start-3 row-start-3">
              🔹 Audit et recommandations : Audit des storyboards, maquettes graphiques (UI/UX), gabarits statiques
              (HTML, CSS, Javascript), support technique, rédaction de la déclaration d'accessibilité et conseils pour
              la rédaction du schéma pluriannuel d'accessibilité obligatoire.
            </p>
            <p class="col-start-2 row-start-3">
              🔹 Suivi et maintien de l'accessibilité : Contrôles réguliers, corrections techniques, graphiques et
              éditoriales en collaboration avec vos équipes techniques.
            </p>
            <p class="col-start-1 row-start-3">
              🔹 Formules d'accompagnement : Forfait temps pour les modifications nécessaires ou accompagnement au temps
              passé pour plus de flexibilité et d'adaptabilité dans votre projet d'accessibilité.
            </p>
          </div>
        </NewArticle>

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
  title: "Accompagnement | INOLIB",
};
