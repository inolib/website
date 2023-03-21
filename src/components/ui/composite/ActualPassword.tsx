import { component$ } from "@builder.io/qwik";

export const ActualPassword = component$(() => {
  return (
    <span class="flex flex-col items-center mx-[3rem]">
      <h3 class="mb-3 md:font-semibold">mot de passe actuel</h3>
      <p class="border-solid border-[1px] border-[#0B3168] flex justify-center items-center pl-2 w-full  md:h-12">
        **********
      </p>
    </span>
  );
});
