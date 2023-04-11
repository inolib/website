import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="h-[100vh] bg-slate-100">
        <form class=" flex flex-col items-center justify-center  ">
          <h1 class=" mb-12 mt-44 content-center items-center justify-center text-4xl font-semibold text-[#0B3168] md:mb-14">
            Connexion
          </h1>
          <div class="w-[36%] md:w-1/2">
            <div class=" mb-[2rem] flex flex-col items-center justify-center text-[#0B3168]">
              <label class={`mb-1`} for="email">
                Email
              </label>
              <input
                aria-label="entrez votre e-mail"
                type="email"
                required
                id="email"
                name="email"
                class="form-control h-10 w-56 rounded-2xl border bg-gray-200 py-2 px-4 text-gray-600 md:h-14 md:w-3/5"
              />
            </div>

            <div class="mb-[2rem] flex flex-col items-center justify-center text-[#0B3168]">
              <label class={`mb-1`} for="password">
                Mot de passe
              </label>
              <input
                aria-label="Entrez votre mot de passe"
                type="password"
                required
                id="password"
                name="password"
                class="form-control h-10  w-56 rounded-2xl border bg-gray-200 py-2 px-4 text-gray-600 md:h-14 md:w-3/5"
              />
            </div>
            <a
              class="md:mb-4 text-blue-600 visited:text-purple-600 underline underline-offset-1"
              href="#"
              aria-label="suivre pour réinitialisier votre mot de passe"
            >
              <p class="text-center md:text-right">mot de passe oublié?</p>
            </a>
          </div>
          <button
            aria-label="se connecter"
            type="submit"
            class="m-3 mt-10 h-10 w-32 rounded-lg bg-[#0B3168] py-1 px-4 text-white shadow-lg hover:border hover:border-[#15133C] hover:bg-[#FFFFFF] hover:text-[#15133C] hover:shadow md:mt-2 md:h-14 md:w-44 md:text-lg"
          >
            Connexion
          </button>
        </form>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "connexion",
};
