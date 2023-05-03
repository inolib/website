import { $, component$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ParametersMenu } from "~/ui/ParametersMenu/ParametersMenu";
import { ParametersMenuButton } from "~/ui/ParametersMenu/ParametersMenuButton";
import { ParametersMenuCheckbox } from "~/ui/ParametersMenu/ParametersMenuCheckbox";
import { ParametersMenuItems } from "~/ui/ParametersMenu/ParametersMenuItems";

export type ParamsStore = {
  images: string;
  altTextContainer: string;
};

const options = [
  {
    id: 1,
    ariallabel: "taille de la police",
    defaultOption: "défault",
    inputName: "police",
    secondOption: "supérieur",
    defaultOptionValue: "true",
    secondOptionValue: "false",
    onChange: $((event: InputEvent) => {
      console.log("police", event.target);
      //remplacer toute les balise img par span avec le contenu du alt comme contenu a l'interieur (contenu alt placé dans une variable avant suppréssion de la balise img puis replacer dans sapn)

      const css = document.querySelector<HTMLStyleElement>("*");
      if (css === null) {
        console.error("Le fichier CSS Tailwind n'est pas chargé");
        return;
      }
      // const content = css.textContent;
      // const newContent = content.replace(/text-(sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/g, (match, size) => {
      //   if (size === "sm") {
      //     return "text-lg";
      //   } else if (size === "base") {
      //     return "text-lg";
      //   } else if (size === "lg") {
      //     return "text-xl";
      //   } else if (size === "xl") {
      //     return "text-2xl";
      //   } else if (size === "2xl") {
      //     return "text-3xl";
      //   } else {
      //     ("");
      //   }
      // });
      // css.textContent = newContent;
    }),
  },
  {
    id: 2,
    ariallabel: "taille de l'interlignage",
    defaultOption: "défault",
    inputName: "interlignage",
    secondOption: "supérieur",
    defaultOptionValue: "true",
    secondOptionValue: "false",
    onChange: $((event: InputEvent) => {
      if (event.target.value === "true") {
        console.log("interlignage :", event.target.value);
        //modifier la propriéte lineheight de l'élément racine html
        const rootElement = document.documentElement;
        rootElement.setAttribute("style", `line-height: 1.5`);
      } else {
        const rootElement = document.documentElement;
        rootElement.setAttribute("style", `line-height: 3`);
      }
    }),
  },
  {
    id: 3,
    ariallabel: "option image ou texte",
    defaultOption: "image",
    inputName: "image",
    secondOption: "texte",
    defaultOptionValue: "true",
    secondOptionValue: "false",
    onChange: $((event: InputEvent) => {
      console.log("image", event.target);
      //remplacer toute les balise img par span avec le contenu du alt comme contenu a l'interieur (contenu alt placé dans une variable avant suppréssion de la balise img puis replacer dans sapn)
      const images = document.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const altTextContainer = document.getElementById("span");
        if (altTextContainer != undefined) {
          altTextContainer.style.display = "none";
        }
        if (event.target.value == "true") {
          // image.style.display = "block";
        } else {
          // Sinon, remplacer image par texte
          const altText = image.getAttribute("alt");

          image.style.display = "none";
          const altTextContainer = document.createElement("span");
          altTextContainer.innerText = altText;
          image.parentNode?.insertBefore(altTextContainer, image);
        }
      }
    }),
  },
];

export default component$(() => {
  const store = useStore<ParamsStore>(
    {
      images: "",
      altTextContainer: "",
    },

    { deep: true }
  );
  return (
    <ParametersMenu>
      <ParametersMenuButton>
        <h3 class="text-2xl text-center pt-2">Adaptez votre page!</h3>
      </ParametersMenuButton>
      <ParametersMenuItems styles="grid grid-cols-2 grid-rows-2">
        {options.map((option) => (
          <ParametersMenuCheckbox
            onChange={option.onChange}
            key={option.id}
            defaultOption={option.defaultOption}
            defaultOptionValue={option.defaultOptionValue}
            secondOptionValue={option.secondOptionValue}
            secondOption={option.secondOption}
            inputName={option.inputName}
            ariallabel={option.ariallabel}
          ></ParametersMenuCheckbox>
        ))}
      </ParametersMenuItems>
    </ParametersMenu>
  );
});

export const head: DocumentHead = {
  title: "test",
};
