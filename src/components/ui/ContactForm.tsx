import { component$ } from "@builder.io/qwik";

export const ContactForm = component$(() => {
  return (
    <form class="grid grid-cols-4 grid-rows-7 mx-[3rem] md:grid-rows-5 md:px-10 py-14 md:w-2/3">
      <select
        class="border-solid border-[1px] border-[#0B3168] flex h-12 mb-3 rounded-md col-span-5 md:col-span-2 col-start-1 col-end-5 md:col-end-3 row-start-1"
        name="Type de la demande"
        aria-label="type de votre demande"
        required
      >
        <option value="" disabled selected hidden>
          Type de la demande
        </option>
        <option>Audit</option>
        <option>Formation</option>
        <option>Développement</option>
      </select>

      <label class="col-span-4 col-start-1 flex flex-col  mb-3 row-start-2 md:col-end-3 md:mb-0 md:col-span-2 md:pr-5">
        Nom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:mb-0 md:h-12 rounded-md"
          required
          type="text"
          aria-label="entrez votre nom"
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 flex flex-col row-start-3 mb-3 md:col-span-2 md:mb-0 md:row-start-2 md:col-start-3  md:col-end-5 md:pl-5">
        Prénom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
          required
          type="text"
          aria-label="entrez votre prénom"
        />
      </label>
      <label class="col-start-1 col-end-5 flex flex-col col-span-4 row-start-4 md:col-end-3 md:col-span-2 md:row-start-3 md:pr-5">
        Mail
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 mb-3 md:mb-0 md:h-12 rounded-md"
          required
          type="email"
          aria-label="entrez votre e-mail"
        />
      </label>
      <label class="col-start-1 col-end-5 flex flex-col col-span-4 row-start-5 md:col-span-2 md:row-start-3 md:col-start-3 md:col-end-5 md:pl-5">
        Téléphone
        <input
          class="border-solid border-[1px] border-[#0B3168] mb-6 pl-2 rounded-md md:mb-0 md:h-12"
          required
          type="tel"
          aria-label="entrez votre numéro de téléphone"
        />
      </label>

      <textarea
        class="border-solid border-[1px] border-[#0B3168] col-span-4 col-start-1 col-end-5 mb-6 row-start-6 md:mb-0 md:pl-2 md:row-start-4"
        placeholder="Sujet de votre demande"
        required
        aria-label="zone pour écrire les détails de votre demande"
      ></textarea>
      <button
        class=" col-start-1 col-end-2 col-span-2 h-14 mr-2 rounded-md row-start-7 hover:border-2 hover:border-[#0B3168] md:col-start-3  md:col-end-4 md:row-start-5 md:mt-14"
        aria-label="Effacer le formulaire"
      >
        Effacer
      </button>
      <button
        class="col-start-3 col-end-5 col-span-2 bg-[#0B3168] h-14 rounded-md text-white row-start-7 md:row-start-5 md:col-start-4  md:col-end-4 md:mt-14"
        aria-label="Envoyer le formulaire"
      >
        Envoyer
      </button>
    </form>
  );
});
