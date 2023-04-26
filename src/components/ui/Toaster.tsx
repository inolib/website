import { $, component$, Slot, useComputed$, useTask$, QwikJSX } from "@builder.io/qwik";

type ToasterProps = {
  icon: "error" | "success";
  store: ToasterStore;
};

export type ToasterStore = {
  animation: "toaster-in" | "toaster-out";
  show: boolean;
};

export const Toaster = component$<ToasterProps>(({ icon, store }) => {
  let iconJSX: QwikJSX.Element;

  const close$ = $(() => {
    console.log("close");

    setTimeout(() => {
      store.show = false;
    }, 2000);

    store.animation = "toaster-out";
  });

  const open$ = $(() => {
    console.log("open");

    setTimeout(() => {
      close$().catch((error) => {
        console.error(error);
      });
    }, 6000);

    store.animation = "toaster-in";
  });

  const className = useComputed$(
    () =>
      `animate-${store.animation} flex items-center w-[20rem] max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`
  );

  switch (icon) {
    case "error": {
      iconJSX = (
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Error icon</span>
        </div>
      );
      break;
    }

    case "success": {
      iconJSX = (
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Success icon</span>
        </div>
      );
      break;
    }
  }

  useTask$(async ({ track }) => {
    const _store = track(store);

    if (_store.show) {
      await open$();
    }
  });

  return (
    <>
      {store.show ? (
        <div id="toast-success" class={className} role="alert">
          {iconJSX}

          <div class="ml-3 text-sm font-normal">
            <Slot />
          </div>

          <button
            onClick$={close$}
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
});
