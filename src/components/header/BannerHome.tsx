import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header class="overflow-x-auto">
      <section class="h-[30rem] md:h-[44rem] bg-[url('/images/home-banner.png')] bg-cover bg-center bg-no-repeat">
        <span class=" flex items-center md:h-[25rem] pt-[4rem] md:ml-10">
          <img class="h-24 w-auto md:h-40" alt="" src="/images/logoinolibblancvf.png" />
          <h1 class="flex w-min flex-col border-l text-[185%] font-semibold text-white md:text-[300%] pl-[2rem]">
            HUMAN NOBLE TECHNOLOGY
          </h1>
        </span>
        <span class={`my-[7rem] flex justify-center`}>
          <img class={`scale-[1.4] md:hidden`} src="/images/vector-23.svg" alt="aller au contenu principal" />
        </span>
        <div class="hidden md:block">
          <span class="flex justify-center  md:-mt-[8rem]">
            <Button
              color="white"
              href="/presentation"
              label="Découvrir"
              styles="flex font-medium justify-center w-[20rem] md:block md:w-[10rem]"
            />
          </span>
        </div>
      </section>
      <section class="flex justify-around md:mt-[8rem]" aria-label="Nos partenaire">
        <img
          class="h-[5rem] w-[5rem] md:ml-[20rem] md:h-[10rem] md:w-[10rem]"
          src="/images/logo-hup-violet.svg"
          alt="hup"
        />
        <img class="h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem]" src="/images/logo-fidev-violet.svg" alt="fidev" />
        <img
          class="h-[5rem] w-[5rem] md:mr-[20rem] md:h-[10rem] md:w-[10rem]"
          src="/images/logo-apside-violet.svg"
          alt="apside"
        />
      </section>
    </header>
  );
});
