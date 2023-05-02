import { $, component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ParametersMenu } from "~/ui/ParametersMenu/ParametersMenu";
import { ParametersMenuButton } from "~/ui/ParametersMenu/ParametersMenuButton";
import { ParametersMenuCheckbox } from "~/ui/ParametersMenu/ParametersMenuCheckbox";
import { ParametersMenuItems } from "~/ui/ParametersMenu/ParametersMenuItems";

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
      console.log("police :", event.target.value);
      //on peut changer la taille de la police (fontsize) de la police de base de la balise HTML racine voir doc, faire changement via des event ou des documentqueryselectore
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
      console.log("interlignage :", event.target.value);
      //modifier la propriéte lineheight de l'élément racine html
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
      console.log("image", event.target.value);
      //remplacer toute les balise img par span avec le contenu du alt comme contenu a l'interieur (contenu alt placé dans une variable avant suppréssion de la balise img puis replacer dans sapn)
    }),
  },
];

function toggleImages(condition: boolean): void {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (condition) {
      {
        options.inputName === "police" && options.defaultOptionValue === "true";
      }
      image.style.display = "block";
    } else {
      // Sinon, afficher le texte alternatif
      const altText = image.getAttribute("alt");
      if (altText) {
        image.style.display = "none";
        const altTextContainer = document.createElement("span");
        altTextContainer.innerText = altText;
        image.parentNode?.insertBefore(altTextContainer, image);
      }
    }
  }
}

export default component$(() => {
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
