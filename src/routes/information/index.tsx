import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonBackLobby } from "~/components/ui/buttons/ButtonBackLobby";
import { UserInformationForm } from "~/components/ui/composite/UserInformationForm";

export default component$(() => {
  return (
    <>
      <main class="text-[#0B3168]">
        <h2 class="text-2xl ">Mes informations</h2>
        <ButtonBackLobby />
        <UserInformationForm />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "information",
};
