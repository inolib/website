import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Filter } from "~/components/ui/composite/Filter";

export default component$(() => {
  return (
    <>
      <h1>Rejoingnez-nous !</h1>
      <form class="grid-rows-10 mx-[3rem] grid grid-cols-2 py-14 md:w-2/3 md:grid-rows-9 md:px-10">
        <Filter labels={{ button: "Civilité*", items: ["Madame", "Monsieur", "Autre"] }} />
        <label class="row-start-2 col-span-2 md:col-start-1 md:col-span-1">
          Nom* :
          <input type="text" required />
        </label>
        <label class="row-start-3 col-span-2 md:row-start-2 md:col-start-2 md:col-span-1">
          Prénom* :
          <input type="text" required />
        </label>
        <label class="row-start-4 col-span-2 md:row-start-3 md:col-start-1">
          E-mail* :
          <input type="email" required />
        </label>
        <label class="row-start-5 col-span-2 md:row-start-4 md:col-start-1 md:col-span-1">
          Téléphone* :
          <input type="tel" required />
        </label>
        <Filter labels={{ button: "Objet de votre demande", items: ["CDD", "CDI", "Alternance", "Stage"] }} />
        <label class="row-start-7 col-span-2 md:row-start-6 md:col-start-1">
          Message* :<textarea></textarea>
        </label>
        <label class="row-start-8 col-span-2 md:row-start-7 md:col-start-1">
          Lien Linkedin :
          <input type="text" />
        </label>
        <label class="row-start-9 col-span-2 md:row-start-8 md:col-start-1">
          Lien Github :
          <input type="text" />
        </label>
        <div class="flex row-start-10 col-span-2 md:row-start-9 md:col-start-1">
          <input type="checkbox" />
          <p class="ml-2">J'ai lu et accepte les conditions d'utilisations</p>
        </div>
      </form>
      <p>* champs obligatoire</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "rejoindre",
};
