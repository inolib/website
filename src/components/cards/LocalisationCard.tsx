import { component$ } from "@builder.io/qwik";

export const LocalisationCard = component$(() => {
  return (
    <section>
      <h2 class=" mb-10 text-2xl font-bold">Nous rencontrer</h2>
      <div class="flex flex-col justify-between shadow-xl md:mb-10 md:flex-row">
        <div class="flex w-full flex-col items-center justify-center">
          <img alt="" class="h-16 w-auto" src="\images\icon-pin-map.svg" />
          <p class="text-center">
            INOLIB
            <br />
            254 RUE VENDÔME
            <br />
            69003 LYON
          </p>
        </div>
        <img alt="" class="p-2" src="\images\map.png" />
      </div>
    </section>
  );
});
