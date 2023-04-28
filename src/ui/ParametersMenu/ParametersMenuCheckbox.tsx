import { component$, useContext, useSignal, useStore, useTask$ } from "@builder.io/qwik";

import type { Reference } from "../../types";

import { contextId } from "./ParametersMenu";

type ParametersMenuCheckboxProps = {
  readonly defaultName: string;
  readonly styles?: string;
  readonly inputName: string;
  readonly defaultOption: string;
  readonly secondOption: string;
  readonly ariallabel: string;
};

export type ParametersMenuCheckboxStore = {
  readonly ref: Reference;
  selected: {
    police: boolean;
    interlignage: boolean;
    image: boolean;
  };
};

export const ParametersMenuCheckbox = component$<ParametersMenuCheckboxProps>(
  ({ ariallabel, inputName, defaultOption, secondOption, styles }) => {
    const context = useContext(contextId);
    const _ref = useSignal<HTMLElement>();
    const store = useStore<ParametersMenuCheckboxStore>(
      {
        ref: _ref,
        selected: {
          police: true,
          interlignage: true,
          image: true,
        },
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
        <li
          class={styles}
          role="presentation"
          ref={store.ref}
          role="menuitem"
          tabIndex={store.ref === context.ParametersMenu.focusable ? 0 : -1}
        >
          <div class="flex flex-col" aria-label={ariallabel}>
            <p>{inputName}</p>
            <div class="flex ml-2 text-l">
              <label>
                {defaultOption}
                <input
                  class="ml-1"
                  checked={store.selected}
                  type="radio"
                  name={inputName}
                  onChange={() => (store.selected = { ...store.selected, inputName: true })}
                />
              </label>
              <label class="ml-2">
                {secondOption}
                <input
                  class="ml-1"
                  type="radio"
                  checked={!store.selected}
                  name={inputName}
                  onChange={() => (store.selected = { ...store.selected, inputName: false })}
                />
              </label>
            </div>
          </div>
        </li>
      </>
    );
  }
);
