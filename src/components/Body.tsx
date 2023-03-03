import { component$, Slot } from "@builder.io/qwik";
import { RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";

export const Body = component$(() => {
  return (
    <body class="no-scrollbar">
      <Slot />
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  );
});
