import { component$, Slot } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

type CardProps = {
  image?: string;
  title?: string;
  label?: string;
  styles?: string;
  background?: "purple" | "white";
};

export const ServicesCard = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const background = props.background !== undefined ? props.background : "";
  const primaryBackground = props.background === "purple" ? "[url('/images/bg-cards.png')]" : "white";
  const secondaryBackground = props.background === "purple" ? "white" : "[url(/images/bg-cards.png)]";

  return (
    <>
      <article aria-label="articles" class={`flex flex-col`}>
        <span
          class={`flex flex-col justify-center items-center bg-no-repeat bg-${primaryBackground} bg-[length:110rem_40rem] h-[18rem] w-[22.5rem]`}
        >
          <img class="-mt-[5rem]" src={props.image} alt="" />
          <h2 class=" font-normal text-center text-2xl -mt-[5rem] text-white  ">{props.title}</h2>
        </span>
        <span class={`flex flex-col items-top justify-start shadow-xl px-4 py-5 h-[30rem] w-[22.5rem]`}>
          <Slot name="services" />
          <h3 class="text-[#0B3168] font-semibold my-5 text-2xl">{props.label}</h3>
          <Slot name="content" />
          <Slot name="button" />
        </span>
      </article>
    </>
  );
});
