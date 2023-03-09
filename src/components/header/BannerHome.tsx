import { component$ } from "@builder.io/qwik";

import { Button } from "~/ui/buttons/Button";

export const BannerHome = component$(() => {
  return (
    <header>
      <section class="bg-no-repeat bg-[length:100vw_75vh] bg-[url('/images/home-banner.png')] h-[120vh] mb-[-20vh]">
        <h1 class="relative flex w-[85vw] h-[57vh] pt-[15vh]">
          <img class="mr-[-9vw] w-[35%] h-[35%]" alt="INOLIB" src="/images/logo-white.svg" />
          <span class="flex flex-col border-l font-bold text-white w-min h-[50vh] text-[300%] pl-10">
            HUMAN NOBLE TECHNOLOGY
            <Button color="white" href="/presentation" label="Découvrir" />
          </span>
        </h1>
        <section class="flex justify-around mt-[24vh]">
          <img class="ml-[25vw]" src="/images/logo-hup-violet.svg" alt="logo hup" />
          <img src="/images/logo-fidev-violet.svg" alt="logo hup" />
          <img class="mr-[25vw]" src="/images/logo-apside-violet.svg" alt="logo hup" />
        </section>
      </section>
    </header>
  );
});
