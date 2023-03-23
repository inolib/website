import { component$ } from "@builder.io/qwik";

export const ContactForm = component$(() => {
  return (
    <form class="grid-rows-7 mx-[3rem] grid grid-cols-4 py-14 md:w-2/3 md:grid-rows-5 md:px-10">
      <select
        class="col-span-5 col-start-1 col-end-5 row-start-1 mb-3 flex h-12 rounded-md border-[1px] border-solid border-[#0B3168] md:col-span-2 md:col-end-3 md:pr-5"
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

      <label class="col-span-4 col-start-1 row-start-2 mb-3  flex flex-col md:col-span-2 md:col-end-3 md:mb-0 md:pr-5">
        Nom
        <input
          class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
          required
          type="text"
          aria-label="entrez votre nom"
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 row-start-3 mb-3 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-2  md:mb-0 md:pl-5">
        Prénom
        <input
          class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
          required
          type="text"
          aria-label="entrez votre prénom"
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 row-start-4 flex flex-col md:col-span-2 md:col-end-3 md:row-start-3 md:pr-5">
        Mail
        <input
          class="mb-3 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
          required
          type="email"
          aria-label="entrez votre e-mail"
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 row-start-5 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-3 md:pl-5">
        Téléphone
        <input
          class="mb-6 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
          required
          type="tel"
          aria-label="entrez votre numéro de téléphone"
        />
      </label>

      <textarea
        class="col-span-4 col-start-1 col-end-5 row-start-6 mb-6 border-[1px] border-solid border-[#0B3168] md:row-start-4 md:mb-0 md:pl-2"
        placeholder="Sujet de votre demande"
        required
        aria-label="zone pour écrire les détails de votre demande"
      ></textarea>
      <button
        class=" col-span-2 col-start-1 col-end-2 row-start-7 mr-2 h-14 rounded-md hover:border-2 hover:border-[#0B3168] md:col-start-3  md:col-end-4 md:row-start-5 md:mt-14"
        aria-label="Effacer le formulaire"
      >
        Effacer
      </button>
      <button
        class="col-span-2 col-start-3 col-end-5 row-start-7 h-14 rounded-md bg-[#0B3168] text-white md:col-start-4 md:col-end-4  md:row-start-5 md:mt-14"
        aria-label="Envoyer le formulaire"
      >
        Envoyer
      </button>
    </form>
  );
});
