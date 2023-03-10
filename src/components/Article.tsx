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
  testimony?: string;
};

export const Article = component$((props: ArticleProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const stylesArticleGaucheFlex = props.stylesArticleGaucheFlex !== undefined ? props.stylesArticleGaucheFlex : "";
  const stylesArticlePadding = props.stylesArticlePadding !== undefined ? props.stylesArticlePadding : "";
  const stylesImgSize = props.stylesImgSize !== undefined ? props.stylesImgSize : "";
  const imgQuoteSize = props.typoImgQuote === "bold" ? "font-bold text-xl" : "";

  return (
    <article class="md:px-28 md:pt-4">
      <h2 class={`text-2xl font-semibold `}>{props.title}</h2>

      <div class={`flex ${stylesArticleGaucheFlex}`}>
        <span class={`${stylesArticlePadding}`}>
          <span class={`flex ${styles}`}>
            <h4>{props.testimony}</h4>
            <p>{props.titleQuote}</p>
          </span>
          <div class={`md:px-4 md:pr-10 md:pl-0 md:w-fit`}>{props.content}</div>
          <strong class="text-xl text-justify flex justify-center mt-16">
            <p class="w-1/2 text-center">{props.contentQuote}</p>
          </strong>
        </span>
        <div>
          <img class={`${stylesImgSize}`} src={props.imageSrc} alt="" />
          <blockquote class={`max-w-lg pr-4 text-center mt-4 ${imgQuoteSize}`}>{props.imageQuote}</blockquote>
        </div>
      </div>
    </article>
  );
});
