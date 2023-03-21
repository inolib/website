import { component$ } from "@builder.io/qwik";

export const ButtonBackLobby = component$(() => {
  return (
    <span class="flex h-10">
      <a
        aria-label="lien vers le haut de la page"
        class={`justify-center mb-[0.2rem] mt-6 md:mt-[8rem]`}
        href="#header"
      >
        <img class="h-10" src="\images\left-arrow.png" alt="lien vers le haut de l'acceuil" />
      </a>
      <p>Retour à l’accueil</p>
    </span>
  );
});
