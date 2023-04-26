import {
  $,
  component$,
  Slot,
  useContext,
  useOn,
  useSignal,
  useStore,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

import type { Reference } from "../../types";

import { collapseQrl, contextId, expandQrl, focusQrl, moveFocusQrl } from "./ParametersMenu";

type ParametersMenuButtonProps = {
  readonly styles?: string;
};

export type ParametersMenuButtonStore = {
  controls?: string | undefined;
  expanded: boolean;
  readonly ref: Reference;
};

export const ParametersMenuButton = component$<ParametersMenuButtonProps>(({ styles }) => {
  const _ref = useSignal<HTMLElement>();

  const context = useContext(contextId);

  const store = useStore<ParametersMenuButtonStore>(
    {
      expanded: false,
      ref: _ref,
    },
    { deep: true }
  );

  useOn(
    "keyup",
    $(async (e) => {
      const event = e as KeyboardEvent;

      switch (event.code) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case "Space": {
          await expandQrl(context);
          await moveFocusQrl(context, event.code !== "ArrowUp" ? "first:selected" : "last:selected");
          break;
        }
      }
    })
  );

  useOn(
    "click",
    $(async (e) => {
      const event = e as MouseEvent;

      if (event.detail > 0 && event.button === 0) {
        if (store.expanded) {
          await collapseQrl(context);
          await focusQrl(context, store.ref);
        } else {
          await expandQrl(context);
          await moveFocusQrl(context, "first:selected");
        }
      }
    })
  );

  useTask$(() => {
    context.ParametersMenuButton = store;
    context.ParametersMenu.focusable = store.ref;
  });

  useVisibleTask$(
    () => {
      if (context.ParametersMenuItems !== undefined) {
        store.controls = context.ParametersMenuItems.id;
      }
    },
    { strategy: "document-ready" }
  );

  return (
    <button
      aria-controls={store.controls}
      aria-expanded={store.expanded}
      aria-haspopup="menu"
      class={styles}
      preventdefault:click
      preventdefault:keydown
      preventdefault:keyup
      ref={store.ref}
      tabIndex={store.ref === context.ParametersMenu.focusable ? 0 : -1}
      type="button"
    >
      <Slot />
    </button>
  );
});
