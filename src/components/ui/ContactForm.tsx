import { component$ } from "@builder.io/qwik";

export const ContactForm = component$(() => {
  return (
    <form class="flex md:grid md:grid-cols-4 md:grid-rows-5 md:px-10 py-14 md:w-2/3">
      <select
        class="border-solid border-[1px] border-[#0B3168] flex h-12 rounded-md md:col-span-1 md:col-start-1 md:col-end-3 md:row-start-1"
        name="Type de la demande"
        aria-label="type de votre demande"
      >
        <option value="" disabled selected hidden>
          Type de la demande
        </option>
        <option>Audit</option>
        <option>Formation</option>
        <option>Développement</option>
      </select>

      <label class="md:col-span-1 md:row-start-2 md:col-start-1  md:col-end-3 md:flex md:flex-col md:pr-5">
        Nom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
          placeholder="Nom"
          type="text"
          aria-label="entrez votre nom"
        />
      </label>
      <label class="md:col-span-2 md:row-start-2 md:col-start-3  md:col-end-5 md:flex md:flex-col md:pl-5">
        Prénom
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
          placeholder="Prénom"
          type="text"
          aria-label="entrez votre prénom"
        />
      </label>
      <label class="md:col-span-1 md:row-start-3 md:col-start-1  md:col-end-3 md:flex md:flex-col md:pr-5">
        Mail
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
          placeholder="Mail"
          type="email"
          aria-label="entrez votre e-mail"
        />
      </label>
      <label class="md:col-span-2 md:row-start-3 md:col-start-3  md:col-end-5 md:flex md:flex-col md:pl-5">
        Téléphone
        <input
          class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
          placeholder="Téléphone"
          type="tel"
          aria-label="entrez votre numéro de téléphone"
        />
      </label>

      <textarea
        class="border-solid border-[1px] border-[#0B3168] md:col-span-4 pl-2 md:row-start-4 md:col-start-1  md:col-end-5"
        placeholder="Votre texte"
        aria-label="zone pour écrire les détails de votre demande"
      ></textarea>
      <button class="h-14 mr-2 rounded-md hover:border-2 hover:border-[#0B3168] md:col-span-1 md:row-start-5 md:col-start-3  md:col-end-4 md:mt-14">
        Effacer
      </button>
      <button class="bg-[#0B3168] h-14 rounded-md text-white md:col-span-1 md:row-start-5 md:col-start-4  md:col-end-4 md:mt-14">
        Envoyer
      </button>
    </form>
  );
});
