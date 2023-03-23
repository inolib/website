import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";
import { ServicesCard } from "~/components/cards/ServicesCard";

export const CardsGridDisplay = component$(() => {
  return (
    <>
      <span class="mt-6 flex flex-col md:mt-10 md:bg-slate-200" id="Formation">
        <h2 class="mt-6 px-5 text-4xl md:ml-[11rem] md:px-0 ">Formations</h2>
        <span class="flex flex-col md:flex-row">
          <img class="mt-6 h-auto w-full md:ml-[8rem] md:mt-10 md:h-[22rem] md:w-auto" src="/images/home4.png" alt="" />
          <p class="mt-10 px-5 text-justify md:ml-10 md:mr-[8rem]  md:px-0 md:text-left">
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
        <section class="bg-white md:mx-[8rem] md:mt-[10rem] md:pb-[8rem]">
          <h2 class="mx-5 mt-6 text-3xl md:mr-0 md:ml-[3rem] md:text-4xl ">Toutes nos formations</h2>
          <span class="md:grid-row-2 flex flex-col items-center md:grid md:grid-cols-2 md:gap-10 md:pt-[5rem] md:pl-[13rem]">
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
      <span class="block h-[3rem] md:h-[8rem] md:bg-slate-200"></span>
    </>
  );
});
