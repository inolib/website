"use client";

import { useEffect } from "react";

export const Calendar = () => {
  useEffect(() => {
    const script = globalThis.document.createElement("script");

    script.defer = true;
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

    globalThis.document.body.append(script);

    const interval = setInterval(() => {
      const iframe = document.querySelector(".meetings-iframe-container iframe");
      if (iframe) {
        iframe.setAttribute("title", "Prendre rendez-vous avec Djebrine sur Hubspot");

        iframe.removeAttribute("width");
        iframe.removeAttribute("height");
        iframe.removeAttribute("style");

        // Ajoute les classes Tailwind pour gérer la taille et la présentation
        iframe.classList.add(
          "w-full", // largeur 100%
          "min-w-[312px]", // min-width 312px
          "min-h-[615px]", // min-height 615px
          "h-[756px]", // hauteur fixe
          "border-0", // pas de bordure
          "block", // display block
        );

        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/meetings/djeberine?embed=true"
      />
    </>
  );
};
