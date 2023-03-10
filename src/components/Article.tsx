import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  title?: string;
  titleQuote?: string;
  content: string;
  contentQuote: string;
  imageSrc: string;
  imageQuote?: string;
  styles?: string;
};

export const Article = component$((props: ArticleProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <article class="md:px-28 md:pt-4">
      <span class={`flex ${styles}`}>
        <h2 class={`text-2xl font-semibold `}>{props.title}</h2>
        <p>{props.titleQuote}</p>
      </span>
      <div class="md:flex">
        <div class={`md:px-4 md:pr-10 md:pl-0 md:w-[46vw]`}>{props.content}</div>
        <p>{props.contentQuote}</p>
        <div class="md:w-1/3">
          <img src={props.imageSrc} alt="" />
          <strong>
            <blockquote class="px-4 text-center mt-4">{props.imageQuote}</blockquote>
          </strong>
        </div>
      </div>
    </article>
  );
});
