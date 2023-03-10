import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  title?: string;
  titleQuote?: string;
  content: string;
  contentQuote: string;
  imageSrc: string;
  imageQuote?: string;
  styles?: string;
  stylesArticleGaucheFlex?: string;
  stylesArticleGauchePadding?: string;
  stylesImgSize?: string;
  typoImgQuote?: "bold | normal";
};

export const Article = component$((props: ArticleProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const stylesArticleGaucheFlex = props.stylesArticleGaucheFlex !== undefined ? props.stylesArticleGaucheFlex : "";
  const stylesArticleGauchePadding =
    props.stylesArticleGauchePadding !== undefined ? props.stylesArticleGauchePadding : "";
  const stylesImgSize = props.stylesImgSize !== undefined ? props.stylesImgSize : "";
  const imgQuoteSize = props.typoImgQuote === "bold" ? "font-bold text-xl" : "";

  return (
    <article class="md:px-28 md:pt-4">
      <span class={`flex ${styles}`}>
        <h2 class={`text-2xl font-semibold `}>{props.title}</h2>
        <p>{props.titleQuote}</p>
      </span>
      <div class={`flex ${stylesArticleGaucheFlex}`}>
        <span class={`${stylesArticleGauchePadding}`}>
          <div class={`md:px-4 md:pr-10 md:pl-0 md:w-[46vw]`}>{props.content}</div>
          <p>{props.contentQuote}</p>
        </span>
        <div class="">
          <img class={`${stylesImgSize}`} src={props.imageSrc} alt="" />
          <blockquote class={`px-4 text-center mt-4 ${imgQuoteSize}`}>{props.imageQuote}</blockquote>
        </div>
      </div>
    </article>
  );
});
