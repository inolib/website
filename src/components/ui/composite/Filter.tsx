import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { nanoid } from "nanoid";

type FilterProps = {
  labels: {
    button: string;
    items: string[];
  };
};

type FilterStore = {
  expanded: boolean;
};

type ToggleFilterFunction = (focusOn: string) => void;

export const Filter = component$<FilterProps>((props) => {
  const buttonId = nanoid();
  const menuId = nanoid();

  const refs = {
    button: useSignal<HTMLElement>(),
    items: props.labels.items.map(() => useSignal<HTMLElement>()),
  };

  const store = useStore<FilterStore>({
    expanded: false,
  });

  const toggleMenu$ = $<ToggleFilterFunction>((focusOn) => {
    const button = refs.button.value;
    let checkbox;

    store.expanded = !store.expanded;

    if (store.expanded) {
      button?.setAttribute("tabindex", "-1");

      switch (focusOn) {
        case "first":
          checkbox = refs.items[0].value;
          break;
        case "last":
          checkbox = refs.items[refs.items.length - 1].value;
          break;
      }

      checkbox?.setAttribute("tabindex", "0");
      checkbox?.focus();
    } else {
      refs.items.forEach((item) => {
        item.value?.setAttribute("tabindex", "-1");
      });

      button?.setAttribute("tabindex", "0");
      button?.focus();
    }
  });

  return (
    <div
      onKeyDown$={(event) => {
        console.log(event.code);
        (document.activeElement as HTMLElement).blur();
      }}
    >
      <button
        aria-controls={menuId}
        {...(store.expanded ? { "aria-expanded": "true" } : {})}
        aria-haspopup="true"
        class="text-white h-[7vh] w-[9vw] justify-center ml-20 bg-[#0B3168] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        id={buttonId}
        ref={refs.button}
        tabIndex={0}
        type="button"
        preventdefault:click
        preventdefault:keydown
        onClick$={async () => {
          await toggleMenu$("first");
          console.log(refs.button.value);
        }}
        onKeyDown$={async (event) => {
          switch (event.code) {
            case "ArrowDown":
            case "Enter":
            case "Space":
              await toggleMenu$("first");
              break;
            case "ArrowUp":
              await toggleMenu$("last");
              break;
          }
        }}
      >
        {props.labels.button}
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <ul
        aria-labelledby={buttonId}
        class="z-10 w-48 bg-white rounded-lg shadow dark:bg-gray-700 p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        hidden={!store.expanded}
        id={menuId}
        role="menu"
      >
        {props.labels.items.map((label, index) => {
          const inputId = nanoid();

          return (
            <li class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600" role="presentation">
              <input
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                id={inputId}
                ref={refs.items[index]}
                role="menuitemcheckbox"
                tabIndex={-1}
                type="checkbox"
                value={label}
              />
              <label for={inputId} class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                {label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
