import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header class="overflow-x-auto">
      <section class="bg-no-repeat md:bg-[length:100rem_36rem] bg-[url('/images/home-banner.png')] md:h-[37rem] md:mb-[-10rem]">
        <span class=" flex md:w-[85rem] md:h-[25rem] md:pt-[6rem]">
          <img class="mr-[-9rem] w-[35%] h-[35%]" alt="INOLIB" src="/images/logo-white.svg" />
          <h1 class="flex flex-col border-l font-bold text-white w-min h-[15rem] text-[300%] pl-10">
            HUMAN NOBLE TECHNOLOGY
          </h1>
        </span>
        <span class="md:ml-[35rem]">
          <Button color="white" href="/presentation" label="Découvrir" />
        </span>
      </section>
      <section class="flex justify-around md:mt-[10rem]">
        <img
          class="md:ml-[20rem] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"
          src="/images/logo-hup-violet.svg"
          alt=" hup"
        />
        <img class="md:w-[10rem] md:h-[10rem] w-[5rem] h-[5rem]" src="/images/logo-fidev-violet.svg" alt=" fidev" />
        <img
          class="md:mr-[20rem] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"
          src="/images/logo-apside-violet.svg"
          alt=" apside"
        />
      </section>
    </header>
  );
});
