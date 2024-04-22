import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { GraphQLClient } from "graphql-request";
import type { ZodError } from "zod";

import { Toaster, type ToasterStore } from "./Toaster";

type FormField = {
  value: string;
  error: string;
};

type FormStore = {
  count: number;
  checked: boolean;
  isDisabled: boolean;
  fields: {
    category: FormField;
    email: FormField;
    familyName: FormField;
    givenName: FormField;
    message: FormField;
    organization: FormField;
    tel: FormField;
  };
};

const API_URL = "https://api.inolib.com/graphql";

export const verifyInput = $((store: FormStore) => {
  if (
    store.checked == true &&
    store.fields.category.value !== "" &&
    store.fields.email.value !== "" &&
    store.fields.familyName.value !== "" &&
    store.fields.givenName.value !== "" &&
    store.fields.message.value !== ""
  ) {
    store.isDisabled = false;
  } else {
    store.isDisabled = true;
  }
});

export const registerRequestQrl = server$(async (formStore: FormStore, toasterStore: ToasterStore) => {
  const client = new GraphQLClient(API_URL, { fetch });

  try {
    const result = await client.request(
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
        category: formStore.fields.category.value,
        email: formStore.fields.email.value,
        familyName: formStore.fields.familyName.value,
        givenName: formStore.fields.givenName.value,
        message: formStore.fields.message.value,
        organization: formStore.fields.organization.value,
        tel: formStore.fields.tel.value,
      }
    );

    toasterStore.show = true;

    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return { formStore, toasterStore };
});

export const handleSubmitQrl = $(async (store: FormStore, toasterStore: ToasterStore, resetButton: HTMLElement) => {
  try {
    const { toasterStore: _toasterStore } = await registerRequestQrl(store, toasterStore);
    toasterStore.show = _toasterStore.show;
    resetButton.click();
  } catch (error) {
    (error as ZodError).issues.map((issue) => {
      store.fields[issue.path[0] as keyof FormStore["fields"]].error = issue.message;
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
      fields: {
        category: {
          value: "",
          error: "",
        },
        email: {
          value: "",
          error: "",
        },
        familyName: {
          value: "",
          error: "",
        },
        givenName: {
          value: "",
          error: "",
        },
        message: {
          value: "",
          error: "",
        },
        organization: {
          value: "",
          error: "",
        },
        tel: {
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

  return (
    <>
      <>
        <div class="fixed inset-0 z-50 w-10 h-10 top-[5rem] left-[50vw] right-[50vw] bottom-10 flex items-center justify-center">
          <Toaster icon="success" store={toasterStore}>
            Votre demande a bien été enregistrée.
          </Toaster>
        </div>

        <form
          onSubmit$={async () => {
            await handleSubmitQrl(store, toasterStore, resetButton.value as HTMLElement);
          }}
          preventdefault:submit
          class="grid grid-cols-1 md:grid-cols-2"
        >
          <p class="text-xs text-[#0B3168]">Les champs marqués d’une astérisque (*) sont obligatoires</p>

          <select
            onChange$={async (_, element) => {
              store.fields.category.value = element.value;
              await verifyInput(store);
            }}
            class="flex h-12 rounded-md border-[1px] border-solid border-[#0B3168]"
            name="Type de la demande"
            required
          >
            <option value="" disabled selected>
              Sujet de la demande *
            </option>
            <option value="AUDIT">Audit</option>
            <option value="DEVELOPMENT">Développement</option>
            <option value="TRAINING">Formation</option>
          </select>

          <label class="flex flex-col">
            Nom de l’entreprise
            <input
              onInput$={async (_, element) => {
                store.fields.organization.value = element.value;
                await verifyInput(store);
              }}
              autoComplete="organization"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              type="text"
            />
            <span class="text-[#FF0000] text-xs">{store.fields.organization.error}</span>
          </label>

          <label class="flex flex-col">
            Prénom *
            <input
              onInput$={async (_, element) => {
                store.fields.givenName.value = element.value;
                await verifyInput(store);
              }}
              autoComplete="given-name"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              required
              type="text"
            />
            <span class="text-[#FF0000] text-xs">{store.fields.givenName.error}</span>
          </label>

          <label class="flex flex-col">
            Nom de famille *
            <input
              onInput$={async (_, element) => {
                store.fields.familyName.value = element.value;
                await verifyInput(store);
              }}
              autoComplete="family-name"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              required
              type="text"
            />
            <span class="text-[#FF0000] text-xs">{store.fields.familyName.error}</span>
          </label>

          <label class="flex flex-col">
            Adresse e-mail *
            <input
              onInput$={async (_, element) => {
                store.fields.email.value = element.value;
                await verifyInput(store);
              }}
              autoComplete="email"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              required
              type="email"
            />
            <span class="text-[#FF0000] text-xs">{store.fields.email.error}</span>
          </label>

          <label class="flex flex-col">
            Numéro de téléphone
            <input
              onInput$={async (_, element) => {
                store.fields.tel.value = element.value;
                await verifyInput(store);
              }}
              autoComplete="tel"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              type="tel"
            />
            <span class="text-[#FF0000] mt-[-1.5rem] text-xs">{store.fields.tel.error}</span>
          </label>

          <div class="">
            <textarea
              onInput$={async (event, element) => {
                store.fields.message.value = element.value;

                await verifyInput(store);
                await counter$(event);
              }}
              placeholder="Message *"
              class="rounded-md border-[1px] border-solid border-[#0B3168]"
              id="textarea"
              maxLength={1000}
              required
            />

            <div class="flex flex-col">
              <div class="flex">
                <p class="italic text-xs mb-4">Caratères maximum : {store.count}/1000</p>
                <span class="text-[#FF0000] text-xs">{store.fields.message.error}</span>
              </div>

              <label class="italic text-xs text-[#0B3168] ml-2">
                <input
                  type="checkbox"
                  onChange$={async () => {
                    store.checked = !store.checked;
                    await verifyInput(store);
                  }}
                />

                <a class="hover:font-extrabold ml-2" href="/legal">
                  Accepter nos conditions générales *
                </a>
              </label>
            </div>
          </div>

          <button
            ref={resetButton}
            onClick$={resetCounter$}
            type="reset"
            class=" col-span-2 col-start-1 col-end- row-start-9 mr-2 h-14 rounded-md hover:border-2 hover:border-[#0B3168] mt-10 md:col-start-3  md:col-end-4 md:row-start-7 md:mt-14"
            aria-label="Effacer le formulaire"
          >
            Effacer
          </button>

          <button
            type="submit"
            class="col-span-2 col-start-3 col-end-5 row-start-9 h-14 rounded-md bg-[#0B3168] text-white mt-10 md:col-start-4 md:col-end-4  md:row-start-7 md:mt-14"
            aria-label="Envoyer le formulaire"
          >
            Envoyer
          </button>
        </form>
      </>
    </>
  );
});
