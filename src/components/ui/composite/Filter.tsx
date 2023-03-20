import { $, component$, useOn, useSignal, useStore } from "@builder.io/qwik";
import { nanoid } from "nanoid";

type FilterProps = {
  labels: {
    button: string;
    items: string[];
  };
};

type FilterStore = {
  state: "open" | "closed";
  button: {
    attributes: {
      "aria-expanded": boolean;
      tabIndex: -1 | 0;
    };
  };
  inputs: {
    attributes: {
      tabIndex: -1 | 0;
    };
  }[];
  ul: {
    attributes: {
      hidden: boolean;
    };
  };
};

type CloseFilterFunction = () => void;

type MoveFocusFunction = (direction: "down" | "up") => void;

type OpenFilterFunction = (focusOn: "first" | "last") => void;

export const Filter = component$<FilterProps>((props) => {
  const buttonId = nanoid();
  const menuId = nanoid();

  // références aux éléments HTML, s'utilise via refs.button.value ou refs.inputs[...].value
  const refs = {
    button: useSignal<HTMLElement>(),
    inputs: props.labels.items.map(() => useSignal<HTMLElement>()),
  };

  // stocke l'état du composant avec les valeurs par défaut
  const store = useStore<FilterStore>(
    {
      // état global du composant
      state: "closed",

      // contient les attributs à générer sur le bouton
      button: {
        attributes: {
          "aria-expanded": false,
          tabIndex: 0,
        },
      },

      // contient les attributs à générer sur les inputs
      // inputs est un tableau de la forme [{ attributes: { tabIndex -1 | 0 } }]
      inputs: props.labels.items.map(() => ({
        attributes: {
          tabIndex: -1,
        },
      })),

      // contient les attributs à générer sur le popup (visibilité du popup)
      ul: {
        attributes: {
          hidden: true,
        },
      },
    },

    // permet de surveiller au-delà du niveau 1 (par défaut) de profondeur
    { deep: true }
  );

  // ferme le filtre et déplace le focus sur le bouton
  const closeFilter$ = $<CloseFilterFunction>(() => {
    // provoque la mise à jour des attributs dans le DOM
    store.button.attributes = {
      "aria-expanded": false,
      tabIndex: 0,
    };

    store.inputs.forEach((input) => {
      input.attributes = {
        tabIndex: -1,
      };
    });

    store.ul.attributes = {
      hidden: true,
    };

    // nouvel étét du composant
    store.state = "closed";

    // déplace le focus sur le bouton
    refs.button.value?.focus();
  });

  const moveFocus$ = $<MoveFocusFunction>((direction) => {
    // recherche la position de la case à cocher possédant le focus
    const index = refs.inputs.findIndex((signal) => signal.value === document.activeElement);

    switch (direction) {
      case "down":
        // bloque l'action si la dernière case à cocher a déjà le focus
        if (index < refs.inputs.length - 1) {
          // supprime la case à cocher du parcours de tabulation
          store.inputs[index].attributes = {
            tabIndex: -1,
          };

          // rend la case à cocher suivante focusable et déplace le focus sur cette case à cocher
          store.inputs[index + 1].attributes = {
            tabIndex: 0,
          };

          refs.inputs[index + 1].value?.focus();
        }
        break;
      case "up":
        // bloque l'action si la première case à cocher a déjà le focus
        if (index > 0) {
          // supprime la case à cocher du parcours de tabulation
          store.inputs[index].attributes = {
            tabIndex: -1,
          };

          // rend la case à cocher suivante focusable et déplace le focus sur cette case à cocher
          store.inputs[index - 1].attributes = {
            tabIndex: 0,
          };

          refs.inputs[index - 1].value?.focus();
        }
        break;
    }
  });

  const openFilter$ = $<OpenFilterFunction>((focusOn) => {
    let index;

    // provoque la mise à jour des attributs dans le DOM
    store.button.attributes = {
      "aria-expanded": true,
      tabIndex: -1,
    };

    store.ul.attributes = {
      hidden: false,
    };

    // détermine la position de la case à cocher vers laquelle déplacer le focus
    switch (focusOn) {
      case "first":
        index = 0;
        break;
      case "last":
        index = store.inputs.length - 1;
        break;
    }

    store.inputs[index].attributes = {
      tabIndex: 0,
    };

    // nouvel état du composant
    store.state = "open";

    // déplace le focus sur une des cases à cocher
    const checkbox = refs.inputs[index].value;
    checkbox?.focus();
  });

  useOn(
    "mouseup",
    $(async (event) => {
      if (event.target === refs.button.value) {
        // focus sur le bouton
        switch (store.state) {
          case "closed":
            // ouvre le filtre et déplace le focus sur la première case à cocher
            await openFilter$("first");
            break;
          case "open":
            // ferme le filtre et déplace le focus sur le bouton
            await closeFilter$();
            break;
        }
      }
    })
  );

  // enregistre un event listener sur `keydown`
  useOn(
    "keyup",
    $(async (event) => {
      const code = (event as KeyboardEvent).code;

      switch (code) {
        case "Escape":
          // ferme le filtre et déplace le focus sur le bouton
          await closeFilter$();
          break;

        default:
          if (event.target === refs.button.value) {
            // vérifie que le focus est sur le bouton
            switch (code) {
              case "ArrowDown":
              case "Enter":
              case "Space":
                // ouvre le filtre et déplace le focus sur la première case à cocher
                await openFilter$("first");
                break;

              case "ArrowUp":
                // ouvre le filtre et déplace le focus sur la dernière case à cocher
                await openFilter$("last");
                break;
            }
          } else {
            // si le focus sur une des cases à cocher
            switch (code) {
              case "ArrowDown":
                // déplace le focus vers le bas
                await moveFocus$("down");
                break;

              case "ArrowUp":
                // déplace le focus vers le haut
                await moveFocus$("up");
                break;
            }
          }
          break;
      }
    })
  );

  return (
    <div>
      <button
        // génère les attributs `aria-expanded` et `tabIndex`
        {...store.button.attributes}
        aria-controls={menuId}
        aria-haspopup="true"
        class="text-white md:h-[3.5rem] md:w-[7rem] h-[3.5rem] w-[15rem] my-2 justify-center md:ml-20 bg-[#0B3168] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        id={buttonId}
        ref={refs.button}
        type="button"
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
        // génère l'attribut `hidden`
        {...store.ul.attributes}
        aria-labelledby={buttonId}
        class="z-10 w-48 bg-white rounded-lg shadow dark:bg-gray-700 p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        id={menuId}
        role="menu"
      >
        {props.labels.items.map((label, index) => {
          const inputId = nanoid();

          return (
            <li
              key={index}
              class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
              role="presentation"
            >
              <input
                // génère l'ttribut `tabIndex`
                {...store.inputs[index].attributes}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                id={inputId}
                ref={refs.inputs[index]}
                role="menuitemcheckbox"
                type="checkbox"
                value={label}
              />
              <label class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300" for={inputId}>
                {label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
