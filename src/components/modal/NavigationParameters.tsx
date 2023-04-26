import { component$ } from "@builder.io/qwik";

export const NavigationParameters = component$(() => {
  return (
    <div class="bg-blue-300 relative">
      <h3 class="text-2xl text-center pt-2">Adaptez votre page!</h3>
      <div class="grid grid-cols-2 grid-rows-2">
        <div class="col-span-1 col-start-1 row-start-1 row-span-1 flex flex-col items-center justify-center md:mb-4">
          <p class="ml-2 text-xl">Police</p>
          <div class="flex ml-2 text-l">
            <label>
              Défault
              <input class="ml-1" type="checkbox" />
            </label>
            <label class="ml-2">
              Taille supérieur
              <input class="ml-1" type="checkbox" />
            </label>
          </div>
        </div>
        <div class="col-start-2 col-span-1 row-start-1 row-span-1 flex flex-col items-center justify-center md:mb-4">
          <p class="text-xl">Interlignage</p>
          <div class="flex text-l">
            <label class="ml-2">
              Défault
              <input class="ml-1" type="checkbox" />
            </label>
            <label class="ml-2">
              Taille supérieur
              <input class="ml-1" type="checkbox" />
            </label>
          </div>
        </div>
        <div class="col-start-1 col-span-1 row-start-2 rox-span-1 flex flex-col items-center justify-center md:mb-4">
          <p class="text-xl">Image</p>
          <div class="flex text-l">
            <label>
              Défault
              <input class="ml-1" type="checkbox" />
            </label>
            <label class="ml-2">
              Format textuel
              <input class="ml-1" type="checkbox" />
            </label>
          </div>
        </div>
      </div>
      <img class="absolute top-2 right-2 scale-50" src="\images\close.svg" aria-label="fermeture du menu" />
    </div>
  );
});
