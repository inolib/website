import { $, component$, useStore, useContextProvider, createContextId } from "@builder.io/qwik";
import { Modal } from "~/components/modal/Modal";

export type ModalContext = {
  Modal: ModalStore;
};

type ModalStore = {
  modal: {
    attributes: {
      hidden: boolean;
    };
  };
};

export const contextId = createContextId<ModalContext>("inolib/starter-app/contexts/composite");

export const UserInformationForm = component$(() => {
  const store = useStore<ModalStore>(
    {
      modal: {
        attributes: {
          hidden: true,
        },
      },
    },
    {
      deep: true,
    }
  );

  const deleteModal$ = $(() => {
    store.modal.attributes.hidden = !store.modal.attributes.hidden;
  });
  const context: ModalContext = {
    Modal: store,
  };

  useContextProvider(contextId, context);

  return (
    <div class="relative">
      <form class="mx-[3rem] grid grid-rows-10 grid-cols-4 py-14 text-[#0B3168] md:grid-cols-9 md:grid-rows-4">
        <select
          class="col-span-5 col-start-1 col-end-5 row-start-1 mb-5 flex h-12 rounded border-[1px] border-solid border-[#0B3168] text-slate-500 md:col-span-2 md:col-start-6 md:col-end-8  md:mt-5 "
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

        <label class=" md:col-start-3 col-span-4 col-start-1 col-end-5 row-start-2 mb-3 flex flex-col md:col-span-2 md:col-end-5 md:row-start-1 md:mb-0">
          Nom
          <input
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            required
            type="text"
            aria-label="entrez votre nom"
          />
        </label>
        <label class="col-span-4 col-start-1 col-end-5 row-start-3 mb-3 flex flex-col md:col-span-2 md:col-start-3  md:col-end-5 md:row-start-2 md:mb-0">
          Prénom
          <input
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="text"
            aria-label="entrez votre prénom"
          />
        </label>
        <label class="col-span-2 col-start-1 col-end-5 row-start-4 flex flex-col md:col-start-6  md:col-end-8 md:row-start-2">
          Téléphone
          <input
            class="mb-3 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            required
            type="tel"
            aria-label="entrez votre numéro de téléphone"
          />
        </label>

        <label class="col-span-2 col-start-1 col-end-5 row-start-5 flex flex-col md:col-start-3 md:col-end-5 md:row-start-3">
          Société
          <input
            class="mb-6 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            required
            type="text"
            aria-label="entrez le nom de votre société"
          />
        </label>
        <label class="col-span-2 col-start-1 col-end-5 row-start-6 flex flex-col md:col-start-6 md:col-end-8 md:row-start-3">
          E-mail
          <input
            class="mb-6 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            required
            type="email"
            aria-label="entrez votre email"
          />
        </label>

        <button class="col-span-2 col-start-1 col-end-3 row-start-7 mr-2 h-14 rounded-md hover:border-2 hover:border-[#0B3168] md:col-span-1 md:col-start-6 md:col-end-7  md:row-start-4 md:mt-14">
          Effacer
        </button>

        <button class="col-span-2 col-start-3 col-end-5 row-start-7 h-14 rounded-md bg-[#0B3168] text-white md:col-span-1 md:col-start-7 md:col-end-8  md:row-start-4 md:mt-14">
          Valider
        </button>
        <button
          onClick$={deleteModal$}
          class="col-span-2 col-start-3 col-end-5 row-start-9 mr-2 h-14 rounded-md hover:border-2 bg-red-600 text-white mt-4 md:col-span-1 md:col-start-9 md:col-end-10 md:row-start-4 md:mt-14"
        >
          Supprimer le compte
        </button>
      </form>
      <div
        {...store.modal.attributes}
        class="absolute z-20 top-1/4 right-[15%] left-[15%] md:right-1/4 md:left-1/4 bottom-1/4"
      >
        <Modal />
      </div>
    </div>
  );
});
