import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-col items-center text-[#0B3168] my-14">
      <h1 class="mb-10 max-w-sm text-3xl font-semibold md:mb-5 md:text-3xl">Rejoignez-nous !</h1>
      <form class="grid-rows-11 mx-[3rem] grid grid-cols-2 py-14 md:w-2/3 md:grid-rows-9 md:px-10 border-[1px] border-solid border-[#0B3168]">
        <select
          class="row-start-1 col-span-1 md:col-start-1 md:col-span-1 h-12 rounded-md border-[1px] border-solid border-[#0B3168] m-2"
          aria-label="Renseignez-votre civilité"
          name="Renseignez votre civilité"
        >
          <option value="" disabled selected hidden>
            Choix de votre civilité*
          </option>
          <option value="Madame">Madame</option>
          <option value="Monsieur">Monsieur</option>
          <option value="Autres">Autres</option>
        </select>

        <label class="row-start-2 col-span-2 flex flex-col md:col-start-1 md:col-span-1 mx-2">
          Nom* :
          <input
            class="h-12 rounded-md border-[1px] border-solid border-[#0B3168] my-2"
            type="text"
            required
            maxLength={50}
            aria-label="Renseignez votre nom"
          />
        </label>
        <label class="row-start-3 col-span-2 flex flex-col md:row-start-2 md:col-start-2 md:col-span-1 mx-2">
          Prénom* :
          <input
            class="h-12 rounded-md border-[1px] border-solid border-[#0B3168] my-2"
            type="text"
            required
            maxLength={50}
            aria-label="Renseignez votre prénom"
          />
        </label>
        <label class="row-start-4 col-span-2 flex flex-col md:row-start-3 md:col-start-1 md:col-span-1 mx-2">
          E-mail* :
          <input
            class="h-12 rounded-md border-[1px] border-solid border-[#0B3168] my-2"
            type="email"
            required
            maxLength={50}
            aria-label="renseignez votre E-mail"
          />
        </label>
        <label class="row-start-5 col-span-2 flex flex-col md:row-start-3 md:col-start-2 md:col-span-1 mx-2">
          Téléphone* :
          <input
            class="h-12 rounded-md border-[1px] border-solid border-[#0B3168] my-2"
            type="tel"
            required
            maxLength={20}
            aria-label="renseignez votre numero de téléphone"
          />
        </label>

        <select
          class="h-12 rounded-md border-[1px] border-solid border-[#0B3168] m-2"
          aria-label="Objet de votre demande"
          name="Objet de votre demande"
        >
          <option value="" disabled selected hidden>
            Objet de votre demande
          </option>
          <option value="CDD">CDD</option>
          <option value="CDI">CDI</option>
          <option value="Stage">Stage</option>
          <option value="ALternance">Alternance</option>
        </select>

        <textarea
          class="row-start-7 col-start-1 col-span-2 md:row-start-4 h-12 rounded-md border-[1px] border-solid border-[#0B3168] m-2"
          placeholder="Sujet de votre demande"
          id="textarea"
          maxLength={1500}
          required
          aria-label="zone pour écrire les détails de votre demande"
        ></textarea>
        <label class="row-start-8 col-span-2 flex flex-col md:row-start-5 md:col-start-1 md:col-span-1 mx-2">
          Lien Linkedin :
          <input
            class="h-12 rounded-md border-[1px] border-solid border-[#0B3168] my-2"
            type="text"
            aria-label="Entrez votre URL LinkedIn"
            maxLength={50}
          />
        </label>
        <label class="row-start-9 col-span-2 flex flex-col md:row-start-5 md:col-start-2 md:col-span-1 mx-2">
          Lien Github :
          <input
            class="h-12 rounded-md border-[1px] border-solid border-[#0B3168] my-2"
            type="text"
            aria-label="Entrez votre URL Github"
            maxLength={50}
          />
        </label>
        <div class="flex row-start-10 col-span-2 md:row-start-6 md:col-start-1">
          <input class="m-2" type="checkbox" />
          <p class="ml-2">J'ai lu et accepte les conditions d'utilisations*</p>
        </div>
        <button
          class="row-start-11 col-start-1 col-span-1 md:row-start-7 h-14 rounded-md hover:border-2 hover:border-[#0B3168] m-2"
          type="reset"
          aria-label="Vider les champs du formulaires"
        >
          Effacer
        </button>
        <button
          class="row-start-11 col-start-2 col-span-1 md:row-start-7 h-14 rounded-md bg-[#0B3168] text-white m-2"
          aria-label="Valider le formulaire"
        >
          Envoyer
        </button>
      </form>
      <p class="mb-7 mt-4">* champs obligatoire</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Rejoindre | INOLIB",
};
