import { component$ } from "@builder.io/qwik";

export const FastAccessMenu = component$(() => {
  return (
    <>
      <ul class="flex w-full px-3 items-center text-[#0B3168]">
        <li class="px-2">
          <a
            aria-label="aller au contenu et l'explorer"
            class="focus:bg-[#0B3168] focus:text-white hover:bg-[#0B3168] hover:text-white rounded-md p-1 m-1"
            href="#main"
          >
            Contenu principal
          </a>
        </li>
        <li class="px-2">
          <p class="focus:bg-[#0B3168] focus:text-white hover:bg-[#0B3168] hover:text-white rounded-md p-1 m-1">
            personnaliser la page
          </p>
        </li>
      </ul>
    </>
  );
});
