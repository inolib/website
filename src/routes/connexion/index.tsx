import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="h-[100vh] bg-slate-100">
        <form class=" flex flex-col items-center justify-center  ">
          <h1 class=" text-[#0B3168] font-semibold items-center content-center justify-center text-4xl mb-16 md:mb-14 mt-44">
            Connexion
          </h1>
          <div class=" flex flex-col text-[#0B3168] md:w-3/5 justify-center mb-[2rem]">
            <label class={`mb-1`} for="email">
              Email
            </label>
            <input
              aria-label="entrez votre e-mail"
              type="email"
              required
              id="email"
              name="email"
              class="bg-gray-200 form-control text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
            />
          </div>

          <div class="flex flex-col justify-center text-[#0B3168] md:w-3/5 mb-[2rem]">
            <label class={`mb-1`} for="password">
              Mot de passe
            </label>
            <input
              aria-label="Entrez votre mot de passe"
              type="password"
              required
              id="password"
              name="password"
              class="bg-gray-200 form-control  text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
            />
          </div>

          <button
            aria-label="se connecter"
            type="submit"
            class="bg-[#0B3168] mt-10 md:mt-2 text-white m-3 py-1 px-4 rounded-lg shadow-lg h-10 w-32 md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
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
