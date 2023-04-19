import { $, component$, useSignal, Signal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const passwordVisible = useSignal<boolean>(false);
  const verifyPasswordVisible = useSignal<boolean>(false);

  const togglePasswordVisible$ = $((passwordVisible: Signal<boolean>) => {
    passwordVisible.value = !passwordVisible.value;
  });

  const toggleVerifyPasswordVisible$ = $((verifyPasswordVisible: Signal<boolean>) => {
    verifyPasswordVisible.value = !verifyPasswordVisible.value;
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
                  type="email"
                  required
                  name="email"
                  class="form-control h-10 w-56 rounded-2xl border bg-gray-200 py-2 px-4 text-gray-600 md:h-14 md:w-3/5"
                />
              </label>
            </div>

            <div class="mb-[2rem] flex flex-col items-center justify-center text-[#0B3168]">
              <label class="mb-1 w-3/5 text-center">
                Mot de passe
                <div class="relative flex items-center">
                  <img
                    alt=""
                    class="absolute right-2 h-8 w-auto hover:scale-100 scale-75"
                    src="\images\hide-icon.png"
                    id="eye1"
                    onClick$={async () => {
                      await togglePasswordVisible$(passwordVisible);
                    }}
                  />

                  <input
                    aria-label="Entrez votre mot de passe"
                    type={passwordVisible.value ? "text" : "password"}
                    required
                    id="password"
                    class="form-control h-10  w-56 rounded-2xl border bg-gray-200 py-2 px-4 text-gray-600 md:h-14 md:w-full"
                  />
                </div>
              </label>
            </div>

            <div class="mb-[2rem] flex flex-col items-center justify-center text-[#0B3168]">
              <label class="mb-1 w-3/5 text-center">
                Confirmez votre mot de passe
                <div class="relative flex items-center">
                  <img
                    alt=""
                    class="absolute right-2 h-8 w-auto hover:scale-100 scale-75"
                    src="\images\hide-icon.png"
                    id="eye2"
                    onClick$={async () => {
                      await toggleVerifyPasswordVisible$(verifyPasswordVisible);
                    }}
                  />
                  <input
                    aria-label="Confirmez votre mot de passe"
                    type={verifyPasswordVisible.value ? "text" : "password"}
                    required
                    id="verifyPassword"
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
              aria-label="Valider l'inscrition"
              type="submit"
              class="m-3 mt-10 h-10 w-32 rounded-lg bg-[#0B3168] py-1 px-4 text-white shadow-lg hover:border hover:border-[#15133C] hover:bg-[#FFFFFF] hover:text-[#15133C] hover:shadow md:mt-2 md:h-14 md:w-44 md:text-lg"
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
