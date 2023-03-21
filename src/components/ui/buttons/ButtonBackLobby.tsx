import { component$ } from "@builder.io/qwik";

export const ButtonBackLobby = component$(() => {
  return (
    <span class="flex items-center ml-[6rem] my-[1rem]">
      <a aria-label="lien vers le haut de la page" href="#">
        <img class="h-3 mr-2" src="\images\left-arrow.png" alt="lien vers le haut de l'acceuil" />
      </a>
      <p>Retour a l'acceuil</p>
    </span>
  );
});
