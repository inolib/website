import { component$ } from "@builder.io/qwik";

export const DocumentsTable = component$(() => {
  return (
    <span class="flex flex-col mb-[10rem]">
      <span class="md:flex justify-center text-[#0B3168] relative">
        <table class="text-left mb-12 md:w-[82%] ">
          <thead class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white">
            <th class="border-x-2 border-white hover px-5  py-[1rem]">Nom</th>
            <th class="hidden sm:table-cell border-x-2 border-white px-5 md:py-[1rem]">Catégorie</th>
            <th class="hidden sm:table-cell border-x-2 border-white px-5 md:py-[1rem]">Date</th>
            <th class="hidden sm:table-cell border-x-2 border-white px-5 md:py-[1rem]">Type</th>
            <th class="border-x-2 border-white px-5 md:py-[1rem] md:hidden">information</th>
          </thead>
          <tbody class="">
            <tr class="h-14 border-b-[1px] border-[#E1E1E1]">
              <td class="px-5 py-3 md:py-0">Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">Accessibilité</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">2023.05.10</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">PDF</td>
              <td class="md:hidden px-5 py-3 underline underline-offset-1 md:py-0">plus d'info</td>
            </tr>
            <tr class="h-14 border-b-[1px] border-[#E1E1E1]">
              <td class="px-5 py-3 md:py-0">Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">Accessibilité</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">2023.05.10</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">PDF</td>
              <td class="md:hidden px-5 py-3 underline underline-offset-1 md:py-0">plus d'info</td>
            </tr>
            <tr class="h-14 border-b-[1px] border-[#E1E1E1]">
              <td class="px-5 py-3 md:py-0">Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">Accessibilité</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">2023.05.10</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">PDF</td>
              <td class="md:hidden px-5 py-3 underline underline-offset-1 md:py-0">plus d'info</td>
            </tr>
            <tr class="h-14 border-b-[1px] border-[#E1E1E1]">
              <td class="px-5 py-3 md:py-0">Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">Accessibilité</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">2023.05.10</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">PDF</td>
              <td class="md:hidden px-5 py-3 underline underline-offset-1 md:py-0">plus d'info</td>
            </tr>
            <tr class="h-14 border-b-[1px] border-[#E1E1E1]">
              <td class="px-5 py-3 md:py-0">Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">Accessibilité</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">2023.05.10</td>
              <td class="hidden sm:table-cell px-5 py-3 md:py-0">PDF</td>
              <td class="md:hidden px-5 py-3 underline underline-offset-1 md:py-0">plus d'info</td>
            </tr>
            <button
              class="absolute -bottom-10 right-1/4 md:right-32 bg-white border-[1px] border-[#0B3168]  text-[#0B3168] text-xl rounded-md w-[12rem] h-[3rem]"
              type="button"
            >
              Tout télécharger
            </button>
          </tbody>
        </table>
      </span>
    </span>
  );
});
