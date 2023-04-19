import { component$ } from "@builder.io/qwik";
import { ServicesCard } from "~/components/cards/ServicesCard";
import { Button } from "../buttons/Button";

export const Qcm = component$(() => {
  return (
    <>
      <ServicesCard
        image="/images/logo-formation.png"
        label="Description"
        title="QCM sur l'accessibilité numérique"
        styles="md:mx-[3rem]"
      >
        <p q:slot="content" class="text-[#0B3168]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
          modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem! Molestias,
          facilis?
        </p>
        <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
          <p class="border-r-2 px-5 ">Moyen</p>
          <p class="px-5">10 minutes</p>
        </span>
        <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
          <Button styles="" color="blue" href="/services" label="Jouer !" />
        </span>
      </ServicesCard>
      <ServicesCard
        image="/images/logo-formation.png"
        label="Description"
        title="QCM sur l'accessibilité numérique"
        styles="md:mx-[3rem]"
      >
        <p q:slot="content" class="text-[#0B3168]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
          modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem! Molestias,
          facilis?
        </p>
        <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
          <p class="border-r-2 px-5 ">Moyen</p>
          <p class="px-5">10 minutes</p>
        </span>
        <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
          <Button styles="" color="blue" href="/services" label="Jouer !" />
        </span>
      </ServicesCard>
      <ServicesCard
        image="/images/logo-formation.png"
        label="Description"
        title="QCM sur l'accessibilité numérique"
        styles="md:mx-[3rem]"
      >
        <p q:slot="content" class="text-[#0B3168]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
          modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem! Molestias,
          facilis?
        </p>
        <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
          <p class="border-r-2 px-5 ">Moyen</p>
          <p class="px-5">10 minutes</p>
        </span>
        <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
          <Button styles="" color="blue" href="/services" label="Jouer !" />
        </span>
      </ServicesCard>
      <ServicesCard
        image="/images/logo-formation.png"
        label="Description"
        title="QCM sur l'accessibilité numérique"
        styles="md:mx-[3rem]"
      >
        <p q:slot="content" class="text-[#0B3168]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
          modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem! Molestias,
          facilis?
        </p>
        <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
          <p class="border-r-2 px-5 ">Moyen</p>
          <p class="px-5">10 minutes</p>
        </span>
        <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
          <Button styles="" color="blue" href="/services" label="Jouer !" />
        </span>
      </ServicesCard>
      <ServicesCard
        image="/images/logo-formation.png"
        label="Description"
        title="QCM sur l'accessibilité numérique"
        styles="md:mx-[3rem]"
      >
        <p q:slot="content" class="text-[#0B3168]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
          modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem! Molestias,
          facilis?
        </p>
        <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
          <p class="border-r-2 px-5 ">Moyen</p>
          <p class="px-5">10 minutes</p>
        </span>
        <span q:slot="button" class="mt-[6rem] ml-[5rem] md:ml-[6rem] md:mt-[10rem]">
          <Button styles="" color="blue" href="/services" label="Jouer !" />
        </span>
      </ServicesCard>
    </>
  );
});
