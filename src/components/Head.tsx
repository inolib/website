import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

export const Head = component$(() => {
  const head = useDocumentHead();

  return (
    <head>
      <link rel="icon" type="image/svg+xml" href="./public/images/logoinolib.png" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{head.title}</title>
    </head>
  );
});
