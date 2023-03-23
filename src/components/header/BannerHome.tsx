import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header class="overflow-x-auto">
      <section class="bg-no-repeat md:bg-[length:100rem_36rem] bg-[url('/images/home-banner.png')] md:h-[37rem] h-[44rem] md:mb-[-10rem]">
        <span class=" flex md:w-[85rem] md:h-[25rem] md:pt-[6rem]">
          <img
            class="h-[23%] mt-[6rem] ml-[2rem] mr-[-9rem] w-[23%] md:h-[35%] md:mt-4 md:mr-[-19rem] md:w-[35%]"
            alt="INOLIB"
            src="/images/logo-white.svg"
          />
          <h1 class="border-l flex flex-col font-semibold h-[9rem] mt-[6rem] ml-[10rem] pl-[1rem] text-white text-[185%] w-min md:h-[14rem] md:mt-[0rem] md:ml-[10rem] md:pl-10 md:text-[300%]">
            HUMAN NOBLE TECHNOLOGY
          </h1>
        </span>
        <span class={`flex justify-center my-[7rem]`}>
          <img class={`scale-[1.4] md:hidden`} src="/images/vector-23.svg" alt="aller au contenu principal" />
        </span>
        <span class="flex justify-center md:ml-[35rem] md:block md:-mt-[16rem]">
          <Button
            color="white"
            href="/presentation"
            label="Découvrir"
            styles="flex font-medium justify-center w-[20rem] md:block md:w-[10rem]"
          />
        </span>
      </section>
      <section class="flex justify-around md:mt-[8rem]">
        <img
          class="h-[5rem] w-[5rem] md:h-[10rem] md:ml-[20rem] md:w-[10rem]"
          src="/images/logo-hup-violet.svg"
          alt="hup"
        />
        <img class="md:w-[10rem] w-[5rem] h-[5rem] md:h-[10rem]" src="/images/logo-fidev-violet.svg" alt="fidev" />
        <img
          class="h-[5rem] w-[5rem] md:h-[10rem] md:mr-[20rem] md:w-[10rem]"
          src="/images/logo-apside-violet.svg"
          alt="apside"
        />
      </section>
    </header>
  );
});
