import { component$ } from "@builder.io/qwik";

export const UserInformationForm = component$(() => {
  return (
    <form class="grid grid-cols-4 grid-rows-7 mx-[3rem] md:grid-cols-9 md:grid-rows-4 py-14 text-[#0B3168]">
      <select
        class="border-solid border-[1px] border-[#0B3168] text-slate-500 flex h-12 rounded md:mt-5 mb-5 row-start-1 col-start-1 col-end-5 col-span-5 md:col-start-6 md:col-span-2  md:col-end-8 "
        name="Type de la demande"
        aria-label="type de votre demande"
        required
      >
        <option value="" disabled selected hidden>
          lorem ipsum
        </option>
        <option>lorem</option>
        <option>ipsum</option>
        <option>doloremt</option>
      </select>

      <label class=" col-span-4 row-start-2 col-start-1 col-end-5 flex flex-col mb-3 md:cold-start-3 md:col-end-5 md:col-span-2 md:row-start-1 md:mb-0">
        Nom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:mb-0 md:h-12 rounded-md"
          required
          type="text"
          aria-label="entrez votre nom"
        />
      </label>
      <label class="col-span-4 row-start-3 col-start-1 col-end-5 flex flex-col mb-3 md:col-span-2 md:mb-0 md:row-start-2 md:col-start-3  md:col-end-5">
        Prénom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
          required
          type="text"
          aria-label="entrez votre prénom"
        />
      </label>
      <label class="row-start-4 col-start-1 col-end-5 flex flex-col col-span-2 md:col-start-6  md:col-end-8 md:row-start-2">
        Téléphone
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 mb-3 md:mb-0 md:h-12 rounded-md"
          required
          type="tel"
          aria-label="entrez votre numéro de téléphone"
        />
      </label>

      <label class="row-start-5 col-start-1 col-end-5 flex flex-col col-span-2 md:row-start-3 md:col-start-3 md:col-end-5">
        Société
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 mb-6 md:mb-0 md:h-12 rounded-md"
          required
          type="text"
          aria-label="entrez le nom de votre société"
        />
      </label>
      <label class="row-start-6 col-start-1 col-end-5 flex flex-col col-span-2 md:row-start-3 md:col-start-6 md:col-end-8">
        E-mail
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 mb-6 md:mb-0 md:h-12 rounded-md"
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
