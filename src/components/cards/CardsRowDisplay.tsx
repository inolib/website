import { component$ } from "@builder.io/qwik";

import { ServicesHomeCard } from "~/components/cards/ServicesHomeCard";
import { ServicesHomeCardBlank } from "~/components/cards/ServicesHomeCardBlank";
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

        <span class={`mt-[2rem] flex justify-center`}>
          <Button color="blue" href="/services" label="Tous nos services" styles="md:hidden flex justify-center" />
        </span>
      </section>
      <div class="mt-5 flex justify-center">
        <ServicesHomeCardBlank
          styles="my-[3rem]"
          content="Découvrez tout nos services en détails ! Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          <Button q:slot="button" color="blue" href="/services" label="En savoir plus" styles="hidden md:block" />
        </ServicesHomeCardBlank>
      </div>
    </>
  );
});
