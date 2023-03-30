import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header class="overflow-x-auto">
      <section class="h-[44rem] bg-[url('/images/home-banner.png')] bg-no-repeat md:mb-[-10rem] md:h-[37rem] md:bg-[length:100rem_36rem]">
        <span class=" flex md:h-[25rem] md:w-[85rem] md:pt-[6rem]">
          <img
            class="mt-[6rem] ml-[2rem] mr-[-9rem] h-[23%] w-[23%] md:mt-4 md:mr-[-19rem] md:h-[35%] md:w-[35%]"
            alt="INOLIB"
            src="/images/logo-white.svg"
          />
          <h1 class="mt-[6rem] ml-[10rem] flex h-[9rem] w-min flex-col border-l pl-[1rem] text-[185%] font-semibold text-white md:mt-[0rem] md:ml-[10rem] md:h-[14rem] md:pl-10 md:text-[300%]">
            HUMAN NOBLE TECHNOLOGY
          </h1>
        </span>
        <span class={`my-[7rem] flex justify-center`}>
          <img class={`scale-[1.4] md:hidden`} src="/images/vector-23.svg" alt="aller au contenu principal" />
        </span>
        <span class="flex justify-center md:ml-[35rem] md:-mt-[16rem] md:block">
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
