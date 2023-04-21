import { $, type Signal, component$, useSignal, useStore } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

import { GraphQLClient } from "graphql-request";
import { type DocumentHead } from "@builder.io/qwik-city";

type SignUpStore = {
  email: Signal<string>;
  firstName: Signal<string>;
  lastName: Signal<string>;
};

const API_URL = "https://api-inolib.vercel.app/api";

export const signUpRequestQrl = server$(async (store: SignUpStore) => {
  const client = new GraphQLClient(API_URL, { fetch });

  const result: { newSignUpRequest: { id: string } } = await client.request(
    /* GraphQL */ `
      mutation newSignUpRequest($email: String!, $firstName: String!, $lastName: String!) {
        newSignUpRequest(email: $email, firstName: $firstName, lastName: $lastName) {
          id
        }
      }
    `,
    {
      email: store.email.value,
      firstName: store.firstName.value,
      lastName: store.lastName.value,
    }
  );

  console.log(result);
});

export default component$(() => {
  const _email = useSignal<string>("");
  const _firstName = useSignal<string>("");
  const _lastName = useSignal<string>("");

  const store = useStore<SignUpStore>({
    email: _email,
    firstName: _firstName,
    lastName: _lastName,
  });

  return (
    <>
      <div class="h-[100vh] bg-slate-100">
        <form class=" flex flex-col items-center justify-center  ">
          <h1 class=" mb-12 mt-24 content-center items-center justify-center text-4xl font-semibold text-[#0B3168] md:mb-14">
            Inscription
          </h1>
          <div class="w-[36%] md:w-1/2">
            <div class=" mb-[2rem] text-[#0B3168]">
              <label class="mb-1 flex flex-col items-center justify-center">
                Email
                <input
                  aria-label="entrez votre e-mail"
                  bind:value={store.email}
                  type="email"
                  required
                  name="email"
                  class="form-control h-10 w-56 rounded-2xl border bg-gray-200 py-2 px-4 text-gray-600 md:h-14 md:w-3/5"
                />
              </label>
            </div>

            <div class="mb-[2rem] flex flex-col items-center justify-center text-[#0B3168]">
              <label class="mb-1 w-3/5 text-center">
                Nom
                <div class="relative flex items-center">
                  <input
                    aria-label="Entrez votre nom"
                    bind:value={store.lastName}
                    type="text"
                    required
                    class="form-control h-10  w-56 rounded-2xl border bg-gray-200 py-2 px-4 text-gray-600 md:h-14 md:w-full"
                  />
                </div>
              </label>
            </div>

            <div class="mb-[2rem] flex flex-col items-center justify-center text-[#0B3168]">
              <label class="mb-1 w-3/5 text-center">
                Prénom
                <div class="relative flex items-center">
                  <img alt="" class="absolute right-2 h-8 w-auto hover:scale-100 scale-75" />
                  <input
                    aria-label="Entrez votre prénom"
                    bind:value={store.firstName}
                    type="text"
                    required
                    class="form-control h-10 w-56 rounded-2xl border bg-gray-200 py-2 px-4 text-gray-600 md:h-14 md:w-full"
                  />
                </div>
              </label>
            </div>
          </div>
          <div class="flex">
            <button
              aria-label="Effacer le formulaire"
              type="reset"
              class="m-3 mt-10 h-10 w-32 rounded-lg bg-red-600 py-1 px-4 text-white shadow-lg hover:border hover:border-red-600 hover:bg-[#FFFFFF] hover:text-[#15133C] hover:shadow md:mt-2 md:h-14 md:w-44 md:text-lg"
            >
              Effacer
            </button>
            <button
              aria-label="Valider l'inscription"
              type="button"
              class="m-3 mt-10 h-10 w-32 rounded-lg bg-[#0B3168] py-1 px-4 text-white shadow-lg hover:border hover:border-[#15133C] hover:bg-[#FFFFFF] hover:text-[#15133C] hover:shadow md:mt-2 md:h-14 md:w-44 md:text-lg"
              onClick$={async () => await signUpRequestQrl(store)}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "inscription",
};
