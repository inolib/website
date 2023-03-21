import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonBackLobby } from "~/components/ui/buttons/ButtonBackLobby";
import { BannerProfile } from "~/components/header/BannerProfile";
import { UserInformationForm } from "~/components/ui/composite/UserInformationForm";

export default component$(() => {
  return (
    <>
      <main class="text-[#0B3168]">
        <BannerProfile title="MY FAKE COMPAGNY" imageSrc="/images/userLogo.png" />
        <ButtonBackLobby />
        <span class="flex justify-center md:justify-start">
          <h2 class="text-3xl md:ml-[6rem] font-semibold">Mes informations</h2>
        </span>
        <UserInformationForm />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "information",
};
