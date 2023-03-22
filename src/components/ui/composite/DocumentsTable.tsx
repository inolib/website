import { component$ } from "@builder.io/qwik";

import { DocumentTableLine } from "./DocumentTableLine";

export const DocumentsTable = component$(() => {
  return (
    <span class="flex flex-col mb-[10rem]">
      <span class="md:flex justify-center text-[#0B3168] relative">
        <table class="text-left mb-12 md:w-[82%]" aria-label="ensemble des documents à votre disposition">
          <thead class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white">
            <th class="border-x-2 border-white hover px-5  py-[1rem]" scope="col">
              Nom
            </th>
            <th class="hidden sm:table-cell border-x-2 border-white px-5 md:py-[1rem]" scope="col">
              Catégorie
            </th>
            <th class="hidden sm:table-cell border-x-2 border-white px-5 md:py-[1rem]" scope="col">
              Date
            </th>
            <th class="hidden sm:table-cell border-x-2 border-white px-5 md:py-[1rem]" scope="col">
              Type
            </th>
            <th class="border-x-2 border-white px-5 md:py-[1rem] md:hidden" scope="col">
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
