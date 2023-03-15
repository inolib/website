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
      <span class="flex pt-[3rem] ml-[8rem]">
        <h2 class="text-4xl mb-6">{props.title}</h2>
      </span>
      <span class={`flex mx-[8rem] ${styles}`}>
        <p class="mr-[1vw]">{props.content1}</p>
        <p class="ml-[1vw]">{props.content2}</p>
      </span>
    </>
  );
});
