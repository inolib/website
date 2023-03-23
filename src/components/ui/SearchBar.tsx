import { component$ } from "@builder.io/qwik";

type SearchProps = {
  placeholder: string;
  styles?: string;
};

export const SearchBar = component$((props: SearchProps) => {
  return (
    <>
      <label for="simple-search" class="sr-only">
        Barre de recherche
      </label>
      <div class="mb-[1rem] w-[15rem] md:relative md:ml-[10rem] md:mb-[4rem] md:w-[20rem] ">
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            aria-hidden="true"
            class="mt-[149.7rem] hidden h-5 w-5 text-gray-500 dark:text-gray-400 md:mt-[4rem] md:flex"
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
          class="mt-[4rem] block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:p-2.5 md:pl-10"
          placeholder={props.placeholder}
          required
        />
      </div>
    </>
  );
});
