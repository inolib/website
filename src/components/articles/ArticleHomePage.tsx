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
      <span class={`text-[#0B3168] ${styles} md:shadow-none text-sm md:text-base md:border-none shadow-b-2xl mx-2`}>
        <img class={`mb-10 ${imgStyles} md:block `} src={props.src} alt={props.alt} />
        <h3 class={`max-w-sm md:text-3xl font-bold text-xl mb-5`}>{props.label}</h3>
        <Slot name="content" />
        <p class={`mt-4 text-[11px]`}>
          {props.date}&ensp;|&ensp; {props.category}
        </p>
      </span>
    </>
  );
});
