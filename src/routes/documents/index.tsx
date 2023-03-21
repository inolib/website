import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonBackLobby } from "~/components/ui/buttons/ButtonBackLobby";
import { BannerProfile } from "~/components/header/BannerProfile";

export default component$(() => {
  return (
    <>
      <main class="text-[#0B3168]">
        <BannerProfile title="MY FAKE COMPAGNY" imageSrc="/images/userLogo.png" />
        <ButtonBackLobby />
        <span class="flex justify-center md:justify-start">
          <h2 class="text-3xl md:ml-[6rem] font-semibold">Mes documents</h2>
        </span>
        <table class="text-sm text-left">
          <thead class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white">
            <tr>
              <th class="border-x-2 border-white pl-2">Nom</th>
              <th class="border-x-2 border-white pl-2 hidden md:block">Catégorie</th>
              <th class="border-x-2 border-white pl-2 hidden md:block">Date</th>
              <th class="border-x-2 border-white pl-2 hidden md:block">Type</th>
              <th class="border-x-2 border-white pl-2 md:hidden">information</th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-14">
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden md:block">Accessibilité</td>
              <td class="hidden md:block">2023.05.10</td>
              <td class="hidden md:block">PDF</td>
              <td class="md:hidden">plus d'info</td>
            </tr>
            <tr class="h-14">
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden md:block">Accessibilité</td>
              <td class="hidden md:block">2023.05.10</td>
              <td class="hidden md:block">PDF</td>
              <td class="md:hidden">plus d'info</td>
            </tr>
            <tr class="h-14">
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden md:block">Accessibilité</td>
              <td class="hidden md:block">2023.05.10</td>
              <td class="hidden md:block">PDF</td>
              <td class="md:hidden">plus d'info</td>
            </tr>
            <tr class="h-14">
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden md:block">Accessibilité</td>
              <td class="hidden md:block">2023.05.10</td>
              <td class="hidden md:block">PDF</td>
              <td class="md:hidden">plus d'info</td>
            </tr>
            <tr class="h-14">
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>
              <td class="hidden md:block">Accessibilité</td>
              <td class="hidden md:block">2023.05.10</td>
              <td class="hidden md:block">PDF</td>
              <td class="md:hidden">plus d'info</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "documents",
};
