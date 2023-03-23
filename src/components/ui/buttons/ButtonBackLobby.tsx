import { component$ } from "@builder.io/qwik";

type ButtonProps = {
  title: string;
};

export const ButtonBackLobby = component$((props: ButtonProps) => {
  return (
    <span class={`flex justify-start mt-5 mb-10 text-[#0B3168]`}>
      <span class="flex items-center flex-col md:ml-[6rem]">
        <span class={` flex justify-start`}>
          <a class="flex justify-start" aria-label="retour à l'accueil" href="/">
            <img class="h-3 mt-[0.8rem] mr-2" src="\images\left-arrow.png" alt="lien vers le haut de l'accueil" />
            <p class={`font-medium mt-2 mb-6`}>Retour à l'accueil</p>
          </a>
        </span>
        <span class="ml-10">
          <h2 class="font-semibold text-3xl">{props.title}</h2>
        </span>
      </span>
    </span>
  );
});
