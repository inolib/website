import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="flex md:flex-row flex-col md:justify-center md:items-center bg-black bg-opacity-40">
        <div class="md:grid grid-cols-2 bg-white rounded-lg m-10 md:w-[50rem] md:h-[30rem] p-2">
          <div class="bg-white p-3 hidden md:flex">
            <div class="md:col-start-1 rounded-lg h-full bg-slate-200 p-5">
              <h1 class="font-medium text-3xl mt-10">Laissez nous vous aidez à rester informé.</h1>
              <p class="mt-10 text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, accusantium voluptate. Sunt eum
                repudiandae, architecto amet ducimus voluptatibus sequi ab natus quibusdam explicabo voluptate veritatis
                debitis obcaecati maiores, minima molestiae.
              </p>
            </div>
          </div>
          <form class="w-full max-w-sm md:col-start-2 relative md:flex md:flex-col h-full md:item-start bg-white p-6">
            <img
              src="/images/close.svg"
              class=" absolute top-0 right-0 md:-mt-3 md:-mr-5 scale-50"
              alt="Image Description"
            />
            <h1 class="font-medium text-2xl">C'est parti !</h1>
            <p class="mt-6 text-sm text-gray-500 mb-8">Incrivez-vous à notre newsletter dès maintenant</p>
            <div class="mb-8 md:flex md:flex-col md:items-start">
              <div class="flex flex-col md:mb-1">
                <label class="text-gray-500 md:text-xs mb-1" for="inline-full-name">
                  Nom et prénom
                </label>
                <input
                  class="bg-gray-200 appearance-none md:w-[20rem] border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="Alexy Bosetti"
                />
              </div>
            </div>
            <div class="mb-8 md:flex md:flex-col md:items-start">
              <div class="flex flex-col md:mb-2">
                <label class="text-gray-500 md:text-xs mb-1" for="inline-password">
                  Email
                </label>
                <input
                  class="bg-gray-200 appearance-none md:w-[20rem] border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="email"
                  placeholder="bosetti@exemple.com"
                />
              </div>
            </div>
            <div class="flex items-center flex-col">
              <button
                class="sm-3 h-10 md:w-32 rounded-lg bg-[#0B3168] py-1 px-4 text-white shadow-lg hover:border hover:border-[#15133C] hover:bg-gray-200 hover:text-[#15133C] hover:shadow md:mt-2 md:h-10 md:w-30 md:text-lg"
                type="button"
              >
                S'inscrire
              </button>
              <a
                class=" text-gray-500 text-xs visited:text-gray-500 underline-offset-1"
                href="/inscription"
                aria-label="suivre pour réinitialisier votre mot de passe"
              >
                <p class="text-center mt-5">Vous n'avez pas de compte ? Inscrivez-vous</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});
