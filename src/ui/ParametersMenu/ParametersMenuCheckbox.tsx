import { component$, Slot, useContext, useSignal, useStore, useTask$ } from "@builder.io/qwik";

import type { Reference } from "../../types";

import { contextId } from "./ParametersMenu";

type ParametersMenuCheckboxProps = {
  readonly href: string;
  readonly styles?: string;
};

export type ParametersMenuCheckboxStore = {
  readonly ref: Reference;
  readonly selected: {
    readonly police: boolean;
    readonly interlignage: boolean;
    readonly image: boolean;
  };
};

export const ParametersMenuCheckbox = component$<ParametersMenuCheckboxProps>(({ styles }) => {
  const context = useContext(contextId);
  const _ref = useSignal<HTMLElement>();
  const _selected = true; //TODO
  const store = useStore<ParametersMenuCheckboxStore>(
    {
      ref: _ref,
      selected: _selected,
    },
    { deep: true }
  );

  useTask$(() => {
    if (context.ParametersMenuCheckbox === undefined) {
      context.ParametersMenuCheckbox = [];
    }

    context.ParametersMenuCheckbox.push(store);
  });

  return (
    <>
      <div class="col-span-1 col-start-1 row-start-1 row-span-1 flex flex-col items-center justify-center md:mb-4">
        <p class="ml-2 text-xl">Police</p>
        <div class="flex ml-2 text-l">
          <label>
            Défault
            <input class="ml-1" checked type="radio" name="police" value={store.selected ? true : false} />
            {console.log(store.selected)}
          </label>
          <label class="ml-2">
            Taille supérieur
            <input class="ml-1" type="radio" name="police" value={store.selected ? true : false} />
            {console.log(store.selected)}
          </label>
        </div>
      </div>
      <div class="col-start-2 col-span-1 row-start-1 row-span-1 flex flex-col items-center justify-center md:mb-4">
        <p class="text-xl">Interlignage</p>
        <div class="flex text-l">
          <label class="ml-2">
            Défault
            <input class="ml-1" checked type="radio" name="interlignage" value={store.selected ? true : false} />
          </label>
          <label class="ml-2">
            Taille supérieur
            <input class="ml-1" type="radio" name="interlignage" value={store.selected ? true : false} />
          </label>
        </div>
      </div>
      <div class="col-start-1 col-span-1 row-start-2 rox-span-1 flex flex-col items-center justify-center md:mb-4">
        <p class="text-xl">Image</p>
        <div class="flex text-l">
          <label>
            Défault
            <input class="ml-1" checked type="radio" name="image" value={store.selected ? true : false} />
          </label>
          <label class="ml-2">
            Format textuel
            <input class="ml-1" type="radio" name="image" value={store.selected ? true : false} />
          </label>
        </div>
        <Slot />
      </div>
    </>
  );
});
