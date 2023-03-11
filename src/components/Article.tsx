import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  title?: string;
  titleQuote?: string;
  content: string;
  contentQuote?: string;
  imageSrc: string;
  imageQuote?: string;
  styles?: string;
  stylesArticleGaucheFlex?: string;
  stylesArticleGauchePadding?: string;
  stylesImgSize?: string;
  typoImgQuote?: "bold" | "normal";
  testimony?: string;
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
        <h2 class={`text-2xl font-semibold text-[#0F3069] `}>{props.title}</h2>
        <p>{props.titleQuote}</p>
      </span>
      <div class={`flex ${stylesArticleGaucheFlex}`}>
        <span class={`${stylesArticleGauchePadding}`}>
          <span class={`flex ${styles}`}>
            <h4>{props.testimony}</h4>
            <p>{props.titleQuote}</p>
          </span>
          <div class={`md:w-fit md:px-4 md:pr-10 md:pl-0`}>{props.content}</div>
          <strong class="mt-16 flex justify-center text-justify text-xl">
            <p class="w-1/2 text-center">{props.contentQuote}</p>
          </strong>
        </span>
        <div>
          <img class={`${stylesImgSize}`} src={props.imageSrc} alt="" />
          <blockquote class={`mt-4 max-w-lg pr-4 text-center ${imgQuoteSize}`}>{props.imageQuote}</blockquote>
        </div>
      </div>
    </article>
  );
});
