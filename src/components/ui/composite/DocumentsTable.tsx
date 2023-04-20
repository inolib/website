import { component$, useTask$, useStore } from "@builder.io/qwik";

import { DocumentTableLine } from "./DocumentTableLine";

import { GraphQLClient } from "graphql-request";

type document = {
  id: string;
  name: string;
  type: string;
  category: string;
  date: string;
  information: string;
};

type DocStore = {
  docDatas: document[];
};

const API_URL = "https://api-inolib.vercel.app/api";
export const DocumentsTable = component$(() => {
  const store = useStore<DocStore>({
    docDatas: [],
  });

  useTask$(async () => {
    const client = new GraphQLClient(API_URL, { fetch });

    const results = await client.request<{ documents: document[] }>(/* GraphQL */ `
      query GetDocuments {
        documents {
          id
          name
          type
          category
          date
        }
      }
    `);
    store.docDatas = results.documents;
  });

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
            {store.docDatas.map((data) => (
              <DocumentTableLine
                key={data.id}
                name={data.name}
                category={data.category}
                type={data.type}
                date={data.date}
                information={data.information}
              />
            ))}

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
