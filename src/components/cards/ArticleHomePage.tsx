import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  src: string;
  title?: string;
  content?: string;
  label: string;
  styles?: string;
  imgStyles?: string;
  date: string;
  category: string;
  alt?: string;
};

export const ArticleHomePage = component$((props: ArticleProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const imgStyles = props.imgStyles !== undefined ? props.imgStyles : "";

  return (
    <>
      <span class={`text-[#0B3168] ${styles}`}>
        <img class={`mb-10 ${imgStyles}`} src={props.src} alt={props.alt} />
        <h3 class={`max-w-sm text-3xl mb-5`}>{props.label}</h3>
        <Slot name="content" />
        <p class={`mt-4 text-[11px]`}>
          {props.date}&ensp; |&ensp; {props.category}
        </p>
      </span>
    </>
  );
});
