import { component$, Slot } from "@builder.io/qwik";

type ParagraphProps = {
  title?: string;
  content1?: string;
  content2?: string;
  styles?: string;
};

export const HorizontalParagraph = component$((props: ParagraphProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <span class="flex mt-10 ml-[8vw]">
        <h2 class="text-4xl mt-6">{props.title}</h2>
      </span>
      <span class={`flex mt-[5vh] mx-[8vw] ${styles}`}>
        <p class="mr-[1vw]">{props.content1}</p>
        <p class="ml-[1vw]">{props.content2}</p>
      </span>
    </>
  );
});
