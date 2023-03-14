import { component$ } from "@builder.io/qwik";

type ParagraphProps = {
  content1?: string;
  content2?: string;
  styles?: string;
  title?: string;
};

export const HorizontalParagraph = component$((props: ParagraphProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <span class="flex pt-[5rem] ml-[8rem]">
        <h2 class="text-4xl mt-6">{props.title}</h2>
      </span>
      <span class={`flex mx-[8rem] ${styles}`}>
        <p class="mr-[1vw]">{props.content1}</p>
        <p class="ml-[1vw]">{props.content2}</p>
      </span>
    </>
  );
});
