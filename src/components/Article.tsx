import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  articleTestimonyStyles?: string;
  content?: string;
  contentQuote?: string;
  imageSrc?: string;
  imageQuote?: string;
  imgSeparator?: string;
  imageText?: string;
  styles?: string;
  stylesTestimony?: string;
  stylesContent?: string;
  stylesArticleGaucheFlex?: string;
  stylesArticlePadding?: string;
  stylesImgArticle?: string;
  title?: string;
  titleQuote?: string;
  testimony?: string;
  typoImgQuote?: "bold | normal";
};

export const Article = component$((props: ArticleProps) => {
  const articleTestimonyStyles = props.articleTestimonyStyles !== undefined ? props.articleTestimonyStyles : "";
  const styles = props.styles !== undefined ? props.styles : "";
  const stylesTestimony = props.stylesTestimony !== undefined ? props.stylesTestimony : "";
  const stylesContent = props.stylesContent !== undefined ? props.stylesContent : "";
  const stylesArticleGaucheFlex = props.stylesArticleGaucheFlex !== undefined ? props.stylesArticleGaucheFlex : "";
  const stylesImgArticle = props.stylesImgArticle !== undefined ? props.stylesImgArticle : "";
  const imgQuoteSize = props.typoImgQuote === "bold" ? "font-bold text-l" : "";

  return (
    <article class="md:mx-[8rem] md:py-8 text-[#0B3168]">
      <h2 class={`mx-5 my-5 text-2xl font-semibold md:m-0`}>{props.title}</h2>

      <div class={`flex flex-col ${stylesArticleGaucheFlex}  md:pt-6 `}>
        <span class="mx-5 md:mx-0">
          <span class={`flex ${articleTestimonyStyles}`}>
            <h3 class={`font-bold md:text-xl ${stylesTestimony}`}>{props.testimony}</h3>
            <img class="md:px-4" src={props.imgSeparator} alt="" />
            <p class="md:text-l">{props.titleQuote}</p>
          </span>
          <div class={`text-justify w-full md:px-4 md:pr-10 md:pl-0 md:w-[47rem] ${stylesContent}`}>
            {props.content}
            <Slot name="date&category" />
            <Slot name="check-box" />
          </div>

          <strong class="md:text-xl text-justify flex justify-center md:mt-16">
            <p class="md:w-[25rem] text-center">{props.contentQuote}</p>
          </strong>
        </span>
        <div class={`flex flex-col ${stylesImgArticle}`}>
          <img class="md:h-auto md:max-w-full" src={props.imageSrc} alt="" />
          <blockquote class={`md:mt-6 text-center max-w-content  ${imgQuoteSize}`}>{props.imageQuote}</blockquote>
          <p class={`md:mt-6 text-center max-w-content ${styles} ${imgQuoteSize}`}>{props.imageText}</p>
        </div>
      </div>
    </article>
  );
});
