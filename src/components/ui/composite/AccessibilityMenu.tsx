import { $, component$, useStore } from "@builder.io/qwik";
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
    inputName: "police :",
    secondOption: "supérieur",
    defaultOptionValue: "true",
    secondOptionValue: "false",
    onChange: $((event: InputEvent) => {
      if (event.target.value === "false") {
        const textElements = document.querySelectorAll(
          "h1, h2, h3, h4, h5, h6, p, a, strong, label, button, img, svg, th, tbody"
        );
        textElements.forEach((el) => {
          const currentSize = window.getComputedStyle(el).fontSize;
          const newSize = parseInt(currentSize) * 1.3;
          const newSizeStr = newSize.toString() + "px";
          (el as HTMLElement).style.fontSize = newSizeStr;
        });
      } else {
        const textElements = document.querySelectorAll(
          "h1, h2, h3, h4, h5, h6, p, a, strong, label, button, img, svg, th, tbody"
        );
        textElements.forEach((el) => {
          (el as HTMLElement).style.fontSize = null;
        });
      }
    }),
  },
  {
    id: 2,
    ariallabel: "taille de l'interlignage",
    defaultOption: "défault",
    inputName: "interlignage :",
    secondOption: "supérieur",
    defaultOptionValue: "false",
    secondOptionValue: "true",
    onChange: $((event: InputEvent) => {
      if (event.target.value === "true") {
        console.log("interlignage :", event.target.value);

        const rootElement = document.querySelectorAll(
          "h1, h2, h3, h4, h5, h6, p, a, strong, label, button, img, svg, th, tbody"
        );
        rootElement.forEach((el) => {
          const currentLineHeight = window.getComputedStyle(el).lineHeight;
          const newLineHeight = parseInt(currentLineHeight) * 1.7;
          const newLineHeightStr = newLineHeight.toString() + "px";
          (el as HTMLElement).style.lineHeight = newLineHeightStr;
        });
      } else {
        const rootElements = document.querySelectorAll(
          "h1, h2, h3, h4, h5, h6, p, a, strong, label, button, img, svg, th, tbody"
        );
        rootElements.forEach((el) => {
          (el as HTMLElement).style.lineHeight = null;
        });
      }
    }),
  },
  {
    id: 3,
    ariallabel: "option image ou texte",
    defaultOption: "image",
    inputName: "image :",
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
          image.style.display = "block";
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

export const AccessibilityMenu = component$(() => {
  const store = useStore<ParamsStore>(
    {
      images: "",
      altTextContainer: "",
    },

    { deep: true }
  );
  return (
    <>
      <div class="flex justify-center">
        <ParametersMenu>
          <ParametersMenuButton>
            <p class="focus:bg-[#0B3168] focus:text-white hover:bg-[#0B3168] hover:text-white rounded-md p-1 m-1">
              personnaliser la page
            </p>
          </ParametersMenuButton>
          <ParametersMenuItems styles="md:flex md:justify-around md:items-center text-[#0B3168] border-2 border-[#0B3168] rounded bg-gray-100">
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
      </div>
    </>
  );
});
