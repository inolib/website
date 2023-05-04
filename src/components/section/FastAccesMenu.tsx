import { component$ } from "@builder.io/qwik";
import { AccessibilityMenu } from "../ui/composite/AccessibilityMenu";

export const FastAccessMenu = component$(() => {
  return (
    <>
      <div class="flex w-full px-3 items-center text-[#0B3168]">
        <div class="px-2">
          <a
            aria-label="aller au contenu et l'explorer"
            class="focus:bg-[#0B3168] focus:text-white hover:bg-[#0B3168] hover:text-white rounded-md p-1 m-1"
            href="#main"
          >
            Contenu principal
          </a>
        </div>
        <div>
          <AccessibilityMenu />
        </div>
      </div>
    </>
  );
});
