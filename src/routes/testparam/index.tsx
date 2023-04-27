import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ParametersMenu } from "~/ui/ParametersMenu/ParametersMenu";
import { ParametersMenuButton } from "~/ui/ParametersMenu/ParametersMenuButton";
import { ParametersMenuCheckbox } from "~/ui/ParametersMenu/ParametersMenuCheckbox";
import { ParametersMenuItems } from "~/ui/ParametersMenu/ParametersMenuItems";

const option = [
  {
    id: 1,
    defaultOption: "défault",
    inputName: "police",
    secondOption: "supérieur",
    ariallabel: "taille de la police",
  },
  {
    id: 2,
    defaultOption: "défault",
    inputName: "interlignage",
    secondOption: "supérieur",
    ariallabel: "taille de l'interlignage",
  },
  { id: 3, defaultOption: "image", inputName: "image", secondOption: "texte", ariallabel: "option image ou texte" },
];

export default component$(() => {
  return (
    <ParametersMenu>
      <ParametersMenuButton>
        <h3 class="text-2xl text-center pt-2">Adaptez votre page!</h3>
      </ParametersMenuButton>
      <ParametersMenuItems styles="grid grid-cols-2 grid-rows-2">
        {option.map((option) => (
          <ParametersMenuCheckbox
            key={option.id}
            defaultOption={option.defaultOption}
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
