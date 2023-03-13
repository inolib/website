import { component$ } from "@builder.io/qwik";

export const LocalisationCard = component$(() => {
  return (
    <section>
      <h2 class=" font-bold mb-10 text-2xl">Nous rencontrer</h2>
      <div class="flex justify-between shadow-xl mb-10">
        <div class="flex flex-col justify-center items-center w-full">
          <img class="h-16 w-auto" src="..\images\icon-pin-map.svg" />
          <p class="text-center">
            INOLIB
            <br />
            254 RUE VENDÔME
            <br />
            69003 LYON
          </p>
        </div>
        <img class="p-2" src="..\images\map.png" />
      </div>
    </section>
  );
});
