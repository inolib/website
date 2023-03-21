import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ActualPassword } from "~/components/ui/composite/ActualPassword";
import { ButtonBackLobby } from "~/components/ui/buttons/ButtonBackLobby";
import { BannerProfile } from "~/components/header/BannerProfile";
import { ChangePasswordForm } from "~/components/ui/composite/ChangePasswordForm";

export default component$(() => {
  return (
    <>
      <main class="text-[#0B3168]">
        <BannerProfile title="MY FAKE COMPAGNY" imageSrc="/images/userLogo.png" />
        <ButtonBackLobby />
        <span class="flex justify-center md:justify-start">
          <h2 class="text-3xl md:ml-[6rem] font-semibold">Mot de passe</h2>
        </span>
        <div class="md:flex md:justify-center">
          <ActualPassword />
          <ChangePasswordForm />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "password",
};
