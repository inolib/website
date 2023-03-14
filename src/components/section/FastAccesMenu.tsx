import { component$ } from "@builder.io/qwik";

export const FastAccessMenu = component$(() => {
  return (
    <nav aria-label="Accès rapide">
      <ul>
        <li>
          <a class="sr-only focus:not-sr-only focus:rounded-sm  focus:bg-[#0B3168] focus:text-white" href="#navbar">
            Barre de navigation pricipale
          </a>
        </li>
        <li>
          <a class="sr-only focus:not-sr-only focus:rounded-sm  focus:bg-[#0B3168] focus:text-white" href="#main">
            Contenu principal
          </a>
        </li>
        <li>
          <a class="sr-only focus:not-sr-only focus:rounded-sm  focus:bg-[#0B3168] focus:text-white" href="#footer">
            Bas de le page
          </a>
        </li>
      </ul>
    </nav>
  );
});
