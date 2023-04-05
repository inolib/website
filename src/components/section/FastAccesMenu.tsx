import { component$ } from "@builder.io/qwik";

export const FastAccessMenu = component$(() => {
  return (
    <nav aria-label="Menu d'accès rapide">
      <a class="sr-only focus:not-sr-only focus:rounded-sm  focus:bg-[#0B3168] focus:text-white" href="#main">
        Contenu principal
      </a>
    </nav>
  );
});
