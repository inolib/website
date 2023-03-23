import { component$ } from "@builder.io/qwik";

import { DocumentTableLine } from "./DocumentTableLine";

export const DocumentsTable = component$(() => {
  return (
    <span class="mb-[10rem] flex flex-col">
      <span class="relative justify-center text-[#0B3168] md:flex">
        <table class="mb-12 text-left md:w-[82%]" aria-label="ensemble des documents à votre disposition">
          <thead class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white">
            <th class="hover border-x-2 border-white px-5  py-[1rem]" scope="col">
              Nom
            </th>
            <th class="hidden border-x-2 border-white px-5 sm:table-cell md:py-[1rem]" scope="col">
              Catégorie
            </th>
            <th class="hidden border-x-2 border-white px-5 sm:table-cell md:py-[1rem]" scope="col">
              Date
            </th>
            <th class="hidden border-x-2 border-white px-5 sm:table-cell md:py-[1rem]" scope="col">
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
              class="absolute -bottom-10 right-1/4 h-[3rem] w-[12rem]  rounded-md border-[1px] border-[#0B3168] bg-white text-xl text-[#0B3168]  md:right-32"
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
