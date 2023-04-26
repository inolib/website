import { $, component$, createContextId, Slot, useContextProvider, useOn, useStore } from "@builder.io/qwik";

import { useFocus } from "../../hooks/useFocus";
import { useTab } from "../../hooks/useTab";
import type { Reference } from "../../types";

import { type ParametersMenuButtonStore } from "./ParametersMenuButton";
import { type ParametersMenuCheckboxStore } from "./ParametersMenuCheckbox";
import { type ParametersMenuItemsStore } from "./ParametersMenuItems";

export const collapseQrl = $((context: ParametersMenuContext) => {
  if (context.ParametersMenuButton !== undefined) {
    context.ParametersMenuButton.expanded = false;
  }
});

export const expandQrl = $((context: ParametersMenuContext) => {
  if (context.ParametersMenuButton !== undefined) {
    context.ParametersMenuButton.expanded = true;
  }
});

export const focusQrl = $((context: ParametersMenuContext, ref: Reference) => {
  context.ParametersMenu.focusable = ref;
  context.ParametersMenu.focused = ref;
});

export const moveFocusQrl = $(async (context: ParametersMenuContext, to: string) => {
  const predicate = (to: string) => {
    switch (to) {
      case "first:selected":
      case "last:selected": {
        return (item: ParametersMenuCheckboxStore) => item.selected;
      }

      case "next":
      case "previous": {
        return (item: ParametersMenuCheckboxStore) => item.ref === context.ParametersMenu.focusable;
      }
    }

    return () => false;
  };

  if (context.ParametersMenuCheckbox !== undefined) {
    switch (to) {
      case "first": {
        if (context.ParametersMenuCheckbox.length > 0) {
          await focusQrl(context, context.ParametersMenuCheckbox[0].ref);
        }
        break;
      }

      case "first:selected": {
        const item = context.ParametersMenuCheckbox.find(predicate(to));

        if (item !== undefined) {
          await focusQrl(context, item.ref);
        } else {
          await moveFocusQrl(context, "first");
        }

        break;
      }

      case "last": {
        if (context.ParametersMenuCheckbox.length > 0) {
          await focusQrl(context, context.ParametersMenuCheckbox[context.ParametersMenuCheckbox.length - 1].ref);
        }
        break;
      }

      case "last:selected": {
        const item = context.ParametersMenuCheckbox.findLast(predicate(to));

        if (item !== undefined) {
          await focusQrl(context, item.ref);
        } else {
          await moveFocusQrl(context, "last");
        }

        break;
      }

      case "next": {
        const index = context.ParametersMenuCheckbox.findIndex(predicate(to));

        if (index > -1 && index < context.ParametersMenuCheckbox.length - 1) {
          await focusQrl(context, context.ParametersMenuCheckbox[index + 1].ref);
        }

        break;
      }

      case "previous": {
        const index = context.ParametersMenuCheckbox.findLastIndex(predicate(to));

        if (index > 0) {
          await focusQrl(context, context.ParametersMenuCheckbox[index - 1].ref);
        }

        break;
      }
    }
  }
});

export type ParametersMenuContext = {
  ParametersMenu: ParametersMenuStore;
  ParametersMenuButton?: ParametersMenuButtonStore;
  ParametersMenuCheckbox?: ParametersMenuCheckboxStore[];
  ParametersMenuItems?: ParametersMenuItemsStore;
};

type ParametersMenuProps = {
  readonly styles?: string;
};

type ParametersMenuStore = {
  focusable?: Reference;
  focused?: Reference;
};

export const contextId = createContextId<ParametersMenuContext>("inolib/ui/contexts/Menu");

export const ParametersMenu = component$<ParametersMenuProps>(({ styles }) => {
  const store = useStore<ParametersMenuStore>({}, { deep: true });

  const context: ParametersMenuContext = {
    ParametersMenu: store,
  };

  useContextProvider(contextId, context);

  useFocus(store);
  useTab();

  useOn(
    "keyup",
    $(async (e) => {
      const event = e as KeyboardEvent;

      switch (event.code) {
        case "Escape": {
          if (context.ParametersMenuButton !== undefined) {
            await collapseQrl(context);
            await focusQrl(context, context.ParametersMenuButton.ref);
          }
          break;
        }
      }
    })
  );

  return (
    <div class={styles} preventdefault:keydown preventdefault:keyup>
      <Slot />
    </div>
  );
});
