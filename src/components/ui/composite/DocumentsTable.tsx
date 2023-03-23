import { component$ } from "@builder.io/qwik";

import { DocumentTableLine } from "./DocumentTableLine";

export const DocumentsTable = component$(() => {
  return (
    <span class="flex flex-col mb-[10rem]">
      <span class="relative text-[#0B3168] md:flex justify-center">
        <table class="mb-12 text-left md:w-[82%]" aria-label="ensemble des documents à votre disposition">
          <thead class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white">
            <th class="border-x-2 border-white hover px-5  py-[1rem]" scope="col">
              Nom
            </th>
            <th class="border-x-2 border-white px-5 hidden sm:table-cell md:py-[1rem]" scope="col">
              Catégorie
            </th>
            <th class="border-x-2 border-white hidden sm:table-cell px-5 md:py-[1rem]" scope="col">
              Date
            </th>
            <th class="border-white border-x-2 hidden px-5 sm:table-cell md:py-[1rem]" scope="col">
              Type
            </th>
            <th class="border-x-2 border-white px-5 md:hidden md:py-[1rem]" scope="col">
              information
            </th>
          </thead>
          <tbody>
            <DocumentTableLine
              nom="Lorem ipsum dolor sit amet, consectetur adipiscing"
              categorie="Accessibilité"
              date="2023.05.10"
              type="PDF"
              information="plus d'info"
            />
            <DocumentTableLine
              nom="Lorem ipsum dolor sit amet, consectetur adipiscing"
              categorie="Accessibilité"
              date="2023.05.10"
              type="PDF"
              information="plus d'info"
            />
            <DocumentTableLine
              nom="Lorem ipsum dolor sit amet, consectetur adipiscing"
              categorie="Accessibilité"
              date="2023.05.10"
              type="PDF"
              information="plus d'info"
            />
            <DocumentTableLine
              nom="Lorem ipsum dolor sit amet, consectetur adipiscing"
              categorie="Accessibilité"
              date="2023.05.10"
              type="PDF"
              information="plus d'info"
            />
            <DocumentTableLine
              nom="Lorem ipsum dolor sit amet, consectetur adipiscing"
              categorie="Accessibilité"
              date="2023.05.10"
              type="PDF"
              information="plus d'info"
            />

            <button
              class="absolute bg-white border-[1px] border-[#0B3168] -bottom-10  h-[3rem] right-1/4 rounded-md w-[12rem] text-xl text-[#0B3168]  md:right-32"
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
