import { component$ } from "@builder.io/qwik";

export const ActualPassword = component$(() => {
  return (
    <span class="mx-[3rem] flex flex-col items-center text-[#0B3168]">
      <h3 class="mb-3 md:font-semibold">mot de passe actuel</h3>
      <p class="flex h-8 w-full items-center justify-center border-[1px] border-solid border-[#0B3168] pl-2 md:h-12">
        **********
      </p>
    </span>
  );
});
