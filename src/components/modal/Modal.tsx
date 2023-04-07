import { $, component$, useContext } from "@builder.io/qwik";
import { contextId } from "../ui/composite/UserInformationForm";

type ModalCloseFunction = () => void;

export const Modal = component$(() => {
  const context = useContext(contextId);

  const closeModal$ = $<ModalCloseFunction>(() => {
    context.Modal.modal.attributes.hidden = false;
  });

  return (
    <form>
      <p>Êtes-vous sûr de vouloir supprimer votre compte?</p>
      <button class="col-span-2 col-start-1 col-end-3 row-start-8 mr-2 h-14 rounded-md hover:border-2 bg-[#0B3168] text-white md:col-span-1 md:col-start-9 md:col-end-10 md:row-start-4 md:mt-14">
        Fermer
      </button>
      <button
        class="col-span-2 col-start-1 col-end-3 row-start-8 mr-2 h-14 rounded-md hover:border-2 bg-red-600 text-white md:col-span-1 md:col-start-9 md:col-end-10 md:row-start-4 md:mt-14"
        onClick$={closeModal$}
      >
        Supprimer mon compte
      </button>
    </form>
  );
});
