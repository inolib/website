import { component$ } from "@builder.io/qwik";

export const ButtonTopPage = component$(() => {
  return (
    <a aria-label="lien vers le haut de la page" class="flex justify-center mb-[0.2rem] mt-[8rem]" href="#header">
      <img src="/images/icon-arrow-up.svg" alt="lien vers le haut de la page" />
    </a>
  );
});
