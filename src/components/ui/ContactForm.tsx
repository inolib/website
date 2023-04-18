import { $, type Signal, component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

import { GraphQLClient } from "graphql-request";

type ContactCategory = {
  id: string;
  name: string;
};

type CounterStore = {
  count: number;
  categories: ContactCategory[];
  categoryId: Signal<string>;
  companyName: Signal<string>;
  lastName: Signal<string>;
  firstName: Signal<string>;
  email: Signal<string>;
  phone: Signal<string>;
  message: Signal<string>;
};

const API_URL = "https://api-inolib.vercel.app/api";

export const registerRequestQrl = server$(async (store: CounterStore) => {
  const client = new GraphQLClient(API_URL, { fetch });

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
      categoryId: store.categoryId.value,
      companyName: store.companyName.value,
      firstName: store.firstName.value,
      lastName: store.lastName.value,
      email: store.email.value,
      phone: store.phone.value,
      message: store.message.value,
    }
  );

  console.log("result:", result);
});

export const ContactForm = component$(() => {
  const _categoryId = useSignal<string>("");
  const _companyName = useSignal<string>("");
  const _email = useSignal<string>("");
  const _firstName = useSignal<string>("");
  const _lastName = useSignal<string>("");
  const _message = useSignal<string>("");
  const _phone = useSignal<string>("");

  const store = useStore<CounterStore>({
    count: 0,
    categories: [],
    categoryId: _categoryId,
    companyName: _companyName,
    email: _email,
    firstName: _firstName,
    lastName: _lastName,
    message: _message,
    phone: _phone,
  });

  const counter$ = $((event: Event) => {
    store.count = (event.target as HTMLTextAreaElement).value.length;
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
    <form class="grid-rows-10 mx-[3rem] grid grid-cols-4 py-14 md:w-2/3 md:grid-rows-8 md:px-10">
      <select
        bind:value={store.categoryId}
        class="col-span-5 col-start-1 col-end-5 row-start-1 mb-3 flex h-12 rounded-md border-[1px] border-solid border-[#0B3168] md:col-span-2 md:col-end-3 md:mr-5 md:mb-3"
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
        class="col-span-5 col-start-1 col-end-5 row-start-2 mb-3 flex h-12 rounded-md border-[1px] border-solid border-[#0B3168] md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-1 md:ml-5"
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

      <label class="col-span-4 col-start-1 col-end-5 row-start-3 mb-3 flex flex-col md:row-start-2  md:col-span-2 md:col-end-3 md:pr-5">
        Nom de l'entreprise
        <input
          bind:value={store.companyName}
          class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
          type="text"
          aria-label="entrez votre nom"
          maxLength={50}
        />
      </label>

      <label class="col-span-4 col-start-1 row-start-4 mb-3  flex flex-col md:col-span-2 md:col-end-3 md:row-start-3 md:pr-5">
        Nom*
        <input
          bind:value={store.lastName}
          class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
          required
          type="text"
          aria-label="entrez votre nom"
          maxLength={50}
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 row-start-5 mb-3 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-3 md:pl-5">
        Prénom*
        <input
          bind:value={store.firstName}
          class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
          required
          type="text"
          aria-label="entrez votre prénom"
          maxLength={50}
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 row-start-6 flex flex-col md:col-span-2 md:col-end-3 md:row-start-4 md:pr-5">
        Mail*
        <input
          bind:value={store.email}
          class="mb-3 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
          required
          type="email"
          aria-label="entrez votre e-mail"
          maxLength={50}
        />
      </label>
      <label class="col-span-4 col-start-1 col-end-5 row-start-7 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-4 md:pl-5">
        Téléphone*
        <input
          bind:value={store.phone}
          class="mb-6 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
          required
          type="tel"
          aria-label="entrez votre numéro de téléphone"
        />
      </label>
      <div class="col-span-2 col-start-1 flex ">
        <p class="italic text-xs">Caratères maximum : {store.count}/1000</p>
      </div>
      <textarea
        bind:value={store.message}
        onInput$={counter$}
        placeholder="Sujet de votre demande"
        class="col-span-4 col-start-1 col-end-5 row-start-8 mb-6 border-[1px] border-solid border-[#0B3168] md:row-start-5 md:row-span-2 md:pl-2 md:mt-6"
        id="textarea"
        maxLength={1500}
        required
        aria-label="zone pour écrire les détails de votre demande"
      ></textarea>
      <button
        type="reset"
        class=" col-span-2 col-start-1 col-end-2 row-start-9 mr-2 h-14 rounded-md hover:border-2 hover:border-[#0B3168] md:col-start-3  md:col-end-4 md:row-start-7 md:mt-14"
        aria-label="Effacer le formulaire"
      >
        Effacer
      </button>
      <button
        type="button"
        class="col-span-2 col-start-3 col-end-5 row-start-9 h-14 rounded-md bg-[#0B3168] text-white md:col-start-4 md:col-end-4  md:row-start-7 md:mt-14"
        aria-label="Envoyer le formulaire"
        onClick$={async () => {
          await registerRequestQrl(store);
        }}
      >
        Envoyer
      </button>
      <p class="col-start-1 col-end-4 row-start-10 mr-2 h-14 mt-6 md:row-start-8 md:mt-8">* Champs obligatoire</p>
    </form>
  );
});
