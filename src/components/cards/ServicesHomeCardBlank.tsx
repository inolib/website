import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

type CardProps = {
  content: string;
  styles?: string;
};

export const ServicesHomeCardBlank = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <article aria-label="articles" class="flex flex-col ">
        <span class={`flex flex-col items-center justify-center shadow-xl pb-[10rem] px-4 h-[40rem] w-[17.5rem]`}>
          <p class={`text-[#0B3168] my-${styles} text-2xl`}>{props.content}</p>
          <Button color="blue" href="/services" label="En savoir plus" />
        </span>
      </article>
    </>
  );
});
