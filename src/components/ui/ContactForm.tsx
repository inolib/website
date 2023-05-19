import { $, component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { GraphQLClient } from "graphql-request";
import { z, ZodType, type ZodError } from "zod";

import { Toaster, type ToasterStore } from "./Toaster";

type ContactCategory = {
  id: string;
  name: string;
};

type FormField = {
  value: string;
  error: string;
};

type FormStore = {
  count: number;
  checked: boolean;
  isDisabled: boolean;
  categories: ContactCategory[];
  fields: {
    categoryId: FormField;
    companyName: FormField;
    lastName: FormField;
    firstName: FormField;
    email: FormField;
    phone: FormField;
    message: FormField;
  };
};

type FormData = {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
  categoryId: string;
};

const API_URL = "https://api-inolib.vercel.app";

export const verifyInput = $((store: FormStore) => {
  if (
    store.fields.lastName.value !== "" &&
    store.fields.firstName.value !== "" &&
    store.fields.message.value !== "" &&
    store.fields.phone.value !== "" &&
    store.fields.email.value !== "" &&
    store.fields.companyName.value !== "" &&
    store.fields.categoryId.value !== "" &&
    store.checked == true
  ) {
    store.isDisabled = false;
    console.log(
      "lastName :",
      store.fields.lastName.value,
      "firstName :",
      store.fields.firstName.value,
      "message :",
      store.fields.message.value,
      "isDisabled :",
      store.isDisabled
    );
  } else {
    console.log(
      "lastName :",
      store.fields.lastName.value,
      "firstName :",
      store.fields.firstName.value,
      "message :",
      store.fields.message.value,
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
        categoryId: formStore.fields.categoryId.value,
        companyName: formStore.fields.companyName.value,
        firstName: formStore.fields.firstName.value,
        lastName: formStore.fields.lastName.value,
        email: formStore.fields.email.value,
        phone: formStore.fields.phone.value,
        message: formStore.fields.message.value,
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

const FormSchema: ZodType<FormData> = z.object({
  companyName: z
    .string()
    .min(2, { message: "Le nom de l'entreprise ne doit pas faire moins de 2 caractères" })
    .max(30, { message: "Le nom de l'entreprise ne doit pas faire moins de 2 caractères" }),
  firstName: z
    .string()
    .min(2, { message: "Le prénom de famille ne doit pas faire moins de 2 caractères" })
    .max(30, { message: "Le prénom ne doit pas faire moins de 2 caractères" }),
  lastName: z
    .string()
    .min(2, { message: "Le nom de famille ne doit pas faire moins de 2 caractères" })
    .max(30, { message: "Le nom de famille ne doit pas dépasser 30 caractères" }),
  email: z.string().email({ message: " Veuillez entrez une adresse valide" }),
  message: z.string().min(10, { message: "Ce message est trop court " }),
  phone: z.string().regex(/^\+?\d+/, { message: " Veuillez entrez un numéro de téléphone valide" }),
  categoryId: z.string(),
});

export const handleSubmitQrl = $(async (store: FormStore, toasterStore: ToasterStore, resetButton: HTMLElement) => {
  store.fields.categoryId.value = "";
  store.fields.companyName.value = "";
  store.fields.firstName.value = "";
  store.fields.lastName.value = "";
  store.fields.email.value = "";
  store.fields.message.value = "";
  store.fields.phone.value = "";

  try {
    FormSchema.parse({
      categoryId: store.fields.categoryId.value,
      companyName: store.fields.companyName.value,
      firstName: store.fields.firstName.value,
      lastName: store.fields.lastName.value,
      email: store.fields.email.value,
      message: store.fields.message.value,
      phone: store.fields.phone.value.replaceAll(/ |-|\./g, ""),
    });

    const { toasterStore: _toasterStore } = await registerRequestQrl(store, toasterStore);
    toasterStore.show = _toasterStore.show;

    resetButton.click();
  } catch (error) {
    console.log(error);

    const errors = (error as ZodError).issues.map((issue) => {
      return {
        fieldName: issue.path[0] as string,
        message: issue.message,
      };
    });

    errors.forEach((error) => {
      (store.fields[error.fieldName] as FormField).error = error.message;
    });
  }
});

export const ContactForm = component$(() => {
  const resetButton = useSignal<HTMLElement>();

  const store = useStore<FormStore>(
    {
      count: 0,
      checked: false,
      isDisabled: true,
      categories: [],
      fields: {
        categoryId: {
          value: "",
          error: "",
        },
        companyName: {
          value: "",
          error: "",
        },
        email: {
          value: "",
          error: "",
        },
        firstName: {
          value: "",
          error: "",
        },
        lastName: {
          value: "",
          error: "",
        },
        message: {
          value: "",
          error: "",
        },
        phone: {
          value: "",
          error: "",
        },
      },
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

  console.log(store.checked);

  return (
    <>
      <div class=" fixed inset-0 z-50 w-10 h-10 top-[5rem] left-[50vw] right-[50vw] bottom-10 flex items-center justify-center">
        <Toaster icon="success" store={toasterStore}>
          Votre demande a bien été enregistrée.
        </Toaster>
      </div>

      <form
        onSubmit$={async () => {
          await handleSubmitQrl(store, toasterStore, resetButton.value as HTMLElement);
        }}
        preventdefault:submit
        class="grid-rows-10 mx-[3rem] grid grid-cols-4 py-14 md:w-2/3 md:grid-rows-8 md:px-10"
      >
        <select
          onChange$={async (_, element) => {
            store.fields.categoryId.value = element.value;
            await verifyInput(store);
          }}
          class="col-span-5 col-start-1 col-end-5 row-start-1 mb-3 flex h-12 rounded-md border-[1px] border-solid border-[#0B3168] md:col-span-2 md:col-end-3 md:mr-5 md:mb-3"
          name="Type de la demande"
          required
        >
          <option value="" disabled selected hidden>
            Sujet de la demande *
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
          required
        >
          <option value="" disabled selected hidden>
            Choix de votre civilité
          </option>
          <option>Monsieur</option>
          <option>Madame</option>
          <option>Autre</option>
        </select>

        <label class="col-span-4 col-start-1 col-end-5 row-start-3 mb-3 flex flex-col md:row-start-2  md:col-span-2 md:col-end-3 md:pr-5">
          Nom de l'entreprise *
          <input
            onInput$={async (_, element) => {
              store.fields.companyName.value = element.value;
              await verifyInput(store);
            }}
            autoComplete="organization"
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            type="text"
            maxLength={20}
          />
          <span class="text-[#FF0000] text-xs">{store.fields.companyName.error}</span>
        </label>

        <label class="col-span-4 col-start-1 row-start-4 mb-3  flex flex-col md:col-span-2 md:col-end-3 md:row-start-3 md:pr-5">
          Nom de famille *
          <input
            onInput$={async (_, element) => {
              store.fields.lastName.value = element.value;
              await verifyInput(store);
            }}
            autoComplete="family-name"
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:mb-0 md:h-12"
            required
            type="text"
            maxLength={50}
          />
          <span class="text-[#FF0000] text-xs">{store.fields.lastName.error}</span>
        </label>

        <label class="col-span-4 col-start-1 col-end-5 row-start-5 mb-3 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-3 md:pl-5">
          Prénom *
          <input
            onInput$={async (_, element) => {
              store.fields.firstName.value = element.value;
              await verifyInput(store);
            }}
            autoComplete="given-name"
            class="rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="text"
            maxLength={50}
          />
          <span class="text-[#FF0000] text-xs">{store.fields.firstName.error}</span>
        </label>

        <label class="col-span-4 col-start-1 col-end-5 row-start-6 flex flex-col md:col-span-2 md:col-end-3 md:row-start-4 md:pr-5">
          e-mail *
          <input
            onInput$={async (_, element) => {
              store.fields.email.value = element.value;
              await verifyInput(store);
            }}
            autoComplete="email"
            class="mb-3 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="email"
            maxLength={50}
          />
          <span class="text-[#FF0000] text-xs">{store.fields.email.error}</span>
        </label>

        <label class="col-start-1 col-end-5 row-start-7 flex flex-col md:col-span-2 md:col-start-3 md:col-end-5 md:row-start-4 md:pl-5">
          Téléphone *
          <input
            onInput$={async (_, element) => {
              store.fields.phone.value = element.value;
              await verifyInput(store);
            }}
            autoComplete="tel"
            class="mb-6 rounded-md border-[1px] border-solid border-[#0B3168] pl-2 md:h-12"
            required
            type="tel"
          />
          <span class="text-[#FF0000] mt-[-1.5rem] text-xs">{store.fields.phone.error}</span>
        </label>
        <div class="col-start-1 flex flex-col h-6 ">
          <p class="italic text-xs">Caratères maximum : {store.count}/1000</p>
          <span class="text-[#FF0000] text-xs">{store.fields.message.error}</span>
          <div class={`flex flex-row-reverse w-[14rem] mt-10`}>
            <label class={`italic text-xs text-[#0B3168] ml-2`}>
              <a class={`hover:font-extrabold`} href="/legal">
                Accepter nos conditions générales *
              </a>
            </label>
            <input
              type="checkbox"
              onChange$={async () => {
                store.checked = !store.checked;
                await verifyInput(store);
              }}
            />
          </div>
        </div>
        <textarea
          onInput$={async (event, element) => {
            store.fields.message.value = element.value;

            await verifyInput(store);
            await counter$(event);
          }}
          placeholder="Message *"
          class="col-span-4 col-start-1 col-end-5 row-start-8  border-[1px] border-solid border-[#0B3168] md:row-start-5 md:row-span-2 md:pl-2 md:mt-6"
          id="textarea"
          maxLength={1000}
          required
        ></textarea>
        <div class={`flex flex-col`}>
          <p class="italic text-xs text-[#0B3168] w-[20rem]">* Les champs marqués d'une astérisque sont obligatoire</p>
        </div>

        <button
          ref={resetButton}
          onClick$={resetCounter$}
          type="reset"
          class=" col-span-2 col-start-1 col-end-2 row-start-9 mr-2 h-14 rounded-md hover:border-2 hover:border-[#0B3168] md:col-start-3  md:col-end-4 md:row-start-7 md:mt-14"
          aria-label="Effacer le formulaire"
        >
          Effacer
        </button>
        <button
          type="submit"
          disabled={store.isDisabled}
          class="col-span-2 col-start-3 col-end-5 row-start-9 h-14 rounded-md bg-[#0B3168] text-white md:col-start-4 md:col-end-4  md:row-start-7 md:mt-14"
          aria-label="Envoyer le formulaire"
        >
          Envoyer
        </button>
      </form>
    </>
  );
});
