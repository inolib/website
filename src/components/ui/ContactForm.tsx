import { $, component$, useStore } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { GraphQLClient } from "graphql-request";

import { Toaster, type ToasterStore } from "./Toaster";

type FormStore = {
  checked: boolean;
  fields: {
    category: string;
    email: string;
    familyName: string;
    givenName: string;
    message: string;
    organization: string;
    tel: string;
  };
};

const API_URL = "https://api.inolib.com/graphql";

export const registerRequestQrl = server$(async (formStore: FormStore, toasterStore: ToasterStore) => {
  const client = new GraphQLClient(API_URL, { fetch });

  try {
    await client.request(
      /* GraphQL */ `
        mutation CreateContactRequest(
          $category: String!
          $email: String!
          $familyName: String!
          $givenName: String!
          $message: String!
          $organization: String
          $tel: String
        ) {
          createContactRequest(
            category: $category
            email: $email
            familyName: $familyName
            givenName: $givenName
            message: $message
            organization: $organization
            tel: $tel
          ) {
            id
          }
        }
      `,
      {
        category: formStore.fields.category,
        email: formStore.fields.email,
        familyName: formStore.fields.familyName,
        givenName: formStore.fields.givenName,
        message: formStore.fields.message,
        organization: formStore.fields.organization,
        tel: formStore.fields.tel,
      }
    );

    toasterStore.show = true;
  } catch (error) {
    console.error(error);
  }

  return { formStore, toasterStore };
});

export const handleSubmitQrl = $(async (formStore: FormStore, toasterStore: ToasterStore) => {
  const { toasterStore: _toasterStore } = await registerRequestQrl(formStore, toasterStore);
  toasterStore.show = _toasterStore.show;
});

export const ContactForm = component$(() => {
  const store = useStore<FormStore>(
    {
      checked: false,
      fields: {
        category: "",
        email: "",
        familyName: "",
        givenName: "",
        message: "",
        organization: "",
        tel: "",
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

  return (
    <>
      <div class="fixed inset-0 z-50 w-10 h-10 top-[5rem] left-[50vw] right-[50vw] bottom-10 flex items-center justify-center">
        <Toaster icon="success" store={toasterStore}>
          Votre message a bien été envoyé.
        </Toaster>
      </div>

      <form
        onSubmit$={async () => {
          await handleSubmitQrl(store, toasterStore);
        }}
        preventdefault:submit
        class="flex flex-col gap-6 w-full px-6 py-12"
      >
        <p class="text-xs text-[#0B3168]">Les champs marqués d’un astérisque (*) sont obligatoires.</p>

        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex flex-col w-full">
            <label class="cursor-pointer" for="category">
              Sujet du message *
            </label>
            <select
              onChange$={(_, element) => {
                store.fields.category = element.value;
              }}
              class="rounded-md border-[1px] border-solid border-[#0B3168] cursor-pointer"
              id="category"
              required
            >
              <option value="" disabled selected></option>
              <option value="AUDIT">Audit</option>
              <option value="DEVELOPMENT">Développement</option>
              <option value="TRAINING">Formation</option>
            </select>
          </div>

          <div class="flex flex-col w-full">
            <label class="cursor-pointer" for="organization">
              Nom de l’entreprise
            </label>
            <input
              onInput$={(_, element) => {
                store.fields.organization = element.value;
              }}
              autoComplete="organization"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              id="organization"
              type="text"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex flex-col w-full">
            <label class="cursor-pointer" for="givenName">
              Prénom *
            </label>
            <input
              onInput$={(_, element) => {
                store.fields.givenName = element.value;
              }}
              autoComplete="given-name"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              id="givenName"
              type="text"
              required
            />
          </div>

          <div class="flex flex-col w-full">
            <label class="cursor-pointer" for="familyName">
              Nom de famille *
            </label>
            <input
              onInput$={(_, element) => {
                store.fields.familyName = element.value;
              }}
              autoComplete="family-name"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              id="familyName"
              type="text"
              required
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex flex-col w-full">
            <label class="cursor-pointer" for="email">
              Adresse e-mail *
            </label>
            <input
              onInput$={(_, element) => {
                store.fields.email = element.value;
              }}
              autoComplete="email"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              id="email"
              type="email"
              required
            />
          </div>

          <div class="flex flex-col w-full">
            <label class="cursor-pointer" for="tel">
              Numéro de téléphone
            </label>
            <input
              onInput$={(_, element) => {
                store.fields.tel = element.value;
              }}
              autoComplete="tel"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              id="tel"
              type="tel"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <label class="cursor-pointer" for="message">
            Message *
          </label>
          <textarea
            onInput$={(_, element) => {
              store.fields.message = element.value;
            }}
            class="rounded-md border-[1px] border-solid border-[#0B3168]"
            id="message"
            rows={5}
            required
          />
        </div>

        <div class="flex gap-2">
          <input
            onChange$={(_, element) => {
              store.checked = element.checked;
            }}
            class="cursor-pointer"
            id="legal"
            type="checkbox"
            required
          />
          <label class="text-xs text-[#0B3168] cursor-pointer" for="legal">
            <span>En cochant cette case, vous acceptez nos</span>{" "}
            <a class="hover:underline" href="/legal">
              conditions générales
            </a>{" "}
            <span>*</span>
          </label>
        </div>

        <button class="px-8 py-2 rounded-md bg-[#0B3168] text-white self-center" type="submit">
          Envoyer votre message
        </button>
      </form>
    </>
  );
});
