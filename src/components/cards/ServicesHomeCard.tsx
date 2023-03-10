import { component$, Slot } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

type CardProps = {
  image?: string;
  label?: string;
  styles?: string;
  background?: "purple" | "white";
};

export const ServicesHomeCard = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const primaryBackground = props.background === "purple" ? "[url('/images/bg-cards.png')]" : "white";
  const secondaryBackground = props.background === "purple" ? "white" : "[url(/images/bg-cards.png)]";

  return (
    <>
      <article aria-label="articles" class="flex flex-col ">
        <span class={`flex justify-center items-center bg-no-repeat bg-${primaryBackground} h-[15rem] w-[17.5rem]`}>
          <img class="mb-[3rem]" src={props.image} alt="" />
        </span>
        <span class={`flex flex-col items-center justify-center shadow-xl pb-[10rem] px-4 h-[25rem] w-[17.5rem]`}>
          <h3 class="text-[#0B3168] font-semibold my-5 text-2xl">{props.label}</h3>
          <Slot name="content" />
        </span>
      </article>
    </>
  );
});
