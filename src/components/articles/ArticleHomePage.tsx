import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  alt?: string;
  category: string;
  content?: string;
  date: string;
  imgStyles?: string;
  label: string;
  src: string;
  styles?: string;
  title?: string;
};

export const ArticleHomePage = component$((props: ArticleProps) => {
  const imgStyles = props.imgStyles !== undefined ? props.imgStyles : "";
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <span class={`text-[#0B3168] ${styles} shadow-b-2xl mx-2 text-sm md:border-none md:text-base md:shadow-none`}>
        <img class={`mb-10 ${imgStyles} md:block `} src={props.src} alt={props.alt} />
        <h3 class={`mb-5 max-w-sm text-xl font-bold md:text-3xl`}>{props.label}</h3>
        <Slot name="content" />
        <p class={`mt-4 text-[11px]`}>
          {props.date}&ensp;|&ensp; {props.category}
        </p>
      </span>
    </>
  );
});
