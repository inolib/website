import { component$ } from "@builder.io/qwik";

type ParagraphProps = {
  content1?: string;
  content2?: string;
  styles?: string;
  title?: string;
  id?: string;
};

export const HorizontalParagraph = component$((props: ParagraphProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <span class="flex mx-5 py-5 md:py-8 md:ml-[8rem]" id={props.id}>
        <h2 class="text-xl md:text-3xl">{props.title}</h2>
      </span>
      <span class={`flex flex-col mx-5 text-justify md:text-left md:flex-row  md:mx-[8rem] ${styles}`}>
        <p class="mb-4 md:mb-0 md:mr-[1vw]">{props.content1}</p>
        <p class="md:ml-[1vw]">{props.content2}</p>
      </span>
    </>
  );
});
