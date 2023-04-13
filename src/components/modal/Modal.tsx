import { $, component$, useContext } from "@builder.io/qwik";
import { contextId } from "../ui/composite/UserInformationForm";

export const Modal = component$(() => {
  const context = useContext(contextId);

  const closeModal$ = $(() => {
    context.Modal.modal.attributes.hidden = true;
  });

  return (
    <div class="bg-white w-full border-[#0B3168] border-2 rounded-md flex flex-col items-center justify-around h-[10rem] md:h-[20rem]">
      <p>Êtes-vous sûr de vouloir supprimer votre compte?</p>
      <div class="flex">
        <button
          type="button"
          class="mr-2 h-14 p-4 rounded-md hover:scale-[105%] bg-[#0B3168] text-white md:col-span-1 md:col-start-9 md:col-end-10 md:row-start-4 md:mt-14"
        >
          Fermer
        </button>
        <button
          type="button"
          class="h-14 p-2 rounded-md hover:scale-[105%] bg-red-600 text-white md:col-span-1 md:col-start-9 md:col-end-10 md:row-start-4 md:mt-14"
          onClick$={closeModal$}
        >
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
});
