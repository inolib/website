import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header>
      <section class="bg-no-repeat bg-[length:100rem_36rem] bg-[url('/images/home-banner.png')] h-[57rem] mb-[-10rem]">
        <h1 class=" flex w-[85vw] h-[25rem] pt-[6rem]">
          <img class="mr-[-9rem] w-[35%] h-[35%]" alt="INOLIB" src="/images/logo-white.svg" />
          <span class="flex flex-col border-l font-bold text-white w-min h-[15rem] text-[300%] pl-10">
            HUMAN NOBLE TECHNOLOGY
          </span>
        </h1>
        <span class="ml-[35rem]">
          <Button color="white" href="/presentation" label="Découvrir" />
        </span>
        <section class="flex justify-around mt-[12rem]">
          <img class="ml-[25rem]" src="/images/logo-hup-violet.svg" alt="logo hup" />
          <img src="/images/logo-fidev-violet.svg" alt="logo hup" />
          <img class="mr-[25rem]" src="/images/logo-apside-violet.svg" alt="logo hup" />
        </section>
      </section>
    </header>
  );
});
