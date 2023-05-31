import { useVisibleTask$ } from "@builder.io/qwik";

import { type Reference } from "../types";

type Focus = {
  focused?: Reference;
};

export const useFocus = (store: Focus) => {
  useVisibleTask$(
    ({ track }) => {
      const element = track(() => store.focused?.value);
      element?.focus();
    },
    { strategy: "document-ready" }
  );
};
