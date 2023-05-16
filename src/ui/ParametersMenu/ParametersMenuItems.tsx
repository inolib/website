import { $, component$, Slot, useContext, useOn, useStore, useTask$ } from "@builder.io/qwik";
import { nanoid } from "nanoid";

import { contextId, moveFocusQrl } from "./ParametersMenu";
import type { Reference } from "../../types";

type ParametersMenuItemsProps = {
  readonly styles?: string;
};

export type ParametersMenuItemsStore = {
  readonly id: string;
  readonly ref: Reference;
};

export const closeModalQrl = $(() => {
  const dialog = document.querySelector<HTMLDialogElement>("#accessibilityDialog");

  dialog?.close();
});

export const ParametersMenuItems = component$<ParametersMenuItemsProps>(({ styles }) => {
  const context = useContext(contextId);

  const store = useStore<ParametersMenuItemsStore>(
    {
      id: nanoid(),
    },
    { deep: true }
  );

  useOn(
    "keydown",
    $(async (e) => {
      const event = e as KeyboardEvent;

      switch (event.code) {
        case "ArrowDown": {
          await moveFocusQrl(context, "next");
          break;
        }

        case "ArrowUp": {
          await moveFocusQrl(context, "previous");
          break;
        }
      }
    })
  );

  useOn(
    "keyup",
    $(async (e) => {
      const event = e as KeyboardEvent;

      switch (event.code) {
        case "End": {
          await moveFocusQrl(context, "last");
          break;
        }

        case "Home": {
          await moveFocusQrl(context, "first");
          break;
        }
      }
    })
  );

  useTask$(() => {
    context.ParametersMenuButton = store;
  });

  return (
    <>
      <dialog id="accessibilityDialog">
        <ul class={styles} id={store.id} preventdefault:keydown preventdefault:keyup role="menu">
          <Slot />
        </ul>

        <button class="top-2 right-2" value="cancel" onClick$={closeModalQrl}>
          Fermer
        </button>
      </dialog>
    </>
  );
});
