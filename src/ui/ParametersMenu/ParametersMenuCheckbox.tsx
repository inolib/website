import { type QRL, component$, useContext, useSignal, useStore, useTask$ } from "@builder.io/qwik";

import type { Reference } from "../../types";

import { contextId } from "./ParametersMenu";

type ParametersMenuCheckboxProps = {
  defaultName: string;
  readonly styles?: string;
  inputName: string;
  defaultOption: string;
  secondOption: string;
  ariallabel: string;
  readonly defaultOptionValue: boolean;
  readonly secondOptionValue: boolean;
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

function toggleImages(condition: boolean): void {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (condition) {
      {
        input.name === "police" && input.value === "true";
      }
      image.style.display = "block";
    } else {
      const altText = image.getAttribute("alt");
      if (altText) {
        image.style.display = "none";
        const altTextContainer = document.createElement("span");
        altTextContainer.innerText = altText;
        image.parentNode?.insertBefore(altTextContainer, image);
      }
    }
  }
}

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
                  checked
                  type="radio"
                  name={inputName}
                  value={defaultOptionValue}
                  onChange$={onChange}
                />
              </label>
              <label class="ml-2">
                {secondOption}
                <input class="ml-1" type="radio" name={inputName} value={secondOptionValue} onChange$={onChange} />
              </label>
            </div>
          </div>
        </li>
      </>
    );
  }
);
