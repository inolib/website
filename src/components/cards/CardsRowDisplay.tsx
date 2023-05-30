import { component$ } from "@builder.io/qwik";

import { ServicesHomeCard } from "~/components/cards/ServicesHomeCard";

export const CardsRowDisplay = component$(() => {
  return (
    <>
      <div class="mt-10 ml-5 flex justify-start md:ml-[10rem]">
        <h2 class="text-2xl font-semibold text-[#0B3168] md:text-4xl">Nos services</h2>
      </div>
      <section class="flex flex-col justify-around md:my-[4rem] md:mx-[10rem] md:flex-row">
        <ServicesHomeCard label="Audit Conseil & Accompagnement" image="/images/auditv2-icon.svg">
          <p q:slot="content" class="text-[#0B3168] text-center">
            Bénéficiez d''audits d'accessibilité approfondis (RGAA, W3C, RAAM), de conseils personnalisés et d'un
            accompagnement sur-mesure pour élaborer votre schéma pluriannuel. Profitez de tests utilisateurs, manuels et
            automatisés pour une expérience utilisateur optimale.
            <br />
            <a href="/audit" class="underline underline-offset-1 text-blue-600 visited:text-purple-700 mt-4">
              [En savoir plus]
            </a>
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Formation en accessibilité numérique" image="/images/formation-icon.svg">
          <p q:slot="content" class="text-[#0B3168] text-center">
            Participez à des sessions de formation adaptées à votre secteur et à vos besoins, sensibilisez vos équipes
            aux enjeux de l'accessibilité et acquérez les compétences nécessaires pour améliorer vos supports digitaux.{" "}
            <br />
            <a href="/formation" class="underline underline-offset-1 text-blue-600 visited:text-purple-700 mt-4">
              [En savoir plus]
            </a>
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Développement web et mobile" image="/images/dev-icon.svg">
          <p q:slot="content" class="text-[#0B3168] text-center">
            Optez pour des sites web et applications conformes aux normes d'accessibilité, une expérience utilisateur
            optimisée pour tous et des solutions sur-mesure adaptées à vos besoins spécifiques. <br />
            <a href="/developpement" class="underline underline-offset-1 text-blue-600 visited:text-purple-700 mt-4">
              [En savoir plus]
            </a>
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Marketing digital" image="/images/digital-marketing.png" styles="md:pb-20 scale-[50%]">
          <p q:slot="content" class="text-[#0B3168] text-center">
            Misez sur une gestion des réseaux sociaux, une stratégie de contenu et une image de marque (Branding)
            inclusives, des campagnes publicitaires adaptées à tous les publics et une visibilité en ligne optimisée
            (SEO, Copywriting, Traduction et Design).
            <br />
            <a href="/marketing" class="underline underline-offset-1 text-blue-600 visited:text-purple-700 mt-4">
              [En savoir plus]
            </a>
          </p>
        </ServicesHomeCard>
      </section>
    </>
  );
});
