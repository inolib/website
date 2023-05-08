import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

export const Head = component$(() => {
  const head = useDocumentHead();

  return (
    <head>
      <meta
        name="description"
        content="Inolib spécialiiste en audit d'accessibilité numérique (RGAA,, WCAG) vous accompagne pour élargir votre audience, optimiser l'expérience utilisateur et respecter les obligations légales. Profitez d'un accompagnement  sur mesure  dédié pour réussir votre inclusion digitale."
      />
      <meta
        name="keywords"
        content="accessibilité, numérique, audit, RGAA, WCAG, RAAM, EN 301-549, inclusion digitale, expérience utilisateur, Inolib"
      />

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="canonical" href="https://www.inolib.com/audits-accessibilite-numerique" />

      <title>{head.title}</title>
    </head>
  );
});
