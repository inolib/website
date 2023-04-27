import { $, component$, Slot, useContext, useOn, useStore, useTask$ } from "@builder.io/qwik";
import { nanoid } from "nanoid";

import { contextId, moveFocusQrl } from "./ParametersMenu";

type ParametersMenuItemsProps = {
  readonly styles?: string;
};

export type ParametersMenuItemsStore = {
  readonly id: string;
};

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
    context.ParametersMenuItems = store;
  });

  return (
    <>
      {context.ParametersMenuButton?.expanded ? (
        <ul class={styles} id={store.id} preventdefault:keydown preventdefault:keyup role="menu">
          <Slot />
        </ul>
      ) : null}
    </>
  );
});
