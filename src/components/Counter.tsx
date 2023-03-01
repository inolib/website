import { $, component$, useStore } from "@builder.io/qwik";

type CounterProps = {
  start?: number;
};

export const Counter = component$(({ start = 0 }: CounterProps) => {
  const store = useStore({
    count: start,
  });

  const decrement = $(() => {
    store.count -= 1;
  });

  const increment = $(() => {
    store.count += 1;
  });

  return (
    <div class="counter">
      <button class="counter minus" type="button" preventdefault:click onClick$={decrement}>
        −
      </button>

      <span class="counter count">Count: {store.count}</span>

      <button class="counter plus" type="button" preventdefault:click onClick$={increment}>
        +
      </button>
    </div>
  );
});
