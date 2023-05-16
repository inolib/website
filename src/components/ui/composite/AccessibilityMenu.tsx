import { $, component$ } from "@builder.io/qwik";
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
      if ((event?.target as HTMLInputElement).value === "false") {
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
          (el as HTMLElement).style.fontSize = "";
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
      if ((event?.target as HTMLInputElement).value === "true") {
        console.log("interlignage :", (event?.target as HTMLInputElement).value);

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
          (el as HTMLElement).style.lineHeight = "";
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
      //remplacer toute les balise img par span avec le contenu du alt comme contenu a l'interieur (contenu alt placé dans une variable avant suppréssion de la balise img puis replacer dans sapn)
      if (event.target.value === "true") {
        const spans = document.querySelectorAll("span[data-imagereplacement]");

        for (const span of spans) {
          const img = document.createElement("img");
          img.setAttribute("src", span.getAttribute("data-src"));
          img.setAttribute("class", span.getAttribute("data-class"));
          img.setAttribute("alt", span.textContent);

          const parent = span.parentNode;
          parent.replaceChild(img, span);
          span.remove();
        }
      } else if (event.target.value === "false") {
        const images = document.querySelectorAll("img");

        for (const image of images) {
          const parent = image.parentElement;

          if (image.hasAttribute("alt") && image.getAttribute("alt") !== "") {
            const span = document.createElement("span");
            span.setAttribute("data-imagereplacement", "true");
            span.setAttribute("data-src", image.getAttribute("src"));
            span.setAttribute("data-class", image.getAttribute("class"));
            span.textContent = image.getAttribute("alt");

            parent.replaceChild(span, image);
            image.remove();
          } else if (parent.hasAttribute("aria-label")) {
            const span = document.createElement("span");
            span.setAttribute("data-imagereplacement", "true");
            span.setAttribute("data-src", image.getAttribute("src"));
            span.setAttribute("data-class", image.getAttribute("class"));
            span.textContent = parent.getAttribute("aria-label");

            parent.replaceChild(span, image);
            image.remove();
          } else if (parent.hasAttribute("aria-labelledby")) {
            const span = document.createElement("span");
            span.setAttribute("data-imagereplacement", "true");
            span.setAttribute("data-src", image.getAttribute("src"));
            span.setAttribute("data-class", image.getAttribute("class"));
            span.textContent = document.querySelector(`#${parent.getAttribute("aria-labelledby")}`)?.textContent;

            parent.replaceChild(span, image);
            image.remove();
          }
        }
      }
    }),
  },
];

export const AccessibilityMenu = component$(() => {
  return (
    <>
      <div class="flex justify-center">
        <ParametersMenu>
          <ParametersMenuButton>
            <p class="focus:bg-[#0B3168] focus:text-white hover:bg-[#0B3168] hover:text-white rounded-md p-1 m-1">
              personnaliser la page
            </p>
          </ParametersMenuButton>
          <ParametersMenuItems styles="md:flex md:justify-around md:items-center text-[#0B3168] border-2 border-[#0B3168] rounded bg-gray-100 ">
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
