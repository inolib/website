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
      <div class="mx-5 flex py-5 md:ml-[8rem] md:py-8" id={props.id}>
        <h2 class="text-xl md:text-3xl">{props.title}</h2>
      </div>
      <div class={`mx-5 flex flex-col text-justify md:mx-[8rem] md:flex-row  md:text-left ${styles}`}>
        <p class="mb-4 md:mb-0 md:mr-[1vw]">{props.content1}</p>
        <p class="md:ml-[1vw]">{props.content2}</p>
      </div>
    </>
  );
});
