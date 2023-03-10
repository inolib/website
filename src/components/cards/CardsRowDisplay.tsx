import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";
import { ServicesHomeCard } from "~/components/cards/ServicesHomeCard";
import { ServicesHomeCardBlank } from "~/components/cards/ServicesHomeCardBlank";

export const CardsRowDisplay = component$(() => {
  return (
    <>
      <span class="flex justify-start mt-10 ml-[10vw]">
        <h2 class="text-[#0B3168] font-semibold text-4xl">Nos services</h2>
      </span>
      <section class="flex  justify-around my-[4rem] mx-[10rem]">
        <ServicesHomeCard label="Conseil et Audit" image="/images/logo-audit.png" background="purple">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Formation" image="/images/logo-formation.png" background="purple">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Développement" image="/images/logo-dev.png" background="purple">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCardBlank
          styles="[10rem]"
          content="Découvrez tout nos services en détails ! Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </section>
    </>
  );
});
