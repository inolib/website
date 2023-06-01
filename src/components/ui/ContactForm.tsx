import { $, component$, useStore, useTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { GraphQLClient } from "graphql-request";

import { Toaster, type ToasterStore } from "./Toaster";

type ContactCategory = {
  id: string;
  name: string;
};

type FormStore = {
  count: number;
  isDisabled: boolean;
  categories: ContactCategory[];
  categoryId: string;
  companyName: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  message: string;
};

const API_URL = "https://api-inolib.vercel.app";

export const verifyInput = $((store: FormStore) => {
  if (
    store.lastName !== "" &&
    store.firstName !== "" &&
    store.message !== "" &&
    store.phone !== "" &&
    store.email !== "" &&
    store.companyName !== "" &&
    store.categoryId !== ""
  ) {
    store.isDisabled = false;
    console.log(
      "lastName :",
      store.lastName,
      "firstName :",
      store.firstName,
      "message :",
      store.message,
      "isDisabled :",
      store.isDisabled
    );
  } else {
    console.log(
      "lastName :",
      store.lastName,
      "firstName :",
      store.firstName,
      "message :",
      store.message,
      "isDisabled :",
      store.isDisabled
    );
    store.isDisabled = true;
  }
});

export const registerRequestQrl = server$(async (formStore: FormStore, toasterStore: ToasterStore) => {
  const client = new GraphQLClient(API_URL, { fetch });

  try {
    const result: { newContactRequest: { id: string } } = await client.request(
      /* GraphQL */ `
        mutation NewContactRequest(
          $categoryId: String!
          $companyName: String!
          $firstName: String!
          $lastName: String!
          $email: String!
          $phone: String!
          $message: String!
        ) {
          newContactRequest(
            categoryId: $categoryId
            companyName: $companyName
            firstName: $firstName
            lastName: $lastName
            email: $email
            phone: $phone
            message: $message
          ) {
            id
          }
        }
      `,
      {
        categoryId: formStore.categoryId,
        companyName: formStore.companyName,
        firstName: formStore.firstName,
        lastName: formStore.lastName,
        email: formStore.email,
        phone: formStore.phone,
        message: formStore.message,
      }
    );

    toasterStore.show = true;
    console.log("result:", result);
    console.log("after:", toasterStore.show);
  } catch (error) {
    console.error(error);
  }

  return { formStore, toasterStore };
});

export const ContactForm = component$(() => {
  const store = useStore<FormStore>(
    {
      count: 0,
      isDisabled: true,
      categories: [],
      categoryId: "",
      companyName: "",
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: "",
    },
    { deep: true }
  );

  const toasterStore = useStore<ToasterStore>(
    {
      animation: "toaster-in",
      show: false,
    },
    { deep: true }
  );

  const counter$ = $((event: Event) => {
    store.count = (event.target as HTMLTextAreaElement).value.length;
  });

  const resetCounter$ = $(() => {
    store.count = 0;
  });

  useTask$(async () => {
    const client = new GraphQLClient(API_URL, { fetch });

    const result = await client.request<{ contactCategories: ContactCategory[] }>(/* GraphQL */ `
      query GetContactCategories {
        contactCategories {
          id
          name
        }
      }
    `);

    store.categories = result.contactCategories;
  });

  return (
    <>
      <div class=" fixed inset-0 z-50 w-10 h-10 top-[5rem] left-[50vw] right-[50vw] bottom-10 flex items-center justify-center">
        <Toaster icon="success" store={toasterStore}>
          Votre demande a bien été enregistrée.
        </Toaster>
      </div>
      <form class="grid-rows-10 mx-[3rem] grid grid-cols-4 py-14 md:w-2/3 md:grid-rows-8 md:px-10">
        <fieldset class="flex flex-col md:flex-row md:justify-between col-span-4 col-start-1 col-end-5 row-start-1">
          <select
            onChange$={async (_, element) => {
              store.categoryId = element.value;
              await verifyInput(store);
            }}
            class="mb-3 flex h-12 rounded-md border-[1px] border-solid border-[#0B3168] md:mr-5 md:mb-3 md:w-1/2"
            name="Type de la demande"
            aria-label="type de votre demande"
            required
          >
            <option value="" disabled selected hidden>
              Type de la demande*
            </option>

            {store.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            class="mb-3 flex h-12 rounded-md border-[1px] border-solid border-[#0B3168] md:w-1/2 md:ml-5"
            name="Choix de votre civilité"
            aria-label="Choix de votre civilité"
            required
          >
            <option value="" disabled selected hidden>
              Choix de votre civilité*
            </option>
            <option>Monsieur</option>
            <option>Madame</option>
            <option>Autre</option>
          </select>
        </fieldset>
        <label class="col-span-4 col-start-1 col-end-5 row-start-3 mb-3 flex flex-col md:row-start-2  md:col-span-2 md:col-end-3 md:pr-5">
          Nom de l'entreprise
          <input
            onInput$={async (_, element) => {
              store.companyName = element.value;
              await verifyInput(store);
            }}
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            type="text"
            maxLength={50}
          />
        </label>

        <label class="col-span-4 col-start-1 row-start-4 mb-3  flex flex-col md:col-span-2 md:col-end-3 md:row-start-3 md:pr-5">
          Nom de famille*
          <input
            onInput$={async (_, element) => {
              store.lastName = element.value;
              await verifyInput(store);
            }}
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            required
            type="text"
            maxLength={50}
          />
        </label>
        <label class="col-span-4 col-start-1 col-end-5 row-start-5 mb-3 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-3 md:pl-5">
          Prénom*
          <input
            onInput$={async (_, element) => {
              store.firstName = element.value;
              await verifyInput(store);
            }}
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="text"
            maxLength={50}
          />
        </label>
        <label class="col-span-4 col-start-1 col-end-5 row-start-6 flex flex-col md:col-span-2 md:col-end-3 md:row-start-4 md:pr-5">
          Mail*
          <input
            onInput$={async (_, element) => {
              store.email = element.value;
              await verifyInput(store);
            }}
            class="mb-3 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="email"
            maxLength={50}
          />
        </label>
        <label class="col-span-4 col-start-1 col-end-5 row-start-7 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-4 md:pl-5">
          Téléphone*
          <input
            onInput$={async (_, element) => {
              store.phone = element.value;
              await verifyInput(store);
            }}
            class="mb-6 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="tel"
          />
        </label>
        <div class="col-span-2 col-start-1 flex ">
          <p class="italic text-xs">Caratères maximum : {store.count}/1000</p>
        </div>
        <textarea
          onInput$={async (event, element) => {
            store.message = element.value;

            await verifyInput(store);
            await counter$(event);
          }}
          placeholder="Sujet de votre demande"
          class="col-span-4 col-start-1 col-end-5 row-start-8 mb-6 border-[1px] border-solid border-[#0B3168] md:row-start-5 md:row-span-2 md:pl-2 md:mt-6"
          id="textarea"
          maxLength={1500}
          required
        ></textarea>
        <button
          onClick$={resetCounter$}
          type="reset"
          class=" col-span-2 col-start-1 col-end-2 row-start-9 mr-2 h-14 rounded-md hover:border-2 hover:border-[#0B3168] md:col-start-3  md:col-end-4 md:row-start-7 md:mt-14"
          aria-label="Effacer le formulaire"
        >
          Effacer
        </button>
        <button
          type="button"
          disabled={store.isDisabled}
          class="col-span-2 col-start-3 col-end-5 row-start-9 h-14 rounded-md bg-[#0B3168] text-white md:col-start-4 md:col-end-4  md:row-start-7 md:mt-14"
          aria-label="Envoyer le formulaire"
          onClick$={async () => {
            const { toasterStore: _toasterStore } = await registerRequestQrl(store, toasterStore);
            toasterStore.show = _toasterStore.show;
          }}
        >
          Envoyer
        </button>
      </form>
    </>
  );
});
