import { component$ } from "@builder.io/qwik";

export const UserInformationForm = component$(() => {
  return (
    <form class="grid grid-cols-4 grid-rows-7 mx-[3rem] md:grid-cols-9 md:grid-rows-4 py-14 text-[#0B3168]">
      <select
        class="border-solid border-[1px] border-[#0B3168] text-slate-500 flex h-12 rounded md:mt-5 mb-5 row-start-1 col-start-1 col-end-5 col-span-5 md:col-start-6 md:col-span-2  md:col-end-8 "
        name="Type de la demande"
        aria-label="Statut de votre entreprise"
        required
      >
        <option value="" disabled selected hidden>
          statut de votre entreprise
        </option>
        <option>SARL</option>
        <option>EURL</option>
        <option>SAS</option>
      </select>

      <label class=" col-span-4 col-start-1 col-end-5 flex flex-col mb-3 row-start-2 md:cold-start-3 md:col-end-5 md:col-span-2 md:row-start-1 md:mb-0">
        Nom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:mb-0 md:h-12 rounded-md"
          required
          type="text"
          aria-label="entrez votre nom"
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 flex flex-col row-start-3 mb-3 md:col-span-2 md:col-start-3  md:col-end-5 md:mb-0 md:row-start-2">
        Prénom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
          required
          type="text"
          aria-label="entrez votre prénom"
        />
      </label>
      <label class="col-start-1 col-end-5 col-span-2 flex flex-col row-start-4 md:col-start-6  md:col-end-8 md:row-start-2">
        Téléphone
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 mb-3 rounded-md md:mb-0 md:h-12"
          required
          type="tel"
          aria-label="entrez votre numéro de téléphone"
        />
      </label>

      <label class="col-start-1 col-end-5 col-span-2 flex flex-col row-start-5 md:col-start-3 md:col-end-5 md:row-start-3">
        Société
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 mb-6 rounded-md md:mb-0 md:h-12"
          required
          type="text"
          aria-label="entrez le nom de votre société"
        />
      </label>
      <label class="col-start-1 col-end-5 col-span-2 flex flex-col row-start-6 md:col-start-6 md:col-end-8 md:row-start-3">
        E-mail
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 mb-6 rounded-md md:mb-0 md:h-12"
          required
          type="email"
          aria-label="entrez votre email"
        />
      </label>

      <button class="h-14 mr-2 rounded-md hover:border-2 hover:border-[#0B3168] row-start-7 col-start-1 col-end-2 col-span-2 md:col-span-1 md:row-start-4 md:col-start-6  md:col-end-7 md:mt-14">
        Effacer
      </button>

      <button class="bg-[#0B3168] h-14 rounded-md text-white row-start-7 col-start-3 col-end-5 col-span-2 md:col-span-1 md:row-start-4 md:col-start-7  md:col-end-8 md:mt-14">
        Valider
      </button>
    </form>
  );
});
