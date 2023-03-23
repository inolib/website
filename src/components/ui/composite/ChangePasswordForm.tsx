import { component$ } from "@builder.io/qwik";

export const ChangePasswordForm = component$(() => {
  return (
    <form class="grid-rows-7 mx-[3rem] grid grid-cols-4 text-[#0B3168] md:mb-[7rem] md:ml-[9rem] md:mr-[6rem] md:w-1/5 md:shadow-xl">
      <h3 class="text-l col-span-4 col-start-1 col-end-5 row-start-1 mb-5 flex flex-col font-semibold">
        Changer mon mot de passe
      </h3>
      <label class="col-span-4 col-start-1 col-end-5 row-start-2 mb-5 flex flex-col">
        Ancien mot de passe
        <div class="relative flex items-center">
          <img alt="" class="absolute right-2 h-8 w-auto" src="\images\hide-icon.png" />
          <input
            class="w-full rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="password"
            aria-label="Votre ancien mot de passe"
          />
        </div>
      </label>
      <label class="col-span-2 col-start-1 col-end-5 row-start-3 mb-7 flex flex-col">
        Nouveau mot de passe
        <div class=" relative flex items-center">
          <img alt="" class="absolute right-2 h-8 w-auto" src="\images\hide-icon.png" />
          <input
            class="w-full rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="password"
            aria-label="Entrez votre Nouveau mot de passe"
          />
        </div>
      </label>

      <button class="col-span-2 col-start-1 col-end-2 row-start-4 mr-2 h-14 rounded-md hover:border-2 hover:border-[#0B3168] md:col-end-3 ">
        Effacer
      </button>

      <button class="col-span-2 col-start-3 col-end-5 row-start-4 h-14 rounded-md bg-[#0B3168] text-white md:col-span-1 md:col-start-3 md:col-end-5">
        Envoyer
      </button>
    </form>
  );
});
