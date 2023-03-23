import { component$ } from "@builder.io/qwik";

type ButtonProps = {
  title: string;
};

export const ButtonBackLobby = component$((props: ButtonProps) => {
  return (
    <span class={`mt-5 mb-10 flex justify-start text-[#0B3168]`}>
      <span class="flex flex-col items-center md:ml-[6rem]">
        <span class={` flex justify-start`}>
          <a class="flex justify-start" aria-label="retour à l'accueil" href="/">
            <img class="mt-[0.8rem] mr-2 h-3" src="\images\left-arrow.png" alt="" />
            <p class={`mt-2 mb-6 font-medium`}>Retour à l'accueil</p>
          </a>
        </span>
        <span class="ml-10">
          <h2 class="text-3xl font-semibold">{props.title}</h2>
        </span>
      </span>
    </span>
  );
});
