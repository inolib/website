import { component$, Slot } from "@builder.io/qwik";

type CardProps = {
  content: string;
  styles?: string;
};

export const ServicesHomeCardBlank = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <article aria-label="articles" class="mx-7 hidden flex-col md:mt-[1.2rem] md:flex ">
        <span class={`flex h-[40rem] w-[17.5rem] flex-col items-center justify-center px-4 pb-[10rem] shadow-xl`}>
          <p class={`text-[#0B3168] ${styles} pb-32 text-2xl`}>{props.content}</p>
          <Slot name="button" />
        </span>
      </article>
    </>
  );
});
