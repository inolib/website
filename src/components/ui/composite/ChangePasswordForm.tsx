import { component$ } from "@builder.io/qwik";

export const ChangePasswordForm = component$(() => {
  return (
    <form class="grid grid-cols-4 grid-rows-7 mx-[3rem] text-[#0B3168] md:shadow-xl md:mb-[7rem] md:w-1/5 md:ml-[9rem] md:mr-[6rem]">
      <h3 class="col-span-4 col-start-1 col-end-5 flex flex-col font-semibold mb-5 row-start-1 text-l">
        Changer mon mot de passe
      </h3>
      <label class="col-span-4 col-start-1 col-end-5 flex flex-col mb-5 row-start-2">
        Ancien mot de passe
        <div class="flex items-center relative">
          <img alt="" class="absolute right-2 h-8 w-auto" src="\images\hide-icon.png" />
          <input
            class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md w-full"
            required
            type="password"
            aria-label="Votre ancien mot de passe"
          />
        </div>
      </label>
      <label class="col-start-1 col-end-5 flex flex-col col-span-2 mb-7 row-start-3">
        Nouveau mot de passe
        <div class=" relative flex items-center">
          <img alt="" class="absolute right-2 h-8 w-auto" src="\images\hide-icon.png" />
          <input
            class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md w-full"
            required
            type="password"
            aria-label="Entrez votre Nouveau mot de passe"
          />
        </div>
      </label>

      <button class="col-start-1 col-end-2 col-span-2 h-14 hover:border-2 hover:border-[#0B3168] mr-2 row-start-4 rounded-md md:col-end-3 ">
        Effacer
      </button>

      <button class="bg-[#0B3168] h-14 rounded-md text-white row-start-4 col-start-3 col-end-5 col-span-2 md:col-span-1 md:col-start-3 md:col-end-5">
        Envoyer
      </button>
    </form>
  );
});
