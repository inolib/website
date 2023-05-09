import { component$ } from "@builder.io/qwik";

import { ServicesHomeCard } from "~/components/cards/ServicesHomeCard";
import { Button } from "../ui/buttons/Button";

export const CardsRowDisplay = component$(() => {
  return (
    <>
      <span class="mt-10 ml-5 flex justify-start md:ml-[10rem]">
        <h2 class="text-2xl font-semibold text-[#0B3168] md:text-4xl">Nos services</h2>
      </span>
      <section class="flex flex-col justify-around md:my-[4rem] md:mx-[10rem] md:flex-row">
        <ServicesHomeCard label="Conseil/et/Audit" image="/images/logo-audit.png">
          <p q:slot="content" class="text-[#0B3168]">
            <dfn>Un audit en accessibilité numérique</dfn> évalue vos outils digitaux (sites web, logiciels,
            applications mobiles, documents, etc.) afin de garantir leur niveau d'accessibilité.
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Formation" image="/images/logo-formation.png">
          <p q:slot="content" class="text-[#0B3168]">
            Nos formations et sessions de sensibilisation, interactives et pratiques, sont conçues pour répondre aux
            besoins de tout public, tels que les managers, chefs de projet, développeurs, designers et webmasters.
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Développement" image="/images/logo-dev.png">
          <p q:slot="content" class="text-[#0B3168]">
            Chez Inolib, nous mettons en œuvre notre savoir-faire en développement web et mobile pour vous offrir des
            solutions sur mesure, centrées sur l'accessibilité et la qualité logicielle.
          </p>
        </ServicesHomeCard>
      </section>
    </>
  );
});
