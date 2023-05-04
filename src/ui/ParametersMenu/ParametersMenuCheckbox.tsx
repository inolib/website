import { type QRL, component$, useContext, useSignal, useStore, useTask$ } from "@builder.io/qwik";

import type { Reference } from "../../types";

import { contextId } from "./ParametersMenu";

type ParametersMenuCheckboxProps = {
  readonly styles?: string;
  inputName: string;
  defaultOption: string;
  secondOption: string;
  ariallabel: string;
  readonly defaultOptionValue: string;
  readonly secondOptionValue: string;
  readonly onChange: QRL<(event: InputEvent) => void>;
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
  ({ ariallabel, inputName, defaultOption, secondOption, defaultOptionValue, onChange, secondOptionValue, styles }) => {
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
          ref={store.ref}
          role="menuitem"
          tabIndex={store.ref === context.ParametersMenu.focusable ? 0 : -1}
        >
          <div class="flex flex-col m-4" aria-label={ariallabel}>
            <p class="text-3xl">{inputName}</p>
            <div class="flex mx-3 text-2xl">
              <label>
                {defaultOption}
                <input
                  class="ml-2"
                  checked
                  type="radio"
                  name={inputName}
                  value={defaultOptionValue}
                  onChange$={onChange}
                />
              </label>
              <label class="ml-2">
                {secondOption}
                <input class="ml-2" type="radio" name={inputName} value={secondOptionValue} onChange$={onChange} />
              </label>
            </div>
          </div>
        </li>
      </>
    );
  }
);
