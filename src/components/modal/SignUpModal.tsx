import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export const SignUpModal = component$(() => {
  const nav = useNavigate();
  return (
    <div class="flex justify-center items-center bg-opacity-50 h-screen w-screen">
      <div class="flex flex-col justify-center items-center border border-black rounded-lg p-4 bg-slate-50">
        <p class=" text-2xl m-4">Inscription réussie</p>
        <button
          aria-label="Effacer le formulaire"
          class="flex justify-center items-center m-3 mt-10 h-10 w-32 rounded-lg bg-red-600 py-1 px-4 text-white shadow-lg hover:border hover:border-red-600 hover:bg-[#FFFFFF] hover:text-[#15133C] hover:shadow md:mt-2 md:h-14 md:w-44 md:text-lg"
          onClick$={async () => {
            // refresh page: call without arguments
            await nav("/inscription");
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  );
});
