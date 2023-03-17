import { component$ } from "@builder.io/qwik";

import { ServicesHomeCard } from "~/components/cards/ServicesHomeCard";
import { ServicesHomeCardBlank } from "~/components/cards/ServicesHomeCardBlank";
import { Button } from "../ui/buttons/Button";

export const CardsRowDisplay = component$(() => {
  return (
    <>
      <span class="flex justify-start mt-10 ml-5 md:ml-[10rem]">
        <h2 class="text-[#0B3168] font-semibold text-2xl md:text-4xl">Nos services</h2>
      </span>
      <section class="flex md:flex-row flex-col justify-around md:my-[4rem] md:mx-[10rem]">
        <ServicesHomeCard label="Conseil/et/Audit" image="/images/logo-audit.png">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Formation" image="/images/logo-formation.png">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Développement" image="/images/logo-dev.png">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>

        <ServicesHomeCardBlank
          styles="my-[10rem]"
          content="Découvrez tout nos services en détails ! Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          <Button q:slot="button" color="blue" href="/services" label="En savoir plus" styles="hidden md:block" />
        </ServicesHomeCardBlank>
        <span class={`flex justify-center mt-[2rem]`}>
          <Button color="blue" href="/services" label="Tous nos services" styles="md:hidden flex justify-center" />
        </span>
      </section>
    </>
  );
});
