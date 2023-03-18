import { component$, Slot } from "@builder.io/qwik";

type CardProps = {
  content: string;
  styles?: string;
};

export const ServicesHomeCardBlank = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <article aria-label="articles" class="flex-col mx-7 md:mt-[1.2rem] hidden md:flex ">
        <span class={`flex flex-col items-center justify-center shadow-xl pb-[10rem] px-4 h-[40rem] w-[17.5rem]`}>
          <p class={`text-[#0B3168] ${styles} pb-32 text-2xl`}>{props.content}</p>
          <Slot name="button" />
        </span>
      </article>
    </>
  );
});
