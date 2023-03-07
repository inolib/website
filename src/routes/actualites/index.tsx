import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
      >
        <img class="md:mt-48" src="../images\banner-actualites.png" />
        <div class="ml-[5vw]">
          <h1 class="font-bold mb-5 text-3xl md:text-4xl max-w-sm">Qu'est ce que l'accessibilité ?</h1>
          <p class=" max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna.
          </p>
        </div>
      </header>

      <main class="pt-[8vh]">
        <h2 class="text-[#0B3168] mx-[8vw] mb-[10vh] text-4xl">Les dernières actualités</h2>

        <span class="flex flex-row mx-[10vw]">
          <img class="mr-[10vw]" src="/images/photoArticle.png" alt="" />
          <span class="">
            <h3 class="text-[#0B3168] text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </h3>
            <p class="text-[#0B3168] mt-4  ">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores.
            </p>
            <p class="text-[#0B3168] text-[11px] mt-4">03.02.2023&ensp; |&ensp; Développement</p>
          </span>
        </span>

        <form class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class=" ml-[10vw] mb-[8vh] relative w-[20vw]">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400 mt-[8vh]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="mt-[8vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rechercher par mots-clés..."
              required
            />
          </div>
          <button
            id="dropdownBgHoverButton"
            data-dropdown-toggle="dropdownBgHover"
            class="text-white h-[7vh] w-[9vw] justify-center  ml-20 bg-[#0B3168] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Types{" "}
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div id="dropdownBgHover" class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="checkbox-item-4"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="checkbox-item-4"
                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    checked
                    id="checkbox-item-5"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="checkbox-item-5"
                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Checked state
                  </label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="checkbox-item-6"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="checkbox-item-6"
                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <button
            id="dropdownBgHoverButton"
            data-dropdown-toggle="dropdownBgHover"
            class="text-white h-[7vh] w-[9vw] justify-center ml-[2vw] bg-[#0B3168] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Périodes{" "}
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div id="dropdownBgHover" class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="checkbox-item-4"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="checkbox-item-4"
                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    checked
                    id="checkbox-item-5"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="checkbox-item-5"
                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Checked state
                  </label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="checkbox-item-6"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="checkbox-item-6"
                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </form>
        <section class="grid grid-cols-3 grid-rows-2 gap-20 mx-[10vw]">
          <article>
            <img class="h-[40vh]" src="/images/home3.png" alt="" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh] text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Accessibilité</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home7.png" alt="" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh]  text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur !
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Développement</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home2.png" alt="" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh]  text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Accessibilité</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home6.png" alt="" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh]  text-3xl max-w-sm">Lorem ipsum dolor.</h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Formation</p>
          </article>
          <article>
            <img class="h-[40vh]" src="/images/home5.png" alt="" />
            <h3 class="text-[#0B3168] font-normal mt-[4vh] text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Inolib</p>
          </article>
          <article class="flex flex-col justify-center items-center shadow-xl h-[40vh]">
            <img src="/images/icon-plus.png" alt="" />
            <p class="text-[#0B3168] mt-3">Charger plus d'actualités</p>
          </article>
        </section>
        <a
          aria-label="lien vers le haut de la page"
          class="flex justify-center mr-[6.4vw] mb-[10vh] mt-[10vh]"
          href="/actualites"
        >
          <img src="/images/icon-arrow-up.svg" alt="lien vers le haut de la page" />
        </a>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "actualités",
};
