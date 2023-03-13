import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";
import { ServicesCard } from "~/components/cards/ServicesCard";

export const CardsGridDisplay = component$(() => {
  return (
    <>
      <span class="flex flex-col mt-10 bg-slate-200">
        <h2 class="text-4xl ml-[8vw] mt-6">Formations</h2>
        <span class="flex">
          <img class="ml-[8vw] mt-10 w-[40vw] h-[50vh]" src="/images/home4.png" alt="" />
          <p class=" mt-[4.7vh] ml-10 max-w-[40vw]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ex temporibus officiis laborum
            repudiandae, aliquam consequatur eligendi tempore iusto illo illum at iste provident eaque eos! Nisi, iure
            vero? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus? Facere sit minima
            repudiandae iure exercitationem nemo quia, provident eos quod saepe deleniti eaque dolorum laboriosam
            dolores doloribus corporis? Quis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi
            velit quis? Commodi eum eius, fuga distinctio ab fugiat dolore vel, dolorem repudiandae sit ipsa laudantium
            reprehenderit dolor dignissimos tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nobis
            libero molestias corrupti similique, hic dicta illum quam enim! Dolorum aspernatur enim aut omnis minima,
            assumenda repellendus reiciendis ipsum et.
          </p>
        </span>
        <section class="bg-white mx-[8rem] mt-[10rem] pb-[8rem]">
          <h2 class="text-4xl ml-[4vw] mt-6">Toutes nos formations</h2>
          <span class="grid grid-cols-2 gap-10 grid-row-2 pt-[10vh] pl-[13vw]">
            <ServicesCard
              image="/images/logo-audit.png"
              label="Description"
              title="Accessibilité numérique en entreprise"
            >
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] font-medium">
                <p class="border-r-2 px-5 ">Débutant</p>
                <p class="px-5">2 jours</p>
                <p class="border-l-2 px-5">1500 €</p>
              </span>
              <span q:slot="button" class="mt-[6rem] ml-[4rem]">
                <Button styles="" color="blue" href="/services" label="En savoir plus" />
              </span>
            </ServicesCard>
            <ServicesCard image="/images/logo-dev.png" label="Description" title="Développement">
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] font-medium">
                <p class="border-r-2 px-5 ">Moyen</p>
                <p class="px-5">2 jours</p>
                <p class="border-l-2 px-5">1500 €</p>
              </span>
              <span q:slot="button" class="mt-[6rem] ml-[4rem]">
                <Button styles="" color="blue" href="/services" label="En savoir plus" />
              </span>
            </ServicesCard>
            <ServicesCard image="/images/logo-audit.png" label="Description" title="Nom de la formation">
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] font-medium">
                <p class="border-r-2 px-5 ">Moyen</p>
                <p class="px-5">2 jours</p>
                <p class="border-l-2 px-5">1500 €</p>
              </span>
              <span q:slot="button" class="mt-[6rem] ml-[4rem]">
                <Button styles="" color="blue" href="/services" label="En savoir plus" />
              </span>
            </ServicesCard>
            <ServicesCard image="/images/logo-formation.png" label="Description" title="Lorem ipsum dolor">
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] font-medium">
                <p class="border-r-2 px-5 ">Débutant</p>
                <p class="px-5">2 jours</p>
                <p class="border-l-2 px-5">1500 €</p>
              </span>
              <span q:slot="button" class="mt-[6rem] ml-[4rem]">
                <Button styles="" color="blue" href="/services" label="En savoir plus" />
              </span>
            </ServicesCard>
          </span>
        </section>
      </span>
      <span class="bg-slate-200 block h-[15vh]"></span>
    </>
  );
});
