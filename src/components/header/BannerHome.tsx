import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header>
      <section class="bg-no-repeat bg-[length:100vw_75vh] bg-[url('/images/home-banner.png')] h-[120vh] mb-[-20vh]">
        <h1 class=" flex w-[85vw] h-[25rem] pt-[15vh]">
          <img class="mr-[-9vw] w-[35%] h-[35%]" alt="INOLIB" src="/images/logo-white.svg" />
          <span class="flex flex-col border-l font-bold text-white w-min h-[50vh] text-[300%] pl-10">
            HUMAN NOBLE TECHNOLOGY
          </span>
        </h1>
        <span class="ml-[35rem]">
          <Button color="white" href="/presentation" label="Découvrir" styles="" />
        </span>
        <section class="flex justify-around mt-[24vh]">
          <img class="ml-[25vw]" src="/images/logo-hup-violet.svg" alt="logo hup" />
          <img src="/images/logo-fidev-violet.svg" alt="logo hup" />
          <img class="mr-[25vw]" src="/images/logo-apside-violet.svg" alt="logo hup" />
        </section>
      </section>
    </header>
  );
});
