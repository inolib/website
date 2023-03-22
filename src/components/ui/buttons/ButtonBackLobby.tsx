import { component$ } from "@builder.io/qwik";

type ButtonProps = {
  title: string;
};

export const ButtonBackLobby = component$((props: ButtonProps) => {
  return (
    <span class={`flex justify-start text-[#0B3168] mt-5 mb-10 `}>
      <span class="flex items-center flex-col md:ml-[6rem]">
        <span class={` flex justify-start`}>
          <a class="flex justify-start" aria-label="lien vers le haut de la page" href="/">
            <img class="h-3 mt-[0.8rem] mr-2" src="\images\left-arrow.png" alt="lien vers le haut de l'acceuil" />
            <p class={`mt-2 mb-6 font-medium`}>Retour a l'acceuil</p>
          </a>
        </span>
        <span class="ml-10">
          <h2 class="text-3xl font-semibold">{props.title}</h2>
        </span>
      </span>
    </span>
  );
});
