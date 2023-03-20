import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header class="overflow-x-auto">
      <section class="bg-no-repeat md:bg-[length:100rem_36rem] bg-[url('/images/home-banner.png')] md:h-[37rem] h-[44rem] md:mb-[-10rem]">
        <span class=" flex md:w-[85rem] md:h-[25rem] md:pt-[6rem]">
          <img
            class="md:mr-[-19rem] mr-[-9rem] md:w-[35%] md:h-[35%] w-[23%] h-[23%] md:mt-4 mt-[6rem] ml-[2rem]"
            alt="INOLIB"
            src="/images/logo-white.svg"
          />
          <h1 class="flex flex-col border-l font-semibold text-white w-min h-[9rem] md:h-[14rem] text-[185%] md:text-[300%] mt-[6rem] pl-[1rem] ml-[10rem] md:mt-[0rem] md:ml-[10rem] md:pl-10">
            HUMAN NOBLE TECHNOLOGY
          </h1>
        </span>
        <span an class={`flex justify-center my-[7rem]`}>
          <img class={`scale-[1.4] md:hidden`} src="/images/vector-23.svg" alt="aller au contenu principal" />
        </span>
        <span class="md:ml-[35rem] md:block flex justify-center md:-mt-[16rem]">
          <Button
            color="white"
            href="/presentation"
            label="Découvrir"
            styles="md:block md:w-[10rem] w-[20rem] flex font-medium justify-center"
          />
        </span>
      </section>
      <section class="flex justify-around md:mt-[8rem]">
        <img
          class="md:ml-[20rem] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"
          src="/images/logo-hup-violet.svg"
          alt=" hup"
        />
        <img class="md:w-[10rem] md:h-[10rem] w-[5rem] h-[5rem]" src="/images/logo-fidev-violet.svg" alt="fidev" />
        <img
          class="md:mr-[20rem] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"
          src="/images/logo-apside-violet.svg"
          alt=" apside"
        />
      </section>
    </header>
  );
});
