import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ParametersMenu } from "~/ui/ParametersMenu/ParametersMenu";
import { ParametersMenuButton } from "~/ui/ParametersMenu/ParametersMenuButton";
import { ParametersMenuCheckbox } from "~/ui/ParametersMenu/ParametersMenuCheckbox";
import { ParametersMenuItems } from "~/ui/ParametersMenu/ParametersMenuItems";

export default component$(() => {
  return (
    <ParametersMenu>
      <ParametersMenuButton>
        <h3 class="text-2xl text-center pt-2">Adaptez votre page!</h3>
      </ParametersMenuButton>
      <ParametersMenuItems styles="grid grid-cols-2 grid-rows-2">
        <ParametersMenuCheckbox></ParametersMenuCheckbox>
      </ParametersMenuItems>
    </ParametersMenu>
  );
});

export const head: DocumentHead = {
  title: "test",
};
